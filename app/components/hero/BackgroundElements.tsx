import React from 'react';
import Image from 'next/image';
import HeroNetLeft from "../../../public/assets/hero/hero-net-left.svg";
import HeroNetRight from "../../../public/assets//hero/hero-net-right.svg";


export const BackgroundGrid = () => (
    <div className="absolute inset-0 z-0 w-full mx-auto mt-12.75 md:mt-24 pointer-events-none -ml-[5px]">
        <Image src="/assets/grid.svg" alt="Background Grid" width={762} height={365} className='md:block hidden object-contain mx-auto' priority />
        <Image src="/assets/svg-grid-mb.svg" alt="Background Grid" width={374} height={221} className='md:hidden block object-contain mx-auto' priority />
    </div>
);

export const HeroRightImage = () => (
    <div className="md:block hidden absolute right-0 top-[22px] w-[213px] h-[447px] shrink-0 aspect-213/447 z-0">
        <HeroNetRight
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        />
    </div>
);

export const HeroLeftImage = () => (
    <div className="md:block hidden absolute z-10 left-0 top-80 sm:top-120 w-[177px] h-[422px] shrink-0 aspect-177/422">
        <HeroNetLeft
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        />
    </div>
);

export const LeftShadow = () => (
    <div
        className="md:block hidden absolute -z-10 -right-[123px] top-[10%] blur-[70px] lg:blur-[100px] lg:-right-[479px] lg:top-[380px] w-[170px] h-[460px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[460px] lg:rounded-[579px]"
        style={{
            background: "rgba(0, 103, 219, 0.80)",
            // filter: "blur(100px)",
            // WebkitFilter: "blur(100px)",
            willChange: "filter",
        }}
    ></div>
);

export const RightShadow = () => (
    <div
        className="md:block hidden absolute -z-10 -left-[143px] top-[20%] blur-[70px] lg:blur-[100px] lg:-left-[352px] lg:top-[280px] w-[179px] h-[457px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[457px] lg:rounded-[579px]"
        style={{
            background: "rgba(0, 103, 219, 0.80)",
            // filter: "blur(100px)",
            // WebkitFilter: "blur(100px)",
            willChange: "filter",
        }}
    ></div>
);

export const LeftBottomShadow = () => (
    <div className="lg:block hidden absolute -z-10 lg:-left-[187px] lg:-left-[321px] bottom-10 w-[292px] h-64 lg:w-[517px] lg:h-[517px] shrink-0 rounded-[292px] lg:rounded-[517px] bg-[rgba(0,103,219,0.32)] blur-[60px] lg:blur-[100px]"></div>
);

export const TopBlueGlow = () => (
    <div
        className="absolute -top-[100px] lg:-top-[289px] blur-[100px] -z-10 w-[310px] h-[246px] lg:w-[579px] lg:h-[579px] shrink-0 rounded-[460px] lg:rounded-[579px]"
        style={{
            background: "rgba(0, 103, 219, 0.80)",
            // filter: "blur(100px)",
            // WebkitFilter: "blur(100px)",
            willChange: "filter",
        }}
    ></div>
);
