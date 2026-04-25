"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { BarChart2, Lightbulb, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Library", id: "#library" },
        { name: "Analytics", id: "#metrics" },
        { name: "Features", id: "#features" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="ArcadeHub"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Arcade Analytics Hub"
      description="The ultimate portal for competitive gaming intelligence, physics-driven simulations, and cognitive performance tracking."
      buttons={[
        { text: "Browse Library", href: "#library" },
        { text: "View Analytics", href: "#metrics" },
      ]}
      slides={[
        { imageSrc: "https://img.b2bpic.net/free-photo/portal-beautiful-neon-lights-with-glowing-purple-blue-lines-tunnel_181624-19743.jpg", imageAlt: "Digital Arcade Portal" },
        { imageSrc: "https://img.b2bpic.net/free-photo/view-3d-gaming-device_23-2151005796.jpg", imageAlt: "Advanced Gaming Device" },
        { imageSrc: "https://img.b2bpic.net/free-photo/retro-vhs-packaging-indoors_23-2150172409.jpg", imageAlt: "Gaming Experience" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Platform Performance"
      tag="Real-Time Metrics"
      metrics={[
        { id: "p1", value: "500+", description: "Games Indexed" },
        { id: "p2", value: "1.2M", description: "Monthly Simulations" },
        { id: "p3", value: "98.4%", description: "Average Accuracy" },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="library" data-section="library">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "a1", name: "Physics Lab 01", price: "Active", imageSrc: "https://img.b2bpic.net/free-vector/shining-atom-model-nuclear-model-atom-with-electrons-positrons-illustration_1284-53085.jpg" },
        { id: "a2", name: "Reflex Trainer", price: "Fast", imageSrc: "https://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204940.jpg" },
        { id: "a3", name: "Logic Core", price: "Hard", imageSrc: "https://img.b2bpic.net/free-vector/gear-home-logo-design_474888-2080.jpg" },
        { id: "a4", name: "Strategy Matrix", price: "Logic", imageSrc: "https://img.b2bpic.net/free-psd/3d-purple-gaming-controller-icon-digital-game-button-design_84443-55701.jpg" },
      ]}
      title="Game Library"
      description="Explore our high-octane collection of logic-driven simulations."
      tag="Featured Games"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Advanced Analytics",          description: "Track every click and reaction time with millisecond precision.",          icon: BarChart2,
          mediaItems: [
            { imageSrc: "https://img.b2bpic.net/free-vector/race-competition-icon-set_1284-1238.jpg" },
            { imageSrc: "https://img.b2bpic.net/free-photo/target-with-arrow-3d-design-sport-game-business-design_460848-10716.jpg" },
          ],
        },
        {
          title: "Smart Learning",          description: "Adaptive difficulty algorithms tailored to your cognitive progress.",          icon: Lightbulb,
          mediaItems: [
            { imageSrc: "https://img.b2bpic.net/free-vector/delicious-bakery-products-sweets_23-2147555183.jpg" },
            { imageSrc: "https://img.b2bpic.net/free-vector/collection-football-accessories-flat-design_23-2147596251.jpg" },
          ],
        },
      ]}
      title="Platform Focus"
      description="Built for maximum engagement and cognitive optimization."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Is it really free?", content: "Yes, the core simulation library is completely free and accessible to all users." },
        { id: "2", title: "How do I sync progress?", content: "Progress is saved locally via browser sessions or to your registered account." },
        { id: "3", title: "Supported browsers?", content: "ArcadeHub is optimized for Chrome, Edge, and Firefox." },
      ]}
      sideTitle="FAQ"
      sideDescription="Commonly asked questions about the portal."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      tag="Get In Touch"
      title="Join the Network"
      description="Sign up to get exclusive access to our research papers and beta tests."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ArcadeHub"
      columns={[
        { title: "Navigation", items: [{ label: "Games", href: "#library" }, { label: "Metrics", href: "#metrics" }] },
        { title: "Resources", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
