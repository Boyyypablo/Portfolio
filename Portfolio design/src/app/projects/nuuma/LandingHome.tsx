import { Header } from "./Header";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { Conditions } from "./Conditions";
import { Comparison } from "./Comparison";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function LandingHome() {
  return (
    <div className="nuuma-root">
      <Header />
      <Hero />
      <Journey />
      <Conditions />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
