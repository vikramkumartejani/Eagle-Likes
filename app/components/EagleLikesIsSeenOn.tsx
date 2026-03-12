"use client"
import { useEffect, useState } from "react";

export default function EagleLikesIsSeenOn() {
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const logos = [
        {
            name: "Yahoo",
            src: "/assets/logo-slider/yahoo.svg",
            width: 132,
            height: 31,
        },
        {
            name: "FOX",
            src: "/assets/logo-slider/fox.svg",
            width: 64,
            height: 31,
        },
        {
            name: "MarketWatch",
            src: "/assets/logo-slider/market-watch.svg",
            width: 161,
            height: 32,
        },
        {
            name: "Tripadvisor",
            src: "/assets/logo-slider/tripadvisor.svg",
            width: 149,
            height: 30,
        },
        {
            name: "Digital Journal",
            src: "/assets/logo-slider/digital-journal.svg",
            width: 139,
            height: 58,
        },
        {
            name: "NBC",
            src: "/assets/logo-slider/nbc.svg",
            width: 64,
            height: 42,
        },
        {
            name: "USA TODAY",
            src: "/assets/logo-slider/usa-today.svg",
            width: 112,
            height: 43,
        },
    ];

    const logosMobile = [
        {
            name: "Yahoo",
            src: "/assets/logo-slider/yahoo.svg",
            width: 100,
            height: 31,
        },
        {
            name: "FOX",
            src: "/assets/logo-slider/fox.svg",
            width: 50,
            height: 23,
        },
        {
            name: "MarketWatch",
            src: "/assets/logo-slider/market-watch.svg",
            width: 100,
            height: 32,
        },
        {
            name: "Tripadvisor",
            src: "/assets/logo-slider/tripadvisor.svg",
            width: 110,
            height: 25,
        },
        {
            name: "Digital Journal",
            src: "/assets/logo-slider/digital-journal.svg",
            width: 100,
            height: 43,
        },
        {
            name: "NBC",
            src: "/assets/logo-slider/nbc.svg",
            width: 64,
            height: 35,
        },
        {
            name: "USA TODAY",
            src: "/assets/logo-slider/usa-today.svg",
            width: 91,
            height: 35,
        },
    ];

    const allLogos = [...logos, ...logos, ...logos];
    const allLogosMobile = [...logosMobile, ...logosMobile, ...logosMobile];

    if (!isVisible) {
        return (
            <div className="w-full bg-[#050505] pb-[55px] pt-[27px] sm:py-18 px-3">
                <div className="text-center mb-6">
                    <p className="text-[#99A1AF] text-center text-sm lg:text-[18px] not-italic font-semibold leading-normal">
                        Eagle Likes is seen on...
                    </p>
                </div>
                <div className="h-20 flex items-center justify-center">
                    <div className="text-[#99A1AF]">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#050505] pb-[55px] pt-[27px] sm:py-18 px-3 overflow-hidden">
            <div className="hidden lg:block absolute -z-10 -right-6 top-6 w-[116px] h-[180px] shrink-0 bg-[url('/images/homepage/hero/stars-rigth-slider.svg')] bg-center bg-no-repeat"></div>

            <div className="text-center mb-6">
                <p
                    className="text-[#99A1AF] text-center text-sm lg:text-[18px] not-italic font-semibold leading-normal"
                    data-testid="text-featured-title"
                >
                    Eagle Likes is seen on...
                </p>
            </div>

            <div className="relative max-w-[1065px] mx-auto overflow-hidden">
                {isMobile ? (
                    /* Mobile Logos */
                    <div className="flex animate-scroll" style={{ width: "max-content" }}>
                        {allLogosMobile.map((logo, index) => (
                            <div
                                key={`${logo.name}-mobile-${index}`}
                                className="flex items-center justify-center mr-10 shrink-0"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Desktop Logos */
                    <div className="flex animate-scroll" style={{ width: "max-content" }}>
                        {allLogos.map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                className="flex items-center justify-center mr-10 shrink-0"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
          transform: translateZ(0);
        }
        
        .animate-scroll > div {
          transform: translateZ(0);
        }
      `}</style>
        </div>
    );
}
