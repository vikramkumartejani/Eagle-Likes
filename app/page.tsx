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
import LeftShadow from "./components/ui/LeftShadow";
import RightShadow from "./components/ui/RightShadow";

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
          <LeftShadow/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
