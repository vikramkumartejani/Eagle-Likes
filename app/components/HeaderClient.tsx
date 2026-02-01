'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, X } from "lucide-react";

interface DropdownLink {
    id: string;
    title: string;
    ref: string;
}

interface MenuItem {
    id: string;
    title: string;
    ref: string;
    dropdown?: DropdownLink[];
}

interface HeaderClientProps {
    menuItems: MenuItem[];
}

export const HeaderClient = ({ menuItems }: HeaderClientProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<string>>(
        new Set()
    );
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const onScroll = () => {
            if (typeof window === "undefined") return;
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollPos > 5);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                activeDropdown &&
                dropdownRefs.current[activeDropdown] &&
                !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [activeDropdown]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const toggleMobileDropdown = (menuId: string) => {
        setMobileOpenDropdowns((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(menuId)) {
                newSet.delete(menuId);
            } else {
                newSet.add(menuId);
            }
            return newSet;
        });
    };

    return (
        <>
            <nav
                className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 border-b  border-blue-100 ${mobileMenuOpen || isScrolled
                    ? "bg-[#050505]/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1240px] mx-auto pt-[15px] pb-[11px] lg:py-[23px] px-4 xl:px-0 relative overflow-visible">
                    <div className="flex items-center justify-between lg:gap-[87px]">
                        <div className="w-[110px] h-[25px] lg:w-[164px] lg:h-[35px] lg:aspect-164/35 relative">
                            <Image
                                src="/assets/navbar/eagle-logo.svg"
                                alt="Eagle Logo"
                                width={164}
                                height={35}
                                priority
                                className="hidden lg:block w-[164px] h-[35px] shrink-0"
                            />
                            <Image
                                src="/assets/navbar/eagle-logo-mb.svg"
                                alt="Eagle Logo Mobile"
                                width={110}
                                height={25}
                                priority
                                className="block lg:hidden w-[110px] h-[25px] shrink-0"
                            />
                        </div>

                        <div className="hidden xl:flex items-center gap-6">
                            {menuItems.map((menu) => (
                                <div
                                    key={menu.id}
                                    className="relative"
                                    ref={(el) => {
                                        dropdownRefs.current[menu.id] = el;
                                    }}
                                    onMouseEnter={() => {
                                        if (menu.dropdown) {
                                            setActiveDropdown(menu.id);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        setActiveDropdown(null);
                                    }}
                                >
                                    <Link
                                        href={menu.ref}
                                        className="relative group flex items-center gap-2.5 text-white text-base font-normal leading-normal transition-colors duration-250 py-1"
                                        data-testid={`button-menu-${menu.id}`}
                                    >
                                        <span>{menu.title}</span>
                                        {menu.dropdown && (
                                            <Image
                                                src="/assets/svgs/chevron-svg.svg"
                                                alt="Chevron"
                                                width={6}
                                                height={9}
                                                className={`w-1.5 h-[9px] transition-transform duration-250 ${activeDropdown === menu.id ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                    {menu.dropdown && (
                                        <div
                                            className={`absolute top-full left-0 w-64 pt-3 z-50 transition-all duration-300 ease-in-out ${activeDropdown === menu.id
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 translate-y-2 pointer-events-none"
                                                }`}
                                            role="menu"
                                            aria-label={`${menu.title} submenu`}
                                            aria-hidden={activeDropdown !== menu.id}
                                        >
                                            <div className="bg-[#050505]/95 border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1.5 ring-1 ring-white/5">
                                                {menu.dropdown.map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        href={item.ref}
                                                        className="group relative flex items-center px-5 py-3 text-[#A0A0A0] text-[15px] font-medium transition-all duration-200 hover:text-white"
                                                        role="menuitem"
                                                        data-testid={`dropdown-item-${item.id}`}
                                                        onClick={() => {
                                                            setActiveDropdown(null);
                                                        }}
                                                    >
                                                        <div className="absolute inset-0 bg-linear-to-r from-[#0663CD]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0663CD] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                        <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                className="hidden xl:flex w-[91px] h-[41px] px-7 py-3.5 justify-center items-center gap-2.5 hover:bg-[#0663cd] rounded-[10px] border border-[#0663cd] transition-colors duration-300 cursor-pointer"
                                data-testid="button-login"
                            >
                                <Image
                                    src="/assets/svgs/profile-svg.svg"
                                    alt="Profile"
                                    width={16}
                                    height={18}
                                    className="min-w-4 h-4.5 text-white"
                                />
                                <span className="text-white font-sans text-[15px] font-bold capitalize">
                                    Login
                                </span>
                            </button>

                            <div className="flex xl:hidden  items-center w-[182px] h-[17.6px] gap-4.5 ">
                                <div className="flex items-center  w-[140px] h-[17.6px] gap-2.5 ">
                                    <span className="text-white text-center font-sans text-[14px] font-semibold capitalize leading-normal">
                                        5.0{" "}
                                    </span>

                                    <div className="flex items-center gap-[6.28px]">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Image
                                                key={i}
                                                src="/assets/svgs/starbox-svg.svg"
                                                alt="Star"
                                                width={17}
                                                height={17}
                                                className="w-[17px] h-[17px]"
                                                data-testid={`star-${i}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="text-white cursor-pointer"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    data-testid="button-mobile-menu"
                                    aria-label="Toggle mobile menu"
                                >
                                    {mobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Image
                                            src="/assets/svgs/menu-svg.svg"
                                            alt="Menu"
                                            width={24}
                                            height={20}
                                            className="w-6 h-5"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={
                        `bg-black-100 absolute left-0 right-0 top-full z-50 overflow-y-auto transition-all duration-300 ease-in-out border-b border-blue-100/20` +
                        (mobileMenuOpen ? " max-h-[92vh] opacity-100 visible" : " max-h-0 opacity-0 invisible")
                    }
                    data-testid="mobile-menu"
                    aria-hidden={!mobileMenuOpen}
                >
                    <div className="px-4 py-4">
                        {menuItems.map((menu) => (
                            <div
                                key={menu.id}
                                className="py-1 border-b border-blue-100/20 last:border-b-0"
                            >
                                {menu.dropdown ? (
                                    <div>
                                        <button
                                            className="w-full flex items-center justify-between text-white hover:text-blue-100 text-base font-medium transition-all duration-300 ease-in-out py-2"
                                            data-testid={`button-mobile-menu-${menu.id}`}
                                            onClick={() => toggleMobileDropdown(menu.id)}
                                            aria-expanded={mobileOpenDropdowns.has(menu.id)}
                                            aria-controls={`mobile-dropdown-${menu.id}`}
                                        >
                                            <span>{menu.title}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-300 ${mobileOpenDropdowns.has(menu.id) ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            id={`mobile-dropdown-${menu.id}`}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenDropdowns.has(menu.id)
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                                }`}
                                            role="region"
                                            aria-labelledby={`mobile-menu-${menu.id}`}
                                        >
                                            <div className="pl-4 pb-2">
                                                {menu.dropdown.map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        href={item.ref}
                                                        className="block py-2.5 text-white/90 hover:text-blue-100 hover:translate-x-1 text-sm font-normal leading-normal transition-all duration-300 ease-in-out"
                                                        data-testid={`button-mobile-menu-${item.id}`}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setMobileOpenDropdowns(new Set());
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={menu.ref}
                                        className="w-full block text-white hover:text-blue-100 hover:translate-x-1 text-base font-medium transition-all duration-300 ease-in-out py-2"
                                        data-testid={`button-mobile-menu-${menu.id}`}
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {menu.title}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 sm:hidden">
                            <button
                                className="w-full border border-blue-100 text-white hover:bg-blue-100 gap-2 flex items-center justify-center py-2 rounded-lg transition-colors duration-300"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                <Image
                                    src="/assets/svgs/profile-svg.svg"
                                    alt="Profile"
                                    width={16}
                                    height={18}
                                    className="w-4 h-4.5 text-white"
                                />
                                <span className="ml-2 text-white font-opensans text-[15px] font-bold capitalize">
                                    Login
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
