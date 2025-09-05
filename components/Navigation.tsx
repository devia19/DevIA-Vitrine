"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Zap } from "lucide-react"

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-devia.png"
              alt="DevIA"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-bold text-gray-900">DevIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/fonctionnalites" className="text-gray-700 hover:text-primary transition-colors">
              Fonctionnalités
            </Link>
            <Link href="/tarifs" className="text-gray-700 hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-primary transition-colors">
              Démo
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="hero" size="sm">
                <Zap className="w-4 h-4 mr-2" />
                Demander un devis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/fonctionnalites"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                href="/tarifs"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/demo"
                className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Démo
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Link href="/contact">
                  <Button variant="hero" className="w-full justify-start">
                    <Zap className="w-4 h-4 mr-2" />
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
