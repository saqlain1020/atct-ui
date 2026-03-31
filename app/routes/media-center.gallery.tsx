import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "Gallery - ATC Technology Consultants" },
    { name: "description", content: "Photo galleries from ATC events and exhibitions." },
  ];
}

const galleries = [
  { name: "Ibrahim Fibre", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" },
  { name: "SAP Go-Live Closing Ceremony", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" },
  { name: "ITMA Milan 2015", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80" },
  { name: "Textile Asia 19", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80" },
  { name: "IGATEX 2014", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" },
  { name: "50 Years Of Celebrations", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=600&q=80" },
  { name: "ATC - Stall", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80" },
  { name: "Yarn Expo", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=600&q=80" },
  { name: "IGATEX 2018", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80" },
  { name: "RCO Symposium", image: "https://images.unsplash.com/photo-1587825140708-dfaf18c4e236?auto=format&fit=crop&w=600&q=80" },
];

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((g) => (
              <div
                key={g.name}
                className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-center justify-center">
                    <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Gallery
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy-900 group-hover:text-atc-green transition-colors">
                    {g.name}
                  </h3>
                  <span className="text-atc-red text-sm font-medium mt-1 inline-block">
                    View Gallery &rarr;
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
