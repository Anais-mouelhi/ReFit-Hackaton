"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Recycle, Scissors, Heart, Sparkles, Leaf, Zap } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"

export default function PartnerPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({ stat1: 0, stat2: 0, stat3: 0 })

  const ref = useRef(null)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  // Animation des statistiques
  useEffect(() => {
    if (statsInView) {
      const timer1 = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedStats((prev) => {
            const newStat1 = Math.min(prev.stat1 + 1, 12)
            const newStat2 = Math.min(prev.stat2 + 0.1, 3.9)
            const newStat3 = Math.min(prev.stat3 + 2, 36)

            if (newStat1 === 12 && newStat2 === 3.9 && newStat3 === 36) {
              clearInterval(interval)
            }

            return {
              stat1: newStat1,
              stat2: Number.parseFloat(newStat2.toFixed(1)),
              stat3: newStat3,
            }
          })
        }, 50)

        return () => clearInterval(interval)
      }, 300)

      return () => clearTimeout(timer1)
    }
  }, [statsInView])

  const missions = [
    {
      title: "Réparer",
      description:
        "Apprendre à réparer ce qui se répare, aux débutants et débutantes comme aux plus aguerris. Nos ateliers sont là pour te guider pas à pas dans la réparation de tes vêtements préférés. Couture, raccommodage, boutons, fermetures... on te montre, tu fais toi-même, et tu repars à nouveau stylé !",
      icon: <Scissors className="h-6 w-6" />,
      color: "#ff5722",
      image: "https://i.pinimg.com/736x/fb/37/58/fb3758b559c7136f55ad003eb8793bde.jpg",
    },
    {
      title: "Customiser",
      description:
        "Apprendre à customiser et faire ressortir son originalité et sa créativité à travers ses vêtements. Nos ateliers de personnalisation te donnent les techniques et les outils pour transformer tes vêtements basiques en pièces uniques qui te ressemblent et racontent ton histoire.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "#4CD080",
      image: "https://i.pinimg.com/736x/fb/37/58/fb3758b559c7136f55ad003eb8793bde.jpg",
    },
    {
      title: "Embellir",
      description:
        "Parfois, il suffit de peu de choses pour qu'un vêtement retrouve tout son éclat. Nos ateliers d'embellissement t'apprennent à raviver les couleurs, à ajouter des détails qui font la différence, à transformer l'ordinaire en extraordinaire. Parce que la mode durable peut aussi être spectaculaire !",
      icon: <Heart className="h-6 w-6" />,
      color: "#ff8a65",
      image: "https://i.pinimg.com/736x/a7/3e/8b/a73e8b7861f4873bff943d1f82d71c12.jpg",
    },
    {
      title: "Entretenir",
      description:
        "Prolonger la vie de nos vêtements passe aussi par un bon entretien. Nos ateliers te donnent toutes les astuces pour prendre soin de tes pièces préférées, les laver correctement, les ranger de façon optimale, et ainsi préserver leur qualité et leur durabilité année après année.",
      icon: <Leaf className="h-6 w-6" />,
      color: "#00BCD4",
      image: "https://i.pinimg.com/736x/a7/3e/8b/a73e8b7861f4873bff943d1f82d71c12.jpg",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fff5f3] pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          {/* Page title and back button */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui sommes-nous ?</h1>
            <Link
              href="/"
              className="absolute left-0 top-1 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-white/50 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </motion.div>

          {/* First section with image and text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16" ref={ref}>
            <motion.div className="relative h-[350px]" style={{ y, opacity }}>
              <Image
                src="https://i.pinimg.com/736x/fb/37/58/fb3758b559c7136f55ad003eb8793bde.jpg"
                alt="Fondateurs de ReFit"
                fill
                className="object-cover rounded-3xl"
              />
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white p-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Zap className="h-8 w-8 text-[#ff5722]" />
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p>
                  ReFit, c'est une initiative portée par Re_fashion avec une mission claire : remettre la réparation
                  textile au goût du jour en la rendant accessible, cool et créative pour les jeunes générations.
                </p>
                <p>
                  Aujourd'hui, réparer ses vêtements, ce n'est plus une corvée - c'est une activité fun, engagée et
                  créative, à vivre entre amis comme une vraie sortie. Grâce à notre web-app, tu peux trouver un
                  workshop dédié au métier de réparation, exactement comme tu assisterais à un cours de cuisine ou de
                  poterie. Tu repars avec ton vêtement réparé, mais surtout avec un nouveau skill en apprenant des
                  gestes utiles et en découvrant les métiers passionnants liés à la réparation textile.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second section with text and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <motion.div
              className="order-2 md:order-1 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="space-y-4">
                <p>
                  Et parce qu'on ne veut pas juste recoudre un bouton, on t'invite à aller plus loin : chaque atelier
                  est aussi l'occasion de personnaliser ton vêtement, de le transformer, de le faire évoluer à ton
                  image. Patch, broderies, couleurs... laisse parler ta créativité !
                </p>
                <p>
                  ReFit, c'est bien plus que de la réparation - c'est une expérience, un engagement pour la planète, et
                  par-dessus tout, un univers de savoir-faire et de créativité.
                </p>
                <p>Rejoins-nous, et deviens acteur d'une mode plus durable – stylée et responsable.</p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[350px] order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="https://i.pinimg.com/736x/c2/1b/83/c21b8391d2fa41c1916d1d6e6c4b4bb4.jpg"
                alt="Personne portant une veste réparée"
                fill
                className="object-cover rounded-3xl"
              />
              <motion.div
                className="absolute -top-5 -left-5 bg-white p-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Heart className="h-8 w-8 text-[#ff8a65]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Quelques chiffres clés - SECTION AMÉLIORÉE */}
          <motion.div
            className="mb-20"
            ref={statsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Quelques chiffres clés</h2>

            <div className="relative">
              {/* Éléments décoratifs */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#ff5722]/10 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#4CD080]/10 blur-3xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Carte 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-[#ff5722]/10 p-4 flex justify-center">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      <ShoppingBag className="h-8 w-8 text-[#ff5722]" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-4xl font-bold mb-2 text-[#ff5722]">{animatedStats.stat1}kg</h3>
                    <p className="text-gray-700">de vêtements sont achetés en moyenne par Français chaque année</p>
                  </div>
                </motion.div>

                {/* Carte 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-[#4CD080]/10 p-4 flex justify-center">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      <Recycle className="h-8 w-8 text-[#4CD080]" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-4xl font-bold mb-2 text-[#4CD080]">{animatedStats.stat2}kg</h3>
                    <p className="text-gray-700">de vêtements sont jetés chaque année par chaque Français</p>
                  </div>
                </motion.div>

                {/* Carte 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-[#FFCCBC]/30 p-4 flex justify-center">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      <Scissors className="h-8 w-8 text-[#ff8a65]" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-4xl font-bold mb-2 text-[#ff8a65]">{animatedStats.stat3}%</h3>
                    <p className="text-gray-700">des Français jettent des pièces abîmées et pourtant réparables</p>
                  </div>
                </motion.div>
              </div>

              {/* Ligne de connexion entre les cartes (visible uniquement sur desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>
            </div>
          </motion.div>

          {/* Nos missions - Version interactive avec onglets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Nos missions</h2>

            {/* Onglets de navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {missions.map((mission, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === index
                      ? `bg-[${mission.color}] text-white shadow-md`
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ backgroundColor: activeTab === index ? mission.color : "" }}
                >
                  {React.cloneElement(mission.icon, {
                    className: `h-5 w-5 ${activeTab === index ? "text-white" : "text-gray-500"}`,
                  })}
                  {mission.title}
                </button>
              ))}
            </div>

            {/* Contenu des onglets */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-5"
                >
                  <div className="p-8 md:col-span-3">
                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ color: missions[activeTab].color }}
                    >
                      {missions[activeTab].title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {missions[activeTab].description}
                    </motion.p>

                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href="/reserver"
                        className="inline-flex items-center px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: missions[activeTab].color }}
                      >
                        Découvrir nos ateliers
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="relative h-64 md:h-auto md:col-span-2">
                    <Image
                      src={missions[activeTab].image || "/placeholder.svg"}
                      alt={missions[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ backgroundColor: missions[activeTab].color }}
                    ></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[#ff5722] to-[#ff8a65] p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à donner une seconde vie à vos vêtements ?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté et participez à nos ateliers pour apprendre à réparer, customiser et embellir
              vos vêtements.
            </p>
            <Link
              href="/reserver"
              className="inline-flex items-center px-8 py-4 bg-white text-[#ff5722] rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Réserver un atelier
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
