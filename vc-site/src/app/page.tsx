"use client";

import Image from "next/image";
import { Vortex } from "@/components/vortex";
import { TextEffect } from "@/components/core/text-effect";
import SOPHONLOGO from "@/assets/sophon-logo.png";

export default function Home() {
  return (
    <Vortex
      backgroundColor="rgba(0,0,0,0.9)"
      rangeY={800}
      particleCount={600}
      baseRadius={0.7}
      rangeRadius={1.8}
      baseSpeed={0.2}
      rangeSpeed={1.8}
      className="flex items-start flex-col justify-between px-2 w-full"
      containerClassName="min-h-screen overflow-visible"
    >
      <div className="min-h-screen flex flex-col text-white p-6 md:p-8">
        {/* Main content */}
        <main className="flex-1 flex flex-col justify-center max-w-3xl pl-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={SOPHONLOGO}
              alt="Sophon Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <h2 className="font-bold text-2xl tracking-wider">
              SOPHON VENTURES
            </h2>
          </div>
          <TextEffect
            per="char"
            preset="fade"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Investing in Early Stage Projects
          </TextEffect>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-base md:text-lg opacity-90 max-w-xl">
              Backing visionary teams from day one, pairing capital with deep
              technical know-how and a global network to help them launch and
              scale.
            </p>
            <p className="text-base md:text-lg opacity-90 max-w-xl">
              Primarily looking at projects in the Solana ecosystem, but eager
              to hear what you&apos;re building!
            </p>
            <p className="text-base md:text-lg opacity-90 max-w-xl">
              Forward pitches to{" "}
              <a
                href="mailto:michael@sophonventures.com"
                className="underline text-blue-600 hover:text-blue-800"
              >
                michael@sophonventures.com
              </a>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs opacity-70">
            <span>© 2025 Sophon Technology Services LLC</span>
          </div>
        </footer>
      </div>
    </Vortex>
  );
}
