import { cn } from "@/lib/utils"

type DividerStyle = "wave" | "angle" | "dots" | "simple"

interface SectionDividerProps {
  style?: DividerStyle
  className?: string
  color?: string
  invertedColor?: string
  flipped?: boolean
}

export default function SectionDivider({
  style = "wave",
  className,
  color = "#fff5f3",
  invertedColor = "white",
  flipped = false,
}: SectionDividerProps) {
  const renderDivider = () => {
    switch (style) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={cn("w-full h-16 md:h-24", flipped ? "rotate-180" : "", className)}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill={flipped ? invertedColor : color}
            ></path>
          </svg>
        )
      case "angle":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={cn("w-full h-12 md:h-20", flipped ? "rotate-180" : "", className)}
          >
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill={flipped ? invertedColor : color}></path>
          </svg>
        )
      case "dots":
        return (
          <div className={cn("flex justify-center py-6", className)}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-refit-300"></div>
              <div className="w-3 h-3 rounded-full bg-refit-400"></div>
              <div className="w-4 h-4 rounded-full bg-refit-500"></div>
              <div className="w-3 h-3 rounded-full bg-refit-400"></div>
              <div className="w-2 h-2 rounded-full bg-refit-300"></div>
            </div>
          </div>
        )
      case "simple":
      default:
        return (
          <div className={cn("flex justify-center py-4", className)}>
            <div className="w-full h-[2px] bg-white opacity-80"></div>
          </div>
        )
    }
  }

  return <div className="section-divider">{renderDivider()}</div>
}
