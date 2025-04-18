import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <Image
                src="/images/refit-logo.png"
                alt="ReFit Logo"
                width={120}
                height={50}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Donnez une seconde vie à vos vêtements avec nos ateliers et tutoriels de réparation et customisation.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-2">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/inspirations"
                  className="text-gray-300 hover:text-[#ff5722] transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                  Inspirations
                </Link>
              </li>
              <li>
                <Link href="/tutos" className="text-gray-300 hover:text-[#ff5722] transition-colors flex items-center">
                  <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                  Tutos
                </Link>
              </li>
              <li>
                <Link
                  href="/evenements"
                  className="text-gray-300 hover:text-[#ff5722] transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#ff5722] transition-colors flex items-center">
                  <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-2">Contact</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full mt-3"></span>8 bis Rue de la Fontaine au Roi
                <br />
                75011 Paris, France
              </p>
              <p className="flex items-center">
                <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                contact@refit.fr
              </p>
              <p className="flex items-center">
                <span className="bg-gray-800 h-1 w-4 mr-2 rounded-full"></span>
                01 23 45 67 89
              </p>
            </address>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-900 p-3 rounded-full text-gray-300 hover:text-[#ff5722] hover:bg-gray-800 transition-all"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-900 p-3 rounded-full text-gray-300 hover:text-[#ff5722] hover:bg-gray-800 transition-all"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-900 p-3 rounded-full text-gray-300 hover:text-[#ff5722] hover:bg-gray-800 transition-all"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-900 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                />
                <button
                  type="submit"
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Re_Fit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
