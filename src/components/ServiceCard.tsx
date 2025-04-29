import * as React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem 2rem", // Further reduced padding
        margin: "0", // Keep margin at 0
        borderRadius: "1rem",
        border: "1px solid #525252",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        minHeight: "240px", // Further reduced height
        width: "100%", // Take full width of grid cell
        height: "100%", // Take full height of grid cell
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
      <img
        src={icon}
        alt={`${title} icon`}
        style={{
          objectFit: "contain",
          aspectRatio: "1",
          width: "85px",
        }}
      />
      <h3
        style={{
          marginTop: "1rem",
          fontSize: "1.25rem",
          textAlign: "left",
          color: "white",
          fontWeight: 500,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          alignSelf: "stretch",
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#d4d4d4",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </article>
  );
};
