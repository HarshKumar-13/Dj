"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Bespoke", href: "#bespoke" },
    { label: "Apparel", href: "#apparel" },
    { label: "Heritage", href: "#heritage" },
    { label: "Atelier", href: "#craftsmanship" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-[101]">
            <span
              className={`font-display text-2xl font-light tracking-wide transition-colors duration-500 ${
                scrolled ? "text-navy-500" : "text-white"
              }`}
            >
              Danny <span className="italic font-extralight">&amp;</span> Jones
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
                  scrolled ? "text-navy-500" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className={`hidden md:inline-flex font-body text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
                scrolled ? "text-navy-500" : "text-white"
              }`}
            >
              Book Appointment
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-[101] flex flex-col gap-[6px] p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 translate-y-[7px] bg-white"
                    : scrolled ? "bg-navy-500" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-[1px] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : scrolled ? "bg-navy-500" : "bg-white"
                }`}
              />
              <span
                className={`block w-4 h-[1px] transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[7px] w-6 bg-white"
                    : scrolled ? "bg-navy-500" : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-navy-500 transition-all duration-700 flex flex-col items-center justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-display text-3xl font-light tracking-wide transition-all duration-300 hover:opacity-60"
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="mt-8 w-[1px] h-12 bg-white/20"
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms", opacity: menuOpen ? 1 : 0 }}
          />
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-light mt-2"
            style={{
              transitionDelay: menuOpen ? "500ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease",
            }}
          >
            <span>Book Appointment</span>
          </a>
        </div>
      </div>
    </>
  );
}
