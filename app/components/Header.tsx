'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SubMenuItem {
    label: string;
    href: string;
}

interface NavItem {
    label: string;
    href: string;
    children?: SubMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'TIKTOK',
        href: '/tiktok',
        children: [
            { label: 'Buy TikTok Likes', href: '/tiktok/likes' },
            { label: 'Buy TikTok Followers', href: '/tiktok/followers' },
            { label: 'Buy TikTok Views', href: '/tiktok/views' },
        ],
    },
    {
        label: 'INSTAGRAM',
        href: '/instagram',
        children: [
            { label: 'Buy Instagram Likes', href: '/instagram/likes' },
            { label: 'Buy Instagram Followers', href: '/instagram/followers' },
        ],
    },
    {
        label: 'YOUTUBE',
        href: '/youtube',
        children: [
            { label: 'Buy YouTube Views', href: '/youtube/views' },
            { label: 'Buy YouTube Subscribers', href: '/youtube/subscribers' },
        ],
    },
    {
        label: 'FACEBOOK',
        href: '/facebook',
        children: [
            { label: 'Buy Facebook Likes', href: '/facebook/likes' },
            { label: 'Buy Facebook Followers', href: '/facebook/followers' },
        ],
    },
    {
        label: 'TWITTER (X)',
        href: '/twitter',
        children: [
            { label: 'Buy Twitter Likes', href: '/twitter/likes' },
            { label: 'Buy Twitter Followers', href: '/twitter/followers' },
        ],
    },
    {
        label: 'BLOG',
        href: '/blog',
        children: [
            { label: 'Latest News', href: '/blog/news' },
            { label: 'Tips & Tricks', href: '/blog/tips' },
        ],
    },
    {
        label: 'CONTACT US',
        href: '/contact',
        children: [
            { label: 'Support', href: '/contact/support' },
            { label: 'FAQ', href: '/contact/faq' },
        ],
    },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileSubmenu = (label: string) => {
        setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-[6px]">
            <div className="max-w-308 mx-auto border-b border-[#0663CD] pb-3 sm:pb-5.75 px-4.25 xl:px-0">
                <div className="flex justify-between items-center pt-3 sm:pt-5.75">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image src="/assets/logo.png" alt="Logo" width={164} height={35} className='sm:w-41 w-29.75' />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-[16px] font-normal flex items-center gap-2.5 transition-colors uppercase"
                                >
                                    {item.label}
                                    {item.children && (
                                        <svg className="transition-transform group-hover:rotate-180" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.164751 0.195251C0.384424 -0.065083 0.740577 -0.065083 0.960251 0.195251L4.50001 4.39052L8.03977 0.195251C8.25943 -0.065083 8.6156 -0.065083 8.83526 0.195251C9.05491 0.455585 9.05491 0.877719 8.83526 1.13805L4.89775 5.80474C4.79228 5.92976 4.64918 6 4.50001 6C4.35083 6 4.20773 5.92976 4.10226 5.80474L0.164751 1.13805C-0.054917 0.877719 -0.054917 0.455585 0.164751 0.195251Z" fill="white" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-fit text-nowrap">
                                        <div className="bg-[#0f111a] border border-gray-800 rounded-lg shadow-xl overflow-hidden py-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#1a1d2d] hover:text-white transition-colors border-l-2 border-transparent hover:border-[#0663CD]"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="hidden xl:flex items-center gap-2.5 px-3 h-10.25 rounded-[10px] border border-[#0663CD] text-white font-bold text-[15px] leading-5 hover:bg-[#0663CD] transition-all duration-300"
                        >
                            <Image src='/assets/user.svg' alt='user' width={16} height={18} />
                            Login
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="xl:hidden text-gray-300 cursor-pointer transition-colors z-50 relative"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full xs:w-[85%] max-w-sm h-dvh bg-[#050511] border-r border-gray-800 z-50 transform transition-transform duration-300 overflow-y-auto xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between border-b border-gray-800">
                    <div className="p-5">
                        <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image src="/assets/logo.png" alt="Logo" width={164} height={35} />
                        </Link>
                    </div>

                    {/* Close Button Inside Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mr-4 h-19 flex items-center justify-center text-gray-400 cursor-pointer"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-5 pt-0">
                    <div className='mt-2'>
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="border-b border-gray-800/50">
                                <button
                                    onClick={() => item.children && toggleMobileSubmenu(item.label)}
                                    className="w-full flex justify-between items-center py-4 text-left text-white transition-colors"
                                >
                                    <span className="font-semibold text-[15px]">{item.label}</span>
                                    {item.children && (
                                        <svg className={`transition-transform duration-300 ${activeMobileSubmenu === item.label ? 'rotate-180' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSubmenu === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pb-4 pl-0 space-y-1 bg-[#0A0C14] rounded-lg mb-2">
                                        {item.children?.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-3 px-4 text-[14px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex items-center justify-center gap-2.5 px-3 h-12 rounded-[10px] border border-[#0663CD] text-white font-bold text-[18px] leading-5 hover:bg-[#0663CD] transition-all duration-300"
                        >
                            <Image src='/assets/user.svg' alt='user' width={16} height={18} />
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;