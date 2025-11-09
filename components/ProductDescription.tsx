export default function ProductDescription() {
  return (
    <section id="home" className="mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-12 sm:mb-16 overflow-visible">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-[1.4] pb-6 overflow-visible" style={{ paddingBottom: '1.5rem' }}>
          <span className="bg-gradient-to-r from-dark-navy via-anchor to-sky-blue bg-clip-text text-transparent block pb-2" style={{ display: 'block', paddingBottom: '0.5rem' }}>
            Find Your Mates.
          </span>
          <span className="block bg-gradient-to-r from-sky-blue via-anchor to-accent bg-clip-text text-transparent pt-4 pb-4 overflow-visible" style={{ display: 'block', paddingTop: '1rem', paddingBottom: '1.5rem' }}>
            Find Your Place.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-dark-navy/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Gradmates is an AI-driven platform that intelligently matches housemates and curates housing options, reducing stress and improving student well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12">
        <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-accent/30 transform hover:scale-105 transition-transform">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mr-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark-navy">The Problem</h2>
          </div>
          <p className="text-dark-navy/80 leading-relaxed text-lg">
            Graduate students face high stress, limited options, and unreliable or unsafe housing situations. 
            Finding the right place to live shouldn't add to the challenges of graduate school.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-blue/20 via-sky-blue/10 to-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-sky-blue/30 transform hover:scale-105 transition-transform">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-blue to-anchor flex items-center justify-center mr-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark-navy">The Solution</h2>
          </div>
          <p className="text-dark-navy/80 leading-relaxed text-lg">
            Gradmates is an intuitive, AI-driven platform that intelligently matches housemates and 
            curates housing options, reducing stress and improving student well-being.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange/20 via-anchor/15 to-sky-blue/20 rounded-2xl p-6 sm:p-8 border-2 border-orange/30 shadow-lg">
        <div className="flex items-start">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange to-accent flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark-navy mb-3">Reduce the Stress, Match for Success</h3>
            <p className="text-dark-navy/80 leading-relaxed mb-3 text-lg">
              Graduate school is challenging enough without the added burden of housing uncertainty. Our intelligent 
              matching system takes the guesswork out of finding your ideal living situation, connecting you with 
              compatible housemates and verified housing options that fit your lifestyle and budget.
            </p>
            <p className="text-dark-navy/80 leading-relaxed text-lg">
              We use advanced algorithms to analyze compatibility factors like study habits, cleanliness preferences, 
              social needs, and lifestyle patterns. This ensures you're matched with housemates who complement your 
              graduate school journey, creating a supportive living environment that enhances your academic success 
              rather than adding to your stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

