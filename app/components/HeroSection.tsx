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
      className="w-full bg-linear-to-b from-white to-gray-50 min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200"
            >
              <Sparkles size={16} className="text-[#892ba4]" />
              <span className="text-sm font-medium text-[#892ba4]">
                Nossa Solução!
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
              >
                <span className="text-[#892ba4]">MAX</span>
              </h1>
              <h2 className="hero-text text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
                NEXT 2025 - FIAP
              </h2>
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
                  <Zap size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
                  Integração nativa com SAP
                </span>
              </div>
              <div className="feature-item flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
                  IA para lançamentos automáticos
                </span>
              </div>
              <div className="feature-item flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
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
                className="px-8 py-4 bg-[#892ba4] text-white rounded-lg font-semibold hover:bg-[#6d2282] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
              >
                Começar Agora
                <ArrowRight size={20} />
              </a>
              <a
                href="https://instagram.com/maxsolutions_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Saber Mais
              </a>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div ref={qrRef} className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-linear-to-br from-[#892ba4]/5 to-purple-600/5 rounded-3xl blur-xl"></div>

              {/* QR Code Container */}
              <div className="relative p-10 rounded-2xl">
                {/* Badge no Topo */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#892ba4] shadow-md">
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
