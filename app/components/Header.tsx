'use client'
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<string>>(
        new Set()
    );
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        // Update scroll state
        const onScroll = () => {
            if (typeof window === "undefined") return;
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // run once to set initial state
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdown when clicking outside
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

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const menuItems: MenuItem[] = [
        {
            id: "tiktok",
            title: "TIKTOK",
            ref: "/tiktok",
            dropdown: [
                {
                    id: "tt-followers",
                    title: "Buy TikTok Followers",
                    ref: "/buy-tiktok-followers",
                },
                { id: "tt-likes", title: "Buy TikTok Likes", ref: "/buy-tiktok-likes" },
                { id: "tt-views", title: "Buy TikTok Views", ref: "/buy-tiktok-views" },
                {
                    id: "tt-comments",
                    title: "Buy TikTok Comments",
                    ref: "/buy-tiktok-comments",
                },
            ],
        },
        {
            id: "instagram",
            title: "INSTAGRAM",
            ref: "/instagram",
            dropdown: [
                {
                    id: "ig-followers",
                    title: "Buy Instagram Followers",
                    ref: "/buy-instagram-followers",
                },
                {
                    id: "ig-likes",
                    title: "Buy Instagram Likes",
                    ref: "/buy-instagram-likes",
                },
                {
                    id: "ig-views",
                    title: "Buy Instagram Views",
                    ref: "/buy-instagram-views",
                },
                {
                    id: "ig-comments",
                    title: "Buy Instagram Comments",
                    ref: "/buy-instagram-comments",
                },
            ],
        },
        {
            id: "youtube",
            title: "YOUTUBE",
            ref: "/youtube",
            dropdown: [
                {
                    id: "yt-subs",
                    title: "Buy YouTube Subscribers",
                    ref: "/buy-youtube-subscribers",
                },
                {
                    id: "yt-views",
                    title: "Buy YouTube Views",
                    ref: "/buy-youtube-views",
                },
                {
                    id: "yt-likes",
                    title: "Buy YouTube Likes",
                    ref: "/buy-youtube-likes",
                },
                {
                    id: "yt-comments",
                    title: "Buy YouTube Comments",
                    ref: "/buy-youtube-comments",
                },
                {
                    id: "yt-watch-hours",
                    title: "Buy YouTube Watch Hours",
                    ref: "/buy-youtube-watch-hours",
                },
            ],
        },
        {
            id: "facebook",
            title: "FACEBOOK",
            ref: "/facebook",
            dropdown: [
                {
                    id: "fb-page-likes",
                    title: "Buy Facebook Page Likes",
                    ref: "/buy-facebook-page-likes",
                },
                {
                    id: "fb-post-likes",
                    title: "Buy Facebook Post Likes",
                    ref: "/buy-facebook-post-likes",
                },
                {
                    id: "fb-views",
                    title: "Buy Facebook Views",
                    ref: "/buy-facebook-views",
                },
                {
                    id: "fb-shares",
                    title: "Buy Facebook Shares",
                    ref: "/buy-facebook-shares",
                },
            ],
        },
        {
            id: "twitter_x",
            title: "TWITTER (X)",
            ref: "/twitter",
            dropdown: [
                {
                    id: "tw-followers",
                    title: "Buy Twitter Followers",
                    ref: "/buy-twitter-followers",
                },
                {
                    id: "tw-retweets",
                    title: "Buy Twitter Retweets",
                    ref: "/buy-twitter-retweets",
                },
                {
                    id: "tw-likes",
                    title: "Buy Twitter Likes",
                    ref: "/buy-twitter-likes",
                },
                {
                    id: "tw-views",
                    title: "Buy Twitter Views",
                    ref: "/buy-twitter-views",
                },
            ],
        },
        { id: "blog", title: "BLOG", ref: "/blog" },
        { id: "contact_us", title: "CONTACT US", ref: "/contact" },
    ];

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
                className={`fixed left-0 right-0 top-0 z-40  border-b border-blue-100 ${mobileMenuOpen || isScrolled ? "bg-black-100" : "bg-transparent"
                    } `}
            >
                <div className="max-w-[1240px] mx-auto pt-[15px] pb-[11px] lg:py-[23px] px-4 xl:px-0 relative overflow-visible">
                    <div className="flex items-center justify-between lg:gap-[87px]">
                        <div className="w-[110px] h-[25px] lg:w-[164px] lg:h-[35px] lg:aspect-164/35 relative">
                            <Image
                                src="/assets/navbar/eagle-logo.svg"
                                alt="Eagle Logo"
                                width={164}
                                height={35}
                                className="hidden lg:block w-[164px] h-[35px] shrink-0"
                            />
                            <Image
                                src="/assets/navbar/eagle-logo-mb.svg"
                                alt="Eagle Logo Mobile"
                                width={110}
                                height={25}
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
                                        onClick={() => console.log(`${menu.title} clicked`)}
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
                                        {/* Animated underline */}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {menu.dropdown && (
                                        <div
                                            className={`absolute top-full left-0 w-56 shadow-lg z-50 py-4 transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === menu.id
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 translate-y-4 pointer-events-none"
                                                }`}
                                            role="menu"
                                            aria-label={`${menu.title} submenu`}
                                            aria-hidden={activeDropdown !== menu.id}
                                        >
                                            <div className="bg-black-100 rounded-[10px] border border-blue-100/50">
                                                {menu.dropdown.map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        href={item.ref}
                                                        className="block px-4 py-3 text-white text-sm font-normal leading-normal hover:bg-blue-100/20 hover:text-blue-100 transition-colors duration-250"
                                                        role="menuitem"
                                                        data-testid={`dropdown-item-${item.id}`}
                                                        onClick={() => {
                                                            console.log(`${item.title} clicked`);
                                                            setActiveDropdown(null);
                                                        }}
                                                    >
                                                        {item.title}
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
                                onClick={() => console.log("Login clicked")}
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

                    {/* Mobile menu: absolute overlay under the nav (smooth expand/collapse) */}
                </div>
            </nav>

            <div
                className={
                    `bg-black-100 fixed left-0 right-0 top-13.5 z-50 overflow-y-auto transition-all duration-300 ease-in-out` +
                    (mobileMenuOpen ? " max-h-[92vh]" : " max-h-0")
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

                                    {/* Mobile Dropdown */}
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
                                                        console.log(`${item.title} clicked`);
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
                                        console.log(`${menu.title} clicked`);
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
                                console.log("Login clicked");
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
        </>
    );
}
