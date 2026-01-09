'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ToggleSwitch from './ui/ToggleSwitch';
import PricingCards, { PlanType } from './PricingCards';

// Types
interface Package {
    count: number;
    discount: number;
    price: number;
    originalPrice: number;
}

// Data
const PACKAGES: Package[] = [
    { count: 100, discount: 18, price: 2.97, originalPrice: 3.62 },
    { count: 250, discount: 40, price: 6.99, originalPrice: 11.65 },
    { count: 500, discount: 52, price: 11.99, originalPrice: 24.99 },
    { count: 1000, discount: 63, price: 18.99, originalPrice: 51.32 },
    { count: 2500, discount: 68, price: 29.99, originalPrice: 93.72 },
    { count: 5000, discount: 70, price: 49.99, originalPrice: 166.63 },
    { count: 10000, discount: 83, price: 89.99, originalPrice: 529.35 },
    { count: 20000, discount: 85, price: 149.99, originalPrice: 999.99 },
];

const REVIEWS = {
    count: 38571,
};

const FOLLOWERS_UPDATES = [
    { name: "started foll", time: "10m" },
    { name: "started full", time: "30m" },
    { name: "started full", time: "15m" },
    { name: "started full", time: "50m" },
    { name: "started full", time: "20m" },
    { name: "started full", time: "55m" },
    { name: "started full", time: "1h" },
    { name: "started full", time: "1h" },
    { name: "started full", time: "2h" },
    { name: "started full", time: "3h" },
    { name: "started full", time: "5h" },
    { name: "started full", time: "6h" },
];

