'use client';
import React from 'react';
import Image from 'next/image';

interface StatData {
    value: string;
    label: string;
    iconBg: string;
    icon: React.ReactNode;
}

const STATS_DATA: StatData[] = [
    {
        value: "+245%",
        label: "Engagement Rate",
        iconBg: "linear-gradient(135deg, #FF6900 0%, #F6339A 100%)",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7H22V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        value: "+180%",
        label: "Followers Growth",
        iconBg: "linear-gradient(135deg, #AD46FF 0%, #F6339A 100%)",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        value: "+320%",
        label: "Reach Increase",
        iconBg: "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        value: "10x",
        label: "Content Impact",
        iconBg: "linear-gradient(135deg, #00C950 0%, #00BC7D 100%)",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 17V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 17V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 17V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

const SocialMediaGrowth = () => {
    return (
        <section className="relative w-full pt-24 px-5 overflow-hidden">
            {/* Left Side Shadow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[20%] pointer-events-none z-0 opacity-50 md:opacity-100">
                <svg width="323" height="918" viewBox="0 0 323 918" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_97)">
                        <circle cx="258.5" cy="258.5" r="258.5" transform="matrix(-0.474232 -0.8804 -0.8804 0.474232 214.345 563.544)" fill="#0067DB" fillOpacity="0.32" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_97" x="-594.378" y="0" width="917.1" height="917.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_97" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between">
                {/* Left Side */}
                <div className="relative w-full max-w-164 aspect-656/756 mx-auto lg:mx-0">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <Image
                            src="/assets/left-image.png"
                            alt="Instagram Growth Strategy"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Stats Overlay Card */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-90 mx-auto bg-[#101828F2] backdrop-blur-md rounded-[14px] border border-[#FFFFFF33] px-6 py-4 grid grid-cols-3 shadow-[0px_25px_50px_-12px_#00000040]">
                        <div className="flex flex-col">
                            <span className="text-white text-[24px] leading-8 font-bold font-inter text-nowrap">125K</span>
                            <span className="text-[#FFFFFF99] text-[12px] leading-4 font-semibold font-inter">Followers</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-white text-[24px] leading-8 font-bold font-inter ml-1.5">4.8M</span>
                            <span className="text-[#FFFFFF99] text-[12px] leading-4 font-semibold font-inter">Engagement</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#22C55E] text-[24px] leading-8 font-bold font-inter flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83334 5.83325H14.1667V14.1666" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.83334 14.1666L14.1667 5.83325" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                245%
                            </span>
                            <span className="text-[#FFFFFF99] text-[12px] leading-4 font-semibold font-inter text-center">Growth</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content & Grid */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-117">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4.25 py-1.75 rounded-lg border border-[#FF690033] mb-3" style={{ background: "linear-gradient(90deg, rgba(255, 105, 0, 0.1) 0%, rgba(246, 51, 154, 0.1) 100%)" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7.00008C1.90538 7.0004 1.81261 6.97387 1.73247 6.92357C1.65233 6.87327 1.58811 6.80126 1.54727 6.71591C1.50643 6.63056 1.49064 6.53537 1.50175 6.44141C1.51285 6.34745 1.55039 6.25856 1.61 6.18508L6.56 1.08508C6.59713 1.04222 6.64773 1.01326 6.70349 1.00295C6.75925 0.992636 6.81686 1.00159 6.86686 1.02833C6.91686 1.05508 6.95629 1.09803 6.97866 1.15014C7.00104 1.20224 7.00503 1.26041 6.99 1.31508L6.03 4.32508C6.00169 4.40084 5.99218 4.48234 6.00229 4.56258C6.0124 4.64283 6.04183 4.71942 6.08804 4.78579C6.13426 4.85217 6.19588 4.90634 6.26763 4.94366C6.33938 4.98098 6.41912 5.00034 6.5 5.00008H10C10.0946 4.99976 10.1874 5.02629 10.2675 5.07659C10.3477 5.12689 10.4119 5.1989 10.4527 5.28425C10.4936 5.3696 10.5093 5.46479 10.4982 5.55875C10.4871 5.65272 10.4496 5.7416 10.39 5.81508L5.44 10.9151C5.40287 10.9579 5.35227 10.9869 5.29651 10.9972C5.24074 11.0075 5.18313 10.9986 5.13313 10.9718C5.08313 10.9451 5.0437 10.9021 5.02133 10.85C4.99895 10.7979 4.99496 10.7398 5.01 10.6851L5.97 7.67508C5.9983 7.59932 6.00781 7.51782 5.9977 7.43758C5.98759 7.35733 5.95817 7.28074 5.91195 7.21437C5.86574 7.148 5.80411 7.09382 5.73236 7.0565C5.66061 7.01918 5.58087 6.99982 5.5 7.00008H2Z" stroke="#FF8904" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#FF8904] text-[12px] leading-4 font-medium font-inter">Social Media Growth</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-[42px] sm:text-[48px] leading-[1.2] font-bold font-inter mb-4 tracking-[-1.8px] text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(180deg, #FF8904 0%, #FB64B6 50%, #C27AFF 100%)" }}
                    >
                        Grow Your
                        <br />
                        Instagram Followers
                    </h2>

                    {/* Description */}
                    <p className="text-[#99A1AF] text-[18px] leading-[29.33px] mb-8 font-inter font-normal">
                        Grow your Instagram audience with data-driven strategies and proven tactics. Build an engaged community and expand your reach effortlessly.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                        {STATS_DATA.map((stat, idx) => (
                            <div key={idx} className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[30px] p-6 flex flex-col items-start gap-3 justify-between">
                                <div
                                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shadow-lg"
                                    style={{ background: stat.iconBg }}
                                >
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-[30px] leading-9 font-semibold text-white font-inter">{stat.value}</div>
                                    <div className="text-white text-[14px] leading-5 font-normal font-inter">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Join Creators */}
                    <div className="flex items-center gap-2 py-2">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] relative overflow-hidden">
                                    <Image
                                        src={`/assets/profile-${i}.png`}
                                        alt="User"
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-[#99A1AF] text-[14px] leading-5 font-normal font-inter pl-1">
                            Join 50,000+ creators growing their audience
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaGrowth;