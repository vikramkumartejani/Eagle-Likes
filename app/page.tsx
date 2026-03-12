import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dynamic from "next/dynamic";

const SectionSkeleton = () => (
  <div className="w-full min-h-[200px]" aria-hidden="true" />
);

const EagleLikesIsSeenOn = dynamic(() => import("./components/EagleLikesIsSeenOn"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <SectionSkeleton />,
});

const WhyEagleLikes = dynamic(() => import("./components/WhyEagleLikes"), {
  loading: () => <SectionSkeleton />,
});
const Faq = dynamic(() => import("./components/Faq"), {
  loading: () => <SectionSkeleton />,
});
const BenefitsOfBuyingFollowers = dynamic(() => import("./components/BenefitsOfBuyingFollowers"), {
  loading: () => <SectionSkeleton />,
});
const SocialMediaGrowth = dynamic(() => import("./components/SocialMediaGrowth"), {
  loading: () => <SectionSkeleton />,
});
const HowItWorks = dynamic(() => import("./components/HowItWorks"), {
  loading: () => <SectionSkeleton />,
});
const WhyAreInstagramFollowersImportant = dynamic(() => import("./components/WhyAreInstagramFollowersImportant"), {
  loading: () => <SectionSkeleton />,
});
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  loading: () => <SectionSkeleton />,
});
const YourPrivacyIsOurFocus = dynamic(() => import("./components/YourPrivacyIsOurFocus"), {
  loading: () => <SectionSkeleton />,
});
const LeftShadow = dynamic(() => import("./components/ui/LeftShadow"), {
  loading: () => null,
});
const RightShadow = dynamic(() => import("./components/ui/RightShadow"), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <Header />
      {/* <Hero /> */}
      <EagleLikesIsSeenOn />
      <div>
        <WhyEagleLikes />
        <SocialMediaGrowth />
      </div>
      <section>
        <HowItWorks />
      </section>
      <section>
        <WhyAreInstagramFollowersImportant />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <YourPrivacyIsOurFocus />
      </section>
      <div className="relative z-10">
        <BenefitsOfBuyingFollowers />
        <Faq />
        {/* Left Bottom Shadow */}
        <div className="absolute left-0 -bottom-30 z-0 md:flex hidden">
          {/* <LeftShadow /> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
