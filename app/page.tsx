import Image from 'next/image'
import EmailSignup from '@/components/EmailSignup'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with Logo and Sign Up Button */}
      <header className="w-full px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
        <div className="max-w-7xl mx-auto relative flex items-center justify-center min-h-[80px]">
          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Image
              src="/assets/gradmateslogo.png"
              alt="GradMates Logo"
              width={200}
              height={80}
              className="h-auto w-auto max-w-[180px] sm:max-w-[220px]"
              priority
            />
          </div>
          
          {/* Sign Up Button - Right aligned */}
          <div className="ml-auto flex items-center">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-anchor to-sky-blue text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base hover:shadow-lg transition-all hover:scale-105"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-navy leading-tight max-w-2xl mx-auto mt-8 sm:mt-12">
            Reduce the stress. Match for success.
          </h1>

          <div className="space-y-2 sm:space-y-3">
            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark-navy/80 leading-relaxed">
              Find your people—before you find your place.
            </h2>

            {/* Subcopy */}
            <p className="text-sm sm:text-base md:text-lg text-dark-navy/70 max-w-2xl mx-auto leading-relaxed">
              GradMates is a smarter, curated roommate-matching platform built just for grad students. No spam group chats. No endless scrolling. Just real humans you actually want to live with.
            </p>
          </div>

          {/* Early Access */}
          <p className="text-base sm:text-lg text-dark-navy/60 pt-1 font-bold">
            Early access drops Spring 2026
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#waitlist"
              className="inline-block bg-gradient-to-r from-anchor to-sky-blue text-white font-semibold px-8 py-4 rounded-full text-lg sm:text-xl hover:shadow-lg transition-all hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Waitlist Form Section */}
          <div id="waitlist" className="pt-16 sm:pt-24">
            <EmailSignup />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/assets/gradmateslogo.png"
                alt="GradMates Logo"
                width={240}
                height={96}
                className="h-auto w-auto max-w-[220px] sm:max-w-[260px]"
              />
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base font-semibold text-dark-navy mt-1">
              Find your mates. Find your place.
            </p>

            {/* Social Links and Contact */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 mt-4 sm:mt-5">
              {/* Instagram */}
              <a
                href="#"
                className="text-dark-navy/70 hover:text-dark-navy transition-colors text-xs sm:text-sm font-medium"
              >
                Instagram
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-dark-navy/70 hover:text-dark-navy transition-colors text-xs sm:text-sm font-medium"
              >
                YouTube
              </a>

              {/* Contact */}
              <a
                href="mailto:"
                className="text-dark-navy/70 hover:text-dark-navy transition-colors text-xs sm:text-sm font-medium"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-dark-navy/50 mt-4 sm:mt-5">
              © {new Date().getFullYear()} GradMates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
