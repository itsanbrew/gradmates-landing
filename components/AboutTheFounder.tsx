import Image from 'next/image'

export default function AboutTheFounder() {
  return (
    <section id="founder" className="bg-gradient-to-br from-orange/10 via-accent/5 to-sky-blue/10 rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-orange/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent mb-4">
            About the Founder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg border-2 border-sky-blue/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-navy mb-4">
                Kendra Siegel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Background in education, entrepreneurship, and property management. Brings passion and real life experience tackling the wicked problem that exists within the space of graduate students and their housing.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-sky-blue/20">
                <svg className="w-6 h-6 text-anchor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:gradmateshq@gmail.com" 
                  className="text-anchor font-semibold hover:text-sky-blue transition-colors text-lg"
                >
                  gradmateshq@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/founderphoto.png"
                  alt="Kendra Siegel, Founder of Gradmates"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

