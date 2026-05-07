export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test Recruiting Emails.<br />
          <span className="text-[#58a6ff]">Hire Faster.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Create email template variants, send them to candidates, and track open &amp; reply rates automatically. Let data tell you which outreach actually works.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '3×', label: 'Higher reply rates with optimized templates' },
            { stat: '∞', label: 'Template variants you can test simultaneously' },
            { stat: '100%', label: 'Automated tracking — no manual logging' }
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6 text-sm">Everything you need to optimize recruiting outreach</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited email template variants',
              'Open &amp; reply rate tracking',
              'Automatic winner detection',
              'Optimization recommendations',
              'Team collaboration (up to 5 seats)',
              'CSV export of all results'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does email tracking work?',
              a: 'We embed a tiny invisible tracking pixel in each email variant. When a candidate opens the email, we record it. Replies are monitored via a dedicated reply-to address, so response rates are captured automatically.'
            },
            {
              q: 'Can I use this with my existing ATS or email client?',
              a: 'Yes. You copy the generated email content and send it from Gmail, Outlook, or any ATS. The tracking pixel and reply-to address are embedded in the template — no plugin required.'
            },
            {
              q: 'How does the system decide which template wins?',
              a: 'Once a variant reaches statistical significance (default: 100 sends), the system flags the winner based on reply rate. You get a clear recommendation and can retire underperforming variants.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} EmailRecruit. All rights reserved.
      </footer>
    </main>
  )
}
