"use client";

import Link from "next/link";
import { Mail, Github, Twitter, Instagram, Globe } from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { quickLinks } from "@/lib/data/data";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-full mx-5  px-2">
        <div className="flex md:flex-row flex-col justify-evenly gap-8 text-left sm:text-sm">
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-blue-600 tracking-widest">
              STELLARIS
            </h1>
            <p className="text-gray-400 text-sm">
              Building the future with code and courage.
            </p>
            <Link
              href="#hero"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              ↑ BACK TO TOP
            </Link>
          </div>

          {/* Event Info */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              EVENT INFO
            </h2>
            <p className="text-gray-400 text-sm">March 28 - 29, 2026</p>
            <p className="text-gray-400 text-sm font-semibold">
              36 Hours of Innovation
            </p>
          </div>

          {/* Quicklinks */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              QUICKLINKS
            </h2>

            <ul className="flex flex-col gap-y-2 text-gray-400 text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      const section = document.querySelector(item.href);
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:underline transition-all"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              CONNECT
            </h2>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Mail size={16} /> techcommunityelixir@gmail.com
            </p>
            <div className="flex items-center gap-4 mt-1 text-gray-400">
              <Link
                href="https://www.elixircommunity.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Globe size={18} />
              </Link>
              <Link
                href="https://github.com/ElixirTechCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/geeksforgeeks_abesec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://discord.gg/vw9d2V4x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <IconBrandDiscord />
              </Link>
              <Link
                href="https://x.com/TheElixirTech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-xs space-y-1">
          <p>© 2026 GFG × ELIXIR TECH COMMUNITY. ALL RIGHTS RESERVED.</p>
          <p>
            Built with <span className="text-red-500">❤️</span> by GFG x ELIXIR
            Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
