"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/project";

export default function ProjectCard(
  { project }: { project?: Project } = { project: undefined },
) {
  const p =
    project ??
    ({
      slug: "demo",
      title: "Proyecto Demo",
      description: "Descripción breve del proyecto demo.",
      image: "/demo-proyecto-web.png",
      tags: ["Next.js", "TypeScript"],
      links: { demo: "#", repo: "#" },
    } satisfies Project);

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-white/10 bg-white/5 backdrop-blur pt-0">
        <div className="relative aspect-[20/10] group ">
          <Image
            src={
              p.image ||
              "/placeholder.svg?height=400&width=640&query=project%20screenshot"
            }
            alt={`Imagen del proyecto ${p.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>{" "}
        <CardHeader className="space-y-2">
          <CardTitle className="text-lg text-zinc-100">{p.title}</CardTitle>
          <p className="text-sm text-zinc-400">{p.description}</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="border-emerald-500/20 text-emerald-300 bg-emerald-950/30"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <Link
              href={p.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </Link>
            <Link
              href={p.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200"
            >
              <Github className="w-4 h-4" />
              Repo
            </Link>
          </div>
          {/* <Link
            href={`/proyectos/${p.slug}`}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium border border-white/10 hover:bg-white/5 text-zinc-200"
            aria-label={`Ver detalles de ${p.title}`}
          >
            Detalles
          </Link> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
