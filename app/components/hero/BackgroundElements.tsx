import React from 'react';
import Image from 'next/image';

export const BackgroundGrid = () => (
    <div className="absolute inset-0 z-0 w-full mx-auto mt-12.75 md:mt-24 pointer-events-none -ml-[5px]">
        <Image src="/assets/grid.svg" alt="Background Grid" width={762} height={365} className='md:block hidden object-contain mx-auto' />
        <Image src="/assets/svg-grid-mb.svg" alt="Background Grid" width={374} height={221} className='md:hidden block object-contain mx-auto' />
    </div>
);

export const HeroRightImage = () => (
    <Image src="/assets/right-shadow-hero.png" alt="Background Grid" width={460} height={447} className='absolute -right-62 top-6 z-10 md:block hidden opacity-30' />
);

export const HeroLeftImage = () => (
    <Image src="/assets/left-shadow-hero.svg" alt="Background Grid" width={213} height={447} className='absolute left-0 top-80 md:block hidden' />
);

export const LeftShadow = () => (
    <div className="hidden md:block absolute -z-10 top-[4%] -left-10">
        <svg width="427" height="979" viewBox="0 0 427 979" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_17)">
                <circle cx="-62.5" cy="489.5" r="289.5" fill="#0067DB" fillOpacity="0.8" />
            </g>
            <defs>
                <filter id="filter0_f_1_17" x="-552" y="0" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_17" />
                </filter>
            </defs>
        </svg>
    </div>

);

export const RightShadow = () => (
    <div className="hidden md:block absolute -z-10 top-[10%] right-0 lg:top-[170px]">
        <svg width="300" height="979" viewBox="0 0 300 979" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_16)">
                <circle cx="489.5" cy="489.5" r="289.5" fill="#0067DB" fillOpacity="0.8" />
            </g>
            <defs>
                <filter id="filter0_f_1_16" x="0" y="0" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_16" />
                </filter>
            </defs>
        </svg>

    </div>
);

export const LeftBottomShadow = () => (
    <div className="absolute left-0 bottom-45 md:bottom-0 z-0 pointer-events-none">
        {/* Desktop */}
        <svg width="323" height="918" viewBox="0 0 323 918" className='md:block hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* Mobile */}
        <svg width="301" height="678" className='block md:hidden' viewBox="0 0 301 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_1220)">
                <ellipse cx="146.206" cy="128" rx="146.206" ry="128" transform="matrix(0.655505 0.755191 0.755191 -0.655505 -228.297 312.175)" fill="#0067DB" fillOpacity="0.32" />
            </g>
            <defs>
                <filter id="filter0_f_1_1220" x="-371.915" y="0" width="672.243" height="677.367" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_1220" />
                </filter>
            </defs>
        </svg>
    </div>
);

export const TopBlueGlow = () => (
    <div className="flex w-full justify-center ">
        <svg width="979" height="490" className=' absolute top-0' viewBox="0 0 979 490" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_15)">
                <circle cx="489.5" cy="0.5" r="289.5" fill="#0067DB" fillOpacity="0.8" />
            </g>
            <defs>
                <filter id="filter0_f_1_15" x="0" y="-489" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_15" />
                </filter>
            </defs>
        </svg>
    </div>
);