const Hero = () => {
    const [selectedPlanType, setSelectedPlanType] = useState<PlanType>('premium');
    const [selectedPackage, setSelectedPackage] = useState<Package>(PACKAGES[0]);

    const isVip = selectedPlanType === 'vip';

    const handleVipToggle = (checked: boolean) => {
        if (checked) {
            setSelectedPlanType('vip');
        } else {
            setSelectedPlanType('premium');
        }
    };


    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-23.5 md:pt-42.5 pb-18.75 border-b-[1.5px] border-[#0663CD4D]">
            <BackgroundElements />
            <HeroRightImage />
            <LeftShadow />
            <RightShadow />
            <LeftBottomShadow />
            <TopBlueGlow />

            <div className="relative z-10 container mx-auto px-4 max-w-5xl flex flex-col items-center">

                {/* Headlines */}
                <h1 className="text-[26px] sm:text-[54px] leading-8 sm:leading-15 font-rethink font-bold text-center mb-4">
                    Buy TikTok and Instagram Followers Views & Likes and <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#018DFF_48%,#00FFFF_85%)]"> other Interactions!</span>
                </h1>

                <p className="text-center text-sm lg:text-[22px] font-normal leading-6 lg:leading-[35px] sm:px-4 mb-6 sm:mb-10">
                    Enhance your brand's online presence and increase engagement with our social media growth solutions.
                </p>

                {/* VIP Toggle (Preserved aesthetics) */}
                <div className="flex items-center justify-center mb-0 w-full">
                    <div
                        className="relative inline-flex items-center justify-between px-3.5 sm:px-4 w-full max-w-91.75 h-11 sm:h-12 rounded-full cursor-pointer group"
                        style={{
                            background: "linear-gradient(#101828, #101828) padding-box, linear-gradient(90deg, #EE1D52 0%, #F64C50 50%, #9146FF 100%) border-box",
                            border: "1px solid transparent",
                            boxShadow: "0px 0px 8px 0px #00000026"
                        }}
                        onClick={() => handleVipToggle(!isVip)}
                    >
                        <div className='flex items-center gap-3'>
                            <ToggleSwitch checked={isVip} onChange={handleVipToggle} />
                            <span className="text-white font-normal text-[16.82px] sm:text-[18px] leading-8 select-none">
                                I need vip followers
                            </span>
                        </div>
                        <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                            <Image src='/assets/info.svg' alt='info' width={20} height={20} />
                        </div>
                    </div>
                </div>

                <PricingCards selectedPlan={selectedPlanType} onSelect={setSelectedPlanType} />

                {/* Package Selection Grid */}
                <div className="mt-11.25 grid grid-cols-2 sm:grid-cols-4 gap-6.5 mb-11.25 w-full max-w-157.5">
                    {PACKAGES.map((pkg) => (
                        <button
                            key={pkg.count}
                            onClick={() => setSelectedPackage(pkg)}
                            className={`bg-[#FFFFFF1A] flex flex-col cursor-pointer items-center justify-center rounded-[26px] border transition-all duration-200 overflow-hidden group
                                 ${selectedPackage.count === pkg.count
                                    ? 'border-[#FFFFFF33]'
                                    : 'border-[#FFFFFF1A]'
                                }
                            `}
                        >
                            {/* Top part: Count */}
                            <div className={`rounded-[25px] w-full py-[27.22px] text-[35px] leading-8.75 font-semibold font-inter text-center
                                ${selectedPackage.count === pkg.count
                                    ? 'bg-[linear-gradient(90deg,#0663CD_0%,#01AAFF_100%)] text-white'
                                    : 'bg-[#FFFFFF1A] text-white'
                                }
                            `}>
                                {pkg.count}
                            </div>

                            {/* Bottom part: Discount */}
                            <div className="w-full pt-3.75 pb-3.5 text-center text-[23.43px] leading-7.25 font-normal">
                                {pkg.discount}% off
                            </div>
                        </button>
                    ))}
                </div>

                {/* Pricing & Action Area */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-9 mb-11.25">
                        <div className='space-y-2.5 w-68.75'>
                            <div className='flex items-start gap-1.5'>
                                <span className="text-[48px] leading-9 font-semibold font-inter text-white">
                                    ${selectedPackage.price}
                                </span>
                                <span className="text-[20px] leading-5 text-[#B1B0B0] font-rethink line-through font-semibold">
                                    ${selectedPackage.originalPrice}
                                </span>
                            </div>

                            <div className='flex items-center gap-3.75'>
                                <span className='text-[20px] leading-4.5 font-inter font-medium text-white'>you're saving</span>
                                <Image src='/assets/saving.svg' alt='saving' width={30} height={30} />
                                <span className='text-[20px] leading-4.5 font-inter font-semibold text-[#01AAFF]'>
                                    ${(selectedPackage.originalPrice - selectedPackage.price).toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <button
                            className="btn-liquid w-full sm:w-auto px-[89.5px] h-17 cursor-pointer text-white font-bold text-[22px] rounded-[10px]"
                        >
                            <span className="relative z-10">Buy Now</span>
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className='flex items-center gap-4 mb-10'>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Image key={i} src='/assets/star.svg' alt='star' className="" width={24} height={24} />
                            ))}
                        </div>
                        <div className="flex -space-x-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-14.75 h-14.75 rounded-full overflow-hidden relative">
                                    <Image src={`/assets/profile-${i}.png`} alt="User" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center ml-4'>
                            <p className='text-[22px] leading-7.5 font-normal text-white'>
                                {REVIEWS.count.toLocaleString()} people
                            </p>
                            <p className='text-[22px] leading-7.5 text-[#01AAFF] font-inter font-medium'>purchased 2+ times</p>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border border-[#FFFFFF4D] bg-[#F8FDFF1A] rounded-[50px] px-7.5 max-w-3xl mx-auto w-full flex items-center flex-wrap justify-between gap-4 sm:gap-8 mb-10 h-14.75">
                    {[
                        { text: 'Fast Checkout' },
                        { text: '100% Guarantee' },
                        { text: '24/7 Support' },
                    ].map((badge) => (
                        <div key={badge.text} className="flex items-center gap-2.5">
                            <div>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="11" cy="10.6562" rx="11" ry="10.6562" fill="#0663CD" />
                                    <path d="M16.2643 7.54165C15.95 7.25435 15.4786 7.25435 15.1643 7.54165L9.27143 12.9285L6.83571 10.702C6.52143 10.4147 6.05 10.4147 5.73571 10.702C5.42143 10.9893 5.42143 11.4202 5.73571 11.7075L8.72143 14.4369C8.87857 14.5805 9.03571 14.6523 9.27143 14.6523C9.50714 14.6523 9.66429 14.5805 9.82143 14.4369L16.2643 8.5472C16.5786 8.2599 16.5786 7.82895 16.2643 7.54165Z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-[16px] leading-7.5 font-normal">{badge.text}</span>
                        </div>
                    ))}
                </div>

                {/* Followers Preview Section */}
                <div className="w-full max-w-196.5 bg-[#FFFFFF1A] border border-[#FFFFFF26] rounded-3xl overflow-hidden mb-10 flex flex-col" style={{ boxShadow: "0px 0px 4.75px 0px #00000033" }}>
                    <div className="pb-6">
                        <div className="flex items-center justify-between px-4 py-3.25 border-b border-[#FFFFFF33]">
                            <div className="flex items-center gap-3.5">
                                <Image src='/assets/user-icon.svg' alt='user-icon' width={24} height={26} />
                                <span className="text-[24px] leading-6 font-semibold text-white">Followers Preview</span>
                            </div>
                            <div className="bg-[#FFFFFF33] px-3 h-10.75 rounded-[60px] flex items-center gap-1.5">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.13104 0.820138C7.48634 -0.273351 9.03333 -0.273349 9.38863 0.82014L10.5248 4.31706C10.6837 4.80609 11.1395 5.13718 11.6536 5.13718H15.3305C16.4803 5.13718 16.9583 6.60846 16.0282 7.28427L13.0535 9.44549C12.6375 9.74772 12.4634 10.2834 12.6223 10.7725L13.7586 14.2694C14.1139 15.3629 12.8623 16.2722 11.9321 15.5964L8.95747 13.4351C8.54148 13.1329 7.97819 13.1329 7.5622 13.4351L4.58754 15.5964C3.65736 16.2722 2.40582 15.3629 2.76112 14.2694L3.89733 10.7725C4.05623 10.2834 3.88216 9.74772 3.46617 9.44549L0.491512 7.28427C-0.438665 6.60846 0.0393848 5.13718 1.18915 5.13718H4.86603C5.38022 5.13718 5.83593 4.80608 5.99482 4.31706L7.13104 0.820138Z" fill="#01AAFF" />
                                </svg>
                                <span className="text-[16.62px] leading-9 font-semibold text-[#01AAFF]">Real Followers</span>
                            </div>
                        </div>
                        {/* Scrollable List */}
                        <div className="mx-4 pt-5.75 grid grid-rows-3 grid-flow-col gap-x-[23.74px] gap-y-3.25 custom-scroll overflow-x-auto pb-6">
                            {FOLLOWERS_UPDATES.map((update, idx) => (
                                <div key={idx} className="text-nowrap flex items-center gap-3 pl-[7.12px] pr-[14.24px] rounded-[17px] bg-[#EDEDED0D] border border-[#FFFFFF1A] shrink-0 w-auto h-14.25">
                                    <div className="w-11 h-11 rounded-full bg-gray-700 overflow-hidden relative shrink-0">
                                        <Image src={`/assets/profile-1.png`} alt="User" fill className="object-cover" />
                                    </div>
                                    <div className="flex gap-3">
                                        <p className='text-[14.24px] leading-6 font-normal'>
                                            <span className="text-white blur-xs select-none">{update.name}</span>
                                        </p>
                                        <p className="text-[16.62px] leading-6 font-normal text-white">started following you. <span className='ml-2.5'>{update.time}</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Reviews Text */}
                <div className="flex items-center gap-3.5">
                    <div className="flex gap-1.25">
                        {[1, 2, 3, 4, 5].map(i => <Image key={i} src='/assets/star-2.svg' alt='star' width={22} height={22} />)}
                    </div>
                    <span className='text-white text-[16px] leading-6 font-normal'>8000+ Verified Customer Reviews</span>
                </div>
                <p className='text-[16px] leading-4 text-white font-normal mt-5'>5 million individual users and counting</p>
            </div>
        </section >
    );
};

export default Hero;

// Sub-components
const BackgroundElements = () => (
    <div className="absolute inset-0 z-0 w-full mx-auto max-w-190.5 mt-12.75 md:mt-24.5 h-91.25 pointer-events-none">
        <Image src="/assets/hero-lines.png" alt="Background Grid" width={762} height={365} className='md:block hidden' />
        <Image src="/assets/mobile-view-line.png" alt="Background Grid" width={374} height={221} className='md:hidden block object-contain mx-auto' />
    </div>
);

const HeroRightImage = () => (
    <Image src="/assets/hero-right.png" alt="Background Grid" width={213} height={447} className='absolute right-0 top-12 md:block hidden' />
);

const LeftShadow = () => (
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
);

const RightShadow = () => (
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
);

const LeftBottomShadow = () => (
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

const TopBlueGlow = () => (
    <div className="w-full md:w-fit absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <svg width="979" height="490" viewBox="0 0 979 490" className='md:block hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="375" height="346" viewBox="0 0 375 346" className='block md:hidden w-full' fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_1181)">
                <ellipse cx="179" cy="23" rx="155" ry="123" fill="#0067DB" />
            </g>
            <defs>
                <filter id="filter0_f_1_1181" x="-176" y="-300" width="710" height="646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_1181" />
                </filter>
            </defs>
        </svg>
    </div>
);


