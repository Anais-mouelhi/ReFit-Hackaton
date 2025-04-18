"use client"
import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Fonction pour faire défiler en douceur vers une section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset pour tenir compte du header
        behavior: "smooth",
      })
      // Fermer le menu après avoir cliqué sur un lien
      setIsMenuOpen(false)
    } else if (window.location.pathname !== "/") {
      // Si on n'est pas sur la page d'accueil, rediriger vers la page d'accueil avec l'ancre
      window.location.href = `/#${sectionId}`
    }
  }

  const navLinks = [
    { href: "#inspiration-section", label: "Inspirations" },
    { href: "#tutorials-section", label: "Tutos" },
    { href: "#events-section", label: "Événements" },
    { href: "#faq-section", label: "FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/30 ${
        scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo à gauche */}
        <div className="logo">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-white">
            Re<span className="font-bold">_</span>Fit
          </Link>
        </div>

        {/* Menu burger pour mobile */}
        {isMobile && (
          <button className="text-white p-2 focus:outline-none z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Menu</span>
          </button>
        )}

        {/* Menu mobile */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 pt-20 px-6">
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href.substring(1))}
                  className="text-lg font-medium text-white hover:text-[#ff5722] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reserver"
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors text-center mt-4"
              >
                Réserver un atelier
              </Link>
            </nav>
          </div>
        )}

        {/* Navigation à droite (visible uniquement sur desktop) */}
        {!isMobile && (
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href.substring(1))}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
