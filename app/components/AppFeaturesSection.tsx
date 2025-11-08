"use client";

import { Mic, Camera, Package, Sparkles, Brain } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AppFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const iphoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full bg-linear-to-b from-gray-50 to-white py-20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc connecting from previous section - top left */}
        <svg
          className="absolute -top-20 -left-20 w-40 h-40 text-primary/10"
          viewBox="0 0 100 100"
        >
          <path
            d="M 0 100 Q 0 0 100 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        {/* Large circle - left side */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 border-2 border-purple-200/30 rounded-full"></div>

        {/* Small accent circles - right side */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-purple-400/20 rounded-full"></div>

        {/* Dot grid pattern - bottom right */}
        <div className="absolute bottom-20 right-10 grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          ))}
        </div>

        {/* Curved line connecting to next section - bottom */}
        <svg
          className="absolute -bottom-20 right-1/4 w-60 h-40 text-purple-300/20"
          viewBox="0 0 200 100"
        >
          <path
            d="M 0 0 Q 100 50 200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>

        {/* Arc accent - bottom left */}
        <svg
          className="absolute bottom-40 -left-10 w-32 h-32 text-purple-200/20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - iPhone 15 Mockup with Video */}
          <div className="flex items-center justify-center lg:justify-start">
            <div ref={iphoneRef} className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-8 bg-linear-to-br from-primary to-purple-600 rounded-3xl blur-3xl opacity-20"></div>

              {/* iPhone 15 Mockup */}
              <div className="relative">
                {/* iPhone Frame */}
                <div
                  className="relative bg-black rounded-[3rem] p-3 shadow-2xl"
                  style={{ width: "320px", height: "650px" }}
                >
                  {/* Dynamic Island */}
                  <div
                    className="absolute top-6 left-1/2 -translate-x-1/2 bg-black rounded-full z-10"
                    style={{ width: "100px", height: "30px" }}
                  ></div>

                  {/* Screen */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Image Container */}
                    <Image
                      src="/images/stocks.jpg"
                      alt="MAX App Interface"
                      width={320}
                      height={650}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>

                  {/* Power Button */}
                  <div className="absolute right-0 top-32 w-1 h-16 bg-black/50 rounded-l"></div>

                  {/* Volume Buttons */}
                  <div className="absolute left-0 top-28 w-1 h-12 bg-black/50 rounded-r"></div>
                  <div className="absolute left-0 top-44 w-1 h-12 bg-black/50 rounded-r"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Badge */}
            <div className="app-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Aplicativo Inteligente
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="app-title text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
                <span className="relative inline-block">
                  Controle Total
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5,9 Q150,3 295,9"
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                na{" "}
                <span className="text-primary shine-effect">Palma da Mão</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Aplicativo mobile{" "}
                <span className="relative inline-block font-semibold text-heading">
                  revolucionário
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 280 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3,5 Q140,2 277,5"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                que transforma a gestão do almoxarifado com recursos de{" "}
                <span className="relative inline-block font-semibold text-heading">
                  Inteligência Artificial
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 380 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3,5 Q190,2 377,5"
                      stroke="#ec4899"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                e assistente virtual inteligente.
              </p>
            </div>

            {/* Features Grid */}
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 scrollbar-hide">
              {/* Feature 1 */}
              <div className="app-feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="feature-icon h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Mic size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Lançamentos por Voz
                </h3>
                <p className="text-sm text-gray-600">
                  Registre entradas e saídas usando comandos de voz com IA
                </p>
              </div>

              {/* Feature 2 */}
              <div className="app-feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="feature-icon h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Camera size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Análise de Foto por IA
                </h3>
                <p className="text-sm text-gray-600">
                  Identifique produtos automaticamente através de fotos
                </p>
              </div>

              {/* Feature 3 */}
              <div className="app-feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="feature-icon h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Brain size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Assistente Virtual
                </h3>
                <p className="text-sm text-gray-600">
                  IA inteligente que auxilia em todas as operações
                </p>
              </div>

              {/* Feature 4 */}
              <div className="app-feature-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="feature-icon h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Package size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Acesso Total ao Estoque
                </h3>
                <p className="text-sm text-gray-600">
                  Visualize e gerencie todo o almoxarifado em tempo real
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
