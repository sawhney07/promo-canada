import * as React from "react";
import { ProductCard } from "./ProductCard";

export const ProductCategories = () => {
  const categories = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Writing Instruments",
      description: "Pens, pencils, markers and more",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Office Essentials",
      description: "Notebooks, mousepads, desk accessories",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Bags & Backpacks",
      description: "Totes, laptop bags, travel accessories",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Tech Accessories",
      description: "Speakers, chargers, USB drives",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Drinkware",
      description: "Mugs, water bottles, tumblers",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f198682f1783ed1d6d3a4f39d43bc1bcb1ded7b0?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
      title: "Apparel",
      description: "T-shirts, caps, jackets",
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
        marginTop: "-20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 1rem",
          width: "100%",
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
          Our Product Categories
        </h2>
        <p
          style={{
            marginTop: "1.75rem",
            fontSize: "1.125rem",
            fontWeight: 300,
            color: "#e5e7eb",
            lineHeight: 1.6,
          }}
        >
          Browse our extensive collection of high-quality promotional products
          perfect for your business needs
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 0.625rem",
          width: "100%",
          color: "white",
        }}
      >
        {categories.map((category, index) => (
          <ProductCard key={index} {...category} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1.5rem 1rem 3rem",
          width: "100%",
          color: "white",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b82f6",
            padding: "1rem 3.5rem",
            width: "250px",
            minHeight: "50px",
            borderRadius: "0.375rem",
            fontSize: "1rem",
            color: "white",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            border: "none",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            margin: "0 auto",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
            e.currentTarget.style.backgroundColor = "#2563eb";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
            e.currentTarget.style.backgroundColor = "#3b82f6";
          }}
        >
          View All Products
        </button>
      </div>
    </section>
  );
};
