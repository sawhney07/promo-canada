import * as React from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <article
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "1rem 2.5rem", // Reduced padding
      margin: "0",
      borderRadius: "1rem",
      border: "1px solid #525252",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      minHeight: "270px", // Slightly reduced height
      width: "180px", // Reduced width to fit all cards in one row
      minWidth: "180px", // Reduced minimum width
      maxWidth: "200px", // Added maximum width
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(0, 0, 0, 0.3)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
    }}
  >
    <p
      style={{
        fontSize: "3.75rem",
        textAlign: "center",
        color: "#3b82f6",
        margin: 0,
      }}
    >
      {number}
    </p>
    <h3
      style={{
        marginTop: "0.625rem",
        fontSize: "1.5rem",
        textAlign: "center",
        color: "white",
        fontWeight: 500,
        margin: "0.625rem 0 0 0",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        alignSelf: "stretch",
        marginTop: "0.625rem",
        fontSize: "0.875rem",
        fontWeight: 300,
        color: "#d4d4d4",
        lineHeight: 1.6,
      }}
    >
      {description}
    </p>
  </article>
);

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Browse Products",
      description:
        "Explore our extensive catalog of promotional products or request custom items",
    },
    {
      number: "02",
      title: "Request Quote",
      description:
        "Fill out our quote form with your requirements and quantity needs",
    },
    {
      number: "03",
      title: "Design Approval",
      description: "Review and approve custom designs and branding placement",
    },
    {
      number: "04",
      title: "Production",
      description:
        "We handle manufacturing, quality control, and preparation for shipping",
    },
    {
      number: "05",
      title: "Delivery",
      description:
        "Choose your preferred shipping method and receive your products",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        marginBottom: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1rem 1.25rem",
          width: "100%",
          textAlign: "center",
          minHeight: "150px",
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
          How It Works
        </h2>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.125rem",
            fontWeight: 300,
            color: "#e5e7eb",
            width: "500px",
            maxWidth: "100%",
            lineHeight: 1.6,
          }}
        >
          Our streamlined process makes ordering promotional products simple and
          efficient
        </p>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexWrap: "nowrap", // Changed from wrap to nowrap to force single row
          gap: "2rem", // Reduced gap between cards
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 1rem", // Reduced horizontal padding
          width: "100%",
          overflowX: "auto", // Added horizontal scroll for small screens
          fontWeight: 500,
          minHeight: "350px", // Reduced height
          boxSizing: "border-box",
          marginTop: "-3rem",
        }}
      >
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};
