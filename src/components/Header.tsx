"use client";
import * as React from "react";

export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.7)",
        width: "100%",
        margin: 0,
        padding: "0 0.5rem",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100px",
        boxSizing: "border-box",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch 
        px-12 py-7 my-auto text-3xl font-medium text-center text-white whitespace-nowrap min-h-[100px]
        min-w-60 w-[360px] max-md:px-5"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/947f9281fbb196607f909189adfb8c935e837690?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
          alt="PromoCanda Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[45px]"
        />
        <h1 className="self-stretch my-auto">PromoCanada</h1>
      </div>

      <nav
        className="flex overflow-hidden gap-6 justify-between items-center self-stretch px-2.5 py-10 my-auto text-sm 
          font-medium text-center text-white bg-white bg-opacity-0 min-h-[100px] min-w-60 w-[400px]"
      >
        <a
          href="#home"
          className="self-stretch my-auto text-white !no-underline hover:text-white visited:text-white visited:no-underline active:text-white transition-all duration-200 ease-in-out hover:scale-110 relative group"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></span>
        </a>
        <a
          href="#products"
          className="self-stretch my-auto text-white !no-underline hover:text-white visited:text-white visited:no-underline active:text-white transition-all duration-200 ease-in-out hover:scale-110 relative group"
          style={{ color: "white", textDecoration: "none" }}
        >
          Products
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></span>
        </a>
        <a
          href="#services"
          className="self-stretch my-auto text-white !no-underline hover:text-white visited:text-white visited:no-underline active:text-white transition-all duration-200 ease-in-out hover:scale-110 relative group"
          style={{ color: "white", textDecoration: "none" }}
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></span>
        </a>
        <a
          href="#about"
          className="self-stretch my-auto text-white !no-underline hover:text-white visited:text-white visited:no-underline active:text-white transition-all duration-200 ease-in-out hover:scale-110 relative group"
          style={{ color: "white", textDecoration: "none" }}
        >
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></span>
        </a>
        <a
          href="#contact"
          className="self-stretch my-auto text-white !no-underline hover:text-white visited:text-white visited:no-underline active:text-white transition-all duration-200 ease-in-out hover:scale-110 relative group"
          style={{
            color: "white",
            textDecoration: "none",
            textShadow: "0 0 0 transparent",
          }}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></span>
        </a>
      </nav>

      <div
        className="flex overflow-hidden gap-3 justify-between items-center 
       self-stretch px-2 py-6 ml-100 my-auto min-h-[100px] min-w-50 w-[430px] max-md:max-w-full"
        style={{ marginRight: "50px" }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "#222",
            color: "#111",
            height: "50px",
            width: "50px",
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
            e.currentTarget.style.backgroundColor = "rgba(162, 164, 163, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
            e.currentTarget.style.backgroundColor = "#222";
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82eb83715d7d23665a53720904cd2f30be5fd9ff?placeholderIfAbsent=true&apiKey=4547af5e74a245fd86ebdab7f335cc44"
            alt="Dark Mode Toggle"
            style={{ width: "25px", height: "25px" }}
          />
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "#222",
            color: "white",
            padding: "0 2rem",
            height: "50px",
            width: "170px",
            fontSize: "0.875rem",
            fontWeight: "500",
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
            e.currentTarget.style.backgroundColor = "rgba(162, 164, 163, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
            e.currentTarget.style.backgroundColor = "#222";
          }}
        >
          Request Quote
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0 1.5rem",
            height: "50px",
            width: "170px",
            fontSize: "0.875rem",
            fontWeight: "500",
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease-in-out",
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
          Contact Sales
        </button>
      </div>
    </header>
  );
};
