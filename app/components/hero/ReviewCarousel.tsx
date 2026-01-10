'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { ReviewSlide } from './types';
import { REVIEW_SLIDES } from './data';

const ReviewSlideComponent: React.FC<{
    slide: ReviewSlide;
    isFirstRound: boolean;
    onDone: () => void
}> = ({ slide, isFirstRound, onDone }) => {
    // Round 1 starts at 0, Round 2+ starts at full target number
    const [count, setCount] = useState(isFirstRound ? 0 : slide.count);
    const hasStarted = useRef(false);

    useEffect(() => {
        if (!isFirstRound) {
            // Round 2+: Stay for 2 seconds then move on
            const timer = setTimeout(onDone, 2000);
            return () => clearTimeout(timer);
        }

        if (hasStarted.current) return;
        hasStarted.current = true;

        // Round 1: Wait 0.5s for entry, count for 1.5s, then wait 3s for readability
        const sequence = async () => {
            // Wait for slide entry animation to settle
            await new Promise(r => setTimeout(r, 600));

            // Count up animation
            const controls = animate(0, slide.count, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (v) => setCount(Math.floor(v))
            });
            await controls;

            // Post-count readability pause
            await new Promise(r => setTimeout(r, 3000));

            onDone();
        };

        sequence();
    }, [isFirstRound, slide.count, onDone]);

    return (
        <div className="flex flex-col items-center ml-4 w-full">
            <p className='text-[18px] sm:text-[22px] leading-6 sm:leading-7.5 font-normal text-white whitespace-nowrap'>
                {slide.prefix}{count.toLocaleString()} {slide.text}
            </p>
            <p className='text-[18px] sm:text-[22px] leading-6 sm:leading-7.5 text-[#01AAFF] font-inter font-medium whitespace-nowrap'>
                {slide.subtext}
            </p>
        </div>
    );
};

const ReviewCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [roundCount, setRoundCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });

    const handleSlideDone = () => {
        setIndex((prev) => {
            const next = (prev + 1) % REVIEW_SLIDES.length;
            if (next === 0) {
                setRoundCount(r => r + 1);
            }
            return next;
        });
    };

    if (!isInView) return <div ref={containerRef} className="h-15 min-w-75" />;

    return (
        <div ref={containerRef} className="h-15 flex items-center overflow-hidden relative min-w-75">
            <AnimatePresence mode="wait">
                <motion.div
                    // Crucial: unique key per slide AND round to ensure re-mount and fresh lifecycle
                    key={`${roundCount}-${index}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                >
                    <ReviewSlideComponent
                        slide={REVIEW_SLIDES[index]}
                        isFirstRound={roundCount === 0}
                        onDone={handleSlideDone}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ReviewCarousel;
