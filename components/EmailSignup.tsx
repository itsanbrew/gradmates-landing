import Script from 'next/script'

export default function EmailSignup() {
  return (
    <section className="bg-cool-grey rounded-2xl p-8 sm:p-12 shadow-lg border border-sky-blue/20 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy mb-4">
          Join the Waitlist
        </h2>
        <p className="text-dark-navy/70 text-base sm:text-lg">
          Be among the first to experience smarter graduate housing matching
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div 
          style={{ width: '100%', height: '500px' }} 
          data-fillout-id="a9dV6NCnvFus" 
          data-fillout-embed-type="standard" 
          data-fillout-inherit-parameters=""
          data-fillout-dynamic-resize=""
        ></div>
        <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
      </div>
    </section>
  )
}
