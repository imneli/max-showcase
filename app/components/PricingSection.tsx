"use client";

import { useState } from "react";
import { DottedMap } from "@/components/ui/dotted-map";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Preços pré-calculados para mudança instantânea
  const prices = {
    message: {
      USD: "$ 0.01",
      BRL: "R$ 0.05",
    },
    voice: {
      USD: "$ 0.0006",
      BRL: "R$ 0.003",
    },
    image: {
      USD: "$ 0.001",
      BRL: "R$ 0.005",
    },
  };

  const formatPrice = (cardId: string) => {
    const price = prices[cardId as keyof typeof prices][currency];
    const [symbol, value] = price.split(" ");
    return (
      <>
        <span className="text-green-500">{symbol}</span> {value}
      </>
    );
  };

  return (
    <section className="relative py-12 md:py-26 lg:py-16 overflow-hidden bg-[#892ba4]">
      {/* DottedMap Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <DottedMap dotRadius={0.4} className="w-full h-full *:fill-white" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hospitais perdem{" "}
              <span className="relative inline-block text-red-300">
                até 30% do inventário
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-300 rounded-full"></span>
              </span>{" "}
              anualmente.
              <br />
              Com IA, você paga apenas{" "}
              <span className="relative inline-block text-green-300">
                centavos por operação
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-300 rounded-full"></span>
              </span>
              .
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto">
              Enquanto perdas custam milhões, nossa plataforma processa tudo por
              frações de centavo.
            </p>
          </div>

          {/* Currency Toggle with Flags */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <Tabs
              value={currency}
              onValueChange={(value) => setCurrency(value as "USD" | "BRL")}
              className="w-auto"
            >
              <TabsList className="bg-white/20 backdrop-blur-md border border-white/30 h-auto p-1.5 rounded-full">
                <TabsTrigger
                  value="BRL"
                  className="px-6 py-3 rounded-full font-bold data-[state=active]:bg-white data-[state=active]:text-[#892ba4] data-[state=active]:shadow-lg text-white hover:bg-white/10 flex items-center gap-3 transition-all duration-75"
                >
                  <Image
                    src="/images/brazil-.png"
                    alt="Brasil"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  Real
                </TabsTrigger>
                <TabsTrigger
                  value="USD"
                  className="px-6 py-3 rounded-full font-bold data-[state=active]:bg-white data-[state=active]:text-[#892ba4] data-[state=active]:shadow-lg text-white hover:bg-white/10 flex items-center gap-3 transition-all duration-75"
                >
                  <Image
                    src="/images/united-states.png"
                    alt="USA"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  Dólar
                </TabsTrigger>
              </TabsList>
            </Tabs>
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
                        {formatPrice(card.id)}
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
                          {formatPrice(card.id)}
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
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/30 mb-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
