import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ReservationSteps from "@/components/reservation-steps"
import { Clock } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FAF4F2] py-16">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          {/* Ajout de l'indicateur d'étapes */}
          <ReservationSteps currentStep={3} />

          <h1 className="text-2xl md:text-3xl font-bold mb-8">Merci, votre réservation est confirmée 🎉!</h1>

          <div className="bg-[#d6f0ff] rounded-xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-4 text-center">Récapitulatif de la réservation</h2>
            <p className="text-center text-sm mb-6">Réparer et embellir</p>

            <div className="space-y-1 mb-4">
              <p className="text-sm">
                <span className="font-medium">20 Avril 2025</span>
              </p>
              <p className="text-sm">14h - 16h</p>
              <p className="text-sm">8 bis Rue de la Fontaine au Roi, 75011 Paris</p>
            </div>

            <div className="space-y-1 mb-4">
              <p className="text-sm font-medium">Marie Dubois</p>
              <p className="text-sm">marie.dubois@gmail.com</p>
            </div>

            <div className="space-y-1 mb-4">
              <p className="text-sm">Ajuster taille Coton</p>
              <p className="text-sm">Reprise d'ourlet / Ajustement de la taille / Ajustement des manches</p>
            </div>

            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <p>2 heures 30min</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-8 max-w-md mx-auto">
            Vous recevrez tous les détails par e-mail très bientôt. Besoin d'annuler ? Contactez-nous simplement à{" "}
            <a href="mailto:contact@refit.fr" className="text-refit-500 underline">
              contact@refit.fr
            </a>{" "}
            en précisant votre numéro de réservation.
          </p>

          <div className="flex justify-center">
            <Link
              href="/"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Retour sur la page d'accueil
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
