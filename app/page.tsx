import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import TutorialsCarousel from "@/components/tutorials-carousel"
import InspirationGallery from "@/components/inspiration-gallery"
import EventsCarousel from "@/components/events-carousel"
import FAQSection from "@/components/faq-section"
import DesignElements from "@/components/design-elements"

export default function Home() {
  return (
    <>
      {/* Hero wrapper with background image */}
      <div className="relative h-screen">
        {/* Background image for header and hero only */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/the-attico-lead-1-1614081835.jpg?crop=0.445xw:1.00xh;0.279xw,0&resize=2048:*"
            alt="Fashion background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <SiteHeader />

        {/* Hero Section */}
        <section className="h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <div className="hero-content flex flex-col items-center text-center space-y-8 animate-slide-up max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
                  <span className="block md:inline">Donnez une</span>{" "}
                  <span className="block md:inline">seconde vie</span>{" "}
                  <span className="hidden md:inline">à vos vêtements</span>
                  <span className="block md:hidden">à vos vêtements</span>
                </h1>
                <p className="text-lg leading-relaxed text-white">Apprends à re-pimper tes vetêments avec nos ateliers </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/reserver"
                    className="bg-black text-white px-8 py-5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    Reserver un atelier
                  </Link>
                  <Link
                    href="/partner"
                    className="bg-[#FF5722] text-white px-8 py-5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="bg-[#fff5f3]">
        {/* Divider entre Hero et Tutorials */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] bg-white opacity-80 my-2"></div>
        </div>

        {/* Tutorials Carousel Section */}
        <section id="tutorials-section" className="relative">
          <DesignElements variant="light" />
          <TutorialsCarousel />
        </section>

        {/* Divider entre Tutorials et Inspiration */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] bg-white opacity-80 my-2"></div>
        </div>

        {/* Inspiration Gallery Section */}
        <section id="inspiration-section" className="relative">
          <DesignElements variant="dense" />
          <InspirationGallery />
        </section>

        {/* Divider entre Inspiration et Events */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] bg-white opacity-80 my-2"></div>
        </div>

        {/* Events Carousel Section */}
        <section id="events-section" className="relative">
          <DesignElements />
          <EventsCarousel />
        </section>

        {/* Divider entre Events et FAQ */}
        <div className="container mx-auto px-4">
          <div className="h-[2px] bg-white opacity-80 my-2"></div>
        </div>

        {/* FAQ Section */}
        <section id="faq-section" className="relative">
          <DesignElements variant="light" />
          <FAQSection />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
