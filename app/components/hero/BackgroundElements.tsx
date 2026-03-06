import React from 'react';
import Image from 'next/image';

export const BackgroundGrid = () => (
    <div className="absolute inset-0 z-0 w-full mx-auto mt-12.75 md:mt-24 pointer-events-none -ml-[5px]">
        <Image src="/assets/grid.svg" alt="Background Grid" width={762} height={365} className='md:block hidden object-contain mx-auto' priority />
        <Image src="/assets/svg-grid-mb.svg" alt="Background Grid" width={374} height={221} className='md:hidden block object-contain mx-auto' priority />
    </div>
);

export const HeroRightImage = () => (
    <Image src="/assets/right-shadow-hero.png" alt="Background Grid" width={460} height={447} className='absolute -right-62 top-6 z-10 md:block hidden opacity-30' loading="lazy" decoding="async" />
);

export const HeroLeftImage = () => (
    <Image src="/assets/left-shadow-hero.svg" alt="Background Grid" width={213} height={447} className='absolute left-0 top-80 md:block hidden' loading="lazy" decoding="async" />
);

export const LeftShadow = () => (
    <div className="hidden md:block absolute -z-10 top-[4%] -left-10 pointer-events-none"
        style={{
            width: 427,
            height: 979,
            background: "radial-gradient(ellipse at center, rgba(0,103,219,0.8) 0%, transparent 60%)",
        }}
        aria-hidden="true"
    />
);

export const RightShadow = () => (
    <div className="hidden md:block absolute -z-10 top-[10%] right-0 lg:top-[170px] pointer-events-none"
        style={{
            width: 300,
            height: 979,
            background: "radial-gradient(ellipse at center, rgba(0,103,219,0.8) 0%, transparent 60%)",
        }}
        aria-hidden="true"
    />
);

export const LeftBottomShadow = () => (
    <div className="absolute left-0 bottom-45 md:bottom-0 z-0 pointer-events-none">
        {/* Desktop */}
        <div
            className='md:block hidden'
            style={{
                width: 323,
                height: 918,
                background: "radial-gradient(ellipse at center, rgba(0,103,219,0.32) 0%, transparent 70%)",
            }}
            aria-hidden="true"
        />
        {/* Mobile */}
        <div
            className='block md:hidden'
            style={{
                width: 301,
                height: 678,
                background: "radial-gradient(ellipse at center, rgba(0,103,219,0.32) 0%, transparent 70%)",
            }}
            aria-hidden="true"
        />
    </div>
);

export const TopBlueGlow = () => (
    <div className="flex w-full justify-center pointer-events-none">
        <div
            className="absolute -top-[100px] lg:-top-[289px] -z-10 w-[310px] h-[246px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-full"
            style={{
                background: "radial-gradient(circle, rgba(0, 103, 219, 0.45) 0%, rgba(0, 103, 219, 0) 70%)",
                transform: "translateZ(0)",
            }}
        ></div>
    </div>
);
