import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
              <Sparkles size={16} className="text-[#892ba4]" />
              <span className="text-sm font-medium text-[#892ba4]">
                Festival de Tecnologia
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <span className="text-[#892ba4]">MAX</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
                NEXT 2025 - FIAP
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              Sistema inteligente de gestão de almoxarifados com integração
              completa ao SAP. Utilize Inteligência Artificial para automatizar
              lançamentos, otimizar inventário e transformar a eficiência
              operacional da sua empresa.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
                  Integração nativa com SAP
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
                  IA para lançamentos automáticos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#892ba4]" />
                </div>
                <span className="text-black font-medium">
                  Gestão inteligente de estoque
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#892ba4] text-white rounded-lg font-semibold hover:bg-[#6d2282] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-200">
                Começar Agora
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Saber Mais
              </button>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-linear-to-br from-[#892ba4] to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

              {/* QR Code Container */}
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#892ba4] mb-2">
                      ESCANEIE PARA ACESSAR
                    </p>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="h-64 w-64 bg-white border-4 border-black rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* QR Code Pattern Simulation */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                      {[...Array(64)].map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.5 ? "bg-black" : "bg-white"
                          } rounded-sm`}
                        />
                      ))}
                    </div>
                    {/* Center Logo */}
                    <div className="relative z-10 h-16 w-16 bg-white rounded-lg border-2 border-black flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#892ba4]">
                        M
                      </span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-600">
                      Acesse a experiência completa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
