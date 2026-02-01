import React from 'react';
import Image from 'next/image';
import RightShadow from './ui/RightShadow';
import { MobileSlider } from './ui/MobileSlider';

const POLYGON_PATH = "M57.2391 20L94.4782 41.5V84.5L57.2391 106L20 84.5V41.5L57.2391 20Z";

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
    return (
        <section className="relative w-full pb-12 sm:pb-24 overflow-hidden border-b border-[#0663CD4D]">
            {/* Right Shadow */}
            <div className="absolute right-0 -top-20 md:-top-30 z-0 pointer-events-none">
                <RightShadow />
            </div>

            <div className="relative z-20 max-w-269.5 mx-auto px-4 xl:px-0">
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
                            className="bg-[#FFFFFF0D] rounded-[40px] px-8 pt-3 pb-6 flex flex-col items-center text-center border border-[#FFFFFF26] group h-full transition-all duration-0 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30] "
                        >
                            <div className="relative w-[115px] h-[126px] flex items-center justify-center mb-2">
                                <svg width="115" height="126" viewBox="0 0 115 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter={`url(#filter_polygon_${idx})`}>
                                        <path d={POLYGON_PATH} fill={feature.color} fillOpacity="0.1" shapeRendering="crispEdges" />
                                    </g>
                                    <defs>
                                        <filter id={`filter_polygon_${idx}`} x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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

                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={feature.iconWidth}
                                        height={feature.iconHeight}
                                        className="object-contain"
                                        loading="lazy"
                                        decoding="async"
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

                {/* Mobile Slider */}
                <MobileSlider itemCount={FEATURES.length}>
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="min-w-[95%] snap-center"
                        >
                            <div className="bg-[#FFFFFF0D] rounded-[40px] px-5 py-5 flex flex-col items-center text-center border border-[#FFFFFF26] w-full transition-all duration-0 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30] min-h-82">
                                <div className="relative w-[115px] h-[126px] flex items-center justify-center mb-4">
                                    <svg width="115" height="126" viewBox="0 0 115 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter={`url(#filter_polygon_mobile_v3_${idx})`}>
                                            <path d={POLYGON_PATH} fill={feature.color} fillOpacity="0.1" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id={`filter_polygon_mobile_v3_${idx}`} x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="10" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values={hexToRgbMatrix(feature.color)} />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_mobile_v3_${idx}`} />
                                                <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_mobile_v3_${idx}`} result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={feature.iconWidth}
                                            height={feature.iconHeight}
                                            className="object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-white text-[20px] font-semibold font-inter mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-[#99A1AF] text-[12px] leading-5 px-1 font-normal font-inter">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </MobileSlider>
            </div>
        </section>
    );
};

export default WhyEagleLikes;
