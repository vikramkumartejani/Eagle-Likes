'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title?: string;
    links: FooterLink[];
}

// Data
const TOP_LINKS: FooterLink[] = [
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
];

const SERVICE_SECTIONS: FooterSection[] = [
    {
        title: 'Instagram Services',
        links: [
            { label: 'Buy Instagram Likes', href: '/buy-instagram-likes' },
            { label: 'Buy Instagram Comments', href: '/buy-instagram-comments' },
            { label: 'Buy Instagram Followers', href: '/buy-instagram-followers' },
            { label: 'Buy Instagram Views', href: '/buy-instagram-views' },
        ],
    },
    {
        title: 'TikTok Services',
        links: [
            { label: 'Buy TikTok Likes', href: '/buy-tiktok-likes' },
            { label: 'Buy TikTok Followers', href: '/buy-tiktok-followers' },
            { label: 'Buy TikTok Views', href: '/buy-tiktok-views' },
        ],
    },
    {
        title: 'YouTube Services',
        links: [
            { label: 'Buy YouTube Views', href: '/buy-youtube-views' },
            { label: 'Buy YouTube Subscribers', href: '/buy-youtube-subscribers' },
            { label: 'Buy YouTube Likes', href: '/buy-youtube-likes' },
        ],
    },
];

const TOOLS_RESOURCES_LEFT: FooterLink[] = [
    { label: 'Instagram Video Downloader', href: '/tools/instagram-video-downloader' },
    { label: 'Instagram Profile Picture Viewer', href: '/tools/instagram-pfp-viewer' },
    { label: 'Instagram Story Downloader', href: '/tools/instagram-story-downloader' },
    { label: 'Instagram Story Viewer', href: '/tools/instagram-story-viewer' },
    { label: 'Instagram Followers Counter', href: '/tools/instagram-followers-counter' },
    { label: 'Free Instagram Likes Trial', href: '/tools/free-instagram-likes' },
    { label: 'Free Instagram Followers Trial', href: '/tools/free-instagram-followers' },
];

const TOOLS_RESOURCES_RIGHT: FooterLink[] = [
    { label: 'Instagram Story Viewer', href: '/tools/instagram-story-viewer-2' },
    { label: 'Twitter Video Downloader', href: '/tools/twitter-video-downloader' },
    { label: 'Twitter GIF Downloader', href: '/tools/twitter-gif-downloader' },
    { label: 'Free Tik Tok Views', href: '/tools/free-tiktok-views' },
    { label: 'Facebook Video Downloader', href: '/tools/facebook-video-downloader' },
    { label: 'Facebook Reels Downloader', href: '/tools/facebook-reels-downloader' },
];

const ACCOUNT_LINKS: FooterLink[] = [
    { label: 'Log In', href: '/login' },
    { label: 'Sign In', href: '/signup' },
];

