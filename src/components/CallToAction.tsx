import * as React from "react";

export const CallToAction = () => {
  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8rem 0.625rem",
        width: "100%",
        fontSize: "1.125rem",
        fontWeight: 500,
        backgroundColor: "#3b82f6", // blue-500
        minHeight: "580px",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2.25rem",
          color: "black",
          margin: 0,
          textAlign: "center",
        }}
      >
        Ready to Elevate Your Brand?
      </h2>
      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "1.5rem",
          fontWeight: 300,
          textAlign: "center",
          color: "black",
          maxWidth: "800px",
        }}
      >
        Contact our team today to discuss your promotional product needs and get
        a custom quote for your business.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.375rem 0.125rem",
          marginTop: "2.5rem",
          textAlign: "center",
          minHeight: "65px",
          width: "550px",
          maxWidth: "100%",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 3rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "0.375rem",
            border: "1px solid #525252",
            minHeight: "55px",
            width: "200px",
            fontSize: "1.125rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            e.currentTarget.style.backgroundColor = "#f8f8f8";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.backgroundColor = "white";
          }}
        >
          Request A Quote
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 3rem",
            backgroundColor: "#404040", // neutral-700
            color: "white",
            borderRadius: "0.375rem",
            border: "1px solid #525252",
            minHeight: "55px",
            width: "200px",
            fontSize: "1.125rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            e.currentTarget.style.backgroundColor = "#525252";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.backgroundColor = "#404040";
          }}
        >
          Browse Products
        </button>
      </div>
      <p
        style={{
          marginTop: "2.5rem",
          fontWeight: 300,
          textAlign: "center",
          color: "black",
        }}
      >
        No minimum order requirements for quotes. Volume discounts available for
        bulk orders.
      </p>
    </section>
  );
};
