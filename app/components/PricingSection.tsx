"use client";

import { useState, useMemo } from "react";
import { DottedMap } from "@/components/ui/dotted-map";
import { motion } from "framer-motion";
import Image from "next/image";

// Dados dos cards mockados
const pricingCards = [
  {
    id: "message",
    badge: "TEXTO",
    badgeColor: "bg-green-400",
    iconColor: "bg-green-500",
    title: "Mensagens de Texto",
    description:
      "Processamento e análise de requisições via chat com IA avançada",
    descriptionMobile: "Processamento e análise via chat com IA",
    priceUSD: 0.01,
    unit: "por mensagem processada",
    unitMobile: "por mensagem",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    ),
  },
  {
    id: "voice",
    badge: "ÁUDIO",
    badgeColor: "bg-blue-400",
    iconColor: "bg-blue-500",
    title: "Análise de Áudio",
    description: "Transcrição e processamento de comandos de voz em tempo real",
    descriptionMobile: "Transcrição e processamento em tempo real",
    priceUSD: 0.0006,
    unit: "por minuto de áudio",
    unitMobile: "por minuto",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    ),
  },
  {
    id: "image",
    badge: "VISUAL",
    badgeColor: "bg-purple-400",
    iconColor: "bg-purple-500",
    title: "Reconhecimento Visual",
    description:
      "Identificação de produtos e validades através de visão computacional",
    descriptionMobile: "Identificação de produtos e validades",
    priceUSD: 0.001,
    unit: "por imagem analisada",
    unitMobile: "por imagem",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "BRL">("BRL");
  const exchangeRate = 5.36;

  // Otimização: usa useMemo para evitar recalcular preços a cada render
  const formatPrice = useMemo(() => {
    return (priceUSD: number) => {
      const symbol = currency === "USD" ? "$" : "R$";
      const value =
        currency === "USD"
          ? priceUSD.toFixed(4)
          : (priceUSD * exchangeRate).toFixed(4);

      return (
        <>
          <span className="text-green-500">{symbol}</span> {value}
        </>
      );
    };
  }, [currency, exchangeRate]);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-[#892ba4]">
      {/* DottedMap Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <DottedMap dotRadius={0.4} className="w-full h-full *:fill-white" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Hospitais perdem{" "}
              <span className="relative inline-block text-red-300">
                até 30% do inventário
                {/* Linha grifada animada */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2,4 Q75,1 150,4 T298,4"
                    stroke="#fca5a5"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </span>{" "}
              anualmente.
              <br />
              Com IA, você paga apenas{" "}
              <span className="relative inline-block text-green-300">
                centavos por operação
                {/* Linha grifada animada */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2,4 Q75,1 150,4 T298,4"
                    stroke="#86efac"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-base md:text-lg max-w-3xl mx-auto"
            >
              Enquanto perdas custam milhões, nossa plataforma processa tudo por
              frações de centavo.
            </motion.p>
          </div>

          {/* Currency Toggle with Flags */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 inline-flex gap-2 border border-white/30">
              <button
                onClick={() => setCurrency("BRL")}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-150 flex items-center gap-3 ${
                  currency === "BRL"
                    ? "bg-white text-[#892ba4] shadow-lg scale-105"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Image
                  src="/images/brazil-.png"
                  alt="Brasil"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                Real
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-150 flex items-center gap-3 ${
                  currency === "USD"
                    ? "bg-white text-[#892ba4] shadow-lg scale-105"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Image
                  src="/images/united-states.png"
                  alt="USA"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                Dólar
              </button>
            </div>
            <p className="text-white/70 text-sm font-medium">
              Cotação: US$ 1.00 = R$ {exchangeRate.toFixed(2)}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mb-16">
            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
              {pricingCards.map((card) => (
                <div key={card.id} className="group">
                  <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 h-full hover:shadow-2xl overflow-hidden">
                    {/* Badge */}
                    <div
                      className={`absolute top-0 left-0 ${card.badgeColor} text-white px-4 py-1.5 rounded-br-2xl rounded-tl-3xl font-bold text-xs shadow-lg`}
                    >
                      {card.badge}
                    </div>

                    <div className="mb-6 pt-2">
                      <div
                        className={`w-20 h-20 ${card.iconColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {card.icon}
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="border-t border-white/20 pt-6">
                      <div className="text-5xl font-black text-white mb-2 font-mono">
                        {formatPrice(card.priceUSD)}
                      </div>
                      <p className="text-white/60 text-sm font-medium">
                        {card.unit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Scrollable horizontal */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
              <div className="flex gap-4 pb-4 min-w-max">
                {pricingCards.map((card) => (
                  <div key={card.id} className="group w-[280px]">
                    <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/30 h-full overflow-hidden">
                      {/* Badge */}
                      <div
                        className={`absolute top-0 left-0 ${card.badgeColor} text-white px-3 py-1 rounded-br-2xl rounded-tl-3xl font-bold text-xs shadow-lg`}
                      >
                        {card.badge}
                      </div>

                      <div className="mb-4 pt-2">
                        <div
                          className={`w-16 h-16 ${card.iconColor} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}
                        >
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {card.icon}
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-xs leading-relaxed">
                          {card.descriptionMobile}
                        </p>
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <div className="text-3xl font-black text-white mb-1 font-mono">
                          {formatPrice(card.priceUSD)}
                        </div>
                        <p className="text-white/60 text-xs font-medium">
                          {card.unitMobile}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Comparison - Otimizado para Mobile e Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/30 mb-12"
          >
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="text-red-300 text-4xl font-black mb-2">30%</div>
                <p className="text-white text-xl font-semibold mb-2">
                  Perda média em almoxarifados hospitalares sem IA
                </p>
                <p className="text-white/60 text-sm">
                  Validade vencida, extravio e desperdício
                </p>
              </div>
              <div className="text-right border-l border-white/30 pl-8">
                <div className="text-green-300 text-4xl font-black mb-2">
                  {"<"}0.1%
                </div>
                <p className="text-white text-xl font-semibold mb-2">
                  Custo operacional com o MAX
                </p>
                <p className="text-white/60 text-sm">
                  Centavos por milhares de operações
                </p>
              </div>
            </div>

            {/* Mobile Layout - Vertical Stack */}
            <div className="md:hidden flex flex-col gap-6">
              <div className="text-left">
                <div className="text-red-300 text-4xl font-black mb-2">30%</div>
                <p className="text-white text-lg font-semibold mb-1">
                  Perda média em almoxarifados hospitalares sem IA
                </p>
                <p className="text-white/60 text-sm">
                  Validade vencida, extravio e desperdício
                </p>
              </div>

              <div className="border-t border-white/30 pt-6">
                <div className="text-right">
                  <div className="text-green-300 text-4xl font-black mb-2">
                    {"<"}0.1%
                  </div>
                  <p className="text-white text-lg font-semibold mb-1">
                    Custo operacional com o MAX
                  </p>
                  <p className="text-white/60 text-sm">
                    Centavos por milhares de operações
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
