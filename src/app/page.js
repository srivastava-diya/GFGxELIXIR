"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  Trophy,
  Clock,
  Users,
  Sparkles,
  Zap,
  Code,
  Brain,
  Shield,
  Award,
  Calendar,
  MapPin,
  Mail,
  Github,
  Twitter,
  Linkedin,
  X,
} from "lucide-react";
import Hero from "@/components/subComponents/Hero";
import About from "@/components/subComponents/About";
import Cards from "@/components/subComponents/Card";
import Section from "@/components/subComponents/Section";
import Prizes from "@/components/subComponents/Prizes";
import FAQ from "@/components/subComponents/FAQ";
import CTA from "@/components/subComponents/CTA";
import Footer from "@/components/subComponents/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <Cards />
      <Section />
      <Prizes />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
