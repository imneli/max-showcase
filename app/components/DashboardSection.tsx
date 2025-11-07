"use client";

import {
  MessageSquare,
  BarChart3,
  Package,
  Database,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const macbookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-b from-white to-gray-50 py-20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arc - Top Left connecting to previous section */}
        <svg
          className="absolute -top-20 -left-20 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            d="M0,200 Q50,50 200,0"
            stroke="#892ba4"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Large Circle - Right Side */}
        <div className="absolute top-1/3 -right-32 w-80 h-80 border-2 border-purple-200/40 rounded-full"></div>

        {/* Square Grid - Bottom Left */}
        <div className="absolute bottom-10 left-10 w-20 h-20 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full border border-purple-400 rounded-sm"
            ></div>
          ))}
        </div>

        {/* Connecting Curve to next section */}
        <svg
          className="absolute -bottom-20 right-1/4 w-96 h-96 opacity-15"
          viewBox="0 0 300 300"
        >
          <path
            d="M0,50 Q150,100 300,150"
            stroke="#892ba4"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
        </svg>

        {/* Gradient Blob - Left */}
        <div className="absolute top-40 -left-20 w-64 h-64 bg-linear-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl"></div>

        {/* Accent Dots */}
        <div className="absolute top-20 right-40 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div ref={contentRef} className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="content-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
              <BarChart3 size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Dashboard Inteligente
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="content-title text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
                <span className="relative inline-block">
                  Gestão Completa
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5,9 Q150,3 295,9"
                      stroke="#892ba4"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                em <span className="text-primary shine-effect">Tempo Real</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Dashboard{" "}
                <span className="relative inline-block font-semibold text-heading">
                  poderosa
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3,5 Q100,2 197,5"
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                com visualização completa de produtos, almoxarifados e{" "}
                <span className="relative inline-block font-semibold text-black">
                  integração nativa
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 280 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3,5 Q140,2 277,5"
                      stroke="#a855f7"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                com SAP. Chatbot inteligente para{" "}
                <span className="relative inline-block font-semibold text-black">
                  consultas instantâneas
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 320 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3,5 Q160,2 317,5"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="feature-card flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">
                    Chatbot com Acesso Total
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tire dúvidas, consulte estoque e obtenha insights
                    instantaneamente através do assistente IA
                  </p>
                </div>
              </div>

              <div className="feature-card flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Package size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">
                    Visualização Completa de Produtos
                  </h3>
                  <p className="text-sm text-gray-600">
                    Monitore todos os produtos e almoxarifados em uma interface
                    intuitiva e responsiva
                  </p>
                </div>
              </div>

              <div className="feature-card flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Database size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">
                    Integração Nativa com SAP
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sincronização bidirecional completa com seu sistema SAP em
                    tempo real
                  </p>
                </div>
              </div>

              <div className="feature-card flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-1">
                    Analytics e Relatórios
                  </h3>
                  <p className="text-sm text-gray-600">
                    Gráficos, métricas e relatórios detalhados para tomada de
                    decisão estratégica
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - MacBook Mockup with Video */}
          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div
              ref={macbookRef}
              className="relative w-full max-w-[640px] px-4 md:px-6"
            >
              {/* Decorative Background */}
              <div className="absolute -inset-4 lg:-inset-8 bg-linear-to-br from-primary to-purple-600 rounded-3xl blur-2xl opacity-10"></div>

              {/* MacBook Mockup */}
              <div className="relative w-full">
                {/* MacBook Screen */}
                <div className="relative bg-gray-900 rounded-t-2xl p-2 md:p-3 shadow-xl w-full mx-auto">
                  {/* MacBook M4 Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative bg-black rounded-b-lg w-16 h-4 md:w-20 md:h-5 flex items-center justify-center">
                      {/* Camera */}
                      <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div
                    className="relative w-full bg-white rounded-lg overflow-hidden"
                    style={{ aspectRatio: "16/10" }}
                  >
                    {/* Video Container */}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="/videos/dashboard-demo.mp4"
                        type="video/mp4"
                      />
                      {/* Fallback */}
                      <div className="w-full h-full bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                        <div className="text-center space-y-6 max-w-md">
                          {/* Mock Dashboard Elements */}
                          <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <BarChart3
                                size={24}
                                className="text-primary mb-2"
                              />
                              <p className="text-xs text-gray-600">Analytics</p>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <Package
                                size={24}
                                className="text-primary mb-2"
                              />
                              <p className="text-xs text-gray-600">Produtos</p>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <MessageSquare
                                size={24}
                                className="text-primary mb-2"
                              />
                              <p className="text-xs text-gray-600">Chatbot</p>
                            </div>
                          </div>
                          <div className="h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                            <div className="text-center">
                              <Zap
                                size={32}
                                className="text-primary mx-auto mb-2"
                              />
                              <p className="text-sm font-semibold text-gray-700">
                                Dashboard MAX
                              </p>
                              <p className="text-xs text-gray-500">
                                Demo em breve
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </video>
                  </div>
                </div>

                {/* MacBook Base */}
                <div className="relative h-2 md:h-3 bg-linear-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-md w-[calc(100%+40px)] mx-auto -ml-5">
                  {/* Hinge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gray-500 rounded-b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
