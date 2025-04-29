import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCategories } from "./components/ProductCategories";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import * as React from "react";

function App() {
  // Add global style to prevent horizontal overflow
  React.useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.width = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    const htmlElement = document.documentElement;
    htmlElement.style.overflowX = "hidden";
    htmlElement.style.width = "100%";
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Hero />
      <ProductCategories />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
