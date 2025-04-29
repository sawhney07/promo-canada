import * as React from "react";

export const Hero = () => {
  // Add responsive behavior with React useEffect
  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;

      document.querySelectorAll("section h1").forEach((el) => {
        (el as HTMLElement).style.fontSize = isMobile ? "2.25rem" : "3rem";
      });

      const mainDiv = document.querySelector("section > div");
      if (mainDiv) {
        (mainDiv as HTMLElement).style.padding = isMobile
          ? "6rem 0.625rem"
          : "7rem 0.625rem";
      }

      document.querySelectorAll("section button").forEach((el) => {
        (el as HTMLElement).style.padding = isMobile
          ? "1.25rem 2rem"
          : "1.25rem 3rem";
      });
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
        minHeight: "830px",
        color: "#d1d5db",
        width: "100%",
        overflow: "hidden",
        padding: "1.5rem 0.625rem",
        boxSizing: "border-box",
        maxWidth: "100vw", // Prevent overflow
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "stretch",
          padding: "7rem 0.625rem",
          margin: "auto",
          minHeight: "780px",
          width: "100%",
          maxWidth: "1430px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#e5e7eb",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Premium Promotional Products
        </h1>
        <h1
          style={{
            fontSize: "3rem",
            color: "#e5e7eb",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          for Canadian Businesses
        </h1>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          Elevate your brand with high-quality customized promotional products.
        </p>
        <p
          style={{
            marginTop: "-1rem",
            fontSize: "1.5rem",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          Bulk orders, competitive pricing, and fast delivery across Canada.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "2rem 0.625rem",
            marginTop: "-1.5rem",
            fontSize: "1.125rem",
            textAlign: "center",
            color: "white",
            minHeight: "125px",
            maxWidth: "610px",
          }}
        >
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3b82f6", // blue-500
              padding: "1.25rem 3rem",
              borderRadius: "0.75rem",
              border: "1px solid #525252",
              minHeight: "65px",
              width: "250px",
              fontSize: "1.125rem",
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
              e.currentTarget.style.backgroundColor = "#2563eb"; // blue-600
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
              e.currentTarget.style.backgroundColor = "#3b82f6"; // blue-500
            }}
          >
            Explore Products
          </button>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#404040", // neutral-700
              padding: "1.25rem 0.625rem",
              borderRadius: "0.75rem",
              border: "1px solid #525252",
              minHeight: "65px",
              width: "300px",
              fontSize: "1.125rem",
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
              e.currentTarget.style.backgroundColor = "#525252"; // neutral-600
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
              e.currentTarget.style.backgroundColor = "#404040"; // neutral-700
            }}
          >
            Request Custom Quote
          </button>
        </div>
        <p
          style={{
            alignSelf: "flex-start",
            marginTop: "-2rem",
            fontSize: "0.875rem",
            fontWeight: 300,
            textAlign: "center",
          }}
        >
          Trusted by 500+ Canadian businesses.
        </p>
      </div>
    </section>
  );
};
