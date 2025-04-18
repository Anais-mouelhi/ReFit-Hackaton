"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, Calendar, Plus, Minus, MapPin, Clock, User } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ReservationSteps from "@/components/reservation-steps"
import Image from "next/image"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export default function ReserverPage() {
  const router = useRouter()
  const [mapZoom, setMapZoom] = useState(13)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [activeWorkshop, setActiveWorkshop] = useState<number | null>(null)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const calendarButtonRef = useRef<HTMLInputElement>(null)

  // Fermer le calendrier quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        calendarButtonRef.current &&
        !calendarButtonRef.current.contains(event.target as Node)
      ) {
        setCalendarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const zoomIn = () => {
    setMapZoom((prev) => Math.min(prev + 1, 18))
  }

  const zoomOut = () => {
    setMapZoom((prev) => Math.max(prev - 1, 10))
  }

  const workshops = [
    {
      id: 1,
      title: "Réparer et embellir",
      address: "8 bis Rue de la Fontaine au Roi, 75011 Paris",
      date: "20 Avril 2025",
      time: "14h00 - 16h30",
      description: "Des astuces stylées pour cacher les accrocs avec de la broderie.",
      type: "Réparation",
      image:
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      spots: 5,
      totalSpots: 8,
    },
    {
      id: 2,
      title: "Customiser un tote bag",
      address: "12 Rue du Faubourg Saint-Antoine, 75012 Paris",
      date: "15 Mai 2025",
      time: "10h00 - 13h00",
      description: "Un atelier pour transformer un tote bag basique en accessoire stylé.",
      type: "Customisation",
      image:
        "https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      spots: 3,
      totalSpots: 10,
    },
    {
      id: 3,
      title: "Réparer vos baskets",
      address: "35 Boulevard de Magenta, 75010 Paris",
      date: "5 Juin 2025",
      time: "18h30 - 20h30",
      description:
        "Un atelier DIY pour réparer vos sneakers et les customiser. Apportez vos baskets usées et repartez avec des sneakers comme neuves !",
      type: "Réparation",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      spots: 2,
      totalSpots: 6,
    },
  ]

  const handleMarkerClick = (id: number) => {
    setActiveWorkshop(id)
    // Scroll to the workshop card
    const element = document.getElementById(`workshop-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const handleValidate = () => {
    router.push("/reserver/etape-2")
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FAF4F2] px-4 py-8 md:px-8 md:py-12 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Ajout de l'indicateur d'étapes */}
          <ReservationSteps currentStep={1} />

          {/* Search bar */}
          <div className="flex flex-col md:flex-row mb-10 rounded-full overflow-hidden shadow-md animate-slide-up">
            <div className="flex items-center bg-white px-4 py-3 flex-1 border-r border-gray-200">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Entrez votre adresse ou code postal"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="flex items-center bg-white px-4 py-3 flex-1 md:flex-initial md:w-64 relative">
              <div className="relative w-full">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    ref={calendarButtonRef}
                    type="text"
                    placeholder="Choisissez une date"
                    value={date ? format(date, "dd/MM/yyyy", { locale: fr }) : ""}
                    readOnly
                    className="w-full outline-none text-sm cursor-pointer"
                    onClick={() => setCalendarOpen(!calendarOpen)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-refit-500 text-white px-4 py-3 flex items-center justify-center hover:bg-refit-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Calendrier flottant avec z-index élevé */}
          {calendarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
              onClick={() => setCalendarOpen(false)}
            >
              <div
                ref={calendarRef}
                className="bg-white rounded-lg shadow-2xl p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Sélectionnez une date</h3>
                  <button onClick={() => setCalendarOpen(false)} className="text-gray-500 hover:text-gray-700">
                    ✕
                  </button>
                </div>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate)
                    setCalendarOpen(false)
                  }}
                  initialFocus
                  locale={fr}
                  fromDate={new Date()}
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Workshop cards */}
            <div className="w-full md:w-2/5 space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  id={`workshop-${workshop.id}`}
                  className={`bg-blue-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                    activeWorkshop === workshop.id ? "ring-2 ring-refit-500" : ""
                  }`}
                  onMouseEnter={() => setActiveWorkshop(workshop.id)}
                >
                  <div className="flex">
                    <div className="relative h-32 w-32 flex-shrink-0">
                      <Image
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg mb-1">{workshop.title}</h3>
                        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-medium shadow-sm">
                          {workshop.type}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1 text-refit-500" />
                        <p className="truncate">{workshop.address}</p>
                      </div>
                      <div className="flex items-center text-sm font-medium mb-1">
                        <Calendar className="h-4 w-4 mr-1 text-refit-500" />
                        <p>{workshop.date}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-1 text-refit-500" />
                        <p>{workshop.time}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <User className="h-4 w-4 mr-1 text-refit-500" />
                        <p>
                          {workshop.spots}/{workshop.totalSpots} places disponibles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1">
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors w-full">
                      Réserver
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              className="w-full md:w-3/5 h-[550px] relative rounded-xl overflow-hidden shadow-lg animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430434!2d2.2769948739278364!3d48.85894658138325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1650450458000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte des ateliers"
              ></iframe>

              {/* Zoom controls */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                <button
                  onClick={zoomIn}
                  className="bg-white w-8 h-8 rounded shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Zoom in"
                >
                  <Plus className="h-5 w-5" />
                </button>
                <button
                  onClick={zoomOut}
                  className="bg-white w-8 h-8 rounded shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Zoom out"
                >
                  <Minus className="h-5 w-5" />
                </button>
              </div>

              {/* Workshop markers */}
              {workshops.map((workshop, index) => {
                // Position markers at different locations
                const positions = [
                  { top: "30%", left: "50%" },
                  { top: "50%", left: "30%" },
                  { top: "70%", right: "30%" },
                ]
                const position = positions[index % positions.length]

                return (
                  <div
                    key={workshop.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={position}
                    onClick={() => handleMarkerClick(workshop.id)}
                  >
                    <div
                      className={`text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeWorkshop === workshop.id
                          ? "bg-refit-700 scale-125"
                          : "bg-refit-500 hover:bg-refit-600 hover:scale-110"
                      }`}
                    >
                      {workshop.id}
                    </div>
                    {activeWorkshop === workshop.id && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded shadow-md text-xs whitespace-nowrap">
                        {workshop.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Validate button */}
          <div className="flex justify-center mt-12 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <button
              className="bg-black text-white px-12 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 w-full md:w-auto"
              onClick={handleValidate}
            >
              Je valide
            </button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
