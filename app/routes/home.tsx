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
    description:
      "Cotton cards, Non-woven cards, woolen cards, Fiber preparation machines, rotary cutter and tearing machines",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Margasa",
    description: "Soft & hard waste recycling lines, non-woven lines",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Saurer Jintan",
    description: "Blowroom and carding machines",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Neuenhauser",
    description:
      "Automation for Spinning Mills and MMF Production, Batch winder – Center winder, Coating & Drying Systems",
    image:
      "https://images.unsplash.com/photo-1565043589149-26ae5c0d59e3?auto=format&fit=crop&w=600&q=80",
  },
];

const clientNames = [
  "Gul Ahmed Textile",
  "Nishat Mills",
  "Interloop",
  "Ibrahim Fibres",
  "Sapphire Group",
  "Artistic Milliners",
  "Feroze1888 Mills",
  "Al Karam Group",
  "Masood Textiles",
  "Soorty Group",
  "Yunus Brothers",
  "Gadoon Textile",
];

const teamMembers = [
  {
    name: "Zahid Majeed",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Abrar Hasan",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
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
              className="hero-content-animate max-w-xl bg-navy-900/70 backdrop-blur-sm p-8 md:p-10 border-l-4 border-atc-blue"
            >
              <span className="inline-block bg-atc-blue text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5">
                {heroSlides[currentSlide].label}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mt-4 tracking-tight">
                {heroSlides[currentSlide].heading}
              </h1>
              <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
                {heroSlides[currentSlide].text}
              </p>
              <Link
                to="/about-us/overview"
                className="inline-block mt-6 border-2 border-white/70 hover:bg-white hover:text-navy-900 text-white text-sm font-bold uppercase tracking-wider px-8 py-3 transition-all duration-300"
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
                  <div className="flip-card-front bg-white shadow-sm border border-gray-100 flex flex-col items-center justify-center p-7 text-center">
                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-atc-green/20 to-atc-green/5 flex items-center justify-center mb-5">
                      <feature.icon className="w-8 h-8 text-atc-green" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flip-card-back bg-linear-to-br from-atc-green to-atc-blue flex flex-col items-center justify-center p-7 text-center">
                    <feature.icon className="w-10 h-10 text-white/30 mb-4" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[220px]">
            {machines.map((machine, i) => (
              <div
                key={machine.name}
                className={`reveal reveal-delay-${i + 1} masonry-card relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 || i === 3 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="masonry-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full">
                  <h4 className="masonry-title text-white font-bold text-lg drop-shadow-lg">
                    {machine.name}
                  </h4>
                  <div className="masonry-overlay">
                    <p className="text-white/90 text-sm leading-relaxed mt-2">
                      {machine.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-atc-green-light text-sm font-semibold mt-3">
                      Visit Website <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUR CLIENTS ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal">
            <SectionHeading
              title="Our Clients"
              subtitle="Celebrating 50 years of service to the Pakistani Textile Industry!"
              light
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientNames.map((name, i) => (
              <div
                key={name}
                className={`reveal-scale reveal-delay-${(i % 5) + 1} client-card relative rounded-xl overflow-hidden h-28 cursor-default`}
              >
                <img
                  src={`https://picsum.photos/seed/${i + 100}/300/200`}
                  alt={name}
                  className="client-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <span className="client-name text-white text-xs text-center font-bold drop-shadow-lg bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 bg-atc-red hover:bg-atc-red-dark text-white font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-atc-red/25"
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
                className={`${i === 0 ? "reveal-left" : "reveal-right"} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1`}
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-atc-green/0 group-hover:bg-atc-green/10 transition-colors duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-atc-green transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-atc-red font-semibold text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              to="/about-us/our-team"
              className="inline-flex items-center gap-2 bg-atc-red hover:bg-atc-red-dark text-white font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-atc-red/25"
            >
              View More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
