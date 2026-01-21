'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const POLYGON_PATH = "M37.2391 0L74.4782 21.5V64.5L37.2391 86L0 64.5V21.5L37.2391 0Z";

// Helper function to convert hex color to RGB values for feColorMatrix
const hexToRgbMatrix = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return `0 0 0 0 ${r.toFixed(6)} 0 0 0 0 ${g.toFixed(6)} 0 0 0 0 ${b.toFixed(6)} 0 0 0 0.5 0`;
};


interface Feature {
    title: string;
    description: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    color: string;
}

const FEATURES: Feature[] = [
    {
        title: "Affordable Growth",
        description: "At Eagle Likes, we believe social media growth should be for everyone. That's why we offer affordable packages for individuals, influencers, and businesses alike.",
        color: "#FDC700",
        icon: "/assets/icon-affordable.svg",
        iconWidth: 40,
        iconHeight: 38
    },
    {
        title: "Quality That Speaks",
        description: "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
        color: "#FB64B6",
        icon: "/assets/icon-quality.svg",
        iconWidth: 40,
        iconHeight: 38
    },
    {
        title: "Speed You Can Trust",
        description: "In today’s fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
        color: "#51A2FF",
        icon: "/assets/icon-speed.svg",
        iconWidth: 30,
        iconHeight: 40
    },
    {
        title: "Safe And Secure Services",
        description: "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
        color: "#00C950",
        icon: "/assets/icon-secure.svg",
        iconWidth: 46,
        iconHeight: 46
    },
    {
        title: "Customer-Centric Support",
        description: "We understand that every customer is unique. That’s why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
        color: "#FF0000",
        icon: "/assets/icon-support.svg",
        iconWidth: 50,
        iconHeight: 54
    },
    {
        title: "A Brand You Can Rely On",
        description: "Eagle Likes is more than just a service it’s your trusted partner in social media growth. Join the thousands of satisfied customers who’ve chosen us to elevate their online presence with confidence.",
        color: "#C27AFF",
        icon: "/assets/icon-brand.svg",
        iconWidth: 40,
        iconHeight: 38
    },
];

const WhyEagleLikes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < FEATURES.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="relative w-full pb-12 sm:pb-24 overflow-hidden border-b border-[#0663CD4D]">
            {/* Right Shadow */}
            <div className="absolute right-0 -top-28 sm:top-0 z-0 pointer-events-none mix-blend-screen">
                <svg width="313" height="918" viewBox="0 0 313 918" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_104)">
                        <circle cx="458.55" cy="458.55" r="258.5" transform="rotate(-61.6906 458.55 458.55)" fill="#0067DB" fillOpacity="0.32" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_104" x="3.05176e-05" y="0" width="917.1" height="917.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_104" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-269.5 mx-auto px-4 xl:px-0">
                {/* Heading */}
                <div className="text-center mb-7 sm:mb-11">
                    <h2 className="text-[30px] sm:text-[48px] leading-11 font-inter font-bold text-white">
                        Why{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #018DFF 48%, #00FFFF 85%)",
                            }}
                        >
                            Eagle Likes?
                        </span>
                    </h2>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FFFFFF0D] rounded-[40px] px-8 pt-3 pb-6 flex flex-col items-center text-center border border-[#FFFFFF26] group h-full transition-all duration-200 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30] "
                        >
                            {/* Icon Container with Polygon */}
                            <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-2">
                                {/* Polygon Background */}
                                <svg width="117" height="129" viewBox="0 0 117 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter={`url(#filter_polygon_${idx})`}>
                                        <path d="M58.2391 21.1548L95.4782 42.6548V85.6548L58.2391 107.155L21 85.6548V42.6548L58.2391 21.1548Z" fill={feature.color} fillOpacity="0.1" shapeRendering="geometricPrecision" />
                                        <path d="M95.9784 85.9438L95.7284 86.0874L58.4891 107.587L58.2391 107.732L57.9891 107.587L20.7498 86.0874L20.4998 85.9438V42.3657L20.7498 42.2222L57.9891 20.7222L58.2391 20.5776L58.4891 20.7222L95.7284 42.2222L95.9784 42.3657V85.9438Z" stroke={feature.color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                    </g>
                                    <defs>
                                        <filter id={`filter_polygon_${idx}`} x="0" y="0" width="116.478" height="128.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="10" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values={hexToRgbMatrix(feature.color)} />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_${idx}`} />
                                            <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_${idx}`} result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                {/* Icon */}
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={feature.iconWidth}
                                        height={feature.iconHeight}
                                        className="object-contain"
                                        style={{
                                            filter: `drop-shadow(0px 0px 6px ${feature.color})`
                                        }}
                                    />
                                </div>
                            </div>

                            <h3 className="text-white text-[20.76px] sm:text-[23px] font-semibold font-inter text-wrap xl:text-nowrap mb-3 sm:mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-[#99A1AF] text-[12px] sm:text-[15px] leading-6 sm:leading-6.5 font-normal font-inter">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden flex flex-col items-center">
                    <div
                        className="bg-[#FFFFFF0D] rounded-[40px] px-5 py-5 flex flex-col items-center text-center border border-[#FFFFFF26] w-full max-w-87.5 transition-all duration-200 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30] min-h-90"
                    >
                        {/* Icon Container with Polygon */}
                        <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-4">
                            {/* Polygon Background */}
                            <svg width="117" height="129" viewBox="0 0 117 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter={`url(#filter_polygon_mobile_${currentIndex})`}>
                                    <path d="M58.2391 21.1548L95.4782 42.6548V85.6548L58.2391 107.155L21 85.6548V42.6548L58.2391 21.1548Z" fill={FEATURES[currentIndex].color} fillOpacity="0.1" shapeRendering="geometricPrecision" />
                                    <path d="M95.9784 85.9438L95.7284 86.0874L58.4891 107.587L58.2391 107.732L57.9891 107.587L20.7498 86.0874L20.4998 85.9438V42.3657L20.7498 42.2222L57.9891 20.7222L58.2391 20.5776L58.4891 20.7222L95.7284 42.2222L95.9784 42.3657V85.9438Z" stroke={FEATURES[currentIndex].color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                </g>
                                <defs>
                                    <filter id={`filter_polygon_mobile_${currentIndex}`} x="0" y="0" width="116.478" height="128.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="10" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values={hexToRgbMatrix(FEATURES[currentIndex].color)} />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_mobile_${currentIndex}`} />
                                        <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_mobile_${currentIndex}`} result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Image
                                    src={FEATURES[currentIndex].icon}
                                    alt={FEATURES[currentIndex].title}
                                    width={FEATURES[currentIndex].iconWidth}
                                    height={FEATURES[currentIndex].iconHeight}
                                    className="object-contain"
                                    style={{
                                        filter: `drop-shadow(0px 0px 6px ${FEATURES[currentIndex].color})`
                                    }}
                                />
                            </div>
                        </div>

                        <h3 className="text-white text-[23px] font-semibold font-inter mb-4">
                            {FEATURES[currentIndex].title}
                        </h3>

                        <p className="text-[#99A1AF] text-[15px] leading-6.5 px-1 font-normal font-inter">
                            {FEATURES[currentIndex].description}
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
                            disabled={currentIndex === FEATURES.length - 1}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentIndex === FEATURES.length - 1
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
        </section>
    );
};

export default WhyEagleLikes;
