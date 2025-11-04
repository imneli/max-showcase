import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/MAX.png"
              alt="MAX Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-black">MAX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-black hover:text-[#892ba4] transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#features"
              className="text-black hover:text-[#892ba4] transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-black hover:text-[#892ba4] transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-black hover:text-[#892ba4] transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
