'use client';
import React, { useState, useRef, useCallback } from 'react';

interface MobileSliderProps {
    children: React.ReactNode;
    itemCount: number;
}

export const MobileSlider = ({ children, itemCount }: MobileSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);

    const scrollTo = (index: number) => {
        if (scrollRef.current && scrollRef.current.children[index]) {
            isScrollingRef.current = true;
            const container = scrollRef.current;
            const targetElement = container.children[index] as HTMLElement;

            const targetLeft = targetElement.offsetLeft - (container.offsetWidth - targetElement.offsetWidth) / 2;

            container.scrollTo({
                left: targetLeft,
                behavior: 'smooth'
            });

            setCurrentIndex(index);

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 500);
        }
    };

    const handleScroll = useCallback(() => {
        if (isScrollingRef.current || !scrollRef.current) return;

        const container = scrollRef.current;
        const scrollPosition = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, idx) => {
            const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
            const distance = Math.abs(scrollPosition - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
            }
        });

        if (closestIndex !== currentIndex) {
            setCurrentIndex(closestIndex);
        }
    }, [currentIndex]);

    return (
        <div className="md:hidden w-full overflow-visible">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 -mx-4 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {children}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-4">
                <button
                    onClick={() => scrollTo(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentIndex === 0
                        ? 'border border-[#FFFFFF66] text-white opacity-60 cursor-not-allowed'
                        : 'bg-[#018DFF] text-white hover:bg-[#0070CC] cursor-pointer shadow-[0_4px_12px_rgba(1,141,255,0.4)]'
                        }`}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button
                    onClick={() => scrollTo(currentIndex + 1)}
                    disabled={currentIndex === itemCount - 1}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentIndex === itemCount - 1
                        ? 'border border-[#FFFFFF66] text-white opacity-60 cursor-not-allowed'
                        : 'bg-[#018DFF] text-white hover:bg-[#0070CC] cursor-pointer shadow-[0_4px_12px_rgba(1,141,255,0.4)]'
                        }`}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};
