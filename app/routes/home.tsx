import { useState, useEffect } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import { useScrollReveal } from "~/hooks/useScrollReveal";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Settings,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";
import MargasaLogo from "public/partners/margasa.jpg";
import SaurerLogo from "public/partners/saurer.png";
import NeuenhauserLogo from "public/partners/neuenhauser.png";
import SuessenLogo from "public/partners/suessen.jpg";

export function meta() {
  return [
    { title: "ATC Technology - B2B Textile Solutions in Pakistan" },
    {
      name: "description",
      content:
        "ATC Technology (ATCT) provides full sales service to an extensive customer base throughout the textile industry in Pakistan. B2B sales and marketing of textile solutions with added value through technological services.",
    },
  ];
}

const clientNames: { name: string; logo: string }[] = [
  { name: "Gul Ahmed", logo: "gul-ahmed-textile.png" },
  { name: "Nishat Mills", logo: "nishat-mills.png" },
  { name: "Interloop", logo: "interloop.png" },
  { name: "Ibrahim Fibres", logo: "ibrahim-fibres.png" },
  { name: "Sapphire Group", logo: "sapphire-group.png" },
  { name: "Artistic Milliners", logo: "artistic-milliners.png" },
  { name: "Feroze1888", logo: "feroze1888-mills-ltd.png" },
  { name: "Al Karam", logo: "al-karam-group.png" },
  { name: "Masood Textiles", logo: "masood-textiles.png" },
  { name: "Soorty Group", logo: "soorty-group.png" },
];

const partners = [
  { name: "Saurer Twisting", logo: SaurerLogo, desc: "Two-For-One Twisting" },
  { name: "Neuenhauser", logo: NeuenhauserLogo, desc: "Palletising & Transport" },
  { name: "Suessen", logo: SuessenLogo, desc: "EliTe Compact Systems" },
  { name: "Margasa", logo: MargasaLogo, desc: "Waste Recycling Lines" },
];

