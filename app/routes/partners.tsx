import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { ExternalLink, Wrench } from "lucide-react";

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

import SuessenMachine from "public/tech-components/suessen-machine.png";
import BrackerMachine from "public/tech-components/bracker-machine.png";
import NovibraMachine from "public/tech-components/novibra-machine.png";

export function meta() {
  return [
    { title: "Global Partners - ATC Technology Consultants" },
    { name: "description", content: "Innovative machines, systems, and technological components from our global partners." },
  ];
}

const machines = [
  {
    name: "Bonino Carding Machines",
    description: "Cotton cards, Non-woven cards, woolen cards, Fiber preparation machines",
    logo: BoninoLogo,
    machineImage: "/machinery/bonino.jpg",
    tall: true,
  },
  {
    name: "Bräcker",
    description: "Ring Spinning Components",
    logo: BrackerLogo,
    machineImage: null,
    tall: false,
  },
  {
    name: "Fadis",
    description: "Winding & Rewinding Machines",
    logo: FadisLogo,
    machineImage: "/machinery/fadis.jpg",
    tall: false,
  },
  {
    name: "Margasa",
    description: "Hard & Soft Waste Recycling Line",
    logo: MargasaLogo,
    machineImage: "/machinery/margasa.png",
    tall: false,
  },
  {
    name: "Muller",
    description: "Narrow fabric and woven label machines",
    logo: MullerLogo,
    machineImage: "/machinery/muller.jpg",
    tall: true,
  },
  {
    name: "Neuenhauser",
    description: "Palletising & Cone Transport Systems",
    logo: NeuenhauserLogo,
    machineImage: "/machinery/neuenhauser.jpg",
    tall: false,
  },
  {
    name: "Novibra",
    description: "High Speed Spindles",
    logo: NovibraLogo,
    machineImage: null,
    tall: false,
  },
  {
    name: "Saurer Jintan",
    description: "Blowroom and carding machines",
    logo: SaurerJintanLogo,
    machineImage: "/machinery/saurer-jintan.jpg",
    tall: false,
  },
  {
    name: "Saurer Twisting Solutions",
    description: "Two-For-One Twisting Machines",
    logo: SaurerLogo,
    machineImage: "/machinery/saurer-twisting.jpg",
    tall: true,
  },
  {
    name: "Sohler",
    description: "Overhead Blowers & Material Transport System",
    logo: SohlerLogo,
    machineImage: "/machinery/sohler.jpg",
    tall: false,
  },
  {
    name: "Suessen",
    description: "EliTe Compact, CompactApron & CompactEasy Systems",
    logo: SuessenLogo,
    machineImage: "/machinery/suessen.png",
    tall: false,
  },
  {
    name: "Wuxi Hong Yuan",
    description: "Draw texturizing machines",
    logo: WuxiLogo,
    machineImage: "/machinery/wuxi.jpg",
    tall: true,
  },
];

const components = [
  {
    name: "Suessen",
    description: "EliTe Compact spinning, EliTwist, premium parts for Open End spinning Drafting system",
    logo: SuessenLogo,
    machine: SuessenMachine,
  },
  {
    name: "Bräcker",
    description: "Ring travelers, spinning rings, top rollers, maintenance machines, Spinning tubes and various tools",
    logo: BrackerLogo,
    machine: BrackerMachine,
  },
  {
    name: "Novibra",
    description: "Spindles: standard HP-S68, Energy Saving HP-S68/3 Noise absorbing NASA HP-S68, L-type 8\" Top & Bottom rollers, Lubrico Oiling Machine",
    logo: NovibraLogo,
    machine: NovibraMachine,
  },
];

const skillSet = [
  { principal: "Suessen/CDS", engineers: 7 },
  { principal: "Novibra", engineers: 7 },
  { principal: "Bracker", engineers: 5 },
  { principal: "Peass", engineers: 6 },
  { principal: "Jakob Muller", engineers: 4 },
  { principal: "Saurer Twisting Solutions", engineers: 3 },
  { principal: "Fadis", engineers: 5 },
  { principal: "Gaston", engineers: 1 },
  { principal: "GoFront", engineers: 5 },
  { principal: "Sunwin", engineers: 1 },
  { principal: "Sohler/Neuenhauser", engineers: 10 },
  { principal: "Unitop", engineers: 3 },
  { principal: "KEB", engineers: 3 },
];

export default function Partners() {
  return (
    <>
      <PageBanner
        title="Global Partners"
        subtitle="Innovative Machines, Systems & Technological Components"
        image="/machinery/banner.jpg"
      />

      {/* Machines and Systems */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Machines & Systems" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[180px] mt-12">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className={`partner-card group relative rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#FFC107] bg-white transition-all ${
                  machine.tall ? "row-span-2" : ""
                }`}
              >
                {machine.machineImage && (
                  <img
                    src={machine.machineImage}
                    alt={`${machine.name} machinery`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <img
                    src={machine.logo}
                    alt={machine.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-[#111111]/90 flex flex-col items-center justify-center p-6 text-center opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl mb-3">
                    {machine.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {machine.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#FFC107] text-sm font-semibold hover:underline">
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technological Components */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technological Components" />
          <div className="space-y-20 mt-12">
            {components.map((comp, i) => (
              <div
                key={comp.name}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2 relative group rounded-xl overflow-hidden border-b-4 border-[#FFC107]">
                  <img
                    src={comp.machine}
                    alt={`${comp.name} machine`}
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111111]/40 to-transparent" />
                </div>

                <div className="w-full md:w-1/2 space-y-5">
                  <div className="h-16 flex items-center">
                    <img
                      src={comp.logo}
                      alt={comp.name}
                      className="max-h-full max-w-[200px] object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    {comp.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {comp.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#FFC107] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Sales Service */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="After Sales Service" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 mt-12">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-[#FFC107]/20 rounded-lg flex items-center justify-center shrink-0 border border-[#FFC107]/30">
                <Wrench className="w-7 h-7 text-[#FFC107]" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our teams of engineers offer complete services to our Customers and Global
                Partners in Pakistan as well as overseas. At ATC we believe in building long
                lasting relationships which is why we have a dedicated after-sales service team
                that is not just limited to providing spare parts but offers help and solutions
                over the product's entire lifecycle. Our customer service ranges from technology
                support to repair services to customer training.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border-b-4 border-[#111111]">
              <img
                src="/images/photo-1581092918056-0c4c3acd3789-w700.jpg"
                alt="Engineering support"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#111111] mb-6">Service Skill Set</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#111111] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm uppercase tracking-wider">Principals</th>
                  <th className="text-center px-6 py-4 font-semibold text-sm uppercase tracking-wider">Certified Engineers</th>
                </tr>
              </thead>
              <tbody>
                {skillSet.map((row, idx) => (
                  <tr key={row.principal} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3.5 text-sm text-gray-800 font-medium">{row.principal}</td>
                    <td className="px-6 py-3.5 text-sm text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FFC107]/20 text-[#111111] font-bold text-sm border border-[#FFC107]/30">
                        {row.engineers}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
