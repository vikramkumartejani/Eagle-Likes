'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DifferenceTooltip from './ui/DifferenceTooltip';


export type PlanType = 'premium' | 'active' | 'vip';

export interface PlanFeature {
    text: string | React.ReactNode;
    subtext?: string | React.ReactNode;
    highlight?: boolean;
    tooltipTitle?: string;
    tooltipContent?: React.ReactNode;
}

export interface PlanConfig {
    type: PlanType;
    title: string;
    color: string;
    borderColor: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    mobileIconWidth: number;
    mobileIconHeight: number;
    gradient?: string;
    features: PlanFeature[];
}

const COMBINED_TOOLTIP_CONTENT = (
    <div className="flex flex-col gap-4">
        <div>
            <h5 className="font-bold text-[#1A1A1A] mb-1">Premium Followers</h5>
            <p className="text-[#5A5A5A]">These are Followers with profile pictures but no further uploads on their account. Auto-refill is enabled within the warranty.</p>
        </div>
        <div>
            <h5 className="font-bold text-[#1A1A1A] mb-1">Active Followers</h5>
            <p className="text-[#5A5A5A]">New Active followers are for those who are serious about their instagram growth. These are guaranteed with very little to NO drop!</p>
        </div>
    </div>
);

const PLAN_CONFIGS: PlanConfig[] = [
    {
        type: 'premium',
        title: 'Premium Followers',
        color: '#01AAFF',
        borderColor: '#01AAFF',
        icon: '/assets/premium-followers.svg',
        iconWidth: 49,
        iconHeight: 54,
        mobileIconWidth: 40,
        mobileIconHeight: 43,
        gradient: 'linear-gradient(90deg, #0663CD 0%, #01AAFF 100%)',
        features: [
            {
                text: <><span className="font-semibold">Premium followers</span></>,
                subtext: "What's the difference?",
                tooltipTitle: "",
                tooltipContent: COMBINED_TOOLTIP_CONTENT
            },
            { text: <><span className="font-semibold sm:font-bold">Super Fast</span> Delivery</> },
            { text: <><span className="font-semibold sm:font-bold">No password</span> needed</> },
            { text: <><span className="font-semibold sm:font-bold">24-hour</span> support</> },
        ],
    },
    {
        type: 'active',
        title: 'Active Followers',
        color: '#D71E77',
        borderColor: '#D71E77',
        icon: '/assets/active-followers.svg',
        iconWidth: 41,
        iconHeight: 54,
        mobileIconWidth: 40,
        mobileIconHeight: 50,
        gradient: 'linear-gradient(90deg, #D71E77 0%, #D71E77 100%)',
        features: [
            {
                text: <><span className="font-semibold text-white">Real Active followers</span></>,
                subtext: "What's the difference?",
                highlight: true,
                tooltipTitle: "",
                tooltipContent: COMBINED_TOOLTIP_CONTENT
            },
            { text: <><span className="font-semibold sm:font-bold">Trusted</span> Delivery</> },
            { text: <><span className="font-semibold sm:font-bold">30 day</span> refills</> },
            { text: <><span className="font-semibold sm:font-bold">No password</span> needed</> },
            { text: <><span className="font-semibold sm:font-bold">24-hour</span> support</> },
        ],
    },
    {
        type: 'vip',
        title: 'VIP Followers',
        color: '#02A83D',
        borderColor: '#02A83D',
        icon: '/assets/vip-followers.svg',
        iconWidth: 41,
        iconHeight: 54,
        mobileIconWidth: 40,
        mobileIconHeight: 50,
        gradient: 'linear-gradient(90deg, #02A83D 0%, #00D66E 100%)',
        features: [
            { text: <><span className="font-semibold">All features</span> of Active, plus:</>, highlight: true },
            { text: <><span className="font-semibold sm:font-bold">Real followers</span> from Targeted users</> },
            { text: <><span className="font-semibold sm:font-bold">Hit the explore page</span> and grow your engagement</> },
            { text: <><span className="font-semibold sm:font-bold">Instant Delivery</span> Guaranteed</> },
            { text: <><span className="font-semibold sm:font-bold">VIP support</span> with lifetime access</> },
        ],
    },
];


