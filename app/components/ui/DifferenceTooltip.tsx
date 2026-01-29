'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
    title?: string;
    content: React.ReactNode;
    color: string;
    children: React.ReactNode;
}

const DifferenceTooltip: React.FC<TooltipProps> = ({ title = "What's the difference?", content, color, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: -9999, left: -9999, arrowLeft: 50, placement: 'top' as 'top' | 'bottom' });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const calculatePosition = useCallback(() => {
        if (!triggerRef.current) return null;

        const rect = triggerRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Tooltip dimensions (estimated or from ref)
        const tooltipWidth = tooltipRef.current?.offsetWidth || 280;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 150;
        const padding = 16;

        // Horizontal positioning
        let left = rect.left + rect.width / 2;
        let finalLeft = left - tooltipWidth / 2;

        // Clamp to viewport
        if (finalLeft < padding) {
            finalLeft = padding;
        } else if (finalLeft + tooltipWidth > viewportWidth - padding) {
            finalLeft = viewportWidth - padding - tooltipWidth;
        }

        // Arrow position relative to the tooltip box
        const arrowLeft = ((rect.left + rect.width / 2) - finalLeft);

        // Vertical positioning
        let placement: 'top' | 'bottom' = 'top';
        let top = rect.top - 12; // Above trigger

        if (rect.top - tooltipHeight < padding) {
            placement = 'bottom';
            top = rect.bottom + 12; // Below trigger
        }

        return {
            top,
            left: finalLeft,
            arrowLeft,
            placement
        };
    }, []);

    const updatePosition = useCallback(() => {
        const newCoords = calculatePosition();
        if (newCoords) {
            setCoords(newCoords);
        }
    }, [calculatePosition]);

    // Update position when it becomes visible or when window changes
    useEffect(() => {
        if (isVisible) {
            // Initial position update
            updatePosition();

            window.addEventListener('scroll', updatePosition);
            window.addEventListener('resize', updatePosition);

            const handleClickOutside = (event: MouseEvent) => {
                if (triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
                    tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                    setIsVisible(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                window.removeEventListener('scroll', updatePosition);
                window.removeEventListener('resize', updatePosition);
                document.removeEventListener('mousedown', handleClickOutside);
            };
        } else {
            // Reset coords when closing to prevent flash on next open
            setCoords({ top: -9999, left: -9999, arrowLeft: 50, placement: 'top' });
        }
    }, [isVisible, updatePosition]);

    const handleInteraction = (visible: boolean) => {
        // Only use mouse events on desktop
        if (window.matchMedia('(hover: hover)').matches) {
            if (visible) {
                const newCoords = calculatePosition();
                if (newCoords) setCoords(newCoords);
            }
            setIsVisible(visible);
        }
    };

    const toggleTooltip = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isVisible) {
            const newCoords = calculatePosition();
            if (newCoords) setCoords(newCoords);
        }
        setIsVisible(!isVisible);
    };

    const tooltipContent = (
        <div
            ref={tooltipRef}
            className={`fixed w-[280px] sm:w-[320px] max-w-[calc(100vw-32px)] bg-[#F8F9FA] rounded-xl p-4 z-[99999] shadow-[0px_12px_32px_rgba(0,0,0,0.15)] pointer-events-auto
                animate-in fade-in duration-200 
                ${coords.placement === 'top' ? 'slide-in-from-bottom-2' : 'slide-in-from-top-2'}
            `}
            style={{
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                transform: coords.placement === 'top' ? 'translateY(-100%)' : 'translateY(0%)',
                // Ensure it's hidden if coords aren't set yet
                opacity: coords.top === -9999 ? 0 : 1,
            }}
        >
            {/* Arrow */}
            <div
                className={`absolute w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#F8F9FA]`}
                style={{
                    left: `${coords.arrowLeft}px`,
                    transform: `translateX(-50%) ${coords.placement === 'bottom' ? 'rotate(180deg)' : ''}`,
                    top: coords.placement === 'top' ? 'calc(100% - 1px)' : '-9px'
                }}
            />
            {title && <h4 className="text-[#1A1A1A] font-bold text-[14px] leading-5 mb-2 font-inter">{title}</h4>}
            <div className="text-[#5A5A5A] text-[12px] leading-4 font-normal font-inter">{content}</div>
        </div>
    );

    return (
        <>
            <div
                ref={triggerRef}
                className="inline-block cursor-pointer"
                onMouseEnter={() => handleInteraction(true)}
                onMouseLeave={() => handleInteraction(false)}
                onClick={toggleTooltip}
            >
                {children}
            </div>
            {mounted && isVisible && coords.top !== -9999 && createPortal(tooltipContent, document.body)}
        </>
    );
};

export default DifferenceTooltip;
