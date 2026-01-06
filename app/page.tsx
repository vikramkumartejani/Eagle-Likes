import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyEagleLikes from "./components/WhyEagleLikes";
import Faq from "./components/Faq";
import EagleLikesIsSeenOn from "./components/EagleLikesIsSeenOn";
import BenefitsOfBuyingFollowers from "./components/BenefitsOfBuyingFollowers";
import SocialMediaGrowth from "./components/SocialMediaGrowth";
import HowItWorks from "./components/HowItWorks";
import WhyAreInstagramFollowersImportant from "./components/WhyAreInstagramFollowersImportant";
import WhyChooseUs from "./components/WhyChooseUs";
import YourPrivacyIsOurFocus from "./components/YourPrivacyIsOurFocus";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <EagleLikesIsSeenOn />
      <WhyEagleLikes />
      <SocialMediaGrowth/>
      <HowItWorks/>
      <WhyAreInstagramFollowersImportant/>
      <WhyChooseUs/>
      <YourPrivacyIsOurFocus/>
      <div className="relative z-10">
        <BenefitsOfBuyingFollowers />
        <Faq />
        {/* Right Shadow Desktop */}
        <div className="absolute right-0 top-1/4 -translate-y-1/4 sm:top-1/3 sm:-translate-y-1/3 z-0 pointer-events-none mix-blend-screen">
          <svg width="313" height="918" viewBox="0 0 313 918" fill="none" className="sm:block hidden" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_112)">
              <circle cx="458.55" cy="458.55" r="258.5" transform="rotate(-61.6906 458.55 458.55)" fill="#0067DB" fillOpacity="0.32" />
            </g>
            <defs>
              <filter id="filter0_f_1_112" x="0" y="0" width="917.1" height="917.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_112" />
              </filter>
            </defs>
          </svg>
          {/* Right Shadow Mobile */}
          <svg width="289" height="662" viewBox="0 0 289 662" fill="none" className="sm:hidden block" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_1211)">
              <ellipse cx="343.937" cy="330.621" rx="146.206" ry="128" transform="rotate(21.4837 343.937 330.621)" fill="#0067DB" fillOpacity="0.32" />
            </g>
            <defs>
              <filter id="filter0_f_1_1211" x="0" y="0" width="687.874" height="661.243" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_1211" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}
