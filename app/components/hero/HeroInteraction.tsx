'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ToggleSwitch from '../ui/ToggleSwitch';
import PricingCards, { PlanType } from '../PricingCards';
import { Package } from './types';
import { PACKAGES } from './data';
import { getPriceForPlan } from './utils';
import PackageGrid from './PackageGrid';
import DifferenceTooltip from '../ui/DifferenceTooltip';

export const HeroInteraction = () => {
    const [selectedPlanType, setSelectedPlanType] = useState<PlanType>('premium');

    // Separate selected packages for each plan type
    const [selectedPackages, setSelectedPackages] = useState<Record<PlanType, Package>>({
        premium: PACKAGES[3],
        active: PACKAGES[3],
        vip: PACKAGES[3],
    });

    const selectedPackage = selectedPackages[selectedPlanType];

    const handlePackageSelect = (pkg: Package) => {
        setSelectedPackages(prev => ({
            ...prev,
            [selectedPlanType]: pkg
        }));
    };

    const isVip = selectedPlanType === 'vip';

    const handlePlanSelect = (type: PlanType) => {
        setSelectedPlanType(type);
        setSelectedPackages(prev => ({
            ...prev,
            [type]: PACKAGES[3]
        }));
    };

    const handleVipToggle = (checked: boolean) => {
        const newPlan = checked ? 'vip' : 'premium';
        setSelectedPlanType(newPlan);
        setSelectedPackages(prev => ({
            ...prev,
            [newPlan]: PACKAGES[3]
        }));
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* VIP Toggle */}
            <div
                className={`animate-vip-border vip-toggle-style ${isVip ? 'is-vip' : ''} relative inline-flex items-center justify-center px-3.5 sm:px-4 w-full max-w-[360px] sm:max-w-91.75 h-11 sm:h-12 rounded-full cursor-pointer group mx-auto`}
                onClick={() => handleVipToggle(!isVip)}
            >
                <div className='flex items-center justify-between gap-3 flex-1'>
                    <div className='flex items-center gap-3'>
                        <ToggleSwitch checked={isVip} onChange={handleVipToggle} />
                        <span className="text-white font-normal text-[17px] sm:text-[18px] leading-8 select-none whitespace-nowrap">
                            I need vip followers
                        </span>
                    </div>
                    <DifferenceTooltip
                        title="VIP Followers"
                        content="Fit for high-engaged Instagrammers! VIP treatment followers are our highest quality packages, highly active, with real engagement, interactive stories, dynamic carousels, and have 5-10x more followers than following."
                        color="#9146FF"
                    >
                        <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                            <Image src='/assets/info.svg' alt='info' width={20} height={20} />
                        </div>
                    </DifferenceTooltip>
                </div>
            </div>

            <PricingCards selectedPlan={selectedPlanType} onSelect={handlePlanSelect} />

            <div className='px-3 w-full text-center flex items-center justify-center flex-col'>
                {/* Package Selection Grid */}
                <PackageGrid
                    selectedPlanType={selectedPlanType}
                    selectedPackage={selectedPackage}
                    onPackageSelect={handlePackageSelect}
                />

                {/* Pricing & Action Area */}
                <div className="flex flex-col items-center">
                    <div className="w-full sm:w-auto flex items-center sm:flex-row flex-col gap-2.5 sm:gap-8 mb-[28px] sm:mb-11.25">
                        <div className='space-y-2.5 w-full flex items-center sm:items-start flex-col sm:w-68.75'>
                            <div className='flex items-start gap-1.5'>
                                <span className="text-[35px] sm:text-[46px] leading-9 font-semibold font-inter text-white">
                                    ${getPriceForPlan(selectedPackage.price, selectedPlanType).toFixed(2)}
                                </span>
                                <span className="text-[15px] sm:text-[20px] leading-6 sm:leading-5 text-[#B1B0B0] font-rethink line-through font-semibold">
                                    ${getPriceForPlan(selectedPackage.originalPrice, selectedPlanType).toFixed(2)}
                                </span>
                            </div>

                            <div className='flex items-center gap-3.75'>
                                <span className='text-[14px] sm:text-[18px] leading-4.5 font-inter font-medium text-white'>you're saving</span>
                                <Image src='/assets/saving.svg' alt='saving' width={30} height={30} />
                                <span className='text-[14px] sm:text-[20px] leading-4.5 font-inter font-semibold text-[#01AAFF]'>
                                    ${(getPriceForPlan(selectedPackage.originalPrice, selectedPlanType) - getPriceForPlan(selectedPackage.price, selectedPlanType)).toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <button
                            className="group relative w-full sm:w-auto px-[89.5px] py-[13.5px] sm:py-[19px] cursor-pointer text-white font-bold text-[16px] sm:text-[22px] leading-[22px] sm:leading-[30px] rounded-[10px] overflow-hidden transition-all duration-75 ease-in-out"
                            style={{
                                background: 'linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)',
                                boxShadow: "0px 0px 8px 0px #0663CD"
                            }}
                        >
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-[#01AAFF] to-[#3EA4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></span>
                            <span className="relative z-10">Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
