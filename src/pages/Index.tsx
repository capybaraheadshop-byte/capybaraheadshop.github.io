import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsStrip from "@/components/BrandsStrip";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <FloatingElements />
    <Header />
    <HeroSection />
    <BrandsStrip />
    <AboutSection />
    <ProductsSection />
    <FeaturedCarousel />
    <StatsSection />
    <BenefitsSection />
    <TestimonialsSection />
    <CTASection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
