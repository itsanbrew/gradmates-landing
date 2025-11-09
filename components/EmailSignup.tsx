export default function EmailSignup() {
  return (
    <section id="waitlist" className="bg-gradient-to-br from-sky-blue/10 via-anchor/5 to-accent/10 rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-sky-blue/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-anchor to-sky-blue bg-clip-text text-transparent mb-4">
          Join the Waitlist
        </h2>
        <p className="text-dark-navy text-lg font-medium">
          Be among the first to experience smarter graduate housing matching
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <iframe 
          className="airtable-embed w-full rounded-xl shadow-lg" 
          src="https://airtable.com/embed/appNKC7rHbak5SdRF/pagaNq15J1WGBeuyb/form" 
          frameBorder="0" 
          width="100%" 
          height="533" 
          style={{ background: 'transparent', border: '1px solid #66B2FF' }}
        ></iframe>
      </div>
    </section>
  )
}

