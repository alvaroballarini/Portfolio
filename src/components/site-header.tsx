"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import * as React from "react"
import ThemeToggle from "@/components/theme-toggle"

type NavItem = {
    href: string
    label: string
}

const navItems: NavItem[] = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
]

export default function Header({ showBorder = true }: { showBorder?: boolean } = { showBorder: true }) {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)

    return (
        <header
            className={cn(
                "sticky top-0 z-40 w-full bg-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20",
                showBorder && "border-b border-white/10"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight text-zinc-100">
                    <span className="text-emerald-400">{"<dev/>"}</span> Portfolio Alvaro Code
                </Link>

                <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm text-zinc-400 hover:text-zinc-100 transition-colors",
                                pathname === item.href && "text-zinc-100"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                        Hablemos
                    </Link>
                    <ThemeToggle />
                </nav>

                <div className="flex items-center gap-1 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        className="md:hidden text-zinc-200"
                        aria-label="Abrir navegación"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur" onClick={() => setOpen(false)}>
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-3" aria-label="Navegación móvil">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-sm text-zinc-200">
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contacto"
                            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                        >
                            Hablemos
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
