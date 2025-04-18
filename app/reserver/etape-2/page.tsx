"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ReservationSteps from "@/components/reservation-steps"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function ReservationStep2Page() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [clothingType, setClothingType] = useState("")
  const [fabricType, setFabricType] = useState("")
  const [repairDetails, setRepairDetails] = useState("")
  const [repairTypes, setRepairTypes] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [newsletter, setNewsletter] = useState(false)

  const handleRepairTypeChange = (type: string) => {
    if (repairTypes.includes(type)) {
      setRepairTypes(repairTypes.filter((t) => t !== type))
    } else {
      setRepairTypes([...repairTypes, type])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process form submission
    console.log({ email, clothingType, fabricType, repairTypes, repairDetails, files, newsletter })
    // Navigate to confirmation page
    router.push("/reserver/confirmation")
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FAF4F2] py-12 pt-20 md:pt-24">
        <div className="container max-w-2xl mx-auto px-4">
          {/* Ajout de l'indicateur d'étapes */}
          <ReservationSteps currentStep={2} />

          <form onSubmit={handleSubmit} className="bg-[#FAF4F2] rounded-lg p-6 animate-fade-in">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Votre adresse e-mail*
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Exemple@domaine.com"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-refit-500"
              />
            </div>

            {/* Clothing type field */}
            <div className="mb-6">
              <label htmlFor="clothingType" className="block text-sm font-medium mb-2">
                Le(s) type(s) de vêtement(s) à réparer*
              </label>
              <textarea
                id="clothingType"
                required
                value={clothingType}
                onChange={(e) => setClothingType(e.target.value)}
                placeholder="Ex : pantalon, veste, robe, chemise, manteau..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-refit-500 min-h-[80px]"
              />
            </div>

            {/* Fabric type field */}
            <div className="mb-6">
              <label htmlFor="fabricType" className="block text-sm font-medium mb-2">
                Le(s) type(s) de tissu(s) à réparer*
              </label>
              <input
                type="text"
                id="fabricType"
                required
                value={fabricType}
                onChange={(e) => setFabricType(e.target.value)}
                placeholder="Ex : Coton, laine, soie, jean, cuir, polyester..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-refit-500"
              />
            </div>

            {/* Repair type checkboxes */}
            <div className="mb-6">
              <p className="block text-sm font-medium mb-3">Quel est le type de réparation ?*</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="sizeAdjustment"
                    checked={repairTypes.includes("sizeAdjustment")}
                    onChange={() => handleRepairTypeChange("sizeAdjustment")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="sizeAdjustment" className="text-sm">
                    Reprise / Ajustement de taille
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="seamRepair"
                    checked={repairTypes.includes("seamRepair")}
                    onChange={() => handleRepairTypeChange("seamRepair")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="seamRepair" className="text-sm">
                    Réparation de couture
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="patching"
                    checked={repairTypes.includes("patching")}
                    onChange={() => handleRepairTypeChange("patching")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="patching" className="text-sm">
                    Rapiéçage
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="zipperButton"
                    checked={repairTypes.includes("zipperButton")}
                    onChange={() => handleRepairTypeChange("zipperButton")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="zipperButton" className="text-sm">
                    Remplacement de fermeture éclair/bouton
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="hemRepair"
                    checked={repairTypes.includes("hemRepair")}
                    onChange={() => handleRepairTypeChange("hemRepair")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="hemRepair" className="text-sm">
                    Reprise d'ourlet
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="holeRepair"
                    checked={repairTypes.includes("holeRepair")}
                    onChange={() => handleRepairTypeChange("holeRepair")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="holeRepair" className="text-sm">
                    Réparation de trou / accroc
                  </label>
                </div>
              </div>
            </div>

            {/* Additional details */}
            <div className="mb-8">
              <label htmlFor="repairDetails" className="block text-sm font-medium mb-2">
                Autres détails sur la réparation
              </label>
              <input
                type="text"
                id="repairDetails"
                value={repairDetails}
                onChange={(e) => setRepairDetails(e.target.value)}
                placeholder="Ex : zone concernée (manche, genou, bas de pantalon, col...)"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-refit-500"
              />
            </div>

            {/* File upload section */}
            <div className="mb-8">
              <p className="text-sm mb-4">
                Nous vous invitons à ajouter des photos en pièces jointes afin de permettre de mieux préparer vos
                ateliers
              </p>

              <div className="flex justify-center mb-2">
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <div className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors">
                    <Upload className="h-5 w-5" />
                    <span>Ajouter une pièce jointe</span>
                  </div>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.gif,.ppt,.pptx,.odt,.xls,.xlsx,.txt"
                  />
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Fichiers ajoutés:</p>
                  <ul className="text-sm text-gray-600">
                    {files.map((file, index) => (
                      <li key={index} className="mb-1">
                        {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-2">
                Fichiers de 24 Mo possibles
                <br />
                Types autorisés: .png, .pdf, .doc, .docx, .gif, .ppt, .pptx, .odt, .xls, .xlsx, .txt
              </p>
            </div>

            {/* Newsletter subscription */}
            <div className="mb-8 bg-[#FFF0EB] p-4 rounded-lg">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="newsletter" className="text-sm">
                  Je souhaite recevoir les actualités de ReFit et être informé·e des prochains ateliers!
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-black text-white px-12 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 w-full md:w-auto"
              >
                Je valide
              </Button>
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
