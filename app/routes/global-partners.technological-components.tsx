import { PageBanner } from "~/components/PageBanner";
import { ExternalLink } from "lucide-react";

import SuessenLogo from "public/partners/suessen.jpg";
import BrackerLogo from "public/partners/bracker.png";
import NovibraLogo from "public/partners/novibra.png";

import SuessenMachine from "public/tech-components/suessen-machine.png";
import BrackerMachine from "public/tech-components/bracker-machine.png";
import NovibraMachine from "public/tech-components/novibra-machine.png";
import BannerImg from "public/tech-components/banner.jpg";

export function meta() {
  return [
    { title: "Technological Components - ATC Technology Consultants" },
    { name: "description", content: "Quality and productivity focused technological components from our global partners." },
  ];
}

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

export default function TechnologicalComponents() {
  return (
    <>
      <PageBanner
        title="Technological Components"
        subtitle="Quality and Productivity"
        image={BannerImg}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {components.map((comp, i) => (
            <div
              key={comp.name}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden">
                <img
                  src={comp.machine}
                  alt={`${comp.name} machine`}
                  className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/40 to-transparent" />
              </div>

              <div className="w-full md:w-1/2 space-y-5">
                <div className="h-16 flex items-center">
                  <img
                    src={comp.logo}
                    alt={comp.name}
                    className="max-h-full max-w-[200px] object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">
                  {comp.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {comp.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-atc-red font-semibold text-sm hover:gap-3 transition-all"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