interface PricingCardProps {
    plan: PlanConfig;
    isSelected: boolean;
    onSelect: (type: PlanType) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isSelected, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(plan.type)}
            className={`relative rounded-[15px] sm:rounded-[20px] cursor-pointer transition-all duration-300 overflow-visible group flex min-w-40 flex-col h-full bg-[#FFFFFF1A] snap-center border z-10
                ${isSelected ? '' : 'hover:border-white/10'}
            `}
            style={{
                borderColor: isSelected ? plan.borderColor : '#FFFFFF80',
                boxShadow: isSelected ? `inset 0 0 0 2px ${plan.borderColor}` : 'none'
            }}
        >
            <div
                className="relative z-10 flex justify-between items-start h-13.75 sm:h-18 pt-2.5 sm:pt-4.5 px-3 pb-2.25 sm:pb-3.5 rounded-t-[15px] sm:rounded-t-[19px]"
                style={{ background: plan.color }}
            >
                <div className="text-white relative z-10">
                    <h3 className="text-[14px] sm:text-[18px] leading-5 font-inter font-semibold wrap-break-word text-left">
                        {plan.title.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </h3>
                </div>
                {/* Icon */}
                <div className="absolute bottom-0 right-3 sm:right-4">
                    <Image
                        src={plan.icon}
                        alt={plan.title}
                        width={plan.iconWidth}
                        height={plan.iconHeight}
                        className="object-contain w-(--mobile-w) h-(--mobile-h) sm:w-auto sm:h-auto"
                        style={{
                            '--mobile-w': `${plan.mobileIconWidth}px`,
                            '--mobile-h': `${plan.mobileIconHeight}px`,
                        } as React.CSSProperties}
                    />
                </div>
            </div>

            <div className="relative z-10 grow pl-3 pr-4 sm:pr-4.5 pt-3.5 sm:pt-4.75 pb-6.25 overflow-visible">
                <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-3">
                            <div className="mt-1 shrink-0">
                                <svg className='w-3.5 sm:w-4.5 h-2.25 sm:h-3.25' viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6143 0.382353C17.1 -0.127451 16.3286 -0.127451 15.8143 0.382353L6.17143 9.94118L2.18571 5.9902C1.67143 5.48039 0.9 5.48039 0.385714 5.9902C-0.128571 6.5 -0.128571 7.26471 0.385714 7.77451L5.27143 12.6176C5.52857 12.8725 5.78571 13 6.17143 13C6.55714 13 6.81428 12.8725 7.07143 12.6176L17.6143 2.16667C18.1286 1.65686 18.1286 0.892157 17.6143 0.382353Z" fill={plan.color} />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p
                                    className="text-[10.59px] sm:text-[14px] leading-3.5 sm:leading-4.5"
                                    style={{ color: feature.highlight ? plan.color : '#fff' }}
                                >
                                    {feature.text}
                                </p>
                                {feature.subtext && feature.tooltipContent && (
                                    <DifferenceTooltip
                                        title={feature.tooltipTitle}
                                        content={feature.tooltipContent}
                                        color={plan.color}
                                    >
                                        <p
                                            className="text-[10.59px] sm:text-[14px] leading-3.5 sm:leading-4.5 mt-0.5 font-normal cursor-pointer hover:underline"
                                            style={{ color: plan.color }}
                                        >
                                            {feature.subtext}
                                        </p>
                                    </DifferenceTooltip>
                                )}
                                {feature.subtext && !feature.tooltipContent && (
                                    <p
                                        className="text-[10.59px] sm:text-[14px] leading-3.5 sm:leading-4.5 mt-0.5 font-normal"
                                        style={{ color: plan.color }}
                                    >
                                        {feature.subtext}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Selection Circle */}
            <div className="mt-8 flex justify-end absolute bottom-3.25 sm:bottom-4 right-[13.62px] sm:right-4.5 z-10">
                <div
                    className={`w-6 sm:w-8 h-6 sm:h-7.75 rounded-full flex items-center justify-center transition-all duration-300
                        ${isSelected ? 'border-0 border-transparent' : 'border-2 border-[#505050] bg-transparent'}
                    `}
                    style={{
                        background: isSelected && plan.gradient ? plan.gradient : 'transparent'
                    }}
                >
                    {isSelected && (
                        <svg className='w-3 h-2 sm:w-4 sm:h-2.75' viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6571 0.313419C15.2 -0.104473 14.5143 -0.104473 14.0571 0.313419L5.48571 8.1489L1.94286 4.91023C1.48571 4.49234 0.8 4.49234 0.342857 4.91023C-0.114286 5.32813 -0.114286 5.95496 0.342857 6.37286L4.68571 10.3428C4.91429 10.5518 5.14286 10.6562 5.48571 10.6562C5.82857 10.6562 6.05714 10.5518 6.28571 10.3428L15.6571 1.77604C16.1143 1.35815 16.1143 0.731311 15.6571 0.313419Z" fill="white" />
                        </svg>
                    )}
                </div>
            </div>
        </div >
    );
};


interface PricingCardsProps {
    selectedPlan: PlanType;
    onSelect: (plan: PlanType) => void;
}

const PricingCards: React.FC<PricingCardsProps> = ({ selectedPlan, onSelect }) => {
    return (
        <div className="grid grid-flow-col auto-cols-[minmax(160px,1fr)] lg:auto-cols-auto lg:grid-cols-3 gap-3.75 sm:gap-5 w-full max-w-169.5 mx-auto mt-[25px] overflow-x-auto snap-x scrollbar-hide">
            {PLAN_CONFIGS.map((plan) => (
                <PricingCard
                    key={plan.type}
                    plan={plan}
                    isSelected={selectedPlan === plan.type}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default PricingCards;
