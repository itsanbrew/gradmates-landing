'use client'

import Image from 'next/image'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="w-full border-b-2 border-sky-blue/20 bg-gradient-to-r from-white via-cool-grey to-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto flex items-center justify-center">
              <Image
                src="/assets/centered-logo.png"
                alt="Gradmates Logo"
                width={400}
                height={120}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </button>
          
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-dark-navy font-medium hover:text-anchor transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-sky-blue/10 text-sm sm:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-dark-navy font-medium hover:text-accent transition-colors px-2 sm:px-3 py-2 rounded-lg hover:bg-orange/10 text-sm sm:text-base hidden sm:block"
            >
              About the Founder
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-dark-navy font-medium hover:text-accent transition-colors px-2 py-2 rounded-lg hover:bg-orange/10 text-sm sm:hidden"
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient-to-r from-anchor to-sky-blue text-white font-semibold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Join Our Waitlist!
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

