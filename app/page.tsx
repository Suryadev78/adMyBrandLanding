// import FeaturesSection from "@/components/sections/FeatureSection";

import BlogSection from "@/components/sections/BlogSection";
import FAQ from "@/components/sections/FAQ";
import FeaturesSection from "@/components/sections/FeatureSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PricingCalculator from "@/components/sections/PricingCalculator";
import PricingSection from "@/components/sections/PricingSection";
import Testimonials from "@/components/sections/Testimonials";
import VideoDemo from "@/components/sections/VideoDemo";
import { ContactForm } from "@/components/ui/ContactForm";


export default function Home() {
  return (
    <>
    
      <HeroSection/>
      <FeaturesSection/>
      <PricingSection/>
      <VideoDemo/>
      <PricingCalculator/>
      <BlogSection/>
      <Testimonials/>
      <FAQ/>
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-950">
  <ContactForm/>
</section>
      <Footer/>


      
      

    
    </>
     );
}
