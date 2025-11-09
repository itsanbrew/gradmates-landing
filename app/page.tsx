import Header from '@/components/Header'
import ProductDescription from '@/components/ProductDescription'
import EmailSignup from '@/components/EmailSignup'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-blue/5 via-cool-grey to-orange/5">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          <ProductDescription />
          <EmailSignup />
        </div>
      </div>
    </main>
  )
}

