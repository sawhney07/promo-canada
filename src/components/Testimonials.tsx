import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      rating: 4,
      quote:
        "PromoCanada delivered exceptional quality promotional products for our company event. The custom notebooks and pens were a huge hit with our employees and clients.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechNova Inc.",
    },
    {
      rating: 5,
      quote:
        "We've been ordering our corporate gifts from PromoCanada for three years now. Their bulk pricing and quality are unmatched, and their team is always responsive.",
      name: "Michael Chen",
      title: "Procurement Manager, Maple Financial Group",
    },
    {
      rating: 5,
      quote:
        "The custom branded backpacks we ordered exceeded our expectations. The quality was outstanding and delivery was right on schedule for our conference.",
      name: "Jennifer Williams",
      title: "Events Coordinator, Canadian Health Systems",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
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
          What Our Clients Say
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
          Trusted by hundreds of Canadian businesses for their promotional
          product needs
        </p>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "3.5rem 9rem 6rem",
          width: "100%",
          minHeight: "450px",
          boxSizing: "border-box",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
