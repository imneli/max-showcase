import {
  MessageSquare,
  BarChart3,
  Package,
  Database,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function DashboardSection() {
  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
              <BarChart3 size={16} className="text-[#892ba4]" />
              <span className="text-sm font-medium text-[#892ba4]">
                Dashboard Inteligente
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Gestão Completa em{" "}
                <span className="text-[#892ba4]">Tempo Real</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Dashboard poderosa com visualização completa de produtos,
                almoxarifados e integração nativa com SAP. Chatbot inteligente
                para consultas instantâneas.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} className="text-[#892ba4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Chatbot com Acesso Total
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tire dúvidas, consulte estoque e obtenha insights
                    instantaneamente através do assistente IA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Package size={20} className="text-[#892ba4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Visualização Completa de Produtos
                  </h3>
                  <p className="text-sm text-gray-600">
                    Monitore todos os produtos e almoxarifados em uma interface
                    intuitiva e responsiva
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Database size={20} className="text-[#892ba4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Integração Nativa com SAP
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sincronização bidirecional completa com seu sistema SAP em
                    tempo real
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="text-[#892ba4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
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
          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2 overflow-hidden">
            <div className="relative w-full max-w-[640px]">
              {/* Decorative Background */}
              <div className="absolute -inset-4 lg:-inset-8 bg-linear-to-br from-[#892ba4] to-purple-600 rounded-3xl blur-3xl opacity-20"></div>

              {/* MacBook Mockup */}
              <div className="relative w-full">
                {/* MacBook Screen */}
                <div className="relative bg-gray-900 rounded-t-2xl p-2 md:p-3 shadow-2xl w-full max-w-[90vw] mx-auto">
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
                                className="text-[#892ba4] mb-2"
                              />
                              <p className="text-xs text-gray-600">Analytics</p>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <Package
                                size={24}
                                className="text-[#892ba4] mb-2"
                              />
                              <p className="text-xs text-gray-600">Produtos</p>
                            </div>
                            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                              <MessageSquare
                                size={24}
                                className="text-[#892ba4] mb-2"
                              />
                              <p className="text-xs text-gray-600">Chatbot</p>
                            </div>
                          </div>
                          <div className="h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                            <div className="text-center">
                              <Zap
                                size={32}
                                className="text-[#892ba4] mx-auto mb-2"
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
                <div className="relative h-2 md:h-3 bg-linear-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-lg w-[calc(100%+40px)] max-w-[95vw] mx-auto -ml-5">
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
