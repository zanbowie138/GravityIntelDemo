import React from "react";
import { HiOutlineMail, HiOutlineLightningBolt } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 mt-[-80px] pt-32">
      <div className="max-w-6xl mx-auto flex flex-row w-full items-center px-6">
        {/* Left side for future graphic */}
        <div className="hidden md:block w-1/2 h-[400px] flex-shrink-0"></div>
        {/* Right side: hero content */}
        <div className="w-full md:w-1/2 text-left flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent animate-gradient-x">
            Welcome to GravityIntel
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-10 max-w-2xl font-medium animate-fade-in">
            Transforming data into{" "}
            <span className="font-bold text-blue-200">actionable insights</span>{" "}
            with{" "}
            <span className="font-bold text-indigo-200">
              cutting-edge machine intelligence
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-start animate-fade-in-up">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/30 backdrop-blur-md text-blue-800 font-bold text-lg shadow-lg hover:bg-white/60 transition-all border border-white/40 gap-2"
            >
              <HiOutlineMail className="w-6 h-6" />
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all border border-white/20 gap-2"
            >
              <HiOutlineLightningBolt className="w-6 h-6" />
              Our Services
            </a>
          </div>
        </div>
      </div>
      <style>{`
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 6s ease-in-out infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fade-in-up { animation: fade-in-up 1.4s cubic-bezier(.4,0,.2,1) both; }
    `}</style>
    </section>
  );
}
