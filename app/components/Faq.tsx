import React from 'react';
import { FaqItem } from './FaqClient';

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

const Faq = () => {
    return (
        <section className="relative w-full pb-14.75 lg:pb-24 overflow-hidden">
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
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            initialOpen={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
