import Image from 'next/image'
import React from 'react'

const YourPrivacyIsOurFocus = () => {
    return (
        <div className='w-full pt-38.75 pb-40.25 px-5'>
            <div className='max-w-269.5 mx-auto'>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[30px] sm:text-[48px] leading-9 sm:leading-11 font-responsive-heading font-semibold text-white">
                        Your Privacy is Our Focus
                    </h2>
                    <p className='mt-6 sm:mt-7 text-[#99A1AF] text-[14px] sm:text-[18px] leading-5.5 sm:leading-7 font-normal font-inter max-w-4xl mx-auto'>
                        Being careful about your safety online is smart, scammers constantly look for ways to steal from unsuspecting users. You should also protect your social media accounts, as platforms have detailed rules that can be violated easily by mistake.
                    </p>
                </div>

                <div className='gap-16.5 md:space-y-20 mt-11.5 md:mt-13.75'>
                    <div className='flex items-center justify-between gap-6 flex-col-reverse md:flex-row'>
                        <div className='max-w-102.5'>
                            <h1 className='mb-6 text-[48px] leading-13.75 font-bold font-inter capitalize'>Secure Payments</h1>
                            <p className='max-w-97.5 text-[#99A1AF] text-[18px] leading-7 font-semibold font-inter'>Your online payment details can be vulnerable without proper protection. That’s why we use the latest security protocols and advanced fraud prevention systems to keep your information completely safe.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[16px] leading-6.5 font-normal font-inter'>Every transaction on our platform is securely encrypted, and we operate on advanced, protected servers to ensure your financial information stays completely safe from hackers and cybercriminals.</p>
                        </div>
                        <Image src='/assets/secure-payments.png' alt='image' width={380} height={540} className='rounded-[120px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                    </div>

                    <div className='flex items-center justify-between gap-6 flex-col md:flex-row'>
                        <Image src='/assets/data-protection.png' alt='image' width={380} height={540} className='rounded-[120px]' style={{ boxShadow: "0px 7px 30px 0px #1489E999" }} />
                        <div className='max-w-99.5'>
                            <h1 className='mb-8 text-[48px] leading-13.75 font-bold font-inter capitalize'>Data Protection</h1>
                            <p className='max-w-97.5 text-[#99A1AF] text-[18px] leading-7 font-semibold font-inter'>Your privacy is our top priority. No one will ever know you’ve purchased Instagram followers from Eagle Likes. We strictly protect all client data, including your identity and account details, with advanced encryption and security. We never share customer information—ever.</p>
                            <p className='mt-2 max-w-99 text-[#99A1AF] text-[16px] leading-7 font-normal font-inter'>You can order privately no full name required and we offer privacy-friendly payment options like Bitcoin and cards. We also never ask for your Instagram password, so your account remains fully secure.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default YourPrivacyIsOurFocus