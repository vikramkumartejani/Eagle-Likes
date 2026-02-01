import React from 'react';
import RightShadow from './ui/RightShadow';
import LeftShadow from './ui/LeftShadow';

interface Step {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBgColor: string;
    iconBorderColor: string;
    iconColor: string;
}

const STEPS: Step[] = [
    {
        id: "01",
        title: "Pick a Service",
        description: "Pick the service that fits your goals and start growing now",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33334 25.6668C9.97767 25.6668 10.5 25.1445 10.5 24.5002C10.5 23.8558 9.97767 23.3335 9.33334 23.3335C8.68901 23.3335 8.16667 23.8558 8.16667 24.5002C8.16667 25.1445 8.68901 25.6668 9.33334 25.6668Z" stroke="#C27AFF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.1667 25.6668C22.811 25.6668 23.3333 25.1445 23.3333 24.5002C23.3333 23.8558 22.811 23.3335 22.1667 23.3335C21.5223 23.3335 21 23.8558 21 24.5002C21 25.1445 21.5223 25.6668 22.1667 25.6668Z" stroke="#C27AFF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.39166 2.3916H4.725L7.82833 16.8816C7.94217 17.4123 8.23744 17.8867 8.66333 18.2231C9.08921 18.5595 9.61905 18.737 10.1617 18.7249H21.5717C22.1027 18.7241 22.6176 18.5421 23.0312 18.2091C23.4448 17.876 23.7325 17.4119 23.8467 16.8933L25.7717 8.22493H5.97333" stroke="#C27AFF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        iconBgColor: "bg-[#AD46FF1A]",
        iconBorderColor: "border-[#AD46FF33]",
        iconColor: "text-[#AD46FF]"
    },
    {
        id: "02",
        title: "Enter Information",
        description: "Enter your information to get started quickly and securely!",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6667 12.8333L21 15.1667L25.6667 10.5" stroke="#51A2FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.6666 24.5V22.1667C18.6666 20.929 18.175 19.742 17.2998 18.8668C16.4246 17.9917 15.2377 17.5 14 17.5H6.99998C5.7623 17.5 4.57532 17.9917 3.70015 18.8668C2.82498 19.742 2.33331 20.929 2.33331 22.1667V24.5" stroke="#51A2FF" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 12.8333C13.0773 12.8333 15.1666 10.744 15.1666 8.16667C15.1666 5.58934 13.0773 3.5 10.5 3.5C7.92265 3.5 5.83331 5.58934 5.83331 8.16667C5.83331 10.744 7.92265 12.8333 10.5 12.8333Z" stroke="#51A2FF" strokeWidth="2.3333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        iconBgColor: "bg-[#2B7FFF1A]",
        iconBorderColor: "border-[#2B7FFF33]",
        iconColor: "text-[#2B7FFF]"
    },
    {
        id: "03",
        title: "Pay Securely",
        description: "Pay securely and complete your order in seconds!",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1667 12.8335H5.83333C4.54467 12.8335 3.5 13.8782 3.5 15.1668V23.3335C3.5 24.6222 4.54467 25.6668 5.83333 25.6668H22.1667C23.4553 25.6668 24.5 24.6222 24.5 23.3335V15.1668C24.5 13.8782 23.4553 12.8335 22.1667 12.8335Z" stroke="#00D492" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.16663 12.8335V8.16683C8.16663 6.61973 8.78121 5.136 9.87517 4.04204C10.9691 2.94808 12.4529 2.3335 14 2.3335C15.5471 2.3335 17.0308 2.94808 18.1247 4.04204C19.2187 5.136 19.8333 6.61973 19.8333 8.16683V12.8335" stroke="#00D492" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        iconBgColor: "bg-[#00BC7D1A]",
        iconBorderColor: "border-[#00BC7D33]",
        iconColor: "text-[#00BC7D]"
    }
];

const HowItWorks = () => {
    return (
        <section className="w-full pt-10 pb-[43px] sm:pb-[124px] sm:pt-20 border-b-[1.5px] border-[#0663CD4D] px-5 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-12.5">
                    <h2 className="text-[30px] sm:text-[48px] leading-8 sm:leading-12 font-bold text-white mb-4 sm:mb-6 font-inter">
                        How it works
                    </h2>
                    <p className="text-[#99A1AF] text-[13px] sm:text-[18px] font-medium max-w-162.5 mx-auto font-inter">
                        Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {STEPS.map((step, idx) => (
                        <div
                            key={step.id}
                            className="relative rounded-3xl border-2 sm:border border-[#27272A] p-8 overflow-hidden group min-h-57 flex flex-col justify-between"
                            style={{ background: "linear-gradient(135deg, #18181B 0%, #09090B 100%)" }}
                        >
                            {/* Background Number */}
                            <div className="absolute top-0 -right-5.5 h-full flex flex-col justify-start pt-4 select-none pointer-events-none">
                                <div className="relative">
                                    <span className="text-[120px] leading-[0.8] font-normal text-white/5 font-arial-custom block">
                                        {step.id}
                                    </span>
                                    <span className="absolute top-1/2 left-18 -translate-x-1/2 -translate-y-1/2 text-[16px] leading-6 font-normal text-[#52525C] font-arial-custom">
                                        {step.id}
                                    </span>
                                </div>
                            </div>

                            {/* Icon */}
                            <div className={`w-14 min-h-14 rounded-2xl flex items-center justify-center mb-6 border backdrop-blur-sm
                                ${step.iconBgColor} ${step.iconBorderColor} ${step.iconColor}
                            `}>
                                {step.icon}
                            </div>

                            <div>
                                <h3 className="text-[16px] leading-6 font-semibold font-inter text-white mb-6">
                                    {step.title}
                                </h3>
                                <p className="text-[#9F9FA9] text-[16px] leading-6 font-inter pr-8">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute right-0 -bottom-50 md:-top-20">
                <RightShadow />
            </div>
            <div className="absolute left-0 -top-20 md:hidden block">
                <LeftShadow />
            </div>
        </section>
    );
};

export default HowItWorks;