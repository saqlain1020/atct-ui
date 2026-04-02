import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { SectionHeading } from "~/components/SectionHeading";
import { useScrollReveal } from "~/hooks/useScrollReveal";
import {
  Handshake,
  Users,
  HeadsetIcon,
  Wrench,
  Package,
  Megaphone,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Img1 from "public/banner/1.jpg";
import Img2 from "public/banner/2.jpg";
import Img3 from "public/banner/3.jpg";
import BoninoLogo from "public/partners/bonino.png";
import MargasaLogo from "public/partners/margasa.jpg";
import SaurerJintanLogo from "public/partners/saurer-jintan.jpg";
import NeuenhauserLogo from "public/partners/neuenhauser.png";

export function meta() {
  return [
    { title: "ATC - Associated Technology Consultants" },
    {
      name: "description",
      content:
        "The leading one stop B2B supplier of textile systems, technological components & services to the Textile Industry in Pakistan.",
    },
  ];
}

const heroSlides = [
  {
    image:
      Img1,
    label: "WHO WE ARE",
    heading: "WELCOME TO ATC",
    text: "We value our clients as assets and are always looking forward to developing cordial and long term relationships with them. We are involved in different kinds of businesses.",
  },
  {
    image:
      Img2,
    label: "WHAT WE DO",
    heading: "TEXTILE TECHNOLOGY EXPERTS",
    text: "With over 50 years of experience, ATC is the leading B2B supplier of textile systems, technological components and services to the Pakistani Textile Industry.",
  },
  {
    image:
      Img3,
    label: "OUR COMMITMENT",
    heading: "50 YEARS OF EXCELLENCE",
    text: "From BMR solutions and new machinery to plant automation and green technologies, we deliver innovative solutions that drive your business forward.",
  },
];

const features = [
  {
    icon: Handshake,
    title: "Fair Dealing with Clients",
    description: "Fair Dealing",
  },
  {
    icon: Users,
    title: "Effective Customer Relationship",
    description: "Effective Customer Relationship Management Systems.",
  },
  {
    icon: HeadsetIcon,
    title: "Professional Customer Service",
    description: "Professional Customer Service from Pre-Sales to Post-Sales.",
  },
  {
    icon: Wrench,
    title: "Technical Support to the Principals",
    description:
      "Technical Support to the Principals Fully Equipped & Trained Service Centers in Lahore & Karachi.",
  },
  {
    icon: Package,
    title: "Essential Spares and Travelers Stocks",
    description:
      "Essential Spares & Travelers Stocks in our Two Warehouses (Lahore & Karachi)",
  },
  {
    icon: Megaphone,
    title: "Organize Direct Marketing",
    description:
      "Organize Direct Marketing through Events & Exhibitions, Seminars, Open Days & Newsletters for our Valued Principals.",
  },
];

const machines = [
  {
    name: "Bonino Carding Machines",
    description: "Cotton cards, Non-woven cards, woolen cards, Fiber preparation machines",
    logo: BoninoLogo,
  },
  {
    name: "Margasa",
    description: "Hard & Soft Waste Recycling Line",
    logo: MargasaLogo,
  },
  {
    name: "Saurer Jintan",
    description: "Blowroom and carding machines",
    logo: SaurerJintanLogo,
  },
  {
    name: "Neuenhauser",
    description: "Palletising & Cone Transport Systems",
    logo: NeuenhauserLogo,
  },
];

const clientNames: { name: string; logo: string }[] = [
  { name: "Gul Ahmed Textile", logo: "gul-ahmed-textile.png" },
  { name: "Nishat Mills", logo: "nishat-mills.png" },
  { name: "Interloop", logo: "interloop.png" },
  { name: "Ibrahim Fibres", logo: "ibrahim-fibres.png" },
  { name: "Sapphire Group", logo: "sapphire-group.png" },
  { name: "Artistic Milliners", logo: "artistic-milliners.png" },
  { name: "Feroze1888 Mills Ltd", logo: "feroze1888-mills-ltd.png" },
  { name: "Al Karam Group", logo: "al-karam-group.png" },
  { name: "Masood Textiles", logo: "masood-textiles.png" },
  { name: "Soorty Group", logo: "soorty-group.png" },
  { name: "Yunus Brothers Group", logo: "yunus-brothers-group.png" },
  { name: "Gadoon Textile Mills", logo: "gadoon-textile-mills.png" },
];

const teamMembers = [
  {
    name: "Zahid Majeed",
    role: "Chief Executive Officer",
    image:
      "/images/photo-1560250097-0b93528c311a-w600.jpg",
  },
  {
    name: "Abrar Hasan",
    role: "Director",
    image:
      "/images/photo-1472099645785-5658abf4ff4e-w600.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  useScrollReveal();

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setSlideKey((k) => k + 1);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* ═══════ HERO SLIDESHOW ═══════ */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={`${i}-${i === currentSlide ? slideKey : "static"}`}
            className={`hero-slide ${i === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end pb-24 md:items-center md:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              key={slideKey}
              className="hero-content-animate max-w-xl bg-[#111111]/80 backdrop-blur-sm p-8 md:p-10 border-l-4 border-[#FFC107]"
            >
              <span className="inline-block bg-[#FFC107] text-[#111111] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm">
                {heroSlides[currentSlide].label}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mt-4 tracking-tight">
                {heroSlides[currentSlide].heading}
              </h1>
              <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
                {heroSlides[currentSlide].text}
              </p>
              <Link
                to="/about"
                className="inline-block mt-6 border-2 border-[#FFC107] hover:bg-[#FFC107] hover:text-[#111111] text-[#FFC107] text-sm font-bold uppercase tracking-wider px-8 py-3 transition-all duration-300 rounded-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`slide-dot ${i === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══════ WHAT WE OFFER ═══════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading
              title="What we offer"
              subtitle="The leading one stop B2B supplier of textile systems, technological components & services to the Textile Industry in Pakistan! We provide a full sales service to an extensive customer base throughout the textile industry in Pakistan."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(i % 3) + 1} flip-card`}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white shadow-sm border-2 border-transparent hover:border-[#FFC107] flex flex-col items-center justify-center p-7 text-center rounded-xl">
                    <div className="w-16 h-16 rounded-xl bg-[#FFC107]/20 flex items-center justify-center mb-5 border border-[#FFC107]/30">
                      <feature.icon className="w-8 h-8 text-[#FFC107]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flip-card-back bg-[#111111] flex flex-col items-center justify-center p-7 text-center rounded-xl border-b-4 border-[#FFC107]">
                    <feature.icon className="w-10 h-10 text-[#FFC107] mb-4" />
                    <h3 className="text-base font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MACHINES & SYSTEMS ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading
              title="Machines & Systems"
              subtitle="We value our clients as assets, and we are always looking forward for cordial and long term relationship with them. We are involved in different kinds of business and enjoying with the most cordial business relations established with our suppliers and our clients throughout the world."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {machines.map((machine, i) => (
              <div
                key={machine.name}
                className={`reveal reveal-delay-${i + 1} partner-card group relative rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#FFC107] bg-white h-48 shadow-sm`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <img
                    src={machine.logo}
                    alt={machine.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-[#111111]/90 flex flex-col items-center justify-center p-5 text-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 border-b-4 border-[#FFC107]">
                  <h4 className="text-white font-bold text-lg mb-2">
                    {machine.name}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {machine.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#FFC107] text-sm font-semibold">
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUR CLIENTS ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="/images/photo-1441986300917-64674bd600d8-w1920.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/80 border-t-4 border-[#FFC107]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal">
            <SectionHeading
              title="Our Clients"
              subtitle="Celebrating 50 years of service to the Pakistani Textile Industry!"
              light
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientNames.map((client, i) => (
              <div
                key={client.name}
                className={`reveal-scale reveal-delay-${(i % 5) + 1} group relative bg-white rounded-xl overflow-hidden h-28 cursor-default border-2 border-transparent hover:border-[#FFC107] hover:shadow-lg transition-all duration-300`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-400 group-hover:opacity-0 group-hover:scale-90">
                  <img
                    src={`/clients/${client.logo}`}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-[#111111]/90 flex items-center justify-center p-3 opacity-0 transition-all duration-400 group-hover:opacity-100 border-b-4 border-[#FFC107]">
                  <span className="text-white text-xs text-center font-bold">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#e0a800] text-[#111111] font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-sm transition-all duration-300"
            >
              View More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ MEET OUR PEOPLE ═══════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading
              title="Meet Our People"
              subtitle="We are a diverse multinational with Asian roots and a proud entrepreneurial heritage. Our people are the reason for our success and the source of our strength and expertise."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((person, i) => (
              <div
                key={person.name}
                className={`${i === 0 ? "reveal-left" : "reveal-right"} bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#FFC107] text-center group`}
              >
                <div className="h-64 relative overflow-hidden border-b-4 border-[#111111] group-hover:border-[#FFC107] transition-colors">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#111111]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#FFC107] transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#e0a800] text-[#111111] font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-sm transition-all duration-300"
            >
              View More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
