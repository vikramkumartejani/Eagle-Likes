'use client';
import React, { useState } from 'react';

const FAQS = [
    {
        question: "Why Should I Buy Instagram Followers?",
        answer: "Buying Instagram followers can give your account a quick boost in visibility and social proof. It helps attract organic followers by making your profile look established and popular."
    },
    {
        question: "Can Buying Instagram Followers Boost My Organic Engagement?",
        answer: "Yes, a higher follower count often leads to increased credibility, which can encourage more real users to follow and engage with your content, creating a snowball effect for organic growth."
    },
    {
        question: "How Quickly Will I Receive Instagram Followers After Purchase?",
        answer: "We start processing your order immediately after purchase. You will typically see followers appearing on your account within minutes, with full delivery depending on the package size."
    },
    {
        question: "Will My Account Get Banned For Buying Instagram Followers?",
        answer: "No, we use safe methods and provide high-quality followers to ensure your account remains secure. We strictly adhere to safety protocols to protect your profile."
    },
    {
        question: "Can Buying Instagram Followers Help Me Get Featured On The Explore Page?",
        answer: "Increased engagement and follower growth are key signals to Instagram's algorithm. While not guaranteed, having a larger, active following significantly improves your chances of hitting the Explore page."
    },
    {
        question: "How Do Instagram Followers From Eagle Likes Help With Brand Growth?",
        answer: "Eagle Likes provides high-quality followers that enhance your brand's reputation. A strong follower base builds trust with potential customers and partners, accelerating your authority in your niche."
    },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#FFFFFF0D] border border-[#FFFFFF26] rounded-[15px] overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 sm:px-5 py-3.5 sm:py-6 text-left cursor-pointer"
            >
                <span className="text-[14px] sm:text-[22px] leading-5.5 sm:leading-7.5 font-semibold font-rethink sm:font-inter text-white pr-4">
                    {question}
                </span>
                <span className={`min-w-4 shrink-0 text-white transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className='sm:w-4 w-3 h-3' viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M1.90735e-05 1.49435C-0.000854492 1.69184 0.0280972 1.88762 0.0852137 2.07045C0.14233 2.25328 0.22649 2.41958 0.332864 2.5598L7.21929 11.5636C7.43433 11.8431 7.72523 12 8.02844 12C8.33166 12 8.62255 11.8431 8.8376 11.5636L15.724 2.5598C15.912 2.27272 16.0103 1.90345 15.9991 1.52578C15.988 1.1481 15.8682 0.789844 15.6638 0.522588C15.4594 0.255333 15.1854 0.0987663 14.8966 0.0841789C14.6077 0.0695906 14.3253 0.198055 14.1057 0.443899L8.03418 8.38227L1.96265 0.443899C1.8028 0.233177 1.59875 0.08916 1.37631 0.030057C1.15386 -0.0290461 0.923006 -0.000579834 0.712933 0.111856C0.50286 0.224293 0.323004 0.415648 0.196107 0.661729C0.0692101 0.907808 0.00097084 1.19756 1.90735e-05 1.49435Z" fill="white" />
                    </svg>
                </span>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-3 sm:px-6 pb-4 sm:pb-6 text-[#99A1AF] text-[13px] sm:text-[16px] leading-6 sm:leading-6.5 font-medium">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="relative w-full py-24 bg-black overflow-hidden">
            {/* Left Bottom Shadow */}
            <div className="absolute left-0 bottom-0 z-0 pointer-events-none md:block hidden">
                <svg width="323" height="918" viewBox="0 0 323 918" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_110)">
                        <circle cx="258.5" cy="258.5" r="258.5" transform="matrix(-0.474232 -0.8804 -0.8804 0.474232 214.345 563.544)" fill="#0067DB" fill-opacity="0.32" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_110" x="-594.378" y="0" width="917.1" height="917.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_110" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 xl:px-0 max-w-269.5">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-[30px] sm:text-[48px] font-bold font-inter text-white mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#99A1AF] text-[14px] sm:text-[16px] leading-6 sm:leading-7 font-inter font-normal">
                        Have questions? We've got answers. Here are some of the most<br className="hidden sm:block" /> common queries about our Instagram Followers
                    </p>
                </div>

                {/* Questions Grid/List */}
                <div className="flex flex-col gap-3.75">
                    {FAQS.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;