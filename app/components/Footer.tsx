import { Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/MAX.png"
                alt="MAX Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-black">MAX</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Sistema inteligente de gestão de almoxarifados apresentado no NEXT
              2025 - FIAP. Integração SAP e IA para revolucionar sua operação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-[#892ba4] transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#892ba4] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#892ba4] transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#892ba4] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <Mail size={18} className="mt-0.5 text-[#892ba4]" />
                <a
                  href="mailto:maxsolutionsai@gmail.com"
                  className="text-sm hover:text-[#892ba4] transition-colors"
                >
                  maxsolutionsai@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Instagram size={18} className="mt-0.5 text-[#892ba4]" />
                <a
                  href="https://instagram.com/maxsolutions_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#892ba4] transition-colors"
                >
                  @maxsolutions_ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 MAX. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-[#892ba4] transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#892ba4] transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
