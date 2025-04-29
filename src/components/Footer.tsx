"use client";

import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        display: "flex",
        position: "relative",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "3rem 1rem",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        boxSizing: "border-box",
        overflow: "hidden",
        maxWidth: "100vw", // Prevent horizontal overflow
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1400px",
          gap: "2rem",
          boxSizing: "border-box", // Ensure padding is included in width calculation
        }}
      >
        {/* Logo and company description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "280px",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.625rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc0c5ca6f1c8cf8938ee05b5cdaeab0a6a4dec7f?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
              alt="PromoCanda Logo"
              style={{
                width: "45px",
                aspectRatio: "1",
              }}
            />
            <span
              style={{
                fontSize: "1.875rem",
                fontWeight: 500,
                color: "white",
              }}
            >
              PromoCanda
            </span>
          </div>

          <p
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.5,
              marginBottom: "1rem",
            }}
          >
            Premium promotional products for Canadian businesses. Quality
            merchandise, competitive pricing, and exceptional service.
          </p>

          {/* Social media icons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "0.5rem",
            }}
          >
            {[
              "https://cdn.builder.io/api/v1/image/assets/TEMP/51fd0dc5b8e5777f9cf85dfcea8694290a425b2d?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/ea6281e53d17658d465d19eeafdf52326e4dd1d4?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/9470ca9fa045c23c516277adcdaeb09975c9483a?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/f99c6db54fe2fe0c97f1c492fed6ac744ce2ae17?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44",
            ].map((src, index) => (
              <a
                key={index}
                href="#"
                style={{
                  flexShrink: 0,
                  alignSelf: "stretch",
                  margin: "auto 0",
                  width: "30px",
                  transition: "transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={src}
                  alt="Social Media"
                  style={{
                    objectFit: "contain",
                    borderRadius: "0.375rem",
                    aspectRatio: "1",
                    width: "100%",
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "white",
              marginTop: 0,
              marginBottom: "1.5rem",
            }}
          >
            Quick Links
          </h3>
          {["Products", "Services", "About Us", "Blog"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: "#d4d4d4",
                textDecoration: "none",
                marginBottom: "1rem",
                fontSize: "1rem",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#3b82f6";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#d4d4d4";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Us */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "white",
              marginTop: 0,
              marginBottom: "1.5rem",
            }}
          >
            Contact Us
          </h3>
          <address
            style={{
              fontStyle: "normal",
              color: "#d4d4d4",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "0.75rem",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0af342e1ce9e65cdb028208aceb820948412b84?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
                alt="Location"
                style={{ width: "20px" }}
              />
              <span>123 Business Avenue, Toronto, ON M5V 2K7, Canada</span>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "0.75rem",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f53b74b529d598ef822b6ea115ad455b139114f?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
                alt="Phone"
                style={{ width: "20px" }}
              />
              <a
                href="tel:+18889998888"
                style={{
                  color: "#d4d4d4",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#d4d4d4";
                }}
              >
                +1 (888) 999-8888
              </a>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "0.75rem",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f20d034b91881839ce39479b4c95544d65a5ce1?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
                alt="Email"
                style={{ width: "20px" }}
              />
              <a
                href="mailto:info@promocanada.com"
                style={{
                  color: "#d4d4d4",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#d4d4d4";
                }}
              >
                info@promocanada.com
              </a>
            </div>
          </address>
        </div>

        {/* Newsletter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "white",
              marginTop: 0,
              marginBottom: "1.5rem",
            }}
          >
            Newsletter
          </h3>
          <p
            style={{
              color: "#d4d4d4",
              marginBottom: "1rem",
              lineHeight: 1.5,
              fontSize: "0.9rem",
            }}
          >
            Subscribe to receive updates on new products and special offers.
          </p>
          <form
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            <input
              type="email"
              placeholder="Your E-Mail Address"
              style={{
                flex: 1,
                padding: "0.75rem",
                fontSize: "0.875rem",
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "white",
                border: "1px solid #525252",
                borderRadius: "0.25rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          marginTop: "3rem",
          paddingTop: "1.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#9ca3af",
          fontSize: "0.875rem",
          boxSizing: "border-box", // Ensure padding is included in width
        }}
      >
        <p style={{ margin: "0.5rem 0" }}>
          © 2025 PromoCanada. All rights reserved.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            margin: "0.5rem 0",
          }}
        >
          <a
            href="#"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#9ca3af";
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#9ca3af";
            }}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
