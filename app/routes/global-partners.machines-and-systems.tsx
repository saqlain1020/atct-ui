import { PageBanner } from "~/components/PageBanner";
import { ExternalLink } from "lucide-react";

import BoninoLogo from "public/partners/bonino.png";
import BrackerLogo from "public/partners/bracker.png";
import FadisLogo from "public/partners/fadis.png";
import MargasaLogo from "public/partners/margasa.jpg";
import MullerLogo from "public/partners/muller.png";
import NeuenhauserLogo from "public/partners/neuenhauser.png";
import NovibraLogo from "public/partners/novibra.png";
import SaurerJintanLogo from "public/partners/saurer-jintan.jpg";
import SaurerLogo from "public/partners/saurer.png";
import SohlerLogo from "public/partners/sohler.png";
import SuessenLogo from "public/partners/suessen.jpg";
import WuxiLogo from "public/partners/wuxi-hongyuan.png";

export function meta() {
  return [
    { title: "Machines and Systems - ATC Technology Consultants" },
    { name: "description", content: "Innovative and sustainable machines and systems from our global partners." },
  ];
}

const machines = [
  {
    name: "Bonino Carding Machines",
    description: "Cotton cards, Non-woven cards, woolen cards, Fiber preparation machines, rotary cutter and tearing machines",
    logo: BoninoLogo,
    tall: true,
  },
  {
    name: "Bräcker",
    description: "Ring Spinning Components",
    logo: BrackerLogo,
    tall: false,
  },
  {
    name: "Fadis",
    description: "Winding & Rewinding Machines",
    logo: FadisLogo,
    tall: false,
  },
  {
    name: "Margasa",
    description: "Hard & Soft Waste Recycling Line",
    logo: MargasaLogo,
    tall: false,
  },
  {
    name: "Muller",
    description: "Narrow fabric and woven label machines",
    logo: MullerLogo,
    tall: true,
  },
  {
    name: "Neuenhauser",
    description: "Palletising & Cone Transport Systems",
    logo: NeuenhauserLogo,
    tall: false,
  },
  {
    name: "Novibra",
    description: "High Speed Spindles",
    logo: NovibraLogo,
    tall: false,
  },
  {
    name: "Saurer Jintan",
    description: "Blowroom and carding machines",
    logo: SaurerJintanLogo,
    tall: false,
  },
  {
    name: "Saurer Twisting Solutions",
    description: "Two-For-One Twisting Machines",
    logo: SaurerLogo,
    tall: true,
  },
  {
    name: "Sohler",
    description: "Overhead Blowers & Material Transport System",
    logo: SohlerLogo,
    tall: false,
  },
  {
    name: "Suessen",
    description: "EliTe Compact, CompactApron & CompactEasy Systems",
    logo: SuessenLogo,
    tall: false,
  },
  {
    name: "Wuxi Hong Yuan",
    description: "Draw texturizing machines",
    logo: WuxiLogo,
    tall: true,
  },
];

export default function MachinesAndSystems() {
  return (
    <>
      <PageBanner
        title="Machines and Systems"
        subtitle="Innovative and Sustainable"
        image="https://images.unsplash.com/photo-1565043589149-26ae5c0d59e3?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[180px]">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className={`partner-card group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-200 bg-white ${
                  machine.tall ? "row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <img
                    src={machine.logo}
                    alt={machine.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-navy-900 to-atc-blue flex flex-col items-center justify-center p-6 text-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl mb-3">
                    {machine.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {machine.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-atc-green-light text-sm font-semibold hover:underline">
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
