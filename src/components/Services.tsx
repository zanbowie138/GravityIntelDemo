import React from "react";
import {
  HiComputerDesktop,
  HiUserGroup,
  HiCodeBracket,
  HiGlobeAlt,
  HiCloud,
  HiChartBar,
} from "react-icons/hi2"; // Using Hi2 for Heroicons v2

const services = [
  {
    title: "Digital Setup",
    description:
      "Unleash your business potential with cutting-edge e-commerce platforms and AI insights.",
    Icon: HiComputerDesktop,
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    shadowColor: "hover:shadow-sky-500/30",
    gradientFrom: "from-sky-400",
    gradientTo: "to-sky-300",
  },
  {
    title: "Staff Augmentation",
    description: "Boost efficiency with our expert team integration services.",
    Icon: HiUserGroup,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    shadowColor: "hover:shadow-emerald-500/30",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-emerald-300",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your unique needs.",
    Icon: HiCodeBracket,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    shadowColor: "hover:shadow-purple-500/30",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-300",
  },
  {
    title: "Web Development",
    description: "Impactful websites and web apps to elevate your brand.",
    Icon: HiGlobeAlt,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    shadowColor: "hover:shadow-amber-500/30",
    gradientFrom: "from-amber-400",
    gradientTo: "to-amber-300",
  },
  {
    title: "Cloud Computing",
    description: "Enable remote work with powerful SaaS tools and solutions.",
    Icon: HiCloud,
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    shadowColor: "hover:shadow-indigo-500/30",
    gradientFrom: "from-indigo-400",
    gradientTo: "to-indigo-300",
  },
  {
    title: "Data Analytics",
    description:
      "Transform data into actionable insights for better decisions.",
    Icon: HiChartBar,
    iconColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    shadowColor: "hover:shadow-pink-500/30",
    gradientFrom: "from-pink-400",
    gradientTo: "to-pink-300",
  },
];

export default function Services() {
  return (
    <section className="bg-white h-full">
      <div
        className="bg-slate-800 h-full pb-10 pt-[200px]"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to propel your business into the
              future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-slate-900 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 group ${service.shadowColor} shadow-xl`}
              >
                <div
                  className={`rounded-full w-16 h-16 flex items-center justify-center mb-7 ${service.bgColor}`}
                >
                  <service.Icon
                    className={`${service.iconColor} w-8 h-8 transition-colors duration-300 group-hover:scale-110`}
                  />
                </div>
                <h3
                  className={`text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} transition-all duration-300`}
                >
                  {service.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
