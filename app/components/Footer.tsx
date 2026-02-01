import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSelector } from './ui/LanguageSelector';

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
                    <LanguageSelector />
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
