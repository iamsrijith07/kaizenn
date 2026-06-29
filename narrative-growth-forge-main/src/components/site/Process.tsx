import { motion } from "framer-motion";

const steps = [
  { k: "01", t: "Discover", s: "Audit", d: "Deep dive into your business, market, funnel, and competitors. Find the leak; find the lever." },
  { k: "02", t: "Map", s: "Strategy", d: "Translate insight into a 90-day roadmap with channels, content, and milestones." },
  { k: "03", t: "Build", s: "Execution", d: "Ship the website, campaigns, content, and tracking — fast and to a high bar." },
  { k: "04", t: "Scale", s: "Optimization", d: "Measure weekly. Double down on what compounds. Cut what doesn't. Repeat." },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF, #F0F8F3 60%, #FFFFFF)" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A four-act journey from audit to scale.
          </h2>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((st, i) => (
            <div key={st.k} className="flex gap-4">
              {/* Left: node + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#3d5a73] flex items-center justify-center border-4 border-[#F2F9F5] shadow-lg flex-shrink-0">
                  <span className="text-white text-sm font-bold">{st.k}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-300 my-2" />
                )}
              </div>
              {/* Right: text */}
              <div className="pb-10 pt-1">
                <div className="text-xl font-semibold text-slate-800">{st.t}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">{st.s}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{st.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: original wave layout */}
        <div className="relative w-full hidden md:block">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1000 250"
            preserveAspectRatio="none"
          >
            <path
              d="M 125,124 C 245,124 255,28 375,28 C 500,28 500,220 625,220 C 750,220 750,92 875,92"
              stroke="#94a3b8"
              strokeWidth="3"
              strokeDasharray="10 10"
              fill="none"
            />
          </svg>

          <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
            {steps.map((st, i) => {
              const isTop = i % 2 === 0;
              return (
                <div key={st.k} className="relative flex flex-col items-center justify-center pointer-events-auto">
                  <div className={`absolute w-full px-4 text-center ${isTop ? "bottom-[60%]" : "top-[60%]"}`}>
                    <div className="text-2xl font-semibold text-slate-800">{st.t}</div>
                    <div className="text-sm uppercase tracking-widest text-slate-500 mb-2">{st.s}</div>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">{st.d}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#3d5a73] flex items-center justify-center border-[6px] border-[#F2F9F5] shadow-lg">
                    <span className="text-white text-lg font-bold">{st.k}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
