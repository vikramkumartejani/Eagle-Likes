'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
    title?: string;
    content: React.ReactNode;
    color: string;
    children: React.ReactNode;
}

const DifferenceTooltip: React.FC<TooltipProps> = ({ title = "What's the difference?", content, color, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const updatePosition = () => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top,
                left: rect.left + rect.width / 2
            });
        }
    };

    const handleInteraction = (visible: boolean) => {
        if (visible) updatePosition();
        setIsVisible(visible);
    };

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('scroll', updatePosition);
            window.addEventListener('resize', updatePosition);
        }
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isVisible]);

    const tooltipContent = (
        <div
            className="fixed w-[250px] bg-[#F8F9FA] rounded-xl p-4 z-[99999] animate-in fade-in slide-in-from-bottom-2 duration-200  -translate-x-1/2 -translate-y-[calc(100%+12px)] pointer-events-auto"
            style={{
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={() => handleInteraction(true)}
            onMouseLeave={() => handleInteraction(false)}
        >
            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-1px)] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#F8F9FA]"></div>
            {title && <h4 className="text-[#1A1A1A] font-bold text-[14px] leading-5 mb-2 font-inter">{title}</h4>}
            <div className="text-[#5A5A5A] text-[12px] leading-4 font-normal font-inter">{content}</div>
        </div>
    );

    return (
        <>
            <div
                ref={triggerRef}
                className="inline-block"
                onMouseEnter={() => handleInteraction(true)}
                onMouseLeave={() => handleInteraction(false)}
                onClick={(e) => {
                    e.stopPropagation();
                    handleInteraction(!isVisible);
                }}
            >
                {children}
            </div>
            {mounted && isVisible && createPortal(tooltipContent, document.body)}
        </>
    );
};

export default DifferenceTooltip;
