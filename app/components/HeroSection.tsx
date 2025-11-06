"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do badge inicial
      gsap.from(badgeRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Animação explosiva do título MAX
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 0.3,
        });
      }

      // Animação do subtítulo e descrição
      gsap.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      });

      // Animação das features com bounce
      gsap.from(".feature-item", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        delay: 0.8,
      });

      // Animação dos botões CTA
      gsap.from(ctaRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 1.2,
      });

      // QR Code com animação de entrada sutil
      if (qrRef.current) {
        gsap.from(qrRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.6,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="w-full bg-linear-to-b from-white to-gray-50 min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden"
    >
      {/* Decorative Elements - Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - Top Right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 border-2 border-purple-200/30 rounded-full"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 border-2 border-purple-300/20 rounded-full"></div>

        {/* Grid Dots Pattern - Top Left (Desktop only) */}
        <div className="hidden lg:grid absolute top-20 left-10 grid-cols-4 gap-3 opacity-30">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
          ))}
        </div>

        {/* Gradient Orb - Bottom Left */}
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-linear-to-br from-purple-300/20 to-transparent rounded-full blur-3xl"></div>

        {/* Connection Line - Diagonal */}
        <svg
          className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            d="M10,10 Q100,50 190,190"
            stroke="#892ba4"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Small Accent Circles */}
        <div className="absolute bottom-40 right-20 w-4 h-4 rounded-full bg-purple-400/40"></div>
        <div className="absolute top-60 right-60 w-3 h-3 rounded-full bg-purple-500/30"></div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-6">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Nossa Solução!
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
              >
                <span className="text-primary shine-effect">MAX</span>
              </h1>
              <div className="hero-text inline-block">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-heading">
                  Festival{" "}
                  <span
                    className="inline-block px-4 py-1 bg-primary text-white font-bold"
                    style={{
                      clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0 80%)",
                    }}
                  >
                    NEXT 2025
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="hero-text text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              Sistema inteligente de gestão de almoxarifados com integração
              completa ao SAP. Utilize Inteligência Artificial para automatizar
              lançamentos, otimizar inventário e transformar a eficiência
              operacional da sua empresa.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="feature-item flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap size={16} className="text-primary" />
                </div>
                <span className="text-heading font-medium">
                  Integração nativa com SAP
                </span>
              </div>
              <div className="feature-item flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles size={16} className="text-primary" />
                </div>
                <span className="text-heading font-medium">
                  IA para lançamentos automáticos
                </span>
              </div>
              <div className="feature-item flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowRight size={16} className="text-primary" />
                </div>
                <span className="text-heading font-medium">
                  Gestão inteligente de estoque
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://instagram.com/maxsolutions_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-primary text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/60 hover:scale-105 hover:-translate-y-1"
              >
                Começar Agora
                <ArrowRight size={20} />
              </a>
              <a
                href="https://instagram.com/maxsolutions_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-heading border-2 border-heading rounded-lg font-semibold text-center transition-all duration-300 hover:bg-heading hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Saber Mais</span>
                <span className="absolute inset-0 w-0 h-full bg-heading transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div ref={qrRef} className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/5 to-purple-600/5 rounded-3xl blur-xl"></div>

              {/* QR Code Container */}
              <div className="relative p-10 rounded-2xl">
                {/* Badge no Topo */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary shadow-md">
                    <span className="text-[12px] font-semibold text-white tracking-wide">
                      ESCANEIE PARA ACESSAR
                    </span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="h-80 bg-white p-2 rounded-xl w-80 flex items-center justify-center">
                  <Image
                    src="/images/qr-max.png"
                    alt="QR Code MAX"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
