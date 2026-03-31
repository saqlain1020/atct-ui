import { PageBanner } from "~/components/PageBanner";
import { ExternalLink } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fadis",
    description: "Dye package winding systems, rewinding & air covering machines",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Margasa",
    description: "Soft & hard waste recycling lines, non-woven lines",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Muller",
    description: "Narrow fabric and woven label machines",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Neuenhauser",
    description: "Automation for Spinning Mills and MMF Production, Batch winder – Center winder, Coating & Drying Systems",
    image: "https://images.unsplash.com/photo-1565043589149-26ae5c0d59e3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Saurer Jintan",
    description: "Blowroom and carding machines",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Saurer Twisting Solutions",
    description: "With intelligent and economical solutions Saurer Twisting Solutions regularly defines the benchmarks for twisting and cabling machines for tire cord, carpet, staple fibre, glass filament and industrial yarns.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sohler",
    description: "Travelling Cleaners for Spinning and Weaving Mills, Roving Bobbin Transport Systems, FX-Systems (selective removal of dust and fibres)",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suessen",
    description: "Elite compact spinning, EliTwist, Premium parts for open end, Spinning and drafting system",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wuxi Hong Yua",
    description: "Draw texturizing machines",
    image: "https://images.unsplash.com/photo-1574537898594-2fbab7bb20f0?auto=format&fit=crop&w=600&q=80",
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-atc-green/50 hover:shadow-lg transition-all group"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-900 text-lg mb-2 group-hover:text-atc-green transition-colors">
                    {machine.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {machine.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-atc-green text-sm font-medium mt-4 cursor-pointer hover:underline">
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
