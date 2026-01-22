import Image from 'next/image'
import React from 'react'
import RightShadow from './ui/RightShadow'
import LeftShadow from './ui/LeftShadow'

const YourPrivacyIsOurFocus = () => {
    return (
        <div className='w-full pt-20 lg:pt-38.75 pb-[50px] md:pb-40.25 px-4 relative'>
            <div className='max-w-269.5 mx-auto relative z-20'>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[30px] sm:text-[48px] leading-8 sm:leading-11 font-responsive-heading font-semibold text-white capitalize">
                        Your Privacy <br className='sm:hidden block' /> is Our Focus
                    </h2>
                    <p className='mt-6 sm:mt-7 text-[#99A1AF] text-[14px] sm:text-[18px] leading-5.5 sm:leading-7 font-normal font-inter max-w-4xl mx-auto'>
                        Being careful about your safety online is smart, scammers constantly look for ways to steal from unsuspecting users. You should also protect your social media accounts, as platforms have detailed rules that can be violated easily by mistake.
                    </p>
                </div>

                <div className='space-y-[52px] md:space-y-20 mt-11.5 md:mt-13.75'>
                    <div className='flex items-center justify-between gap-9 md:gap-6 flex-col-reverse md:flex-row'>
                        <div className='max-w-102.5 text-center md:text-left'>
                            <h2 className='mb-[25px] sm:mb-6 text-[30px] sm:text-[48px] leading-[30px] sm:leading-13.75 font-bold font-inter capitalize'>Secure Payments</h2>
                            <p className='max-w-97.5 text-[#99A1AF] text-[15px] sm:text-[18px] leading-5 sm:leading-7 font-semibold font-inter'>Your online payment details can be vulnerable without proper protection. That’s why we use the latest security protocols and advanced fraud prevention systems to keep your information completely safe.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-6.5 font-normal font-inter'>Every transaction on our platform is securely encrypted, and we operate on advanced, protected servers to ensure your financial information stays completely safe from hackers and cybercriminals.</p>
                        </div>
                        <Image src='/assets/secure-payments.png' alt='image' width={380} height={540} className='rounded-[80px] sm:rounded-[120px] w-[300px] md:w-[380px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                    </div>

                    <div className='flex items-center justify-between gap-9 md:gap-6 flex-col md:flex-row'>
                        <Image src='/assets/data-protection.png' alt='image' width={380} height={540} className='rounded-[80px] sm:rounded-[120px] w-[300px] md:w-[380px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                        <div className='max-w-99.5 text-center md:text-left'>
                            <h2 className='mb-[25px] sm:mb-8 text-[30px] sm:text-[48px] leading-[30px] sm:leading-13.75 font-bold font-inter capitalize text-white'>Data Protection</h2>
                            <p className='max-w-97.5 text-[#99A1AF] text-[15px] sm:text-[18px] leading-5 sm:leading-7 font-semibold font-inter'>Your privacy is our top priority. No one will ever know you’ve purchased Instagram followers from Eagle Likes. We strictly protect all client data, including your identity and account details, with advanced encryption and security. We never share customer information—ever.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-7 font-normal font-inter'>You can order privately no full name required and we offer privacy-friendly payment options like Bitcoin and cards. We also never ask for your Instagram password, so your account remains fully secure.</p>
                        </div>
                    </div>
                </div>

                {/* Get Thousands of Active Followers Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px] md:gap-16 lg:gap-8 mt-[65px] md:mt-20 lg:mt-50.5">
                    {/* Left Side: Content & Cards */}
                    <div className="flex-1 max-w-125 mx-auto text-center lg:text-left">
                        {/* Trusted Badge */}
                        <div className="inline-flex items-center gap-3 px-4.25 py-2 rounded-full bg-[#AD46FF33] border border-[#AD46FF4D] mb-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.25H16.5V9.75" stroke="#C27AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 5.25L10.125 11.625L6.375 7.875L1.5 12.75" stroke="#C27AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[#DAB2FF] text-[16px] leading-6 font-normal font-arial-custom">Trusted by 100K+ creators</span>
                        </div>

                        <h2 className="text-[30px] sm:text-[48px] leading-10 sm:leading-15 font-inter font-bold text-white mb-4 md:mb-5">
                            Get Thousands of <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ background: 'linear-gradient(90deg, #C27AFF 0%, #FB64B6 50%, #51A2FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                Active Followers
                            </span>
                        </h2>

                        <p className="text-[#99A1AF] text-[16px] sm:text-[18px] leading-6 sm:leading-[27.9px] font-normal mb-[27px] sm:mb-4.5 font-inter">
                            Grow your social media presence organically with real, engaged followers. Watch your influence expand across all platforms.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            {/* Real Card */}
                            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[16px] sm:rounded-4xl p-4 sm:p-4.25 flex flex-col items-center text-center">
                                <Image src='/assets/star-3.svg' alt='star' width={20} height={20} />
                                <h3 className="text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-9 font-normal my-2.5 sm:my-2 font-arial-custom">Real</h3>
                                <p className="text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-normal font-arial-custom">Organic Growth</p>
                            </div>

                            {/* Fast Card */}
                            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[16px] sm:rounded-4xl p-4.25 flex flex-col items-center text-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 11.6663C3.17564 11.6668 3.02103 11.6226 2.88746 11.5387C2.7539 11.4549 2.64686 11.3349 2.57879 11.1926C2.51072 11.0504 2.48441 10.8918 2.50292 10.7351C2.52142 10.5785 2.58398 10.4304 2.68333 10.3079L10.9333 1.8079C10.9952 1.73647 11.0795 1.6882 11.1725 1.67101C11.2654 1.65383 11.3614 1.66875 11.4448 1.71332C11.5281 1.7579 11.5938 1.82948 11.6311 1.91633C11.6684 2.00317 11.6751 2.10011 11.65 2.19124L10.05 7.2079C10.0028 7.33417 9.98698 7.47 10.0038 7.60374C10.0207 7.73748 10.0697 7.86514 10.1467 7.97576C10.2238 8.08638 10.3265 8.17667 10.4461 8.23887C10.5656 8.30108 10.6985 8.33334 10.8333 8.3329H16.6667C16.8244 8.33237 16.979 8.37658 17.1125 8.46042C17.2461 8.54426 17.3531 8.66427 17.4212 8.80652C17.4893 8.94877 17.5156 9.10741 17.4971 9.26402C17.4786 9.42063 17.416 9.56877 17.3167 9.69124L9.06667 18.1913C9.00478 18.2627 8.92045 18.311 8.82752 18.3282C8.73458 18.3453 8.63856 18.3304 8.55523 18.2858C8.47189 18.2413 8.40618 18.1697 8.36889 18.0828C8.3316 17.996 8.32494 17.8991 8.35 17.8079L9.95 12.7913C9.99718 12.665 10.013 12.5292 9.99617 12.3954C9.97932 12.2617 9.93028 12.134 9.85326 12.0234C9.77623 11.9128 9.67352 11.8225 9.55394 11.7603C9.43435 11.6981 9.30146 11.6658 9.16667 11.6663H3.33333Z" stroke="#51A2FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-9 font-normal my-2.5 sm:my-2 font-arial-custom">Fast</h3>
                                <p className="text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-normal font-arial-custom">Instant Results</p>
                            </div>

                            {/* Safe Card */}
                            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-[16px] sm:rounded-4xl p-4.25 flex flex-col items-center text-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66669 7.91711C1.6667 6.98977 1.94801 6.08426 2.47346 5.32016C2.99891 4.55606 3.74378 3.96932 4.60969 3.63744C5.4756 3.30556 6.42182 3.24414 7.32336 3.46131C8.22491 3.67848 9.03937 4.16401 9.65919 4.85377C9.70284 4.90045 9.75562 4.93766 9.81425 4.96311C9.87288 4.98855 9.93611 5.00168 10 5.00168C10.0639 5.00168 10.1271 4.98855 10.1858 4.96311C10.2444 4.93766 10.2972 4.90045 10.3408 4.85377C10.9587 4.15952 11.7734 3.66991 12.6764 3.45011C13.5794 3.2303 14.5279 3.29073 15.3957 3.62334C16.2635 3.95596 17.0095 4.54498 17.5343 5.31202C18.059 6.07907 18.3378 6.98774 18.3333 7.91711C18.3333 9.82544 17.0833 11.2504 15.8333 12.5004L11.2567 16.9279C11.1014 17.1062 10.9099 17.2495 10.695 17.3482C10.4801 17.4468 10.2467 17.4986 10.0102 17.5001C9.7738 17.5016 9.53973 17.4528 9.32359 17.3568C9.10746 17.2609 8.91421 17.1201 8.75669 16.9437L4.16669 12.5004C2.91669 11.2504 1.66669 9.83377 1.66669 7.91711Z" fill="#FB64B6" stroke="#FB64B6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-9 font-normal my-2.5 sm:my-2 font-arial-custom">Safe</h3>
                                <p className="text-[#99A1AF] text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-normal font-arial-custom">100% Secure</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Background Image */}
                    <div className="lg:w-115 h-full rounded-[40px] overflow-hidden">
                        <Image
                            src="/assets/get-thousands-of.svg"
                            alt="Creator using laptop"
                            width={460}
                            height={480}
                        />
                    </div>
                </div>
            </div>
            <div className='absolute top-180 md:-top-50 right-0'>
                <RightShadow />
            </div>
            <div className='absolute bottom-84 right-0'>
                <RightShadow />
            </div>
            <div className='absolute top-360 md:top-84 left-0'>
                <LeftShadow/>
            </div>
            <div className='absolute -bottom-50 md:-bottom-110 left-0'>
                <LeftShadow/>
            </div>
        </div>
    )
}

export default YourPrivacyIsOurFocus