import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLightningBolt } from "react-icons/hi";
import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";
import HomeNavbar from "./HomeNavbar";
export default function Hero() {
  const [enhance, setEnhance] = useState(false);

  return (
    <section className="h-[90vh] relative flex flex-col">
      <HomeNavbar />
      <div className="flex-grow flex items-center">
        <div className="max-w-6xl lg:max-w-7xl mx-auto flex flex-row w-full items-center relative justify-end">
          <div className="w-full md:w-1/2 text-left flex flex-col items-start px-6">
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              <span className="text-white">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                GravityIntel
              </span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-3xl text-white/90 mb-10 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
              }}
            >
              Transforming data into actionable insights with cutting-edge
              machine intelligence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
              }}
            >
              <a
                href="/services"
                onMouseEnter={() => setEnhance(true)}
                onMouseLeave={() => setEnhance(false)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all border border-white/20 gap-2 cursor-pointer"
              >
                <HiOutlineLightningBolt className="w-6 h-6" />
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <WaveBackground areLightsEnhanced={enhance} />
    </section>
  );
}
