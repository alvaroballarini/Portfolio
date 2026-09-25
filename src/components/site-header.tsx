"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#perfil", label: "Perfil" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Inicio - Álvaro Ballarini">
          <span>AB</span><span className="brand-name">Álvaro Ballarini</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <a href="mailto:alvaroballarini03@gmail.com?subject=Oportunidad%20Full%20Stack" className="nav-cta">Contacto</a>
        </nav>
        <button type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar navegación" : "Abrir navegación"} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <a href="mailto:alvaroballarini03@gmail.com?subject=Oportunidad%20Full%20Stack">Contacto</a>
        </nav>
      )}
    </header>
  );
}
