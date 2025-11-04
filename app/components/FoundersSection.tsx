"use client";

import { Linkedin, Github, Star, Crown, User2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do header
      gsap.from(headerRef.current?.children || [], {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animação dos cards com stagger
      const cards = cardsRef.current?.querySelectorAll(".founder-card");
      gsap.from(cards || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.3)",
      });

      // Animação dos badges (User icon)
      const badges = cardsRef.current?.querySelectorAll(".founder-badge");
      gsap.from(badges || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(2)",
        delay: 0.3,
      });

      // Animação das ondas decorativas
      const waves = cardsRef.current?.querySelectorAll(".founder-wave");
      gsap.from(waves || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const founders = [
    {
      name: "Matheus Montovaneli",
      linkedin: "https://www.linkedin.com/in/matheusmontovaneli/",
      github: "https://github.com/imneli",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHxl7SqzTAnUA/profile-displayphoto-shrink_800_800/B4DZdCL53BGkAg-/0/1749162106666?e=1763596800&v=beta&t=hlDPrTvubVbq56DCNomkxWXPWmG3DowHtqtdE7XfntI",
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
    <section
      ref={sectionRef}
      id="integrantes"
      className="w-full bg-white py-20 relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-4">
            Nosso{" "}
            <span
              className="bg-[#892ba4] font-bold text-white px-6 py-2 inline-block"
              style={{ clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0 80%)" }}
            >
              time
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a <span className="font-bold text-[#892ba4]">equipe</span>{" "}
            por trás do desenvolvimento da solução{" "}
            <span className="font-extrabold text-[#892ba4]">MAX</span>
          </p>
        </div>

        {/* Founders Grid */}
        <div
          ref={cardsRef}
          className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scrollbar-hide pb-4 pt-6"
        >
          {founders.map((founder, index) => (
            <div
              key={index}
              className="founder-card bg-white border-2 border-[#892ba4] rounded-2xl relative overflow-visible p-8 shadow-lg hover:shadow-xl transition-shadow min-w-[280px] shrink-0"
            >
              <div className="founder-badge absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-purple-400 text-white flex items-center justify-center text-sm font-semibold ">
                <User2 />
              </div>
              <div className="founder-wave absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-4 w-30 rounded-full bg-[#892ba4] text-white flex items-center justify-center"></div>
              <div className="founder-wave absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-48 rounded-full bg-[#892ba4] text-white flex items-center justify-center"></div>
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200">
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
                Co-fundador <span className="text-purple-700">&</span>{" "}
                Desenvolvedor
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center hover:bg-[#892ba4] hover:text-white transition-colors text-[#892ba4]"
                  aria-label={`LinkedIn de ${founder.name}`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center hover:bg-[#892ba4] hover:text-white transition-colors text-[#892ba4]"
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
