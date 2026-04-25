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
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Library",          id: "#library"},
        {
          name: "Analytics",          id: "#metrics"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="ArcadeHub"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="ArcadeHub Portal"
      description="Educational simulations and physics-based logic games designed to sharpen cognitive reflexes and strategic thinking."
      buttons={[
        {
          text: "Explore Games",          href: "#library"},
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/retro-vhs-packaging-indoors_23-2150172444.jpg", imageAlt: "Educational gaming platform" },
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-mature-woman-having-fun-time_23-2149232846.jpg", imageAlt: "Physics training simulation" },
        { imageSrc: "http://img.b2bpic.net/free-photo/view-3d-gaming-device_23-2151005796.jpg", imageAlt: "Strategy building challenge" },
        { imageSrc: "http://img.b2bpic.net/free-photo/retro-vhs-packaging-indoors_23-2150172409.jpg", imageAlt: "Logic and reflex testing" },
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-vr-glasses-eating-popcorn_23-2147771080.jpg", imageAlt: "Cognitive performance lab" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portal-beautiful-neon-lights-with-glowing-purple-blue-lines-tunnel_181624-19743.jpg", imageAlt: "Student progress portal" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Learning Impacts"
      tag="Performance Data"
      metrics={[
        { id: "m1", value: "16+", description: "Physics Simulations" },
        { id: "m2", value: "95%", description: "Reflex Improvement" },
        { id: "m3", value: "10k+", description: "Monthly Active Users" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="library" data-section="library">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "g1", name: "Slope", price: "Logic", imageSrc: "http://img.b2bpic.net/free-vector/race-competition-icon-set_1284-1238.jpg" },
        { id: "g2", name: "1v1.LOL", price: "Strategy", imageSrc: "http://img.b2bpic.net/free-photo/target-with-arrow-3d-design-sport-game-business-design_460848-10716.jpg" },
        { id: "g3", name: "Cookie Clicker", price: "Math", imageSrc: "http://img.b2bpic.net/free-vector/delicious-bakery-products-sweets_23-2147555183.jpg" },
        { id: "g4", name: "Retro Bowl", price: "Strategy", imageSrc: "http://img.b2bpic.net/free-vector/collection-football-accessories-flat-design_23-2147596251.jpg" },
        { id: "g5", name: "Drift Boss", price: "Physics", imageSrc: "http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204940.jpg" },
        { id: "g6", name: "Moto X3M", price: "Physics", imageSrc: "http://img.b2bpic.net/free-photo/fun-trex-3d-illustration_183364-81262.jpg" },
      ]}
      title="Game Library"
      description="Choose from our curated collection of educational games."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Momentum & Velocity",          description: "Apply real-world physics laws.",          icon: Zap,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-vector/shining-atom-model-nuclear-model-atom-with-electrons-positrons-illustration_1284-53085.jpg" },
            { imageSrc: "http://img.b2bpic.net/free-vector/illustration-four-superbikes-white-background_1308-984.jpg" },
          ],
        },
        {
          title: "Resource Management",          description: "Model complex economic systems.",          icon: BarChart2,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-vector/snacks-collection_23-2147947560.jpg" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-american-footballs-with-flame_23-2148878370.jpg" },
          ],
        },
        {
          title: "Critical Logic",          description: "Sharpen your pattern recognition.",          icon: Lightbulb,
          mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-psd/3d-purple-gaming-controller-icon-digital-game-button-design_84443-55701.jpg" },
            { imageSrc: "http://img.b2bpic.net/free-vector/gear-home-logo-design_474888-2080.jpg" },
          ],
        },
      ]}
      title="Why Educational Gaming?"
      description="Engaging games serve as powerful labs for testing physics, economics, and decision theory."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Are these games free?", content: "Yes, all games on our platform are accessible for free." },
        { id: "f2", title: "Do I need an account?", content: "No account required, just click and play." },
        { id: "f3", title: "Can I suggest a game?", content: "Use the contact form to reach out to our team." },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Newsletter"
      title="Stay Updated"
      description="Get notified about the latest educational games and updates."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ArcadeHub"
      columns={[
        { title: "Library", items: [{ label: "All Games", href: "#library" }] },
        { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}