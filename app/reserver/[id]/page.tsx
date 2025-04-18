import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

interface WorkshopDetailPageProps {
  params: {
    id: string
  }
}

export default function WorkshopDetailPage({ params }: WorkshopDetailPageProps) {
  // Dans une application réelle, vous récupéreriez les données de l'atelier à partir de l'ID
  const workshop = {
    id: Number.parseInt(params.id),
    title: "Réparer et embellir vos vêtements",
    type: "Réparation",
    date: "20 Avril 2025",
    time: "14h00",
    duration: "2h30",
    address: "8 bis Rue de la Fontaine au Roi, 75011 Paris",
    price: "45€",
    description:
      "Apprenez à réparer vos vêtements abîmés et à les transformer en pièces uniques grâce à des techniques de broderie créative. Cet atelier vous permettra de donner une seconde vie à vos vêtements préférés tout en apprenant des techniques durables.",
    whatToBring: [
      "Vêtements à réparer (1-2 pièces maximum)",
      "Fil à broder (optionnel)",
      "Ciseaux de couture (si vous en avez)",
    ],
    included: [
      "Matériel de couture",
      "Fils de différentes couleurs",
      "Aiguilles et tambours",
      "Thé, café et collation",
    ],
    image:
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    spots: 5,
    totalSpots: 8,
    instructor: {
      name: "Marie Dupont",
      bio: "Couturière professionnelle avec 10 ans d'expérience dans l'upcycling et la mode durable.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    },
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen py-12 md:py-16 pt-20 md:pt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <Link
              href="/reserver"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:bg-refit-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image src={workshop.image || "/placeholder.svg"} alt={workshop.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  {workshop.type}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{workshop.title}</h1>

              <div className="flex items-center mb-3 text-gray-700">
                <Calendar className="h-5 w-5 mr-3 text-refit-500" />
                <span className="text-lg">{workshop.date}</span>
              </div>

              <div className="flex items-center mb-3 text-gray-700">
                <Clock className="h-5 w-5 mr-3 text-refit-500" />
                <span className="text-lg">
                  {workshop.time} ({workshop.duration})
                </span>
              </div>

              <div className="flex items-center mb-3 text-gray-700">
                <MapPin className="h-5 w-5 mr-3 text-refit-500" />
                <span className="text-lg">{workshop.address}</span>
              </div>

              <div className="flex items-center mb-6 text-gray-700">
                <Users className="h-5 w-5 mr-3 text-refit-500" />
                <span className="text-lg">
                  {workshop.spots}/{workshop.totalSpots} places disponibles
                </span>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-bold mb-6">{workshop.price}</div>
                <Button className="w-full py-6 text-lg bg-black hover:bg-gray-800">Réserver ma place</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">À propos de cet atelier</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{workshop.description}</p>

              <h3 className="text-xl font-bold mb-3">Ce que vous devez apporter</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                {workshop.whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-3">Ce qui est inclus</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                {workshop.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-4">Votre instructrice</h2>
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={workshop.instructor.image || "/placeholder.svg"}
                    alt={workshop.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{workshop.instructor.name}</h3>
              </div>
              <p className="text-gray-700">{workshop.instructor.bio}</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
