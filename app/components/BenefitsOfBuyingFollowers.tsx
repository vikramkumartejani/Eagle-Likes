'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Helper function to convert hex color to RGB values for feColorMatrix
const hexToRgbMatrix = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return `0 0 0 0 ${r.toFixed(6)} 0 0 0 0 ${g.toFixed(6)} 0 0 0 0 ${b.toFixed(6)} 0 0 0 0.5 0`;
};

interface Benefits {
    title: string;
    description: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    color: string;
}

const BENEFITS: Benefits[] = [
    {
        title: "Higher Visibility",
        description: "Instagram’s algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
        color: "#1ED760",
        icon: "/assets/higher-visibility.svg",
        iconWidth: 46,
        iconHeight: 46
    },
    {
        title: "Strengthen Trust",
        description: "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
        color: "#F7FF00",
        icon: "/assets/strengthen-trust.svg",
        iconWidth: 43.36,
        iconHeight: 44.37
    },
    {
        title: "Get Real Followers",
        description: "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
        color: "#FF0000",
        icon: "/assets/get-real-followers.svg",
        iconWidth: 43,
        iconHeight: 40
    },
];

const BenefitsOfBuyingFollowers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < BENEFITS.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="relative w-full pt-12.25 pb-18 md:py-25 lg:pb-50.5 lg:pt-38 border-t-[1.5px] border-[#0663CD4D]">

            <div className="relative z-10 max-w-269.5 mx-auto px-4 xl:px-0">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-11">
                    <h2 className="text-[30px] sm:text-[48px] leading-9 sm:leading-11 font-responsive-heading font-bold text-white">
                        Benefits of Buying{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
                            }}
                        >
                            Instagram Followers
                        </span>
                    </h2>
                    <p className='mt-7.5 text-[#99A1AF] text-[14px] sm:text-[18px] leading-5.5 sm:leading-7 font-normal font-inter sm:px-4'>Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure.</p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {BENEFITS.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FFFFFF0D] rounded-[40px] px-5.5 pb-6 pt-3 pb-11.5 flex flex-col items-center text-center border border-[#FFFFFF26] group h-full transition-all duration-200 ease-out hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:border-[#FFFFFF26]"
                        >
                            {/* Icon Container with Polygon */}
                            <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
                                {/* Polygon Background */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 117 129"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <filter id={`filter0_d_${idx}`} x="0" y="0" width="116.478" height="128.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="10"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values={hexToRgbMatrix(benefit.color)}/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_${idx}`}/>
                                            <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_${idx}`} result="shape"/>
                                        </filter>
                                    </defs>
                                    <g filter={`url(#filter0_d_${idx})`}>
                                        <path d="M58.2391 21.1543L95.4782 42.6543V85.6543L58.2391 107.154L21 85.6543V42.6543L58.2391 21.1543Z" fill={benefit.color} fillOpacity="0.1" shapeRendering="crispEdges"/>
                                        <path d="M95.9784 85.9434L95.7284 86.0869L58.4891 107.587L58.2391 107.731L57.9891 107.587L20.7498 86.0869L20.4998 85.9434V42.3652L20.7498 42.2217L57.9891 20.7217L58.2391 20.5771L58.4891 20.7217L95.7284 42.2217L95.9784 42.3652V85.9434Z" stroke={benefit.color} strokeOpacity="0.5" shapeRendering="crispEdges"/>
                                    </g>
                                </svg>

                                {/* Icon */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <Image
                                        src={benefit.icon}
                                        alt={benefit.title}
                                        width={benefit.iconWidth}
                                        height={benefit.iconHeight}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="text-white text-[20.76px] sm:text-[26px] leading-6.75 font-semibold text-wrap xl:text-nowrap mb-5">
                                {benefit.title}
                            </h3>

                            <p className="text-[#99A1AF] text-[12px] sm:text-[15px] leading-6 font-normal">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden flex flex-col items-center">
                    <div
                        className="bg-[#FFFFFF0D] rounded-[40px] px-5 pt-2.5 pb-5 flex flex-col items-center text-center border border-[#FFFFFF26] w-full max-w-87.5 transition-all duration-300 min-h-85"
                    >
                        {/* Icon Container with Polygon */}
                        <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-2">
                            {/* Polygon Background */}
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 117 129"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <filter id={`filter0_d_mobile_${currentIndex}`} x="0" y="0" width="116.478" height="128.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values={hexToRgbMatrix(BENEFITS[currentIndex].color)}/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_mobile_${currentIndex}`}/>
                                        <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_mobile_${currentIndex}`} result="shape"/>
                                    </filter>
                                </defs>
                                <g filter={`url(#filter0_d_mobile_${currentIndex})`}>
                                    <path d="M58.2391 21.1543L95.4782 42.6543V85.6543L58.2391 107.154L21 85.6543V42.6543L58.2391 21.1543Z" fill={BENEFITS[currentIndex].color} fillOpacity="0.1" shapeRendering="crispEdges"/>
                                    <path d="M95.9784 85.9434L95.7284 86.0869L58.4891 107.587L58.2391 107.731L57.9891 107.587L20.7498 86.0869L20.4998 85.9434V42.3652L20.7498 42.2217L57.9891 20.7217L58.2391 20.5771L58.4891 20.7217L95.7284 42.2217L95.9784 42.3652V85.9434Z" stroke={BENEFITS[currentIndex].color} strokeOpacity="0.5" shapeRendering="crispEdges"/>
                                </g>
                            </svg>

                            {/* Icon */}
                            <div className="relative z-10 flex items-center justify-center">
                                <Image
                                    src={BENEFITS[currentIndex].icon}
                                    alt={BENEFITS[currentIndex].title}
                                    width={BENEFITS[currentIndex].iconWidth}
                                    height={BENEFITS[currentIndex].iconHeight}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <h3 className="text-white text-[20.76px] font-semibold sm:font-inter mb-4">
                            {BENEFITS[currentIndex].title}
                        </h3>

                        <p className="text-[#99A1AF] text-[12px] leading-5 sm:px-1 font-normal sm:font-inter">
                            {BENEFITS[currentIndex].description}
                        </p>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex items-center gap-3 mt-8">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentIndex === 0
                                ? 'border border-[#FFFFFF66] text-white opacity-60 cursor-not-allowed'
                                : 'bg-[#018DFF] text-white hover:bg-[#0070CC] cursor-pointer'
                                }`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === BENEFITS.length - 1}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentIndex === BENEFITS.length - 1
                                ? 'border border-[#FFFFFF66] text-white opacity-60 cursor-not-allowed'
                                : 'bg-[#018DFF] text-white hover:bg-[#0070CC] cursor-pointer'
                                }`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsOfBuyingFollowers