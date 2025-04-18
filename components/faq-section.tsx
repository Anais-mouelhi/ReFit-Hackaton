"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "Comment réserver un atelier avec ReFit ?",
      answer:
        "Pour réserver un atelier avec ReFit, vous pouvez utiliser notre formulaire de réservation en ligne. Rendez-vous sur la page 'Réserver', sélectionnez l'atelier qui vous intéresse et cliquez sur 'Réserver'. Vous recevrez une confirmation par email après votre inscription.",
      category: "Réservation",
    },
    {
      question: "Quels types de vêtements puis-je apporter ?",
      answer:
        "Vous pouvez apporter tous types de vêtements : jeans, t-shirts, robes, chemises, vestes, etc. Nos ateliers sont adaptés pour travailler sur différentes matières comme le coton, la laine, le jean, la soie ou encore le polyester.",
      category: "Ateliers",
    },
    {
      question: "Dois-je avoir des compétences en couture ?",
      answer:
        "Aucune compétence préalable n'est nécessaire ! Nos ateliers sont conçus pour tous les niveaux, des débutants aux plus expérimentés. Nos animateurs vous guideront pas à pas dans toutes les étapes de réparation ou customisation.",
      category: "Ateliers",
    },
    {
      question: "Comment annuler ou modifier ma réservation ?",
      answer:
        "Pour annuler ou modifier votre réservation, contactez-nous par email à contact@refit.fr au moins 48h avant l'atelier. Précisez votre numéro de réservation et les modifications souhaitées. Pour une annulation, un remboursement complet est possible jusqu'à 48h avant l'atelier.",
      category: "Réservation",
    },
    {
      question: "Que se passe-t-il si je ne peux pas terminer mon projet pendant l'atelier ?",
      answer:
        "Si vous ne parvenez pas à terminer votre projet pendant la durée de l'atelier, nos animateurs vous donneront des conseils pour finaliser votre travail chez vous. Vous pouvez également réserver un nouvel atelier pour continuer votre projet avec notre assistance.",
      category: "Ateliers",
    },
  ]

  const categories = Array.from(new Set(faqItems.map((item) => item.category))).filter(Boolean) as string[]

  const filteredItems = activeCategory ? faqItems.filter((item) => item.category === activeCategory) : faqItems

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="py-10 md:py-12 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions sur nos ateliers ou le processus de réservation ? Consultez notre FAQ ci-dessous ou
            contactez-nous directement.
          </p>
        </div>

        {/* Category filters */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ container with orange background and rounded corners */}
        <div className="bg-[#ff5722] rounded-3xl p-8 md:p-10 shadow-lg">
          {/* FAQ items */}
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-medium pr-8">{item.question}</span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      openItem === index ? "bg-[#ff5722]" : "bg-gray-100"
                    }`}
                  >
                    {openItem === index ? (
                      <Minus className={`h-4 w-4 ${openItem === index ? "text-white" : "text-gray-600"}`} />
                    ) : (
                      <Plus className={`h-4 w-4 ${openItem === index ? "text-white" : "text-gray-600"}`} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                        <div className="pt-4 text-gray-600 leading-relaxed">{item.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mb-6 text-gray-700">Notre équipe est là pour vous aider avec toutes vos questions.</p>
            <a
              href="mailto:contact@refit.fr"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
