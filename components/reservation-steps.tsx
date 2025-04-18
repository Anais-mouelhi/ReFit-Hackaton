import React from "react"
interface ReservationStepsProps {
  currentStep: 1 | 2 | 3
}

export default function ReservationSteps({ currentStep }: ReservationStepsProps) {
  const steps = [
    { number: 1, label: "Sélection" },
    { number: 2, label: "Détails" },
    { number: 3, label: "Confirmation" },
  ]

  return (
    <div className="mb-10 pt-20 md:pt-24">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Réservation de votre atelier</h1>

      <div className="flex items-center justify-center max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step circle */}
            <div className="flex flex-col items-center relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step.number === currentStep
                    ? "border-[#00c2a8] text-[#00c2a8]"
                    : step.number < currentStep
                      ? "border-[#00c2a8] bg-[#00c2a8] text-white"
                      : "border-gray-300 text-gray-400"
                }`}
              >
                {step.number}
              </div>
              <span
                className={`text-xs mt-1 ${
                  step.number === currentStep ? "text-[#00c2a8] font-medium" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line (except after the last step) */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-2 ${step.number < currentStep ? "bg-[#00c2a8]" : "bg-gray-300"}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
