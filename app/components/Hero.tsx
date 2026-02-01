import React from 'react';
import Image from 'next/image';
import ReviewCarousel from './hero/ReviewCarousel';
import { BackgroundGrid, HeroRightImage, LeftShadow, RightShadow, LeftBottomShadow, TopBlueGlow, HeroLeftImage } from './hero/BackgroundElements';
import FollowersPreview from './hero/FollowersPreview';
import { HeroInteraction } from './hero/HeroInteraction';

const Hero = () => {
    return (
        <section className="relative w-full overflow-x-hidden overflow-y-visible flex flex-col items-center justify-start sm:justify-center pt-23.5 md:pt-48 pb-[26.72px] sm:pb-18.75 border-b-[1.5px] border-[#0663CD4D]">
            <div className='md:block hidden bg-linear-to-b from-[rgba(6,99,205,0.20)] from-[76.44%] to-[rgba(3,50,103,0.00)] w-full h-237.5 absolute inset-0 top-0'></div>
            <div className='block md:hidden w-full h-199.25 absolute inset-0 top-0' style={{ background: "linear-gradient(180deg, rgba(6, 99, 205, 0.195) 19.23%, rgba(0, 0, 0, 0.195) 100%)" }}></div>
            <BackgroundGrid />
            <HeroRightImage />
            <HeroLeftImage />
            <LeftShadow />
            <RightShadow />
            <LeftBottomShadow />
            <TopBlueGlow />

            <div className="relative z-10 container mx-auto flex flex-col items-center">

                <div className='px-3 text-center'>
                    {/* Headlines */}
                    <h1 className="text-[26px] sm:text-[54px] leading-8 sm:leading-15 font-rethink font-bold text-center mb-4 mx-auto max-w-2xl overflow-visible">
                        Buy Instagram Followers <br /> with <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#018DFF_48%,#00FFFF_85%)]">Fast Delivery!</span>
                    </h1>

                    <p className="text-[#99a1af] text-center text-sm lg:text-[22px] font-normal leading-6 lg:leading-8.75 sm:px-4 mb-6 sm:mb-16 max-w-[800px]">
                        Quickly get premium Instagram followers safely and easily! Boost your IG influence and engagement instantly! Always great prices and offers!
                    </p>
                </div>

                <HeroInteraction />

                <div className='px-3 w-full text-center flex items-center justify-center flex-col'>
                    {/* Pricing & Action Area placeholder for layout consistency if needed, but HeroInteraction handles it */}

                    <div className="flex flex-col items-center">
                        {/* Social Proof */}
                        <div className='flex items-center gap-2 sm:gap-4 mb-[28px] sm:mb-10'>
                            <div className="flex gap-0.5 sm:gap-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Image key={i} src='/assets/star.svg' alt='star' className="sm:w-6 sm:h-6 w-4 h-4" width={24} height={24} />
                                ))}
                            </div>
                            <div className="flex -space-x-5 sm:-space-x-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="sm:w-14.75 sm:h-14.75 w-8 h-8 rounded-full overflow-hidden relative">
                                        <Image src={`/assets/profile-${i}.png`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <ReviewCarousel />
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="border border-[#C4E5F21A] sm:border-[#FFFFFF4D] bg-[#F8FDFF1A] rounded-[50px] py-[15px] px-3 sm:px-7.5 max-w-3xl text-left mx-auto w-full flex items-center justify-between gap-4 sm:gap-8 mb-[28px] sm:mb-10 sm:h-14.75">
                        {[
                            { text: 'Fast Checkout' },
                            { text: '100% Guarantee' },
                            { text: '24/7 Support' },
                        ].map((badge) => (
                            <div key={badge.text} className="flex items-start sm:items-center gap-2.5">
                                <div>
                                    <svg width="22" height="22" className='sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] mt-1 sm:mt-0' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="11" cy="10.6562" rx="11" ry="10.6562" fill="#0663CD" />
                                        <path d="M16.2643 7.54165C15.95 7.25435 15.4786 7.25435 15.1643 7.54165L9.27143 12.9285L6.83571 10.702C6.52143 10.4147 6.05 10.4147 5.73571 10.702C5.42143 10.9893 5.42143 11.4202 5.73571 11.7075L8.72143 14.4369C8.87857 14.5805 9.03571 14.6523 9.27143 14.6523C9.50714 14.6523 9.66429 14.5805 9.82143 14.4369L16.2643 8.5472C16.5786 8.2599 16.5786 7.82895 16.2643 7.54165Z" fill="white" />
                                    </svg>
                                </div>
                                <span className="text-[12px] sm:text-[16px] leading-4.5 sm:leading-7.5 font-normal text-wrap">{badge.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Followers Preview Section */}
                    <FollowersPreview />

                    {/* Footer Reviews Text */}
                    <div className="flex items-center gap-[11.33px] sm:gap-3.5">
                        <div className="flex gap-1 sm:gap-1.25">
                            {[1, 2, 3, 4, 5].map((i, index) => (
                                <Image
                                    key={i}
                                    src='/assets/star-2.svg'
                                    alt='star'
                                    width={22}
                                    height={22}
                                    className="animate-star-scale w-[17.8px] sm:w-[22px]"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                />
                            ))}
                        </div>
                        <span className='text-white text-[12.95px] sm:text-[16px] leading-4 sm:leading-6 font-normal'>8000+ Verified Customer Reviews</span>
                    </div>
                    <p className='text-[12.95px] sm:text-[16px] leading-4 text-white font-normal mt-4 sm:mt-5'>5 million individual users and counting</p>
                </div>
            </div>
        </section >
    );
};

export default Hero;
