"use client";

import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full bg-emerald-950/40 text-emerald-300 px-3 py-1 text-xs font-medium border border-emerald-500/20">
              Full Stack Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Desarrollo productos B2B con foco en
              </span>
              <br />
              <span className="text-zinc-300">
                datos, rendimiento y estabilidad
              </span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg">
              Más de cuatro años construyendo y evolucionando aplicaciones con
              Node.js, TypeScript, React y Next.js. Experiencia en optimización
              SQL e integración con sistemas existentes en .NET.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Ver Proyectos <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/alvaroballarini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" /> GitHub   
              </Link>
              <Link
                href="https://www.linkedin.com/in/alvaro-ballarini/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Link>
              <a
                href="/CV_Alvaro_Ballarini_ES_ATS.pdf"
                download="CV_Alvaro_Ballarini_ES_ATS.pdf"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                aria-label="Descargar CV"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