export default function Home() {
  const [gearData, setGearData] = useState<Record<string, unknown> | null>(null);
  const [gearSmData, setGearSmData] = useState<Record<string, unknown> | null>(null);
  const [pulseData, setPulseData] = useState<Record<string, unknown> | null>(null);

  useScrollReveal();

  useEffect(() => {
    fetch("/lottie/gear.json").then((r) => r.json()).then(setGearData);
    fetch("/lottie/gear-sm.json").then((r) => r.json()).then(setGearSmData);
    fetch("/lottie/pulse.json").then((r) => r.json()).then(setPulseData);
  }, []);

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
        {/* Dot grid background */}
        <div className="hero-grid-bg absolute inset-0" />

        {/* Gradient depth layers */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900/90 to-slate-950" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/4 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gold-900/6 rounded-full blur-[100px] pointer-events-none" />

        {/* Lottie gears & floating artifacts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {gearData && (
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[550px] md:h-[550px] lg:w-[680px] lg:h-[680px] opacity-[0.18]">
              <Lottie animationData={gearData} loop autoplay />
            </div>
          )}
          {gearSmData && (
            <div className="hidden md:block absolute right-[12%] -top-[5%] w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] opacity-[0.14]">
              <Lottie animationData={gearSmData} loop autoplay />
            </div>
          )}
          {gearSmData && (
            <div className="hidden lg:block absolute left-[3%] bottom-[18%] w-[220px] h-[220px] opacity-[0.12] -scale-x-100">
              <Lottie animationData={gearSmData} loop autoplay />
            </div>
          )}
          {pulseData && (
            <div className="hidden md:block absolute right-[35%] top-[18%] w-[200px] h-[200px] opacity-[0.15]">
              <Lottie animationData={pulseData} loop autoplay />
            </div>
          )}

          {/* Floating wireframe shapes */}
          <div className="hero-float absolute right-[22%] bottom-[35%] text-gold-500/20" style={{ animationDelay: "0s" }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 2L58 17V47L32 62L6 47V17Z" stroke="currentColor" strokeWidth="1" /></svg>
          </div>
          <div className="hero-float absolute left-[15%] top-[22%] text-gold-500/15" style={{ animationDelay: "2s" }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="20" y="2" width="25" height="25" stroke="currentColor" strokeWidth="1" transform="rotate(45 20 20)" /></svg>
          </div>
          <div className="hero-float absolute right-[42%] bottom-[22%] text-gold-500/20" style={{ animationDelay: "4s" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><line x1="14" y1="2" x2="14" y2="26" stroke="currentColor" strokeWidth="1.5" /><line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5" /></svg>
          </div>
          <div className="hero-float absolute left-[8%] top-[58%] text-gold-500/10" style={{ animationDelay: "1s" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.75" /><circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="0.75" /></svg>
          </div>
          <div className="hero-float absolute right-[8%] top-[62%] text-gold-500/15" style={{ animationDelay: "3s" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12Z" stroke="currentColor" strokeWidth="0.75" /></svg>
          </div>

          {/* Decorative gradient lines */}
          <div className="absolute top-0 right-[30%] w-px h-[40%] bg-linear-to-b from-transparent via-gold-500/10 to-transparent" />
          <div className="absolute bottom-0 left-[20%] w-px h-[30%] bg-linear-to-t from-transparent via-gold-500/7 to-transparent" />
          <div className="absolute top-[40%] left-0 h-px w-[15%] bg-linear-to-r from-transparent via-gold-500/7 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-gold-400/20 bg-gold-400/5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400" />
              </span>
              <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">
                Pioneers Since 1974
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Engineering Excellence{" "}
              <span className="hero-text-gradient">for Pakistan's</span>{" "}
              Textile Industry
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Full-service B2B textile solutions — from complete spinning lines
              and plant automation to parts, spares, and factory-trained
              technical support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/6 bg-white/2 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "50+", label: "Years of Experience" },
              { value: "100+", label: "Textile Clients" },
              { value: "2", label: "Service Centers" },
              { value: "8+", label: "Partner Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-black text-gold-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRUSTED BY MARQUEE ═══════ */}
      <section className="py-12 bg-white border-b border-slate-200 overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
            Trusted by Pakistan's Top Textile Manufacturers
          </p>
        </div>
        <div className="relative flex w-full overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...clientNames, ...clientNames, ...clientNames].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[200px] h-16 mx-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`/clients/${client.logo}`}
                  alt={client.name}
                  className="max-h-12 max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BENTO GRID : CAPABILITIES ═══════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-gold-600 tracking-widest uppercase mb-3">
              Our Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Comprehensive B2B Solutions for Modern Textiles.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main large card */}
            <div className="reveal reveal-delay-1 md:col-span-2 md:row-span-2 bento-card min-h-[400px]">
              <img src="/images/photo-1497366811353-6870744d04b2-w700.jpg" alt="Machinery" />
              <div className="bento-content">
                <Settings className="w-10 h-10 text-gold-400 mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Machinery & Plant Automation
                </h4>
                <p className="text-slate-200 text-lg max-w-md mb-6">
                  End-to-end BMR solutions, complete spinning lines, and waste recycling systems from world-renowned principals.
                </p>
                <Link to="/services" className="inline-flex items-center text-gold-400 font-semibold group w-max">
                  View Systems <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Top right card */}
            <div className="reveal reveal-delay-2 bento-card min-h-[250px]">
              <img src="/images/photo-1441986300917-64674bd600d8-w1920.jpg" alt="Parts" />
              <div className="bento-content">
                <ShieldCheck className="w-8 h-8 text-gold-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Parts & Spares</h4>
                <p className="text-slate-300 text-sm">
                  Essential spares and travelers stocked heavily in our Lahore & Karachi warehouses to ensure zero downtime.
                </p>
              </div>
            </div>

            {/* Bottom right card */}
            <div className="reveal reveal-delay-3 bento-card min-h-[250px] bg-slate-900 border-none">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Zap className="w-8 h-8 text-gold-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Technical Support</h4>
                  <p className="text-slate-400 text-sm">
                    Factory-trained service engineers available 24/7 for mechanical and electronic diagnostics.
                  </p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-gold-500 font-semibold group text-sm mt-6">
                  Contact Support <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE ATC ADVANTAGE ═══════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Why 50+ Years of Experience Matters.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                ATC Technology provides full sales service to an extensive customer base throughout the textile industry in Pakistan.
                We believe in Total Customer Satisfaction and provide after-sales-service through our fully equipped
                Service Centers, deployed with high caliber technicians and integrated ERP/CRM solutions.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Globe, title: "Global Network", desc: "Partners in Germany, Switzerland, Italy, China, & more." },
                  { icon: Award, title: "Unmatched Quality", desc: "Rigorous vetting of principals to ensure Tier-1 technology." },
                  { icon: TrendingUp, title: "Scalable Growth", desc: "From single machine replacements to turnkey greenfield projects." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm group-hover:border-gold-300 group-hover:bg-gold-50 transition-colors">
                      <item.icon className="w-6 h-6 text-slate-700 group-hover:text-gold-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2 relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -z-10 transform rotate-3"></div>
              <img
                src="/images/photo-1551434678-e076c223a692-w1920.jpg"
                alt="Corporate discussion"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GLOBAL PRINCIPALS ═══════ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-3">
                Our Global Principals
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Partnering with the World's Best.
              </h3>
            </div>
            <Link to="/partners" className="inline-flex items-center text-slate-300 hover:text-white font-medium group transition-colors">
              View all partners <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center h-64`}
              >
                <div className="h-20 mb-6 flex items-center justify-center w-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <h4 className="text-white font-bold text-lg">{partner.name}</h4>
                <p className="text-slate-400 text-sm mt-2">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA / CONTACT ═══════ */}
      <section className="py-24 bg-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/photo-1497366216548-37526070297c-w1920.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">
            Ready to upgrade your production?
          </h2>
          <p className="text-xl text-slate-900/80 mb-10 max-w-2xl mx-auto font-medium">
            Connect with our engineering consultants to discuss BMR, plant automation, and process optimization for your facility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
