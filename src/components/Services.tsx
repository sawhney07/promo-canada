import * as React from "react";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb74eeb1e9f09ce831a4cc98f3cbbe31829aaf95?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Custom Design",
      description:
        "Our design team works with you to create perfect branded merchandise that represents your company",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57d7f80cc75ba9bc61ee6d09600ccb4fb0856990?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Bulk Orders",
      description:
        "Specialized in large quantity orders for businesses with competitive volume-based pricing",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/58df1117dca1bf96367cca99f8784d2852b50bce?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Flexible Shipping",
      description:
        "Choose from express air freight or economical sea shipping options across Canada",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd9904f3613e5c95d4f6f72c90911bf956e4001?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Quick Turnaround",
      description:
        "Fast production and delivery times to meet your promotional campaign deadlines",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0988289556b2716903b1063709dff4457abe7bb?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Quality Guarantee",
      description:
        "Premium products sourced directly from manufacturers with quality assurance",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b192bac8d51d55873d253790167267edca3099b9?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Dedicated Account Manager",
      description:
        "Personal support throughout the entire ordering and fulfillment process",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minHeight: "950px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1rem 1.25rem",
          width: "100%",
          textAlign: "center",
          minHeight: "150px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: 500,
            color: "white",
            margin: 0,
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.125rem",
            fontWeight: 300,
            color: "#e5e7eb",
            lineHeight: 1.6,
          }}
        >
          We provide end-to-end solutions for your promotional product needs
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          marginTop: "-3rem",
          gap: "5rem", // Increased gap from 1rem to 2rem
          justifyContent: "center",
          padding: "3rem 3rem", // Increased horizontal padding
          width: "100%",
          maxWidth: "1200px", // Slightly increased max-width to accommodate gaps
          margin: "2rem auto",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
