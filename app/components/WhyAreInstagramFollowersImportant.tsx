import Image from 'next/image'
import React from 'react'

const WhyAreInstagramFollowersImportant = () => {
    return (
        <div className='w-full pt-31 pb-40.25 px-5'>
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

                <div className='gap-16.5 md:space-y-20 mt-11.5 md:mt-13.75'>
                    <div className='flex items-center justify-between gap-6 flex-col-reverse md:flex-row'>
                        <div className='max-w-129.25'>
                            <h1 className='mb-8 text-[48px] leading-13.75 font-bold font-inter capitalize'>why buy <br /> Instagram Followers?</h1>
                            <p className='max-w-97.5 text-[#99A1AF] text-[18px] leading-7 font-semibold font-inter'>Buying Instagram followers can help you grow faster and establish instant credibility in a competitive space. A larger follower count makes your profile look trustworthy, attracts real engagement, and increases your chances of being discovered by new audiences.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[16px] leading-7 font-normal font-inter'>Whether you’re a brand, influencer, or creator, more followers can boost visibility, strengthen your reputation, and open doors to new opportunities and collaborations.</p>
                        </div>
                        <Image src='/assets/why-buy-instagram-followers.jpg' alt='image' width={380} height={540} className='rounded-[120px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                    </div>

                    <div className='flex items-center justify-between gap-6 flex-col md:flex-row'>
                        <Image src='/assets/boost-organic-growth.jpg' alt='image' width={380} height={540} className='rounded-[120px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                        <div className='max-w-99.5'>
                            <h1 className='mb-8 text-[48px] leading-13.75 font-bold font-rethink capitalize'>Boost Organic Growth</h1>
                            <p className='max-w-97.5 text-[#99A1AF] text-[18px] leading-7 font-semibold font-inter'>Boost your organic growth on Instagram by buying followers from Eagle Likes. Our high-quality, real followers help increase your visibility and attract genuine engagement. With a stronger follower base, your content reaches more people naturally, enhancing credibility and trust</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[16px] leading-7 font-normal font-inter'>Eagle Likes makes it easy to kickstart your growth and build lasting success on Instagram—safely, quickly, and effectively</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyAreInstagramFollowersImportant