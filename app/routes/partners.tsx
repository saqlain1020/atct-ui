import { PageBanner } from "~/components/PageBanner";
import { ExternalLink } from "lucide-react";

import BrackerLogo from "public/partners/bracker.png";
import FadisLogo from "public/partners/fadis.png";
import NeuenhauserLogo from "public/partners/neuenhauser.png";
import NovibraLogo from "public/partners/novibra.png";
import MargasaLogo from "public/partners/margasa.jpg";
import SaurerLogo from "public/partners/saurer.png";
import SohlerLogo from "public/partners/sohler.png";
import SuessenLogo from "public/partners/suessen.jpg";
import GofrontholdingLogo from "public/partners/gofrontholding.png";
import WuxiLogo from "public/partners/wuxi-hongyuan.png";

export function meta() {
  return [
    { title: "Global Partners - ATC Technology Consultants" },
    { name: "description", content: "Our global principals — innovative and sustainable machines and systems for the textile industry." },
  ];
}

const machines = [
  {
    name: "Bräcker",
    description: "Ring Spinning Components",
    logo: BrackerLogo,
    machineImage: null,
    tall: false,
    link: "https://www.bracker.ch/"
  },
  {
    name: "Fadis",
    description: "Winding & Rewinding Machines",
    logo: FadisLogo,
    machineImage: "/machinery/fadis.jpg",
    tall: false,
    link: "https://www.fadis.it/"
  },
  {
    name: "Neuenhauser",
    description: "Palletising & Cone Transport Systems",
    logo: NeuenhauserLogo,
    machineImage: "/machinery/neuenhauser.jpg",
    tall: false,
    link: "https://www.neuenhauser.de/en/",
  },
  {
    name: "Novibra",
    description: "High Speed Spindles",
    logo: NovibraLogo,
    machineImage: "/machinery/novibra.png",
    tall: false,
    link: "https://www.novibra.com/",
  },
  {
    name: "Margasa",
    description: "Hard & Soft Waste Recycling Line",
    logo: MargasaLogo,
    machineImage: "/machinery/margasa.png",
    tall: false,
    link: "https://www.margasa.com/"
  },
  {
    name: "Saurer Twisting",
    description: "Two-For-One Twisting Machines",
    logo: SaurerLogo,
    machineImage: "/machinery/saurer-twisting.jpg",
    tall: true,
    link: "https://saurer.com/en"
  },
  {
    name: "Sohler Neuenhauser",
    description: "Overhead Blowers & Material Transport System",
    logo: SohlerLogo,
    machineImage: "/machinery/sohler.jpg",
    tall: false,
    link: "https://www.sohler-neuenhauser.de/"
  },
  {
    name: "Suessen",
    description: "EliTe Compact, CompactApron & CompactEasy Systems",
    logo: SuessenLogo,
    machineImage: "/machinery/suessen.png",
    tall: false,
    link: "https://www.suessen.com/"
  },
  {
    name: "GO Front Holding",
    description: "Fabric / Yarn Dyeing Machines & Stenter",
    logo: GofrontholdingLogo,
    machineImage: null,
    tall: false,
    link: "http://www.gofronts.com/"
  },
  {
    name: "Wuxi Hongyuan",
    description: "Draw-Texturing Machines",
    logo: WuxiLogo,
    machineImage: "/machinery/wuxi.jpg",
    tall: true,
    link: "http://www.wxhy.com/index_en.html"
  },
];

export default function MachinesAndSystems() {
  return (
    <>
      <PageBanner
        title="Global Partners"
        subtitle="Innovative and Sustainable Machines & Systems"
        image="/machinery/banner.jpg"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className={`partner-card group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${machine.tall ? "row-span-2" : ""
                  }`}
              >
                {machine.machineImage && (
                  <img
                    src={machine.machineImage}
                    alt={`${machine.name} machinery`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 bg-white">
                  <img
                    src={machine.logo}
                    alt={machine.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Updated hover overlay using the new Slate theme */}
                <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center p-6 text-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-[2px] border-b-4 border-gold-500">
                  <h3 className="text-white font-bold text-xl mb-3 drop-shadow-lg">
                    {machine.name}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-6 font-medium drop-shadow-md">
                    {machine.description}
                  </p>
                  <a href={machine.link} target="_blank" className="inline-flex items-center gap-1.5 text-gold-400 text-sm font-bold tracking-wider uppercase group/link drop-shadow-md">
                    Visit Website <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
