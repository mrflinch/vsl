import React, { useRef } from "react";
import { motion } from "motion/react";
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { BeamsBackground } from "@/src/components/ui/beams-background";

function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const childWidth = (scrollContainerRef.current.firstChild as HTMLElement)?.offsetWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -(childWidth + 24) : (childWidth + 24),
        behavior: "smooth"
      });
    }
  };

  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-sky-500/30">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* SECTION 1 — HERO */}
      <BeamsBackground intensity="strong" className="min-h-[90vh]">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center pt-20 pb-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-lg leading-tight"
          >
            We Put Sales-Ready Decision-Makers on Your Calendar. On Autopilot.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed"
          >
            See how B2B companies in IT, healthcare, and professional services
            are building predictable pipelines — without hiring, guessing on ads,
            or chasing cold leads.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            onClick={scrollToVideo}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-sky-500 border border-transparent rounded-full hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]"
          >
            Watch the Video
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </BeamsBackground>

      {/* SECTION 2 — VIDEO PLAYER */}
      <section id="video-section" className="w-full bg-black py-20 px-4">
        <FadeInSection className="max-w-[900px] mx-auto">
          <div className="relative w-full aspect-video bg-slate-800/80 rounded-2xl border border-slate-700/50 flex items-center justify-center shadow-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/vEzJpj7YjwY?vq=hd1080"
              title="Adventure Media VSL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="w-full bg-black border-y border-slate-800/60 py-16 px-4">
        <FadeInSection className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <span className="font-mono text-4xl md:text-5xl font-bold text-sky-400 mb-2 tracking-tight">
                $1.6M
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-medium">
                Pipeline generated in 90 days
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <span className="font-mono text-4xl md:text-5xl font-bold text-sky-400 mb-2 tracking-tight">
                44
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-medium">
                Decision-maker meetings in one quarter
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <span className="font-mono text-4xl md:text-5xl font-bold text-sky-400 mb-2 tracking-tight">
                1,320+
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-medium">
                Appointments booked
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <span className="font-mono text-4xl md:text-5xl font-bold text-sky-400 mb-2 tracking-tight">
                39%
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-medium">
                Average CAC reduction
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 4 — RESULTS / CASE STUDIES */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter">
            Real Results. Real Companies.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                Cybersecurity
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">FortiShield Cyber Defense</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                "Almost every contract came through referrals. Outbound wasn't
                reaching CISOs or IT directors. Ad spend was bleeding without
                producing meetings."
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">312</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Qualified leads generated
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">44</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Booked meetings with decision-makers
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">$1.6M</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Pipeline created
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">39%</div>
                  <div className="text-sm text-slate-500 font-medium">
                    CAC reduction
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Results in 90 Days
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                Healthcare
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">VitalCare Clinics</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                "Heavy ad spend, stalled patient acquisition, no structured
                follow-up, and an entire corporate wellness market left
                untouched."
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">1,320</div>
                  <div className="text-sm text-slate-500 font-medium">
                    New patient appointments booked
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">9</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Corporate wellness contracts signed
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">31%</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Drop in appointment no-shows
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-sky-400 mb-1 tracking-tight">3.4x</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Marketing ROI improvement
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Results in 120 Days
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 5 — TESTIMONIALS */}
      <section className="w-full bg-black py-24 px-4">
        <FadeInSection className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tighter">
            Don't take our word for it.
          </h2>
          
          <div className="relative group/carousel px-2 md:px-8">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll("left")} 
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-2xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 mb-12 pb-4 hide-scrollbar scroll-smooth"
            >
              {[
                "WiXforX0Nvc",
                "xe4NKuc9vEM",
                "2gVYkHcmsrs",
                "-B87xbL0OVs"
              ].map((videoId, i) => (
                <div key={i} className="flex-none w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center flex flex-col gap-4">
                  <div className="relative w-full aspect-[9/16] bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center justify-center overflow-hidden group hover:border-sky-500/50 transition-colors cursor-pointer">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}?vq=hd1080`}
                      title={`Testimonial ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll("right")} 
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-2xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/@Adventure_media-j8x/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-slate-500"
            >
              View more
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 6 — THE PROBLEM */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 tracking-tighter leading-tight text-center">
            You Don't Have a Lead Problem.<br className="hidden md:block" /> You Have a System Problem.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">The Real Issue</h3>
              <p className="text-slate-400 leading-relaxed">
                Most B2B companies aren't struggling because their offer is weak. You close well when you're in front of the right people. The issue is getting there consistently.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">The Referral Trap</h3>
              <p className="text-slate-400 leading-relaxed">
                Right now you're probably too reliant on referrals. Referrals are great, but you can't predict them, and you can't scale what you can't control.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">The Boom-and-Bust</h3>
              <p className="text-slate-400 leading-relaxed">
                Maybe you've tried cold outreach and got ignored. Ran ads and burned budget. The result is a boom-and-bust cycle. Strong one quarter, scrambling the next.
              </p>
            </div>
            <div className="bg-sky-900/20 border border-sky-800/50 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-sky-400 mb-2 tracking-tight">The Diagnosis</h3>
              <p className="text-sky-100/90 leading-relaxed font-medium">
                That's not a hustle problem. That's an infrastructure problem.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 7 — WHAT WE BUILD */}
      <section className="w-full bg-black text-white py-24 px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <FadeInSection className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 tracking-tighter text-center">
            We Build the System That Fixes It.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">The Acquisition Engine</h3>
              <p className="text-slate-400 leading-relaxed">
                Adventure Media engineers a fully automated client acquisition engine that identifies your ideal buyers, reaches them across multiple channels, and places them directly on your calendar.
              </p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">End-to-End Execution</h3>
              <p className="text-slate-400 leading-relaxed">
                We handle everything: ICP refinement, prospect sourcing, outreach, copywriting, A/B testing, automated nurture, qualification, and booking.
              </p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">The Pre-Call Brief</h3>
              <p className="text-slate-400 leading-relaxed">
                Before every single call, you receive a full brief — company background, pain points, why they booked, and intent signals. You never walk into a call blind.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              Your team's only job is to show up and close.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 8 — HOW IT WORKS */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter">
            From Stranger to Booked Call — Fully Automated.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "ICP Refinement",
                desc: "We identify exactly who your best buyers are and build a precise targeting blueprint around them.",
              },
              {
                step: "2",
                title: "Multi-Channel Outreach",
                desc: "AI-personalized campaigns across email, LinkedIn, and paid ads reach your buyers where they already are.",
              },
              {
                step: "3",
                title: "Qualification",
                desc: "Only decision-ready prospects move forward. Wrong role, wrong budget, wrong intent — they don't reach your calendar.",
              },
              {
                step: "4",
                title: "Automated Nurture",
                desc: "Prospects are educated and warmed before they ever speak to your team.",
              },
              {
                step: "5",
                title: "Booking + Brief",
                desc: "A qualified meeting lands in your calendar with full context attached. No blind calls. No wasted time.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors shadow-lg">
                <div className="font-mono w-12 h-12 rounded-full bg-black text-sky-400 border border-slate-700 flex items-center justify-center text-xl font-bold mb-5 shadow-sm">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 9 — THE GUARANTEE */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-slate-900 to-black border border-slate-800 p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 tracking-tighter text-white">
              We Don't Win Unless You Do.
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              <p>
                We guarantee a minimum of <strong className="text-white font-semibold">4 qualified booked calls</strong>. If we don't
                hit that number, we keep working at no additional charge until we do.
              </p>
              <p>
                And there are no long-term contracts. No lock-ins. No fine print.
                You can cancel anytime.
              </p>
              <div className="pt-8 mt-8 border-t border-slate-800/50">
                <p className="font-display text-xl md:text-2xl font-bold text-sky-400 tracking-tight">
                  We keep clients because the results keep them here — not because they're stuck.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 10 — IS THIS FOR YOU? */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter">
            This Is Built for a Specific Type of Company.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Good Fit */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800">
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center text-emerald-400 tracking-tight">
                <CheckCircle2 className="w-8 h-8 mr-3" />
                Good Fit
              </h3>
              <ul className="space-y-5">
                {[
                  "B2B company with $10K+ average deal size",
                  "Proven offer with clear positioning",
                  "Strong closing capability in-house",
                  "Needs pipeline predictability",
                  "Done relying on referrals",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800">
              <h3 className="font-display text-2xl font-bold mb-8 flex items-center text-rose-400 tracking-tight">
                <XCircle className="w-8 h-8 mr-3" />
                Not a Fit
              </h3>
              <ul className="space-y-5">
                {[
                  "No defined ICP",
                  "Offer under $3K ticket size",
                  "No one to close the calls",
                  "Looking for guaranteed revenue without a sales process",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="w-6 h-6 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 11 — WHY NOT THE ALTERNATIVES? */}
      <section className="w-full bg-black text-white py-24 px-4">
        <FadeInSection className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter">
            You've Probably Already Tried the Other Options.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
              <h3 className="font-display text-xl font-bold mb-4 text-white tracking-tight">
                <span className="text-sky-500 mr-2">vs.</span>Lead Gen Agencies
              </h3>
              <p className="text-slate-400 leading-relaxed">
                "They sell you a spreadsheet. You still do the work. We deliver
                conversations — not data rows."
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
              <h3 className="font-display text-xl font-bold mb-4 text-white tracking-tight">
                <span className="text-sky-500 mr-2">vs.</span>Cold Email Shops
              </h3>
              <p className="text-slate-400 leading-relaxed">
                "They blast volume and hope something sticks. We qualify,
                educate, and nurture before anyone touches your calendar."
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
              <h3 className="font-display text-xl font-bold mb-4 text-white tracking-tight">
                <span className="text-sky-500 mr-2">vs.</span>Hiring an SDR
              </h3>
              <p className="text-slate-400 leading-relaxed">
                "$60–80K salary. Benefits. Ramp time. Management overhead. And
                they can still underperform — or quit. Our system runs 24/7 with
                none of that."
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors shadow-lg">
              <h3 className="font-display text-xl font-bold mb-4 text-white tracking-tight">
                <span className="text-sky-500 mr-2">vs.</span>Running Ads Internally
              </h3>
              <p className="text-slate-400 leading-relaxed">
                "Ad spend without the right qualification layer generates form
                fills, not pipeline. We connect the two."
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section id="book-call" className="w-full bg-sky-600 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <FadeInSection className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
            Ready to Stop Guessing and Start Building a Predictable Pipeline?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call. We'll review your current pipeline, map
            out your ICP, and tell you honestly whether this is a fit — no
            pitch, no pressure.
          </p>
          <a
            href="https://cal.com/adventure-media/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-sky-900 transition-all duration-200 bg-white rounded-full hover:bg-slate-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white shadow-xl"
          >
            Book a Call
            <ChevronRight className="w-6 h-6 ml-2" />
          </a>
          <p className="mt-8 text-sm text-sky-200 font-medium tracking-wide">
            No long-term contracts. Setup in 3–5 days. First qualified calls
            within 2 weeks.
          </p>
        </FadeInSection>
      </section>

      {/* SECTION 13 — FOOTER */}
      <footer className="w-full bg-black text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-center md:text-left">
            <span className="font-bold text-white text-base">Adventure Media</span>
            <span className="hidden md:inline mx-2 text-slate-600">|</span>
            <span className="block md:inline mt-1 md:mt-0">
              Building predictable revenue engines for B2B companies.
            </span>
          </div>
          <div className="text-center text-xs md:text-sm text-slate-500">
            IT & Cybersecurity · Healthcare · Consulting · Enterprise SaaS ·
            Recruiting & Staffing · Commercial Insurance
          </div>
          <div className="flex gap-6 text-center">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
