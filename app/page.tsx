'use client'

import Image from 'next/image'
import EmailSignup from '@/components/EmailSignup'
import { useState } from 'react'

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How does GradMates™ work?",
      answer: "GradMates™ matches graduate students with compatible roommates and verified housing options using a combination of preference-based filtering, lifestyle matching, and secure communication tools. You create a profile, set your housing and roommate preferences, browse recommended matches, and connect safely through the platform. Once you find a good fit, you can coordinate housing or move into a verified listing with confidence."
    },
    {
      question: "Is this safe for international students?",
      answer: "Yes. GradMates™ is designed with international students in mind. All profiles undergo verification checks, listings are screened for legitimacy, and communication stays on-platform for safety. We also provide guidance and resources to help international students understand local housing norms and avoid common rental scams."
    },
    {
      question: "How is housing verified?",
      answer: "GradMates™ uses a multi-step verification process that may include ownership checks, landlord identity verification, address validation, photo or video confirmation, and manual review by our team. Listings that pass all screening steps receive a \"Verified\" badge so students know they can trust the property."
    },
    {
      question: "Can I use GradMates™ if I already have a roommate?",
      answer: "Absolutely. You can use GradMates™ to search for housing even if your roommate situation is already settled. Simply create a group profile with your existing roommate(s), set your joint preferences, and browse housing options that fit your group size and budget."
    },
    {
      question: "How is my information protected?",
      answer: "Your information is protected through encrypted data storage, secure authentication, and strict privacy controls. GradMates™ never sells personal data, and only essential details are shared with potential matches or landlords. You control what information is visible on your profile, and all sensitive data is handled in compliance with industry-standard security practices."
    }
  ]
  return (
    <main 
      className="min-h-screen bg-white"
      style={{
        backgroundImage: 'url(/assets/realbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
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
        </div>
      </div>

      {/* Problem, Solution, How It Works Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Problem Section */}
            <div className="bg-white/95 rounded-xl p-6 sm:p-8 border-4 border-[#FF6F61] shadow-[0_4px_20px_rgba(255,111,97,0.3),0_0_0_1px_rgba(255,111,97,0.1)] hover:shadow-[0_6px_30px_rgba(255,111,97,0.4),0_0_0_1px_rgba(255,111,97,0.2)] transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6F61] to-[#FD9E09]"></div>
              <div className="absolute inset-0 border-2 border-[#FF6F61]/20 rounded-xl pointer-events-none"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FF6F61] mb-4 sm:mb-6 relative z-10 pb-3 border-b-2 border-[#FF6F61]/30">
                The Problem
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-dark-navy/80 relative z-10">
                <li className="flex items-start pl-2 border-l-2 border-[#FF6F61]/20">
                  <span className="text-[#FF6F61] mr-2 font-bold">•</span>
                  <span>Housing search is chaotic</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FF6F61]/20">
                  <span className="text-[#FF6F61] mr-2 font-bold">•</span>
                  <span>Random roommate assignments cause mismatches</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FF6F61]/20">
                  <span className="text-[#FF6F61] mr-2 font-bold">•</span>
                  <span>Group chats and spreadsheets don't work</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FF6F61]/20">
                  <span className="text-[#FF6F61] mr-2 font-bold">•</span>
                  <span>New-city housing is overwhelming</span>
                </li>
              </ul>
            </div>

            {/* Solution Section */}
            <div className="bg-white/95 rounded-xl p-6 sm:p-8 border-4 border-[#66B2FF] shadow-[0_4px_20px_rgba(102,178,255,0.3),0_0_0_1px_rgba(102,178,255,0.1)] hover:shadow-[0_6px_30px_rgba(102,178,255,0.4),0_0_0_1px_rgba(102,178,255,0.2)] transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#66B2FF] to-[#0072CE]"></div>
              <div className="absolute inset-0 border-2 border-[#66B2FF]/20 rounded-xl pointer-events-none"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0072CE] mb-4 sm:mb-6 relative z-10 pb-3 border-b-2 border-[#66B2FF]/30">
                The Solution
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-dark-navy/80 relative z-10">
                <li className="flex items-start pl-2 border-l-2 border-[#66B2FF]/20">
                  <span className="text-[#66B2FF] mr-2 font-bold">•</span>
                  <span>Smart matching — lifestyle-based compatibility</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#66B2FF]/20">
                  <span className="text-[#66B2FF] mr-2 font-bold">•</span>
                  <span>Verified housing — vetted graduate listings</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#66B2FF]/20">
                  <span className="text-[#66B2FF] mr-2 font-bold">•</span>
                  <span>Community-first support</span>
                </li>
              </ul>
            </div>

            {/* How It Works Section */}
            <div className="bg-white/95 rounded-xl p-6 sm:p-8 border-4 border-[#FD9E09] shadow-[0_4px_20px_rgba(253,158,9,0.3),0_0_0_1px_rgba(253,158,9,0.1)] hover:shadow-[0_6px_30px_rgba(253,158,9,0.4),0_0_0_1px_rgba(253,158,9,0.2)] transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FD9E09] to-[#66B2FF]"></div>
              <div className="absolute inset-0 border-2 border-[#FD9E09]/20 rounded-xl pointer-events-none"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FD9E09] mb-4 sm:mb-6 relative z-10 pb-3 border-b-2 border-[#FD9E09]/30">
                How It Works
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-dark-navy/80 relative z-10">
                <li className="flex items-start pl-2 border-l-2 border-[#FD9E09]/20">
                  <span className="text-[#FD9E09] mr-2 font-bold">•</span>
                  <span>Create your profile</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FD9E09]/20">
                  <span className="text-[#FD9E09] mr-2 font-bold">•</span>
                  <span>Share lifestyle and housing preferences</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FD9E09]/20">
                  <span className="text-[#FD9E09] mr-2 font-bold">•</span>
                  <span>Receive compatibility-based matches</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FD9E09]/20">
                  <span className="text-[#FD9E09] mr-2 font-bold">•</span>
                  <span>Connect and explore secure housing options</span>
                </li>
                <li className="flex items-start pl-2 border-l-2 border-[#FD9E09]/20">
                  <span className="text-[#FD9E09] mr-2 font-bold">•</span>
                  <span>Confidentiality and privacy built in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Exists Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 rounded-xl p-8 sm:p-12 shadow-lg border border-dark-navy/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-navy mb-6 sm:mb-8 text-center">
              Why This Exists
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-dark-navy/80 leading-relaxed">
              <p>
                Very early in my life, I learned what it feels like to live in a space that doesn't feel safe or supportive. It showed me how much your environment influences your ability to think clearly, connect with others, and feel like yourself.
              </p>
              
              <p>
                As a landlord working with graduate students over the years, I saw that many were experiencing the same challenges — moving to new communities, juggling intense workloads, and trying to make high-stakes housing decisions with nothing but guesswork to guide them. They deserved more than luck and hope.
              </p>
              
              <p>
                GradMates™ was created to offer a better way: a place where students can understand their options, trust their choices, and find living situations that match who they are and how they live. A place built around real compatibility, real clarity, and real belonging.
              </p>
              
              <p>
                Because home should be the most supportive part of your graduate journey — not the most stressful.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-dark-navy/10">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-dark-navy text-center italic">
                "This is not a product — it is a purpose."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Examples Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 rounded-xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(102,178,255,0.3),0_0_0_1px_rgba(102,178,255,0.1)] hover:shadow-[0_6px_30px_rgba(102,178,255,0.4),0_0_0_1px_rgba(102,178,255,0.2)] transition-all relative overflow-hidden border-4 border-[#66B2FF]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#66B2FF] to-[#0072CE]"></div>
            <div className="absolute inset-0 border-2 border-[#66B2FF]/20 rounded-xl pointer-events-none"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0072CE] mb-6 sm:mb-8 text-center relative z-10 pb-3 border-b-2 border-[#66B2FF]/30">
              Our Product
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-2 border-[#66B2FF]/30 overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/assets/Welcome.png"
                  alt="Welcome Screen Example"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-2 border-[#66B2FF]/30 overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/assets/Home.png"
                  alt="Home Screen Example"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-4 sm:pb-6 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 rounded-xl shadow-lg border border-dark-navy/10 overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-navy mb-6 sm:mb-8 text-center pt-8 sm:pt-12 px-8">
              Frequently Asked Questions
            </h2>
            
            <div className="divide-y divide-dark-navy/10">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-dark-navy/10 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-dark-navy/5 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-dark-navy pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-dark-navy text-xl sm:text-2xl font-bold flex-shrink-0">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base md:text-lg text-dark-navy/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Continued */}
      <div className="flex flex-col items-center justify-center px-4 pt-2 sm:pt-4 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Trusted and Built by Students Section */}
          <div className="flex flex-col items-center justify-center pt-2 sm:pt-4">
            <p className="text-dark-navy/70 text-sm sm:text-base md:text-lg mb-4 font-bold">
              Trusted and Built by Students at:
            </p>
            <Image
              src="/assets/school.png"
              alt="School Logo"
              width={400}
              height={160}
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
            />
          </div>

          {/* Waitlist Form Section */}
          <div id="waitlist" className="pt-6 sm:pt-8">
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

            {/* Privacy Policy and Terms of Service */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 mt-4 sm:mt-5">
              <a
                href="#"
                className="text-dark-navy/70 hover:text-dark-navy transition-colors text-xs sm:text-sm font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-dark-navy/70 hover:text-dark-navy transition-colors text-xs sm:text-sm font-medium"
              >
                Terms of Service
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
