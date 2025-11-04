import { Building2, TrendingDown, Package, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function DasaSection() {
  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* DASA Logo - Only on Mobile (Top) */}
        <div className="lg:hidden flex items-center justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-[#892ba4] to-purple-600 rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative p-8 rounded-2xl border border-gray-100">
              <Image
                src="/images/dasa.png"
                alt="DASA Logo"
                width={250}
                height={125}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mx-auto">
          {/* Left Side - Text Content (Desktop) */}
          <div className="space-y-6 lg:flex-1">
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
          <div className="space-y-4 lg:flex-1">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
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

            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
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

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
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
    </section>
  );
}
