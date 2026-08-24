import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#0A0B0D] py-20 px-4">
      <div className="max-w-md w-full text-center bg-[#121316] border border-[#252830] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-[#191B20] text-[#E2F135] flex items-center justify-center mx-auto mb-6 border border-[#252830]">
          <FileQuestion className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-[#E2F135]/10 text-[#E2F135] font-mono text-xs font-bold uppercase mb-4">
          Error 404
        </span>

        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed mb-8">
          The route or page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs px-6 py-3 rounded-xl transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#191B20] text-white border border-[#252830] hover:border-[#E2F135] font-semibold text-xs px-6 py-3 rounded-xl transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