const Footer = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('EN');

    const languages = ['EN', 'ES', 'FR', 'DE'];

    return (
        <footer className="bg-black text-white pt-10 sm:pt-20 px-5 relative overflow-hidden">

            {/* Background Image - Left Side */}
            <div className="absolute left-0 bottom-0 w-62.5 select-none z-0">
                <Image
                    src="/assets/footer-left-image.svg"
                    alt="layer"
                    width={230}
                    height={100}
                />
            </div>

            <div className="max-w-322 w-full mx-auto relative z-10">
                {/* Top Navigation */}
                <div className="flex flex-wrap md:flex-row flex-col items-center md:items-start gap-6 md:gap-9 mb-8 sm:mb-10">
                    {TOP_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[16px] md:text-[22px] leading-5 md:leading-6 font-semibold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Main Grid */}
                <div className='mb-12.5 w-full md:text-start text-center'>
                    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between flex-wrap gap-7.5 md:gap-6 pb-8 md:pb-5">
                        {/* Service Columns */}
                        {SERVICE_SECTIONS.map((section) => (
                            <div key={section.title} className="w-full md:w-fit flex flex-col items-center justify-center md:justify-start md:items-start">
                                <h3 className="font-medium text-[20px] md:text-[22px] leading-6 mb-5 md:mb-6 font-rethink">{section.title}</h3>
                                <ul className="flex flex-col justify-center md:justify-start md:items-start items-center gap-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-[14px] sm:text-[14.53px] leading-5 sm:leading-6.75 font-normal">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Tools & Resources */}
                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                            <h3 className="font-medium text-[20px] md:text-[22px] leading-6 mb-5 md:mb-6 font-rethink">Tools & Resources</h3>
                            <ul className="flex flex-col md:justify-start md:items-start justify-center items-center gap-2">
                                {TOOLS_RESOURCES_LEFT.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[14px] sm:text-[14.53px] leading-5 sm:leading-6.75 font-normal">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-4 pt-0 lg:pt-12">
                            <ul className="flex flex-col gap-2">
                                {TOOLS_RESOURCES_RIGHT.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[14px] sm:text-[14.53px] leading-5 sm:leading-6.75 font-normal">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Account */}
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[20px] md:text-[22px] leading-6 mb-5 md:mb-6 font-rethink">My Account</h3>
                            <ul className="flex flex-col gap-2">
                                {ACCOUNT_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[14px] sm:text-[14.53px] leading-5 sm:leading-6.75 font-normal">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Language Dropdown */}
                    <div className="relative w-full flex justify-center items-center md:justify-start">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 text-[20px] font-inter leading-5 cursor-pointer hover:text-gray-300 w-fit px-2 py-1 rounded hover:bg-white/5 transition-colors"
                        >
                            <GlobeIcon className="w-5 h-5" />
                            <span>{currentLang}</span>
                            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isLangOpen && (
                            <div className="absolute bottom-full left-0 mb-2 w-32 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl overflow-hidden py-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setCurrentLang(lang);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 cursor-pointer text-sm hover:bg-white/5 transition-colors ${currentLang === lang ? 'text-white font-medium' : 'text-gray-400'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-between md:flex-row flex-col py-5 sm:py-6 items-center border-t border-[#505050CC] gap-4 md:gap-6">
                    <p className="text-white text-[14px] sm:text-[16px] leading-6 md:text-left text-center">
                        Copyright © 2025 Eagle Likes, All Rights Reserved.
                    </p>
                    {/* Payment Icons */}
                    <div className="flex items-center gap-2">
                        <PaymentIconVisa />
                        <PaymentIconMastercard />
                        <PaymentIconAmex />
                        <PaymentIconApplePay />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const GlobeIcon = ({ className }: { className?: string }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.48 13.536 4.8ZM8 1.632C8.664 2.592 9.184 3.656 9.528 4.8H6.472C6.816 3.656 7.336 2.592 8 1.632ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6H1.808ZM2.464 11.2H4.824C5.08 12.2 5.448 13.16 5.928 14.048C4.456 13.544 3.232 12.528 2.464 11.2ZM4.824 4.8H2.464C3.232 3.472 4.456 2.456 5.928 1.952C5.448 2.84 5.08 3.8 4.824 4.8ZM8 14.368C7.336 13.408 6.816 12.344 6.472 11.2H9.528C9.184 12.344 8.664 13.408 8 14.368ZM9.872 9.6H6.128C6.056 9.072 6 8.544 6 8C6 7.456 6.056 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6H11.488Z" fill="white" />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const PaymentIconVisa = () => (
    <div className='bg-white rounded-[5px] border border-[#D6DCE5] h-7 w-10 flex items-center justify-center'>
        <Image src="/assets/visa.svg" alt="Visa" width={28} height={10} />
    </div>
);

const PaymentIconMastercard = () => (
    <div className='bg-white rounded-[5px] border border-[#D6DCE5] h-7 w-10 flex items-center justify-center'>
        <Image src="/assets/mastercard.svg" alt="mastercard" width={24} height={15} />
    </div>
);

const PaymentIconAmex = () => (
    <div className='bg-[#006FCF] rounded-[5px] border border-[#D6DCE5] h-7 w-10 flex items-center justify-end'>
        <Image src="/assets/american-express.svg" alt="american-express" width={21} height={16} />
    </div>
);

const PaymentIconApplePay = () => (
    <div className='bg-white rounded-[5px] border border-[#D6DCE5] h-7 w-10 flex items-center justify-center'>
        <Image src="/assets/apple-pay.svg" alt="apple-pay" width={27.74} height={11.38} className='pt-0.5' />
    </div>
);

export default Footer;