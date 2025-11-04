"use client";

import { Building2, TrendingDown, Package, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DasaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo DASA com entrada sutil e parallax
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        // Parallax no logo
        gsap.to(logoRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -50,
          ease: "none",
        });
      }

      // Conteúdo da esquerda com parallax
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Parallax no conteúdo
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -30,
        ease: "none",
      });

      // Cards de problema com bounce e cores
      const cards = cardsRef.current?.querySelectorAll(".problem-card");
      gsap.from(cards || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
      });

      // Parallax nos cards (mais rápido)
      gsap.to(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
        y: 50,
        ease: "none",
      });

      // Animação de shake nos ícones de problema ao aparecer
      gsap.from(cardsRef.current?.querySelectorAll(".problem-icon") || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        rotation: -10,
        duration: 0.3,
        stagger: 0.15,
        ease: "elastic.out(2, 0.3)",
        repeat: 3,
        yoyo: true,
      });

      // Parallax nos elementos decorativos
      if (parallaxRef.current) {
        const circles =
          parallaxRef.current.querySelectorAll(".parallax-circle");
        circles.forEach((circle, index) => {
          gsap.to(circle, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 + index * 0.5,
            },
            y: -80 - index * 30,
            rotation: 360,
            ease: "none",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-b from-gray-50 to-white py-20 relative overflow-hidden"
    >
      {/* Decorative Elements with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        {/* Floating circles with parallax */}
        <div className="parallax-circle absolute top-20 -right-20 w-64 h-64 border-2 border-[#892ba4]/20 rounded-full"></div>
        <div className="parallax-circle absolute bottom-40 -left-32 w-80 h-80 border-2 border-purple-300/20 rounded-full"></div>
        <div className="parallax-circle absolute top-1/2 left-1/4 w-40 h-40 border border-purple-200/30 rounded-full"></div>

        {/* Gradient blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-linear-to-br from-[#892ba4]/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-linear-to-tl from-purple-300/5 to-[#892ba4]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* DASA Logo - Only on Mobile (Top) */}
        <div className="lg:hidden flex items-center justify-center mb-12">
          <div ref={logoRef}>
            <Image
              src="/images/dasa.png"
              alt="DASA Logo"
              width={250}
              height={125}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mx-auto">
          {/* Left Side - Text Content (Desktop) */}
          <div ref={contentRef} className="space-y-6 lg:flex-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                <Building2 size={16} className="text-[#892ba4]" />
                <span className="text-sm font-medium text-[#892ba4]">
                  Projeto Empresarial
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Parceria com a{" "}
                <a
                  href="https://dasa.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#892ba4] hover:text-[#6d2282] transition-colors"
                >
                  DASA
                </a>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Solução desenvolvida em parceria com a DASA, uma das maiores
              empresas de saúde do Brasil, para resolver problemas críticos na
              gestão de almoxarifados e perda de estoque. O projeto passou por
              uma rigorosa seleção e foi selecionado para ser apresentado no
              NEXT 2025 - FIAP.
            </p>
          </div>

          {/* Right Side - Problem Cards */}
          <div ref={cardsRef} className="space-y-4 lg:flex-1">
            <div className="problem-card flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="problem-icon h-10 w-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <TrendingDown size={20} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">
                  Perda de Estoque
                </h4>
                <p className="text-sm text-gray-600">
                  Controle manual resultava em perdas significativas de
                  materiais e insumos
                </p>
              </div>
            </div>

            <div className="problem-card flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="problem-icon h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <AlertTriangle size={20} className="text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">
                  Gestão Ineficiente
                </h4>
                <p className="text-sm text-gray-600">
                  Processos desorganizados dificultavam o controle e
                  rastreamento de itens
                </p>
              </div>
            </div>

            <div className="problem-card flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="problem-icon h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Package size={20} className="text-[#892ba4]" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Nossa Solução</h4>
                <p className="text-sm text-gray-600">
                  Sistema inteligente com IA e integração SAP para automatização
                  completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Text - Section Separator (Full Width) */}
      <div className="w-full overflow-hidden pointer-events-none opacity-15 mt-8">
        <div
          className="flex whitespace-nowrap text-[100px] font-black"
          style={{
            WebkitTextStroke: "2px #892ba4",
            color: "transparent",
          }}
        >
          <div className="animate-marquee inline-block">
            MAX SOLUTIONS • MAX SOLUTIONS • MAX SOLUTIONS • MAX SOLUTIONS • MAX
            SOLUTIONS •
          </div>
          <div className="animate-marquee inline-block">
            MAX SOLUTIONS • MAX SOLUTIONS • MAX SOLUTIONS • MAX SOLUTIONS • MAX
            SOLUTIONS •
          </div>
        </div>
      </div>
    </section>
  );
}
