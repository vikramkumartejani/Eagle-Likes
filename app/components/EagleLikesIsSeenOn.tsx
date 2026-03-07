"use client"
import { useEffect, useState } from "react";
// SVG Imports
import YahooLogo from "../../public/assets/logo-slider/yahoo.svg";
import FoxLogo from "../../public/assets/logo-slider/fox.svg";
import MarketWatchLogo from "../../public/assets/logo-slider/market-watch.svg";
import TripadvisorLogo from "../../public/assets/logo-slider/tripadvisor.svg";
import DigitalJournalLogo from "../../public/assets/logo-slider/digital-journal.svg";
import NbcLogo from "../../public/assets/logo-slider/nbc.svg";
import UsaTodayLogo from "../../public/assets/logo-slider/usa-today.svg";

export default function EagleLikesIsSeenOn() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    const logos = [
        {
            name: "Yahoo",
            component: YahooLogo,
            width: 132,
            height: 31,
        },
        {
            name: "FOX",
            component: FoxLogo,
            width: 64,
            height: 31,
        },
        {
            name: "MarketWatch",
            component: MarketWatchLogo,
            width: 161,
            height: 32,
        },
        {
            name: "Tripadvisor",
            component: TripadvisorLogo,
            width: 149,
            height: 30,
        },
        {
            name: "Digital Journal",
            component: DigitalJournalLogo,
            width: 139,
            height: 58,
        },
        {
            name: "NBC",
            component: NbcLogo,
            width: 64,
            height: 42,
        },
        {
            name: "USA TODAY",
            component: UsaTodayLogo,
            width: 112,
            height: 43,
        },
    ];

    const logosMobile = [
        {
            name: "Yahoo",
            component: YahooLogo,
            width: 100,
            height: 31,
        },
        {
            name: "FOX",
            component: FoxLogo,
            width: 50,
            height: 23,
            mobileWidth: 50,
            mobileHeight: 23,
        },
        {
            name: "MarketWatch",
            component: MarketWatchLogo,
            width: 100,
            height: 32,
        },
        {
            name: "Tripadvisor",
            component: TripadvisorLogo,
            width: 110,
            height: 25,
        },
        {
            name: "Digital Journal",
            component: DigitalJournalLogo,
            width: 100,
            height: 43,
        },
        {
            name: "NBC",
            component: NbcLogo,
            width: 64,
            height: 35,
        },
        {
            name: "USA TODAY",
            component: UsaTodayLogo,
            width: 91,
            height: 35,
        },
    ];

    const allLogos = [...logos, ...logos, ...logos];
    const allLogosMobile = [...logosMobile, ...logosMobile, ...logosMobile];

    return (
        <div className="w-full bg-[#050505] pb-[55px] pt-[27px] sm:py-18 px-3 overflow-hidden">
            <div className="hidden lg:block absolute -z-10 -right-6 top-6 w-[116px] h-[180px] shrink-0 bg-[url('/images/homepage/hero/stars-rigth-slider.svg')] bg-center bg-no-repeat"></div>

            <div className="text-center mb-6">
                <p
                    className="text-[#99A1AF] text-center text-sm lg:text-[18px] not-italic font-semibold leading-normal
"
                    data-testid="text-featured-title"
                >
                    Eagle Likes is seen on...
                </p>
            </div>

            <div className="relative max-w-[1065px] mx-auto overflow-hidden">
                {isMobile ? (
                    /* Mobile Logos */
                    <div className="flex animate-scroll" style={{ width: "max-content" }}>
                        {allLogosMobile.map((logo, index) => {
                            const LogoComponent = logo.component;
                            return (
                                <div
                                    key={`${logo.name}-mobile-${index}`}
                                    className="flex items-center justify-center mr-10 shrink-0"
                                >
                                    <LogoComponent
                                        width={logo.width}
                                        height={logo.height}
                                        className="object-contain"
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Desktop Logos */
                    <div className="flex animate-scroll" style={{ width: "max-content" }}>
                        {allLogos.map((logo, index) => {
                            const LogoComponent = logo.component;
                            return (
                                <div
                                    key={`${logo.name}-${index}`}
                                    className="flex items-center justify-center mr-10 shrink-0"
                                >
                                    <LogoComponent
                                        width={logo.width}
                                        height={logo.height}
                                        className="object-contain"
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        
        .animate-scroll > div {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
        }
      `}</style>
        </div>
    );
}
