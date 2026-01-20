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
        <section className="relative w-full pb-14 pt-8 md:py-24 px-4 lg:pl-20 lg:pr-5 overflow-hidden">
            {/* Left Side Shadow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[20%] pointer-events-none z-0">
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
            <div className="max-w-249 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-1">
                {/* Left Side */}
                <div className="relative w-full max-w-[280px] sm:max-w-100 h-[350px] sm:h-125 mx-auto lg:mx-0">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <Image
                            src="/assets/social-media-growth-left.png"
                            alt="Instagram Growth Strategy"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* instagram icon */}
                    <div className='rounded-[14px] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center absolute -top-[26px] left-[24px] sm:-top-[35.23px] sm:left-[31.61px]' style={{ background: "linear-gradient(135deg, #9810FA 0%, #E60076 100%)", boxShadow: "0px 25px 50px -12px #AD46FF80", animation: "float 3s ease-in-out infinite", animationDelay: "0s" }}>
                        <Image src='/assets/svgs/instagram.svg' alt='instagram' width={24} height={24} className='sm:w-8 sm:h-8' />
                    </div>

                    {/* heart icon */}
                    <div className="rounded-full w-9 h-9 sm:w-11.5 sm:h-11.5 flex items-center justify-center absolute top-20 -left-6 sm:top-[158.82px] sm:-left-8.25"
                        style={{
                            background: "linear-gradient(135deg, #F6339A 0%, #FF2056 100%)",
                            boxShadow:
                                "0px 4px 6px -4px #F6339A66, 0px 10px 15px -3px #F6339A66",
                            animation: "float 3s ease-in-out infinite",
                            animationDelay: "0.5s"
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[21px] sm:h-[21px]">
                            <path d="M1.74261 8.27744C1.74263 7.30786 2.03676 6.36108 2.58615 5.56216C3.13555 4.76325 3.91436 4.14977 4.81972 3.80277C5.72509 3.45576 6.71442 3.39155 7.65704 3.61861C8.59967 3.84568 9.45124 4.35333 10.0993 5.07453C10.1449 5.12333 10.2001 5.16224 10.2614 5.18884C10.3227 5.21544 10.3888 5.22917 10.4557 5.22917C10.5225 5.22917 10.5886 5.21544 10.6499 5.18884C10.7112 5.16224 10.7664 5.12333 10.812 5.07453C11.458 4.34864 12.3098 3.83672 13.254 3.6069C14.1981 3.37708 15.1899 3.44026 16.0973 3.78803C17.0046 4.1358 17.7845 4.75167 18.3332 5.55366C18.8819 6.35565 19.1733 7.30573 19.1687 8.27744C19.1687 10.2727 17.8618 11.7627 16.5548 13.0696L11.7696 17.6989C11.6072 17.8853 11.4071 18.0351 11.1824 18.1383C10.9577 18.2414 10.7136 18.2956 10.4664 18.2971C10.2191 18.2987 9.9744 18.2476 9.74841 18.1473C9.52243 18.047 9.32038 17.8998 9.15568 17.7154L4.35653 13.0696C3.04957 11.7627 1.74261 10.2814 1.74261 8.27744Z" fill="white" stroke="white" strokeWidth="1.74261" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* msg icon */}
                    <div className="rounded-full w-9 h-9 sm:w-[44.55px] sm:h-[44.55px] flex items-center justify-center absolute top-[70px] right-3 sm:top-[92.85px] sm:right-[15.43px]"
                        style={{
                            background: "linear-gradient(135deg, #51A2FF 0%, #00D3F2 100%)",
                            boxShadow: "0px 4px 6px -4px #00B8DB66, 0px 10px 15px -3px #00B8DB66",
                            animation: "float 3s ease-in-out infinite",
                            animationDelay: "1s"
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[21px] sm:h-[21px]">
                            <path d="M2.5244 13.7882C2.64846 14.1012 2.67608 14.4441 2.60371 14.7729L1.70514 17.5487C1.67619 17.6895 1.68367 17.8353 1.72689 17.9724C1.7701 18.1095 1.84761 18.2332 1.95207 18.3319C2.05653 18.4306 2.18447 18.501 2.32376 18.5364C2.46305 18.5718 2.60908 18.5711 2.74799 18.5342L5.62763 17.6921C5.93788 17.6306 6.25918 17.6575 6.55488 17.7698C8.35657 18.6112 10.3975 18.7892 12.3177 18.2724C14.2378 17.7556 15.9137 16.5773 17.0498 14.9453C18.1858 13.3133 18.7089 11.3325 18.5268 9.35237C18.3447 7.37226 17.4691 5.52009 16.0545 4.12265C14.6398 2.72521 12.7771 1.87229 10.7949 1.7144C8.81275 1.5565 6.83849 2.10377 5.22048 3.25964C3.60247 4.4155 2.44469 6.1057 1.95142 8.03201C1.45814 9.95832 1.66107 11.9969 2.5244 13.7882Z" stroke="white" strokeWidth="1.68745" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* youtube icon */}
                    <div className='rounded-[14px] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center absolute top-[48px] -right-9 sm:top-[63.77px] sm:-right-12' style={{ background: "linear-gradient(135deg, #E7000B 0%, #FB2C36 100%)", boxShadow: "0px 25px 50px -12px #FB2C3680", animation: "float 3s ease-in-out infinite", animationDelay: "1.5s" }}>
                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[33px] sm:h-[33px]">
                            <path d="M3.33627 22.6863C2.40402 18.2868 2.40402 13.7408 3.33627 9.34134C3.45876 8.89457 3.69543 8.48737 4.02301 8.15979C4.35058 7.83222 4.75778 7.59554 5.20456 7.47305C12.362 6.2873 19.6659 6.2873 26.8233 7.47305C27.2701 7.59554 27.6773 7.83222 28.0049 8.15979C28.3325 8.48737 28.5691 8.89457 28.6916 9.34134C29.6239 13.7408 29.6239 18.2868 28.6916 22.6863C28.5691 23.133 28.3325 23.5402 28.0049 23.8678C27.6773 24.1954 27.2701 24.4321 26.8233 24.5546C19.6659 25.7406 12.362 25.7406 5.20456 24.5546C4.75778 24.4321 4.35058 24.1954 4.02301 23.8678C3.69543 23.5402 3.45876 23.133 3.33627 22.6863Z" stroke="white" strokeWidth="2.66899" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3449 20.0175L20.0174 16.014L13.3449 12.0105V20.0175Z" stroke="white" strokeWidth="2.66899" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* tiktok icon */}
                    <div className='rounded-[14px] border border-[#FFFFFF33] w-[53px] h-[53px] sm:w-[70.75px] sm:h-[70.75px] flex items-center justify-center absolute bottom-[100px] -right-7 sm:bottom-35.75 sm:-right-[34.38px]' style={{ background: "linear-gradient(135deg, #000000 0%, #101828 100%)", boxShadow: "0px 25px 50px -12px #00B8DB4D", animation: "float 3s ease-in-out infinite", animationDelay: "2s" }}>
                        <svg width="26" height="26" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[35px] sm:h-[35px]">
                            <path d="M28.0006 9.56221C26.5758 9.24889 25.2869 8.49226 24.3188 7.4009C23.3507 6.30955 22.7532 4.93956 22.6121 3.48755V2.85864H17.6809V22.3976C17.6819 23.2646 17.4101 24.1099 16.9039 24.8138C16.3978 25.5177 15.6831 26.0445 14.8609 26.3197C14.0387 26.5948 13.1508 26.6042 12.323 26.3467C11.4951 26.0891 10.7693 25.5776 10.2483 24.8846C9.78159 24.2712 9.49578 23.5395 9.42323 22.7721C9.35068 22.0047 9.49429 21.2323 9.83781 20.5423C10.1813 19.8523 10.7111 19.2722 11.3671 18.8675C12.0231 18.4629 12.7793 18.2499 13.5501 18.2525C13.9764 18.2501 14.4005 18.3128 14.8079 18.4384V13.4357C14.3338 13.377 13.8561 13.3531 13.3786 13.3642C11.6195 13.4112 9.91233 13.9702 8.46608 14.9726C7.01984 15.975 5.8973 17.3775 5.23593 19.0081C4.57456 20.6388 4.40306 22.427 4.74244 24.1536C5.08182 25.8803 5.91734 27.4705 7.14669 28.7295C8.40663 30.0105 10.0189 30.888 11.7787 31.2506C13.5385 31.6132 15.3664 31.4444 17.03 30.7658C18.6937 30.0871 20.1181 28.9292 21.1222 27.4392C22.1263 25.9492 22.6648 24.1944 22.6692 22.3976V12.3923C24.6581 13.813 27.043 14.5729 29.4871 14.5649V9.70514C29.007 9.70712 28.528 9.65922 28.0578 9.56221H28.0006Z" fill="white" />
                        </svg>
                    </div>

                    {/* twitter icon */}
                    <div className='rounded-[14px] w-12.5 h-[50px] sm:w-[65.87px] sm:h-[65.87px] flex items-center justify-center absolute bottom-[100px] -left-10 sm:bottom-[185.86px] sm:-left-[64.83px]' style={{ background: "linear-gradient(135deg, #2B7FFF 0%, #155DFC 100%)", boxShadow: "0px 25px 50px -12px #2B7FFF80", animation: "float 3s ease-in-out infinite", animationDelay: "2.5s" }}>
                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[33px] sm:h-[33px]">
                            <path d="M30.1896 5.48902C30.1896 5.48902 29.229 8.37076 27.4451 10.1547C29.6407 23.8772 14.5459 33.8947 2.74451 26.0728C5.76347 26.2101 8.78243 25.2495 10.978 23.3283C4.11676 21.27 0.686125 13.1736 4.11676 6.86128C7.13572 10.4291 11.8014 12.4875 16.4671 12.3503C15.232 6.58683 21.9561 3.29342 26.0728 7.13573C27.5823 7.13573 30.1896 5.48902 30.1896 5.48902Z" stroke="white" strokeWidth="2.74451" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* msg icon */}
                    <div className="rounded-full w-9 h-9 sm:w-[44.55px] sm:h-[44.55px] flex items-center justify-center absolute bottom-[95px] left-2 sm:bottom-[192.14px] sm:left-4"
                        style={{
                            background: "linear-gradient(135deg, #00C950 0%, #00BC7D 100%)",
                            boxShadow: "0px 4px 6px -4px #00C95066, 0px 10px 15px -3px #00C95066",
                            animation: "float 3s ease-in-out infinite",
                            animationDelay: "3s"
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[21px] sm:h-[21px]">
                            <path d="M15.0161 6.67383C16.3983 6.67383 17.5188 5.55334 17.5188 4.17114C17.5188 2.78895 16.3983 1.66846 15.0161 1.66846C13.6339 1.66846 12.5134 2.78895 12.5134 4.17114C12.5134 5.55334 13.6339 6.67383 15.0161 6.67383Z" stroke="white" strokeWidth="1.66846" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.00537 12.5134C6.38757 12.5134 7.50806 11.3929 7.50806 10.0107C7.50806 8.62855 6.38757 7.50806 5.00537 7.50806C3.62318 7.50806 2.50269 8.62855 2.50269 10.0107C2.50269 11.3929 3.62318 12.5134 5.00537 12.5134Z" stroke="white" strokeWidth="1.66846" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0161 18.353C16.3983 18.353 17.5188 17.2325 17.5188 15.8503C17.5188 14.4681 16.3983 13.3477 15.0161 13.3477C13.6339 13.3477 12.5134 14.4681 12.5134 15.8503C12.5134 17.2325 13.6339 18.353 15.0161 18.353Z" stroke="white" strokeWidth="1.66846" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.16602 11.2705L12.8638 14.5907" stroke="white" strokeWidth="1.66846" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.8555 5.43091L7.16602 8.75114" stroke="white" strokeWidth="1.66846" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Stats Overlay Card */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-64 sm:max-w-90 mx-auto bg-[#101828F2] backdrop-blur-md rounded-[14px] border border-[#FFFFFF33] px-6 py-4 grid grid-cols-3 shadow-[0px_25px_50px_-12px_#00000040]">
                        <div className="flex flex-col">
                            <span className="text-white text-[18px] sm:text-[24px] leading-6 sm:leading-8 font-bold font-inter text-nowrap">125K</span>
                            <span className="text-[#FFFFFF99] text-[10px] sm:text-[12px] leading-4 font-semibold font-inter">Followers</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-white text-[18px] sm:text-[24px] leading-6 sm:leading-8 font-bold font-inter ml-1.5">4.8M</span>
                            <span className="text-[#FFFFFF99] text-[10px] sm:text-[12px] leading-4 font-semibold font-inter">Engagement</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#22C55E] text-[18px] sm:text-[24px] leading-6 sm:leading-8 font-bold font-inter flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83334 5.83325H14.1667V14.1666" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.83334 14.1666L14.1667 5.83325" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                245%
                            </span>
                            <span className="text-[#FFFFFF99] text-[10px] sm:text-[12px] leading-4 font-semibold font-inter text-center">Growth</span>
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
                        className="text-[30px] sm:text-[48px] leading-[1.2] font-bold font-inter mb-4 tracking-[-1.8px] text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(180deg, #FF8904 0%, #FB64B6 50%, #C27AFF 100%)" }}
                    >
                        Grow Your
                        <br />
                        Instagram Followers
                    </h2>

                    {/* Description */}
                    <p className="text-[#99A1AF] text-[14px] sm:text-[18px] leading-6 sm:leading-[29.33px] mb-8 font-inter font-normal">
                        Grow your Instagram audience with data-driven strategies and proven tactics. Build an engaged community and expand your reach effortlessly.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full mb-8">
                        {STATS_DATA.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[30px] pb-6 p-5 sm:p-6 flex flex-col items-start gap-3 justify-between transition-all duration-150 ease-out hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:border-[#FFFFFF26] cursor-pointer"
                            >
                                <div
                                    className="w-12 h-12 rounded-[14px] flex items-center justify-center shadow-lg"
                                    style={{ background: stat.iconBg }}
                                >
                                    {stat.icon}
                                </div>
                                <div className='w-full flex items-start flex-col'>
                                    <div className="text-[26px] sm:text-[30px] leading-9 font-semibold text-white font-inter">{stat.value}</div>
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
                        <span className="text-[#99A1AF] text-[14px] text-left leading-5 font-normal font-inter pl-1">
                            Join 50,000+ creators growing their audience
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaGrowth;