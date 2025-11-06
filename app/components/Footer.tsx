import { Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-white border-t border-gray-200">
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
            <h3 className="text-heading font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#integrantes"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Integrantes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-heading font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <Mail size={18} className="mt-0.5 text-primary" />
                <a
                  href="mailto:maxsolutionsai@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  maxsolutionsai@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Instagram size={18} className="mt-0.5 text-primary" />
                <a
                  href="https://instagram.com/maxsolutions_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  @maxsolutions_ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 py-4 border-t border-gray-200 -mx-4 px-6 -mb-6 bg-black rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white font-medium text-sm">
              © 2025 MAX. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
