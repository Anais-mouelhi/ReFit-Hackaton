interface DesignElementsProps {
  variant?: "default" | "light" | "dense"
  className?: string
}

export default function DesignElements({ variant = "default", className = "" }: DesignElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {/* Cercles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border-2 border-white/10 opacity-50"></div>
      <div className="absolute bottom-40 left-[5%] w-40 h-40 rounded-full border border-white/20 opacity-40"></div>

      {/* Formes géométriques */}
      <div className="absolute top-1/4 left-[15%] w-20 h-20 rotate-45 border border-white/10 opacity-30"></div>
      <div className="absolute bottom-1/3 right-[20%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"></div>

      {variant === "dense" && (
        <>
          <div className="absolute top-1/2 left-[30%] w-16 h-16 rounded-full bg-white/5"></div>
          <div className="absolute top-[15%] left-[50%] w-24 h-24 rotate-12 border border-white/10 opacity-20"></div>
          <div className="absolute bottom-[10%] right-[35%] w-28 h-28 rounded-full border-2 border-white/5 opacity-30"></div>
        </>
      )}

      {/* Lignes */}
      <div className="absolute top-[30%] left-0 w-[20%] h-[1px] bg-white/10"></div>
      <div className="absolute bottom-[25%] right-0 w-[15%] h-[1px] bg-white/10"></div>

      {/* Éléments spécifiques à la mode */}
      <div className="absolute top-[15%] right-[25%] opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L8 6H16L12 2Z" stroke="white" strokeWidth="1" />
          <path
            d="M8 6V20C8 21.1046 8.89543 22 10 22H14C15.1046 22 16 21.1046 16 20V6"
            stroke="white"
            strokeWidth="1"
          />
          <path d="M8 12H16" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[20%] opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8L19 8" stroke="white" strokeWidth="1" />
          <path d="M5 12L19 12" stroke="white" strokeWidth="1" />
          <path d="M5 16L19 16" stroke="white" strokeWidth="1" />
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Points */}
      <div className="absolute top-[40%] right-[40%] grid grid-cols-3 gap-4 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white"></div>
        ))}
      </div>

      {variant === "light" && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5"></div>}
    </div>
  )
}
