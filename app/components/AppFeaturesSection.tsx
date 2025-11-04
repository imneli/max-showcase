import { Mic, Camera, Package, Sparkles, Brain } from "lucide-react";
import Image from "next/image";

export default function AppFeaturesSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - iPhone 15 Mockup with Video */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-8 bg-linear-to-br from-[#892ba4] to-purple-600 rounded-3xl blur-3xl opacity-20"></div>

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
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-black/5 to-transparent z-10 flex items-center justify-between px-8 pt-3">
                      <span className="text-xs font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-black/30 rounded-sm"></div>
                        <div className="w-1 h-2 bg-black/30 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Video Container */}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/app-demo.mp4" type="video/mp4" />
                      {/* Fallback */}
                      <div className="w-full h-full bg-linear-to-br from-[#892ba4]/10 to-purple-100 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-[#892ba4] flex items-center justify-center">
                            <Package size={40} className="text-white" />
                          </div>
                          <p className="text-sm font-semibold text-gray-700">
                            MAX App
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Demo em breve
                          </p>
                        </div>
                      </div>
                    </video>
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
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm">
              <Sparkles size={16} className="text-[#892ba4]" />
              <span className="text-sm font-medium text-[#892ba4]">
                Aplicativo Inteligente
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Controle Total na{" "}
                <span className="text-[#892ba4]">Palma da Mão</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Aplicativo mobile revolucionário que transforma a gestão do
                almoxarifado com recursos de Inteligência Artificial e
                assistente virtual inteligente.
              </p>
            </div>

            {/* Features Grid */}
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 scrollbar-hide">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Mic size={24} className="text-[#892ba4]" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Lançamentos por Voz
                </h3>
                <p className="text-sm text-gray-600">
                  Registre entradas e saídas usando comandos de voz com IA
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Camera size={24} className="text-[#892ba4]" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Análise de Foto por IA
                </h3>
                <p className="text-sm text-gray-600">
                  Identifique produtos automaticamente através de fotos
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Brain size={24} className="text-[#892ba4]" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Assistente Virtual
                </h3>
                <p className="text-sm text-gray-600">
                  IA inteligente que auxilia em todas as operações
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[280px] sm:min-w-0">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Package size={24} className="text-[#892ba4]" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
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
