"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Event {
  id: number
  type: string
  title: string
  date: string
  address: string
  description: string
  image: string
}

export default function EventsCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const events: Event[] = [
    {
      id: 1,
      type: "Réparation",
      title: "Réparer et embellir",
      date: "20 Avril 2025",
      address: "8 bis Rue de la Fontaine au Roi, 75011 Paris",
      description: "Des astuces stylées pour cacher les accrocs avec de la broderie.",
      image:
        "https://i.pinimg.com/736x/9e/ab/d9/9eabd991d273c530c9d2b9538e0b0eed.jpg",
    },
    {
      id: 2,
      type: "Customisation",
      title: "Customiser vos t-shirts",
      date: "15 Mai 2025",
      address: "12 Rue du Faubourg Saint-Antoine, 75012 Paris",
      description: "Apprenez à transformer vos t-shirts basiques en pièces uniques.",
      image:
        "https://i.pinimg.com/736x/19/b1/9f/19b19f42783336876fd75f1417661212.jpg",
    },
    {
      id: 3,
      type: "Upcycling",
      title: "Upcycling de jeans",
      date: "5 Juin 2025",
      address: "35 Boulevard de Magenta, 75010 Paris",
      description: "Transformez vos vieux jeans en accessoires et nouveaux vêtements.",
      image:
        "https://i.pinimg.com/736x/83/3c/39/833c3977639a8f8fa95d91d5f95a5bcf.jpg",
    },
    {
      id: 4,
      type: "Broderie",
      title: "Initiation à la broderie",
      date: "12 Juillet 2025",
      address: "18 Rue des Abbesses, 75018 Paris",
      description: "Apprenez les bases de la broderie pour personnaliser vos vêtements.",
      image:
        "https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = container.querySelector("div")?.offsetWidth || 0
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-10 md:py-12 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Les événements Re Fashion</h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event) => (
            <div key={event.id} className="min-w-[250px] sm:min-w-[280px] flex-shrink-0 card card-hover snap-start">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-center mb-2">{event.title}</h3>
                <div className="flex items-center justify-center text-sm mb-1 text-[#ff5722]">
                  <Calendar className="h-4 w-4 mr-1" />
                  <p className="font-medium">{event.date}</p>
                </div>
                <div className="flex items-center justify-center text-xs text-gray-600 mb-3">
                  <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                  <p className="truncate">{event.address}</p>
                </div>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                <Button className="w-full bg-[#ff5722] text-white hover:bg-[#e64a19] border border-[#ffccbc]">
                  S'inscrire
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - hidden on mobile */}
        {!isMobile && (
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 hover:bg-[#ffccbc] hover:border-[#ffccbc]"
              aria-label="Événement précédent"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 hover:bg-[#ffccbc] hover:border-[#ffccbc]"
              aria-label="Événement suivant"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
