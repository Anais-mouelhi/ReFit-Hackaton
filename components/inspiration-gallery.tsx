"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InspirationImage {
  id: number
  src: string
  alt: string
}

export default function InspirationGallery() {
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

  const inspirationImages: InspirationImage[] = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/d1/74/08/d17408661662c5359ddd7464580770cc.jpg",
      alt: "Femme portant des vêtements customisés",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/c5/69/64/c56964631a49ef8a2f7f8b52df102d42.jpg",
      alt: "Broderie colorée sur tissu",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/af/55/99/af5599f925d9b4a3839c0637873a61a9.jpg",
      alt: "Fils de broderie colorés",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/236x/88/28/e4/8828e4b365f370f49db39f72f6a16478.jpg",
      alt: "Vêtements colorés sur cintre",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/236x/cc/84/f8/cc84f8457c5468f6b9bd9a767f9535b9.jpg",
      alt: "Atelier de couture avec machine à coudre",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = direction === "left" ? -300 : 300

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-10 md:py-12 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Des retouches inspirantes</h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {inspirationImages.map((image) => (
            <div
              key={image.id}
              className="min-w-[250px] sm:min-w-[300px] h-[300px] sm:h-[360px] flex-shrink-0 snap-start relative overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button className="bg-white text-black hover:bg-[#ffccbc]">Voir plus</Button>
                </div>
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
              aria-label="Image précédente"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 hover:bg-[#ffccbc] hover:border-[#ffccbc]"
              aria-label="Image suivante"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
