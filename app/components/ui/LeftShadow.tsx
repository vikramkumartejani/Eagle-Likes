import React from "react";

const LeftShadow = () => {
    return (
        <>
            {/* Desktop */}
            <svg
                width="323"
                height="918"
                viewBox="0 0 323 918"
                fill="none"
                className="md:block hidden"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_1_99)">
                    <circle
                        cx="258.5"
                        cy="258.5"
                        r="258.5"
                        transform="matrix(-0.474232 -0.8804 -0.8804 0.474232 214.345 563.544)"
                        fill="#0067DB"
                        fillOpacity="0.32"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_99"
                        x="-594.378"
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
                            result="effect1_foregroundBlur_1_99"
                        />
                    </filter>
                </defs>
            </svg>
            {/* Mobile */}
            <svg
                width="359"
                height="702"
                viewBox="0 0 359 702"
                fill="none"
                className="md:hidden block"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_1_1186)">
                    <ellipse
                        cx="146.206"
                        cy="165.368"
                        rx="146.206"
                        ry="165.368"
                        transform="matrix(0.470923 0.882174 0.882174 -0.470923 -217.563 299.585)"
                        fill="#0067DB"
                        fill-opacity="0.32"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_1186"
                        x="-364.181"
                        y="0"
                        width="722.706"
                        height="701.376"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="100"
                            result="effect1_foregroundBlur_1_1186"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default LeftShadow;
