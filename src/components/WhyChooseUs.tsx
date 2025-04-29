import * as React from "react";

export const WhyChooseUs = () => {
  const benefits = [
    "Direct sourcing from manufacturers for competitive pricing",
    "Specialized in bulk orders for Canadian businesses",
    "Premium quality products with customization options",
    "Dedicated account managers for personalized service",
    "Flexible shipping options to meet your timeline",
    "Streamlined ordering process for corporate clients",
  ];

  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        maxWidth: "100vw", // Prevent horizontal overflow
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          alignItems: "center",
          padding: "4rem 2rem", // Reduced padding to prevent overflow
          minHeight: "400px",
          width: "50%",
          maxWidth: "768px", // Maximum width to prevent overflow
          boxSizing: "border-box",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca0fc748d772bdc27006015416edc053fd5d72e?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
          alt="Why Choose PromoCanada"
          style={{
            objectFit: "contain",
            alignSelf: "stretch",
            margin: "auto",
            borderRadius: "1.5rem",
            aspectRatio: "1.3",
            width: "650px",
            maxWidth: "100%",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          justifyContent: "center",
          alignItems: "flex-start",
          alignSelf: "stretch",
          padding: "4rem 2rem", // Reduced padding to prevent overflow
          fontSize: "1.25rem",
          fontWeight: 500,
          color: "white",
          minHeight: "400px",
          width: "50%",
          maxWidth: "768px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            textAlign: "center",
            margin: 0,
            width: "100%",
          }}
        >
          Why Choose PromoCanada?
        </h2>
        <p
          style={{
            alignSelf: "stretch",
            marginTop: "3rem",
            color: "#d4d4d4",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          We specialize in providing high-quality promotional products to
          Canadian businesses at competitive prices. Our focus on bulk orders
          and direct sourcing allows us to offer exceptional value while
          maintaining premium quality.
        </p>
        <div
          style={{
            overflow: "hidden",
            paddingRight: "3.5rem",
            marginTop: "3rem",
            maxWidth: "100%",
            width: "745px",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                padding: "0.5rem 0",
                minHeight: "50px",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/866a4f5c736dedeb2a452f37dc81181ae157559b?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
                alt="Checkmark"
                style={{
                  objectFit: "contain",
                  flexShrink: 0,
                  alignSelf: "center",
                  aspectRatio: "1",
                  width: "35px",
                }}
              />
              <p
                style={{
                  alignSelf: "stretch",
                  margin: "auto 0",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
