import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { useScrollReveal } from "~/hooks/useScrollReveal";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Settings,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import Img1 from "public/banner/1.jpg";
import Img2 from "public/banner/2.jpg";
import Img3 from "public/banner/3.jpg";
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

const heroSlides = [
  {
    image: Img1,
    label: "B2B Textile Solutions",
    heading: "Full Sales Service Across Pakistan",
    text: "ATC Technology provides full sales service to an extensive customer base throughout the textile industry in Pakistan.",
  },
  {
    image: Img2,
    label: "Advanced Engineering",
    heading: "Future-Ready Plant Automation",
    text: "Core competence: B2B sales and marketing of textile solutions. Added value through technological services from world-class principals.",
  },
  {
    image: Img3,
    label: "Total Customer Satisfaction",
    heading: "Pre-Sales to Post-Sales",
    text: "Fully equipped Service Centers in Karachi and Lahore with high caliber technicians and integrated ERP/CRM solutions to manage your needs.",
  },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useScrollReveal();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative h-screen min-h-[700px] bg-slate-950 flex items-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              {heroSlides[currentSlide].label}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {heroSlides[currentSlide].heading}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              {heroSlides[currentSlide].text}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-lg transition-colors duration-300"
              >
                Explore Solutions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-colors duration-300 border border-white/10"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "w-12 bg-gold-400" : "w-6 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
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
