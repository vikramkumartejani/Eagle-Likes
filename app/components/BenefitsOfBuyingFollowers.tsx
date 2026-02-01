import React from 'react';
import Image from 'next/image';
import RightShadow from './ui/RightShadow';
import { MobileSlider } from './ui/MobileSlider';

// Helper function to convert hex color to RGB values for feColorMatrix
const hexToRgbMatrix = (hex: string, alpha: number = 0.5) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return `0 0 0 0 ${r.toFixed(6)} 0 0 0 0 ${g.toFixed(6)} 0 0 0 0 ${b.toFixed(6)} 0 0 0 ${alpha} 0`;
};

interface Benefits {
    title: string;
    description: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    color: string;
    // SVG specific props
    path: string;
    viewBox: string;
    stdDeviation: number;
    filterWidth: string;
    filterHeight: string;
    shadowOpacity: number;
}

const BENEFITS: Benefits[] = [
    {
        title: "Higher Visibility",
        description: "Instagram’s algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
        color: "#1ED760",
        icon: "/assets/higher-visibility.svg",
        iconWidth: 46,
        iconHeight: 46,
        path: "M57.2391 20L94.4782 41.5V84.5L57.2391 106L20 84.5V41.5L57.2391 20Z",
        viewBox: "0 0 115 126",
        stdDeviation: 10,
        filterWidth: "114.478",
        filterHeight: "126",
        shadowOpacity: 0.5
    },
    {
        title: "Strengthen Trust",
        description: "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
        color: "#F7FF00",
        icon: "/assets/strengthen-trust.svg",
        iconWidth: 43.36,
        iconHeight: 44.37,
        path: "M62.2391 25L99.4782 46.5V89.5L62.2391 111L25 89.5V46.5L62.2391 25Z",
        viewBox: "0 0 125 136",
        stdDeviation: 12.5,
        filterWidth: "124.478",
        filterHeight: "136",
        shadowOpacity: 0.5
    },
    {
        title: "Get Real Followers",
        description: "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
        color: "#FF0000",
        icon: "/assets/get-real-followers.svg",
        iconWidth: 43,
        iconHeight: 40,
        path: "M62.2391 25L99.4782 46.5V89.5L62.2391 111L25 89.5V46.5L62.2391 25Z",
        viewBox: "0 0 125 136",
        stdDeviation: 12.5,
        filterWidth: "124.478",
        filterHeight: "136",
        shadowOpacity: 0.7
    },
];

const BenefitsOfBuyingFollowers = () => {
    return (
        <div className="relative w-full pt-12.25 pb-18 md:py-25 lg:pb-50.5 lg:pt-38 border-t-[1.5px] border-[#0663CD4D]">
            <div className='absolute -bottom-60 md:-bottom-80 right-0'>
                <RightShadow />
            </div>
            <div className="relative z-20 max-w-269.5 mx-auto px-4 xl:px-0">
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
                            className="bg-[#FFFFFF0D] rounded-[40px] px-5.5 pt-3 pb-11.5 flex flex-col items-center text-center border border-[#FFFFFF26] group h-full transition-all duration-200 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30]"
                        >
                            {/* Icon Container with Polygon */}
                            <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
                                {/* Polygon Background */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox={benefit.viewBox}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter={`url(#filter0_d_${idx})`}>
                                        <path d={benefit.path} fill={benefit.color} fillOpacity="0.1" shapeRendering="crispEdges" />
                                    </g>
                                    <defs>
                                        <filter id={`filter0_d_${idx}`} x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation={benefit.stdDeviation} />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values={hexToRgbMatrix(benefit.color, benefit.shadowOpacity)} />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_${idx}`} />
                                            <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_${idx}`} result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                {/* Icon Wrapper for Perfect Centering */}
                                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
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

                {/* Mobile Slider */}
                <MobileSlider itemCount={BENEFITS.length}>
                    {BENEFITS.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="min-w-[95%] snap-center"
                        >
                            <div className="bg-[#FFFFFF0D] rounded-[40px] px-5.5 pt-3 pb-11.5 flex flex-col items-center text-center border border-[#FFFFFF26] group h-full transition-all duration-200 hover:bg-[#ffffff15] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FFFFFF30]">
                                <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-6 mt-4">
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        viewBox={benefit.viewBox}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <filter id={`filter0_d_mobile_v3_${idx}`} x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation={benefit.stdDeviation} />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values={hexToRgbMatrix(benefit.color, benefit.shadowOpacity)} />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_mobile_v3_${idx}`} />
                                                <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_mobile_v3_${idx}`} result="shape" />
                                            </filter>
                                        </defs>
                                        <g filter={`url(#filter0_d_mobile_v3_${idx})`}>
                                            <path d={benefit.path} fill={benefit.color} fillOpacity="0.1" shapeRendering="crispEdges" />
                                        </g>
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <Image
                                            src={benefit.icon}
                                            alt={benefit.title}
                                            width={benefit.iconWidth}
                                            height={benefit.iconHeight}
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                <h3 className="text-white text-[20.76px] font-semibold sm:font-inter mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-[#99A1AF] text-[12px] leading-5 px-1 font-normal sm:font-inter">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </MobileSlider>
            </div>
        </div>
    );
};

export default BenefitsOfBuyingFollowers;
