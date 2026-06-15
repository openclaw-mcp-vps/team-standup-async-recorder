export default function Home() {
  const faqs = [
    {
      q: "How does async standup recording work?",
      a: "Team members receive a scheduled prompt via email or Slack. They record a short video directly in the browser — no app install needed. Videos are collected and AI generates a team summary."
    },
    {
      q: "What AI features are included?",
      a: "Every standup cycle produces an AI-written summary, extracted blockers, and a prioritized action item list — delivered straight to the team lead's dashboard."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel with one click from your billing portal. No contracts, no questions asked."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Async-first team coordination
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record async video standups{" "}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Schedule recurring video prompts, collect your team's standups, and get AI-generated summaries and action items — without a single meeting.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📅", title: "Scheduled Prompts", desc: "Auto-send recording reminders on your cadence" },
          { icon: "🎥", title: "Browser Recording", desc: "No app install — record directly in the browser" },
          { icon: "🤖", title: "AI Summaries", desc: "Blockers, updates, and action items extracted instantly" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6 text-sm">Per team workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 15 team members",
              "Unlimited standup cycles",
              "AI summaries & action items",
              "Slack & email prompts",
              "Video storage for 90 days",
              "Team lead dashboard"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} StandupSync. All rights reserved.
      </footer>
    </main>
  );
}
