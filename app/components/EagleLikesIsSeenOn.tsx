import React from 'react';
import Image from 'next/image';

const BRANDS: { src: string; alt: string; width: number; height: number; className?: string }[] = [
    { src: '/assets/yahoo.png', alt: 'Yahoo!', width: 132, height: 31 },
    { src: '/assets/fox.png', alt: 'FOX', width: 64, height: 31 },
    { src: '/assets/marketwatch.png', alt: 'MarketWatch', width: 161, height: 32 },
    { src: '/assets/tripadvisor.png', alt: 'Tripadvisor', width: 149, height: 30 },
    { src: '/assets/digital-journal.png', alt: 'Digital Journal', width: 139, height: 58 },
    { src: '/assets/nbc.png', alt: 'NBC', width: 64, height: 42 },
    { src: '/assets/usa-today.png', alt: 'USA TODAY', width: 112, height: 43 },
];

const EagleLikesIsSeenOn = () => {
    return (
        <section className="w-full bg-[#050505] pb-[55px] pt-[27px] sm:py-18 px-3 overflow-hidden">
            <p className="text-center text-[#99A1AF] mb-6 text-[14px] sm:text-[18px] leading-[17px] sm:leading-6.25 font-semibold">
                Eagle Likes is seen on...
            </p>

            <div className="relative w-full overflow-hidden max-w-266.25 mx-auto">
                <div className="flex flex-nowrap animate-marquee items-center">
                    {/* First set of items */}
                    <div className="flex items-center gap-10 mx-5 sm:mx-7 shrink-0">
                        {BRANDS.map((brand, idx) => (
                            <div key={`brand-1-${idx}`} className="flex items-center justify-center transition-opacity duration-300 shrink-0">
                                <Image
                                    src={brand.src}
                                    alt={brand.alt}
                                    width={brand.width}
                                    height={brand.height}
                                    className="object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex items-center gap-10 mx-5 sm:mx-7 shrink-0">
                        {BRANDS.map((brand, idx) => (
                            <div key={`brand-2-${idx}`} className="flex items-center justify-center transition-opacity duration-300 shrink-0">
                                <Image
                                    src={brand.src}
                                    alt={brand.alt}
                                    width={brand.width}
                                    height={brand.height}
                                    className="object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    );
};

export default EagleLikesIsSeenOn;