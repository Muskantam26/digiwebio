import { AGENCY_STATS } from "@/data/initialData";

export default function AgencyStats() {
  return (
    <section className="py-16 bg-[#121316] border-y border-[#252830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENCY_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 border-r last:border-r-0 border-[#252830]">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E2F135] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                {stat.label}
              </div>
              {stat.suffix && (
                <div className="text-[10px] text-slate-500 font-mono mt-1">
                  {stat.suffix}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
