import Image from 'next/image'
import React from 'react'
import LeftShadow from './ui/LeftShadow'
import RightShadow from './ui/RightShadow'

const WhyAreInstagramFollowersImportant = () => {
    return (
        <div className='w-full pt-[43px] lg:pt-31 pb-20 md:pb-40.25 px-3.5 relative'>
            <div className='max-w-269.5 mx-auto'>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[30px] sm:text-[48px] leading-9 sm:leading-11 font-responsive-heading font-semibold text-white">
                        Why Are {" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #F9CE34 0%, #EE2A7B 50%, #6228D7 100%)",
                            }}
                        >
                            Instagram Followers{" "}
                        </span>
                        Important?
                    </h2>
                    <p className='mt-6 sm:mt-7.5 text-[#99A1AF] text-[14px] sm:text-[18px] leading-5.5 sm:leading-7 font-normal font-inter max-w-4xl mx-auto'>The followers are important because they represent your audience, your credibility, and your influence. A larger, more engaged following equates to reaching more people, building trust, and creating real opportunities for growth and brand success.</p>
                </div>

                <div className='space-y-16.5 md:space-y-20 mt-11.5 md:mt-13.75'>
                    <div className='flex items-center justify-between gap-9 md:gap-6 flex-col-reverse md:flex-row'>
                        <div className='max-w-129.25 text-center md:text-left'>
                            <h2 className='mb-[25px] sm:mb-8 text-[30px] sm:text-[48px] leading-[30px] sm:leading-13.75 font-bold font-inter capitalize'>why buy <br /> Instagram Followers?</h2>
                            <p className='max-w-97.5 text-[#99A1AF] text-[15px] sm:text-[18px] leading-5 sm:leading-7 font-semibold font-inter'>Buying Instagram followers can help you grow faster and establish instant credibility in a competitive space. A larger follower count makes your profile look trustworthy, attracts real engagement, and increases your chances of being discovered by new audiences.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-7 font-normal font-inter'>Whether you’re a brand, influencer, or creator, more followers can boost visibility, strengthen your reputation, and open doors to new opportunities and collaborations.</p>
                        </div>
                        <Image src='/assets/why-buy-instagram-followers.jpg' alt='image' width={380} height={540} className='rounded-[80px] sm:rounded-[120px] w-[300px] md:w-[380px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                    </div>

                    <div className='flex items-center justify-between gap-9 md:gap-6 flex-col md:flex-row'>
                        <Image src='/assets/boost-organic-growth.jpg' alt='image' width={380} height={540} className='rounded-[80px] sm:rounded-[120px] w-[300px] md:w-[380px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                        <div className='max-w-99.5 text-center md:text-left'>
                            <h2 className='mb-[25px] sm:mb-8 text-[30px] sm:text-[48px] leading-[30px] sm:leading-13.75 font-bold font-rethink capitalize'>Boost Organic Growth</h2>
                            <p className='max-w-97.5 text-[#99A1AF] text-[15px] sm:text-[18px] leading-5 sm:leading-7 font-semibold font-inter'>Boost your organic growth on Instagram by buying followers from Eagle Likes. Our high-quality, real followers help increase your visibility and attract genuine engagement. With a stronger follower base, your content reaches more people naturally, enhancing credibility and trust</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-7 font-normal font-inter'>Eagle Likes makes it easy to kickstart your growth and build lasting success on Instagram—safely, quickly, and effectively</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-155 md:-bottom-120 left-0'>
                <LeftShadow/>
            </div>
            <div className='absolute -bottom-10 right-0 md:hidden block'>
                <RightShadow/>
            </div>
            <div className='absolute top-30 left-0 md:hidden block'>
                <LeftShadow/>
            </div>
        </div>
    )
}

export default WhyAreInstagramFollowersImportant