import * as React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        alignSelf: "stretch",
        paddingBottom: "1.75rem",
        margin: "auto",
        borderRadius: "1rem",
        border: "1px solid #525252",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "400px",
        minWidth: "300px",
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
        src={image}
        alt={title}
        style={{
          objectFit: "contain",
          width: "100%",
          aspectRatio: "2",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "1.25rem",
          marginLeft: "1.75rem",
          width: "80%",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            alignSelf: "stretch",
            marginTop: "1rem",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "#d4d4d4",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            padding: "0.75rem 0.625rem",
            marginTop: "1rem",
            fontSize: "1rem",
            borderRadius: "0.375rem",
            border: "2px solid #525252",
            backgroundColor: "#404040",
            color: "white",
            minHeight: "2.5rem",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#525252";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#404040";
          }}
        >
          View Products
        </button>
      </div>
    </article>
  );
};
