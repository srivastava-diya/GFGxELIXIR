import React from "react";
import { Separator } from "../ui/separator";
import { Calendar, Clock, Github, Linkedin, Mail, Twitter } from "lucide-react";

// Footer with Survey Corps Theme

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-2 text-white flex items-center gap-2 font-light">
              <span className="text-3xl animate-pulse">⚔️</span>
              AOT HACKATHON
            </h3>
            <p className="text-gray-400">
              GIVE YOUR HEART! Battling titans. Building the future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Event Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Feb 15-17, 2025
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                72 Hours
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white transition-colors">
                  Tracks
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white transition-colors">
                  Sponsors
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hackathon@gfgxelixir.com
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-white/10 mb-6" />
        <div className="text-center text-gray-500">
          <p>&copy; 2025 GfG X Elixir Tech Community. All rights reserved.</p>
          <p className="text-sm mt-2">Built with ❤️ for developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
