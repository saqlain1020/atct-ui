import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "Gallery - ATC Technology Consultants" },
    { name: "description", content: "Photo galleries from ATC events and exhibitions." },
  ];
}

const galleries = [
  { name: "Ibrahim Fibre", image: "/images/photo-1504917595217-d4dc5ebe6122-w600.jpg" },
  { name: "SAP Go-Live Closing Ceremony", image: "/images/photo-1540575467063-178a50c2df87-w600.jpg" },
  { name: "ITMA Milan 2015", image: "/images/photo-1511578314322-379afb476865-w600.jpg" },
  { name: "Textile Asia 19", image: "/images/photo-1558618666-fcd25c85f82e-w600.jpg" },
  { name: "IGATEX 2014", image: "/images/photo-1492684223066-81342ee5ff30-w600.jpg" },
  { name: "50 Years Of Celebrations", image: "/images/photo-1551818255-e6e10975bc17-w600.jpg" },
  { name: "ATC - Stall", image: "/images/photo-1475721027785-f74eccf877e2-w600.jpg" },
  { name: "Yarn Expo", image: "/images/photo-1567789884554-0b844b597180-w600.jpg" },
  { name: "IGATEX 2018", image: "/images/photo-1505373877841-8d25f7d46678-w600.jpg" },
  { name: "RCO Symposium", image: "/images/photo-1587825140708-dfaf18c4e236-w600.jpg" },
];

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="/images/photo-1492684223066-81342ee5ff30-w1920.jpg"
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
