import React from 'react';
import Image from 'next/image';

export const BackgroundGrid = () => (
    <div className="absolute inset-0 z-20 w-full mx-auto mt-12.75 md:mt-24 pointer-events-none -ml-[5px]">
        <Image src="/assets/grid.svg" alt="Background Grid" width={762} height={365} className='md:block hidden object-contain mx-auto' />
        <Image src="/assets/svg-grid-mb.svg" alt="Background Grid" width={374} height={221} className='md:hidden block object-contain mx-auto' />
    </div>
);

export const HeroRightImage = () => (
    <Image src="/assets/hero-right.png" alt="Background Grid" width={213} height={447} className='absolute right-0 top-12 md:block hidden' />
);

export const LeftShadow = () => (
    <div
        className="absolute -z-10 -left-[143px] top-[10%] lg:-left-[400px] lg:top-[280px] w-[179px] h-[457px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[457px] lg:rounded-[579px]"
        style={{
            background: "rgba(0, 103, 219, 0.80)",
            filter: "blur(100px)",
            WebkitFilter: "blur(100px)",
            willChange: "filter",
        }}
    ></div>

);

export const RightShadow = () => (
    <div
        className="absolute -z-10 -right-[123px] top-[10%] lg:-right-[479px] lg:top-[280px] w-[170px] h-[460px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[460px] lg:rounded-[579px]"
        style={{
            background: "rgba(0, 103, 219, 0.80)",
            filter: "blur(100px)",
            WebkitFilter: "blur(100px)",
            willChange: "filter",
        }}
    ></div>
);

export const LeftBottomShadow = () => (
    <div className="absolute left-0 bottom-0 z-0 pointer-events-none mix-blend-screen md:block hidden">
        <svg width="323" height="918" viewBox="0 0 323 918" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_95)">
                <circle cx="258.5" cy="258.5" r="258.5" transform="matrix(-0.474232 -0.8804 -0.8804 0.474232 214.345 563.544)" fill="#0067DB" fillOpacity="0.32" />
            </g>
            <defs>
                <filter id="filter0_f_1_95" x="-594.378" y="0" width="917.1" height="917.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_95" />
                </filter>
            </defs>
        </svg>
    </div>
);

export const TopBlueGlow = () => (
    <div className="flex w-full justify-center ">
        <div
            className="absolute -top-[100px] lg:-top-[289px] w-[310px] h-[246px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[460px] lg:rounded-[579px]"
            style={{
                background: "rgba(0, 103, 219, 0.80)",
                filter: "blur(100px)",
                WebkitFilter: "blur(100px)",
                willChange: "filter",
            }}
        ></div>
    </div>
);
