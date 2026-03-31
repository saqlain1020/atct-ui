import { PageBanner } from "~/components/PageBanner";

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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bracker",
    description: "Ring travelers, spinning rings, top rollers, maintenance machines, Spinning tubes and various tools",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Novibra",
    description: "Spindles: standard HP-S68, Energy Saving HP-S68/3 Noise absorbing NASA HP-S68, L-type 8\" Top & Bottom rollers, Lubrico Oiling Machine",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TechnologicalComponents() {
  return (
    <>
      <PageBanner
        title="Technological Components"
        subtitle="Quality and Productivity"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((comp) => (
              <div
                key={comp.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-atc-green/50 hover:shadow-lg transition-all group"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={comp.image}
                    alt={comp.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-900 text-lg mb-2 group-hover:text-atc-green transition-colors">
                    {comp.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
