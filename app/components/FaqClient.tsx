'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const FaqItem = ({ question, answer, initialOpen = false }: {
    question: string;
    answer: string;
    initialOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [contentHeight, setContentHeight] = useState(0);

    // Measure content height for smooth max-height animation (iOS-safe)
    const measure = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    };

    // Measure before paint to avoid flash when initially open
    useLayoutEffect(() => {
        measure();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        measure();
        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
        if (contentRef.current && ro) ro.observe(contentRef.current);

        const onResize = () => measure();
        window.addEventListener('resize', onResize);

        const raf = requestAnimationFrame(measure);

        return () => {
            window.removeEventListener('resize', onResize);
            if (ro && contentRef.current) ro.unobserve(contentRef.current);
            if (ro) ro.disconnect();
            cancelAnimationFrame(raf);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`bg-[#FFFFFF0D] border border-[#FFFFFF26] rounded-[15px] overflow-hidden ${isOpen ? "shadow-lg" : ""}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 sm:px-5 py-3.5 sm:py-6 text-left cursor-pointer group"
            >
                <span className="text-[14px] sm:text-[22px] leading-5.5 sm:leading-7.5 font-semibold font-responsive-heading text-white pr-4">
                    {question}
                </span>
                <span className={`min-w-4 shrink-0 text-white transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className='sm:w-4 w-3 h-3' viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M1.90735e-05 1.49435C-0.000854492 1.69184 0.0280972 1.88762 0.0852137 2.07045C0.14233 2.25328 0.22649 2.41958 0.332864 2.5598L7.21929 11.5636C7.43433 11.8431 7.72523 12 8.02844 12C8.33166 12 8.62255 11.8431 8.8376 11.5636L15.724 2.5598C15.912 2.27272 16.0103 1.90345 15.9991 1.52578C15.988 1.1481 15.8682 0.789844 15.6638 0.522588C15.4594 0.255333 15.1854 0.0987663 14.8966 0.0841789C14.6077 0.0695906 14.3253 0.198055 14.1057 0.443899L8.03418 8.38227L1.96265 0.443899C1.8028 0.233177 1.59875 0.08916 1.37631 0.030057C1.15386 -0.0290461 0.923006 -0.000579834 0.712933 0.111856C0.50286 0.224293 0.323004 0.415648 0.196107 0.661729C0.0692101 0.907808 0.00097084 1.19756 1.90735e-05 1.49435Z" fill="white" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden gpu transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ maxHeight: isOpen ? contentHeight : 0 }}
            >
                <div ref={contentRef}>
                    <div className="px-3 sm:px-6 pb-4 sm:pb-6 text-[#99A1AF] text-[13px] sm:text-[16px] leading-6 sm:leading-6.5 font-medium">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};
