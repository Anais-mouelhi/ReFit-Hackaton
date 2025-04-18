"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Tutorial {
  id: number
  type: "Réparer" | "Customiser"
  title: string
  description: string
  image: string
}

export default function TutorialsCarousel() {
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

  const tutorials: Tutorial[] = [
    {
      id: 1,
      type: "Réparer",
      title: "Réparer et embellir",
      description: "Des astuces stylées pour cacher les accrocs avec de la broderie.",
      image: "https://i.pinimg.com/736x/86/5b/80/865b800579379528e71e1f9983319e5e.jpg",
    },
    {
      id: 2,
      type: "Customiser",
      title: "Customiser un tote bag",
      description: "Un tuto facile pour transformer un tote bag basique en accessoire stylé.",
      image: "https://i.pinimg.com/736x/cb/21/87/cb21872a95b7c4513988d3ee45a74e32.jpg",
    },
    {
      id: 3,
      type: "Réparer",
      title: "Personnaliser ces baskets",
      description: "Un DIY simple pour des baskets uniques.",
      image: "https://i.pinimg.com/736x/61/09/0b/61090bb31230eebf7925e4beba558630.jpg",
    },
    {
      id: 4,
      type: "Réparer",
      title: "Personnaliser vos jeans",
      description: "Un DIY simple pour donner une nouvelle vie à vos jeans.",
      image:
        "https://i.pinimg.com/736x/8d/be/ff/8dbeff5e64706d7587cac8aa67466d6f.jpg",
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
        <h2 className="section-title">Nos tutoriels</h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="w-[280px] sm:w-[350px] flex-shrink-0 card card-hover snap-start">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tutorial.image || "/placeholder.svg"}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {tutorial.type}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-black bg-opacity-70 rounded-full p-4 hover:bg-opacity-90 transition-all transform hover:scale-110">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </button>
                </div>
              </div>
              <div className="p-6 h-[150px]">
                <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.description}</p>
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
              aria-label="Tutoriel précédent"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 hover:bg-[#ffccbc] hover:border-[#ffccbc]"
              aria-label="Tutoriel suivant"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
