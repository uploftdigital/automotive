"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/app/content";
import { Brand } from "./brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className="site-header shell">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-contact" href="#contact">Get a quote <ArrowUpRight size={15} aria-hidden="true" /></a>
      <button
        className="menu-toggle"
        type="button"
        ref={toggle}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav hidden={!open} className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        {[...navigation, { href: "#contact", label: "Get a quote" }].map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}<ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
