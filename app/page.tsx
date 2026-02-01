import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dynamic from "next/dynamic";

const EagleLikesIsSeenOn = dynamic(() => import("./components/EagleLikesIsSeenOn"));
const Footer = dynamic(() => import("./components/Footer"));

const WhyEagleLikes = dynamic(() => import("./components/WhyEagleLikes"));
const Faq = dynamic(() => import("./components/Faq"));
const BenefitsOfBuyingFollowers = dynamic(() => import("./components/BenefitsOfBuyingFollowers"));
const SocialMediaGrowth = dynamic(() => import("./components/SocialMediaGrowth"));
const HowItWorks = dynamic(() => import("./components/HowItWorks"));
const WhyAreInstagramFollowersImportant = dynamic(() => import("./components/WhyAreInstagramFollowersImportant"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
const YourPrivacyIsOurFocus = dynamic(() => import("./components/YourPrivacyIsOurFocus"));
const LeftShadow = dynamic(() => import("./components/ui/LeftShadow"));
const RightShadow = dynamic(() => import("./components/ui/RightShadow"));

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <Header />
      <Hero />
      <EagleLikesIsSeenOn />
      <div>
        <WhyEagleLikes />
        <SocialMediaGrowth />
      </div>
      <HowItWorks />
      <WhyAreInstagramFollowersImportant />
      <WhyChooseUs />
      <YourPrivacyIsOurFocus />
      <div className="relative z-10">
        <BenefitsOfBuyingFollowers />
        <Faq />
        {/* Left Bottom Shadow */}
        <div className="absolute left-0 -bottom-30 z-0 md:flex hidden">
          <LeftShadow />
        </div>
      </div>
      <Footer />
    </div>
  );
}
