"use client";

import { ArrowRight } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function EndSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      <div className="container mx-auto px-0 lg:px-6 relative">
        {/* 4 Linhas - vão de ponta a ponta mas respeitam a altura do container */}
        <div className="absolute left-[-100vw] right-[-100vw] top-0 h-px bg-gray-200" />
        <div className="absolute left-[-100vw] right-[-100vw] bottom-0 h-px bg-gray-200" />
        <div className="absolute left-0 top-[-100vh] bottom-[-100vh] w-px bg-gray-200" />
        <div className="absolute right-0 top-[-100vh] bottom-[-100vh] w-px bg-gray-200" />

        <div
          className="absolute left-[-100vw] right-[-100vw] h-px bg-gray-200"
          style={{ top: "-60px" }}
        />
        <div
          className="absolute left-[-100vw] right-[-100vw] h-px bg-gray-200"
          style={{ bottom: "-60px" }}
        />

        <div
          className="absolute left-0 w-5 h-5 bg-gray-200"
          style={{
            top: "-60px",
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute right-0 w-5 h-5 bg-gray-200"
          style={{
            top: "-60px",
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(50%, -50%)",
          }}
        />

        <div
          className="absolute left-0 w-5 h-5 bg-gray-200"
          style={{
            bottom: "-60px",
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(-50%, 50%)",
          }}
        />

        <div
          className="absolute right-0 w-5 h-5 bg-gray-200"
          style={{
            bottom: "-60px",
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(50%, 50%)",
          }}
        />

        <div
          className="absolute left-0 right-0"
          style={{ top: "-60px", height: "60px" }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern
                id="diagonal-lines-top"
                patternUnits="userSpaceOnUse"
                width="30"
                height="30"
              >
                <line
                  x1="0"
                  y1="30"
                  x2="30"
                  y2="0"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="1"
                />

                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="30"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines-top)" />
          </svg>
        </div>

        <div
          className="absolute left-0 right-0"
          style={{ bottom: "-60px", height: "60px" }}
        >
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern
                id="diagonal-lines-bottom"
                patternUnits="userSpaceOnUse"
                width="30"
                height="30"
              >
                <line
                  x1="0"
                  y1="30"
                  x2="30"
                  y2="0"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="1"
                />

                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="30"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-lines-bottom)"
            />
          </svg>
        </div>

        <div
          className="absolute left-0 top-0 w-5 h-5 bg-gray-200"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-5 h-5 bg-gray-200"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(50%, -50%)",
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-5 h-5 bg-gray-200"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(-50%, 50%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-5 h-5 bg-gray-200"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            transform: "translate(50%, 50%)",
          }}
        />

        <div className="w-full lg:max-w-7xl lg:mx-auto relative">
          <div className="bg-primary relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 pointer-events-none">
              <FlickeringGrid
                className="absolute inset-0"
                squareSize={4}
                gridGap={6}
                color="rgb(255, 255, 255)"
                maxOpacity={0.15}
                flickerChance={0.3}
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 xl:p-20 relative">
              <div className="flex-1 space-y-6 md:space-y-8 text-white w-full lg:max-w-2xl  lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-heading">
                  Você chegou ao{" "}
                  <span className="relative inline-block text-white italic font-semibold">
                    final
                    <svg
                      className="absolute left-0 -bottom-2 w-full h-3"
                      viewBox="0 0 200 12"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,6 Q20,3 40,6 T80,6 Q100,4 120,6 T160,6 Q180,4 198,6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  da página.
                </h2>

                <div className="space-y-1 md:space-y-2 text-xl md:text-md lg:text-md font-medium">
                  <p className="font-light">
                    Se chegou até aqui, é porque tá{" "}
                    <span className="underline italic font-semibold">
                      interessado.
                    </span>
                  </p>
                  <p>Clica abaixo e nos acompanhe!</p>
                </div>

                <div className="pt-4 md:pt-6">
                  <a
                    href="https://www.instagram.com/maxsolutions_ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 lg:px-10 py-2.5 md:py-3 bg-white text-heading font-bold text-base md:text-lg rounded-full hover:bg-heading hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="whitespace-nowrap">Nos acompanhe</span>
                    <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-heading text-white group-hover:bg-white group-hover:text-heading transition-all duration-300">
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center lg:justify-end w-full">
                <div className="relative w-full max-w-md lg:max-w-lg h-[300px] md:h-[350px] lg:h-[400px]">
                  <img
                    src="/images/chat-with-ai.svg"
                    alt="Final illustration"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector(
                          ".fallback-placeholder"
                        );
                        if (fallback)
                          (fallback as HTMLElement).style.display = "flex";
                      }
                    }}
                  />

                  <div
                    className="fallback-placeholder absolute inset-0 w-full h-full items-center justify-center text-white/30"
                    style={{ display: "none" }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <p className="text-sm">Imagem não encontrada</p>
                    </div>
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
