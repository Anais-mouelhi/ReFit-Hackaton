"use client"
import Link from "next/link"
import WorkshopCard from "@/components/workshop-card"

// Types
interface Workshop {
  id: number
  title: string
  type: string
  date: string
  time: string
  duration: string
  address: string
  price: string
  image: string
  spots: number
  totalSpots: number
}

interface WorkshopsProps {
  selectedLocation?: number | null
}

export default function Workshops({ selectedLocation }: WorkshopsProps) {
  // Données fictives des ateliers
  const workshops: Workshop[] = [
    {
      id: 1,
      title: "Réparer et embellir vos vêtements",
      type: "Réparation",
      date: "20 Avril 2025",
      time: "14h00",
      duration: "2h30",
      address: "8 bis Rue de la Fontaine au Roi, 75011 Paris",
      price: "45€",
      image:
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      spots: 5,
      totalSpots: 8,
    },
    {
      id: 2,
      title: "Customiser vos t-shirts",
      type: "Customisation",
      date: "15 Mai 2025",
      time: "10h00",
      duration: "3h00",
      address: "12 Rue du Faubourg Saint-Antoine, 75012 Paris",
      price: "50€",
      image:
        "https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      spots: 2,
      totalSpots: 10,
    },
    {
      id: 3,
      title: "Upcycling de jeans",
      type: "Upcycling",
      date: "5 Juin 2025",
      time: "18h30",
      duration: "2h00",
      address: "35 Boulevard de Magenta, 75010 Paris",
      price: "40€",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      spots: 0,
      totalSpots: 6,
    },
    {
      id: 4,
      title: "Initiation à la broderie",
      type: "Broderie",
      date: "12 Juillet 2025",
      time: "14h00",
      duration: "3h00",
      address: "18 Rue des Abbesses, 75018 Paris",
      price: "55€",
      image:
        "https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      spots: 8,
      totalSpots: 8,
    },
  ]

  // Filtrer les ateliers en fonction de l'emplacement sélectionné
  // Dans une application réelle, vous utiliseriez cette valeur pour filtrer les ateliers
  const filteredWorkshops = selectedLocation ? workshops.filter((_, index) => index % 2 === 0) : workshops

  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Ateliers disponibles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkshops.map((workshop) => (
          <Link
            href={`/reserver/${workshop.id}`}
            key={workshop.id}
            className="block transition-transform hover:-translate-y-1"
          >
            <WorkshopCard {...workshop} />
          </Link>
        ))}
      </div>
    </div>
  )
}
