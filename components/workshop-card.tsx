import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WorkshopCardProps {
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

export default function WorkshopCard({
  id,
  title,
  type,
  date,
  time,
  duration,
  address,
  price,
  image,
  spots,
  totalSpots,
}: WorkshopCardProps) {
  const isAlmostFull = spots <= 3
  const isFull = spots === 0

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">{type}</span>
        </div>
        {isAlmostFull && !isFull && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Plus que {spots} place{spots > 1 ? "s" : ""}
            </span>
          </div>
        )}
        {isFull && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Complet</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        <div className="flex items-center mb-2 text-gray-700">
          <Calendar className="h-4 w-4 mr-2 text-refit-500" />
          <span>{date}</span>
        </div>

        <div className="flex items-center mb-2 text-gray-700">
          <Clock className="h-4 w-4 mr-2 text-refit-500" />
          <span>
            {time} ({duration})
          </span>
        </div>

        <div className="flex items-center mb-4 text-gray-700">
          <MapPin className="h-4 w-4 mr-2 text-refit-500" />
          <span className="text-sm">{address}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">{price}</span>
          <span className="text-sm text-gray-500">
            {spots}/{totalSpots} places disponibles
          </span>
        </div>

        <Button
          className={`w-full ${isFull ? "bg-gray-300 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
          disabled={isFull}
        >
          {isFull ? "Complet" : "Réserver"}
        </Button>
      </div>
    </div>
  )
}
