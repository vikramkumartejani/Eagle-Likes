'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ToggleSwitch from './ui/ToggleSwitch';

import PricingCards from './PricingCards';

const Hero = () => {
    const [isVip, setIsVip] = useState(false);

    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-23.5 sm:pt-30 lg:pt-63.5 pb-6">
            {/* Background Grid Lines */}
            <div className="lg:block hidden absolute inset-0 z-0 w-full mx-auto max-w-190.5 mt-24.5 h-91.25 pointer-events-none">
                <Image
                    src="/assets/hero-lines.png"
                    alt="Background Grid"
                    width={762}
                    height={365}
                />
            </div>

            <Image src="/assets/hero-right.png" alt="Background Grid" width={213} height={447} className='absolute right-0 top-12 md:block hidden' />
            {/* Left Shadow */}
            <div className="absolute left-0 top-12 z-0 pointer-events-none mix-blend-screen md:block hidden">
                <svg width="420" height="979" viewBox="0 0 420 979" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_17)">
                        <circle cx="-69.5" cy="489.5" r="289.5" fill="#0067DB" fillOpacity="0.8" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_17" x="-559" y="0" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_17" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Shadow */}
            <div className="absolute right-0 top-20 z-0 pointer-events-none mix-blend-screen md:block hidden">
                <svg width="307" height="979" viewBox="0 0 307 979" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Top Blue Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <svg width="979" height="439" viewBox="0 0 979 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_15)">
                        <circle cx="489.5" cy="-50.5" r="289.5" fill="#0067DB" fillOpacity="0.8" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_15" x="0" y="-540" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_15" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-3.5 text-center max-w-4xl">
                {/* Main Headline */}
                <h1 className="text-[26px] sm:text-[54px] leading-8 sm:leading-15 font-rethink font-bold">
                    Buy Instagram Followers
                    <br />
                    with <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#018DFF_48%,#00FFFF_85%)]">Fast Delivery!</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-[#99A1AF] text-[14px] sm:text-[18px] leading-6 sm:leading-7.5 font-medium font-inter mt-5 max-w-158.5 mx-auto">
                    Quickly get premium Instagram followers safely and easily! Boost your IG influence and engagement instantly! Always great prices and offers!
                </p>

                {/* Action / Toggle Area */}
                <div className="flex items-center justify-center mt-10 sm:mt-12 w-full">
                    <div
                        className="relative inline-flex items-center justify-between px-3.5 sm:px-4 w-full max-w-94 mx-auto h-11 sm:h-12 rounded-full cursor-pointer group"
                        style={{
                            background: "linear-gradient(#101828, #101828) padding-box, linear-gradient(90deg, #EE1D52 0%, #F64C50 50%, #9146FF 100%) border-box",
                            border: "1px solid transparent",
                            boxShadow: "0px 0px 8px 0px #00000026"
                        }}
                        onClick={() => setIsVip(!isVip)}
                    >

                        <div className='flex items-center gap-3'>
                            <ToggleSwitch checked={isVip} onChange={setIsVip} />

                            <span className="text-white font-normal text-[16.82px] sm:text-[18px] leading-8 select-none">
                                I need vip followers
                            </span>
                        </div>

                        <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                            <Image src='/assets/info.svg' alt='info' width={20} height={20} />
                        </div>
                    </div>
                </div>
            <PricingCards />
            </div>
        </section>
    );
};

export default Hero;