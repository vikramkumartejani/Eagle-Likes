'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ToggleSwitch from './ui/ToggleSwitch';
import PricingCards, { PlanType } from './PricingCards';
import { Package } from './hero/types';
import { PACKAGES } from './hero/data';
import { getPriceForPlan } from './hero/utils';
import ReviewCarousel from './hero/ReviewCarousel';
import { BackgroundGrid, HeroRightImage, LeftShadow, RightShadow, LeftBottomShadow, TopBlueGlow } from './hero/BackgroundElements';
import PackageGrid from './hero/PackageGrid';
import FollowersPreview from './hero/FollowersPreview';

const Hero = () => {
    const [selectedPlanType, setSelectedPlanType] = useState<PlanType>('premium');

    // Separate selected packages for each plan type
    const [selectedPackages, setSelectedPackages] = useState<Record<PlanType, Package>>({
        premium: PACKAGES[0],
        active: PACKAGES[0],
        vip: PACKAGES[0],
    });

    // Get current selected package based on plan type
    const selectedPackage = selectedPackages[selectedPlanType];

    // Update selected package for current plan type
    const handlePackageSelect = (pkg: Package) => {
        setSelectedPackages(prev => ({
            ...prev,
            [selectedPlanType]: pkg
        }));
    };

    const isVip = selectedPlanType === 'vip';

    const handleVipToggle = (checked: boolean) => {
        if (checked) {
            setSelectedPlanType('vip');
        } else {
            setSelectedPlanType('premium');
        }
    };


    return (
        <section className=" relative w-full overflow-hidden flex flex-col items-center justify-center pt-23.5 md:pt-42.5 pb-18.75 border-b-[1.5px] border-[#0663CD4D]">
            <div className='bg-linear-to-b from-[rgba(6,99,205,0.20)] from-[76.44%] to-[rgba(3,50,103,0.00)] w-full h-[950px] absolute inset-0 top-0'></div>
            <BackgroundGrid />
            <HeroRightImage />
            <LeftShadow />
            <RightShadow />
            <LeftBottomShadow />
            <TopBlueGlow />

            <div className="relative z-10 container mx-auto px-4 max-w-5xl flex flex-col items-center">

                {/* Headlines */}
                <h1 className="text-[26px] sm:text-[54px] leading-8 sm:leading-15 font-rethink font-bold text-center mb-4">
                    Buy TikTok and Instagram Followers Views &amp; Likes and <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#018DFF_48%,#00FFFF_85%)]">other Interactions!</span>
                </h1>

                <p className="text-[#99a1af] text-center text-sm lg:text-[22px] font-normal leading-6 lg:leading-[35px] sm:px-4 mb-6 sm:mb-16">
                    Enhance your brand's online presence and increase engagement with our social media growth solutions.
                </p>

                {/* VIP Toggle (Preserved aesthetics) */}
                <div className="flex items-center justify-center mb-0 w-full">
                    <div
                        className={`${!isVip ? 'animate-vip-border' : ''} relative inline-flex items-center justify-between px-3.5 sm:px-4 w-full max-w-91.75 h-11 sm:h-12 rounded-full cursor-pointer group`}
                        style={{
                            background: "linear-gradient(#101828, #101828) padding-box, " +
                                (!isVip
                                    ? "conic-gradient(from var(--border-angle), #EE1D52, #9146FF, #01AAFF, #EE1D52, #9146FF, #01AAFF) border-box"
                                    : "linear-gradient(90deg, #EE1D52 0%, #F64C50 50%, #9146FF 100%) border-box"),
                            border: "1px solid transparent",
                            boxShadow: !isVip ? "0px 0px 12px 0px rgba(145, 70, 255, 0.3)" : "0px 0px 8px 0px #00000026"
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
                <PackageGrid
                    selectedPlanType={selectedPlanType}
                    selectedPackage={selectedPackage}
                    onPackageSelect={handlePackageSelect}
                />

                {/* Pricing & Action Area */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-9 mb-11.25">
                        <div className='space-y-2.5 w-68.75'>
                            <div className='flex items-start gap-1.5'>
                                <span className="text-[46px] leading-9 font-semibold font-inter text-white">
                                    ${getPriceForPlan(selectedPackage.price, selectedPlanType).toFixed(2)}
                                </span>
                                <span className="text-[20px] leading-5 text-[#B1B0B0] font-rethink line-through font-semibold">
                                    ${getPriceForPlan(selectedPackage.originalPrice, selectedPlanType).toFixed(2)}
                                </span>
                            </div>

                            <div className='flex items-center gap-3.75'>
                                <span className='text-[18px] leading-4.5 font-inter font-medium text-white'>you're saving</span>
                                <Image src='/assets/saving.svg' alt='saving' width={30} height={30} />
                                <span className='text-[20px] leading-4.5 font-inter font-semibold text-[#01AAFF]'>
                                    ${(getPriceForPlan(selectedPackage.originalPrice, selectedPlanType) - getPriceForPlan(selectedPackage.price, selectedPlanType)).toFixed(2)}
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
                        <ReviewCarousel />
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
                <FollowersPreview />

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
