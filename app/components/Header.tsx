"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#features", label: "Features" },
    { href: "#integrantes", label: "Integrantes" },
    { href: "#contato", label: "Contato" },
  ];

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current && menuLinksRef.current) {
      // Animação de abertura
      const tl = gsap.timeline();

      // Anima o container do menu
      tl.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Anima os links com stagger
      tl.fromTo(
        menuLinksRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.5)",
        },
        "-=0.1"
      );

      // Rotação suave no ícone X
      if (menuIconRef.current) {
        gsap.from(menuIconRef.current, {
          rotation: -90,
          scale: 0.8,
          duration: 0.3,
          ease: "back.out(2)",
        });
      }
    } else if (!mobileMenuOpen && mobileMenuRef.current) {
      // Animação de fechamento
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    // Anima os links saindo antes de fechar
    if (menuLinksRef.current) {
      gsap.to(menuLinksRef.current.children, {
        x: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => setMobileMenuOpen(false),
      });
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#sobre" className="flex items-center gap-3">
            <Image
              src="/images/MAX.png"
              alt="MAX Logo"
              width={40}
              height={40}
              className="object-contain rounded-md"
            />
            <span className="text-xl font-bold text-black">MAX</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#892ba4] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuIconRef}
            className="md:hidden text-black hover:text-[#892ba4] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            ref={mobileMenuRef}
            className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4 overflow-hidden"
          >
            <div ref={menuLinksRef} className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-black hover:text-[#892ba4] transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
