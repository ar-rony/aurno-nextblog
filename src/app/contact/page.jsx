

// app/contact/page.js
import { submitContactForm } from './actions'
import FaqAccordion from './FaqAccordion'
import SupportButton from './SupportButton'
import GoogleMap from './GoogleMap'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* --- Hero Section --- */}
        <section className='rounded-[2rem] border border-border bg-gradient-to-br from-purple-100 via-white to-slate-100 p-10 shadow-xl shadow-purple-200/25 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:border-slate-800 dark:shadow-black/20 mb-12'>
          <div className='max-w-3xl space-y-6'>
            <p className='text-sm uppercase tracking-[0.35em] text-purple-700 dark:text-purple-300'>Contact</p>
            <h1 className='text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white'>
              Get in Touch
            </h1>
            <p className='max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* --- Two‑Column Contact Section --- */}
        <section className="py-8 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Location & Contact */}
            <div className='space-y-8'>
              <div className='rounded-2xl border border-border bg-card p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
                <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4">
                  Location
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Anantara Qeshm Resort<br />
                  125 Serenity Bay Road<br />
                  Al Danah, Abu Dhabi 64320
                </p>
              </div>
              <div className='rounded-2xl border border-border bg-card p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
                <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  +971 7 123 4567<br />
                  +971 7 123 4568
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className='rounded-2xl border border-border bg-card p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10'>
              <h2 className="text-3xl font-bold mb-2 text-slate-950 dark:text-white">Tell Us What You Need</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our team is ready to assist you with every detail, big or small.
              </p>
              <form action={submitContactForm} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Enter full name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1 w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* --- Google Map Section --- */}
        <section className="py-8 mb-12">
          <div className='rounded-2xl border border-border overflow-hidden shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:shadow-black/10'>
            <GoogleMap />
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-8 mb-12">
          <div className='text-center mb-12'>
            <h2 className="text-5xl font-bold mb-4 text-slate-950 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Contact us if you still have any questions to make your experience smoother.
            </p>
          </div>
          <div className='rounded-2xl border border-border bg-card p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10 mb-8'>
            <FaqAccordion />
          </div>
          <div className="text-center">
            <SupportButton />
          </div>
        </section>
      </div>
    </main>
  )
}