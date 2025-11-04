import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function FoundersSection() {
  const founders = [
    {
      name: "Matheus Montovaneli",
      linkedin: "https://www.linkedin.com/in/matheusmontovaneli/",
      github: "https://github.com/imneli",
      avatar: "https://avatars.githubusercontent.com/u/154631371?v=4",
    },
    {
      name: "Johnny",
      linkedin: "https://www.linkedin.com/in/joao-romero/",
      github: "https://github.com/gh-johnny",
      avatar: "https://avatars.githubusercontent.com/u/109112878?v=4",
    },
    {
      name: "André Nakamatsu Rocha",
      linkedin: "https://www.linkedin.com/in/andrenakarocha/",
      github: "https://github.com/andrenakarocha",
      avatar: "https://avatars.githubusercontent.com/u/103290037?v=4",
    },
  ];

  return (
    <section id="integrantes" className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nossos <span className="text-[#892ba4]">Integrantes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a equipe por trás da revolução na gestão de almoxarifados
          </p>
        </div>

        {/* Founders Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scrollbar-hide pb-4">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 min-w-[280px] shrink-0"
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#892ba4]">
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-black text-center mb-2">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-600 text-center mb-6">
                Integrante
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-[#892ba4] hover:text-white transition-colors text-[#892ba4]"
                  aria-label={`LinkedIn de ${founder.name}`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-[#892ba4] hover:text-white transition-colors text-[#892ba4]"
                  aria-label={`GitHub de ${founder.name}`}
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
