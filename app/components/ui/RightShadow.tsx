import React from "react";

const RightShadow = () => {
    return (
        <>
            {/* Desktop */}
            <svg
                width="313"
                height="918"
                viewBox="0 0 313 918"
                fill="none"
                className="md:block hidden"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_1_21)">
                    <circle
                        cx="458.55"
                        cy="458.55"
                        r="258.5"
                        transform="rotate(-61.6906 458.55 458.55)"
                        fill="#0067DB"
                        fillOpacity="0.32"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_21"
                        x="0"
                        y="0"
                        width="917.1"
                        height="917.1"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_1_21"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Mobile */}
            <svg
                width="289"
                height="662"
                viewBox="0 0 289 662"
                fill="none"
                className="md:hidden block"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_1_1211)">
                    <ellipse
                        cx="343.937"
                        cy="330.621"
                        rx="146.206"
                        ry="128"
                        transform="rotate(21.4837 343.937 330.621)"
                        fill="#0067DB"
                        fillOpacity="0.32"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_1211"
                        x="0"
                        y="0"
                        width="687.874"
                        height="661.243"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_1_1211"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default RightShadow;
