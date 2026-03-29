"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[88px] bg-white flex items-center px-4 lg:pr-[40px] box-border border-b border-gray-100 lg:border-none">
      {/* Logo */}
      <div className="lg:absolute lg:left-[76px] top-0 lg:top-[-1px] w-[60px] lg:w-[89px] h-[60px] lg:h-[89px] flex items-center justify-center">
        <Image
          src="/assets/demo.png"
          alt="DesignDot Logo"
          width={89}
          height={89}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Spacer for desktop logo */}
      <div className="hidden lg:block w-[180px]" />

      {/* Navigation Menu - Desktop */}
      <nav className="hidden lg:flex items-center justify-center gap-[24px] flex-1 ml-[80px]">
        {[
          "WHO WE SERVE",
          "SOLUTIONS",
          "RESOURCES",
          "ABOUT US",
          "CONTACT US",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="font-bold text-[16px] leading-none tracking-normal text-[#333333] no-underline whitespace-nowrap cursor-pointer transition-colors duration-300 hover:text-[#0E2134] font-['Source_Sans_Pro']"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right Section - Search, Language, Hamburger */}
      <div className="flex items-center gap-4 lg:gap-[40px] ml-auto lg:ml-0">
        {/* Search Icon */}
        <button
          className="w-[24px] lg:w-[31px] h-[24px] lg:h-[31px] bg-none border-none cursor-pointer p-0 flex items-center justify-center"
          aria-label="Search"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="9" stroke="#333333" strokeWidth="2" />
            <path
              d="M20 20L27 27"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Language Selector (Desktop only for simplicity in this step) */}
        <div className="hidden md:flex relative items-center">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-[8px] bg-none border-none cursor-pointer p-0"
          >
            <span className="font-bold text-[14px] lg:text-[16px] leading-none text-[#333333] font-['Source_Sans_Pro']">
              IND
            </span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${languageOpen ? "rotate-180" : ""}`}
            >
              <path d="M1 1L6.5 6.5L12 1" stroke="#0E2134" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-[30px] h-[30px] flex flex-col justify-between p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-[3px] bg-black rounded transition-all ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
          <span className={`w-full h-[3px] bg-black rounded transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-[3px] bg-black rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[88px] left-0 w-full bg-white border-b border-gray-200 z-[100] flex flex-col p-6 gap-6 shadow-xl">
          {[
            "WHO WE SERVE",
            "SOLUTIONS",
            "RESOURCES",
            "ABOUT US",
            "CONTACT US",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="font-bold text-[18px] text-[#333333] font-['Source_Sans_Pro']"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-4 border-t pt-6">
            <span className="font-bold">ENGLISH</span>
            <span className="font-bold">IND</span>
          </div>
        </div>
      )}
    </header>
  )
}
