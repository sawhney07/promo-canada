import * as React from "react";

interface TestimonialCardProps {
  rating: number;
  quote: string;
  name: string;
  title: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  quote,
  name,
  title,
}) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem 1.25rem",
        borderRadius: "1rem",
        border: "1px solid #525252",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        minHeight: "300px",
        width: "400px",
        minWidth: "300px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 30px 60px -15px rgba(0, 0, 0, 0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.625rem",
          width: "100%",
          minHeight: "60px",
          gap: "0.625rem",
        }}
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={
              index < rating
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ebeebabe66551ce544a8ee3ca07225d82c527a34?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/d49ec067b993683ee8a1ebf1cfd6143276237a71?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
            }
            alt={index < rating ? "Filled star" : "Empty star"}
            style={{
              objectFit: "contain",
              flexShrink: 0,
              alignSelf: "stretch",
              margin: "auto 0",
              width: "2.5rem",
              aspectRatio: "1",
            }}
          />
        ))}
      </div>
      <p
        style={{
          alignSelf: "center",
          marginTop: "1.25rem",
          fontSize: "0.875rem",
          fontWeight: 300,
          color: "white",
          lineHeight: 1.6,
          padding: "0 0.5rem",
        }}
      >
        {quote}
      </p>
      <div
        style={{
          display: "flex",
          gap: "0.625rem",
          alignItems: "center",
          padding: "0.5rem 0.625rem",
          marginTop: "1.25rem",
          width: "100%",
          fontSize: "1.25rem",
          fontWeight: 500,
          color: "white",
          minHeight: "60px",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4938e18b7945a858dc8c2a89f89f202d6d93e206?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
          alt={name}
          style={{
            objectFit: "contain",
            flexShrink: 0,
            alignSelf: "stretch",
            margin: "auto 0",
            aspectRatio: "1",
            borderRadius: "50px",
            width: "45px",
          }}
        />
        <div
          style={{
            alignSelf: "stretch",
            margin: "auto 0",
            width: "245px",
          }}
        >
          {name}
          <br />
          <span style={{ fontWeight: 300, fontSize: "0.75rem" }}>{title}</span>
        </div>
      </div>
    </article>
  );
};
