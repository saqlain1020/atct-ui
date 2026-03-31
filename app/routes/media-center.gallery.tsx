import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "Gallery - ATC Technology Consultants" },
    { name: "description", content: "Photo galleries from ATC events and exhibitions." },
  ];
}

const galleries = [
  { name: "Ibrahim Fibre", image: "/media/gallery/ibrahim-fibre.jpg" },
  { name: "SAP Go-Live Closing Ceremony", image: "/media/gallery/sap-go-live.jpg" },
  { name: "ITMA Milan 2015", image: "/media/gallery/itma-milan-2015.jpg" },
  { name: "Textile Asia 19", image: "/media/gallery/textile-asia.jpg" },
  { name: "IGATEX 2014", image: "/media/gallery/igatex-2014.jpg" },
  { name: "50 Years Of Celebrations", image: "/media/gallery/50-years.jpg" },
  { name: "ATC - Stall", image: "/media/gallery/atc-stall.jpg" },
  { name: "Yarn Expo", image: "/media/gallery/yarn-expo.jpg" },
  { name: "IGATEX 2018", image: "/media/gallery/igatex-2018.jpg" },
  { name: "RCO Symposium", image: "/media/gallery/rco-symposium.jpg" },
];

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="/media/news/banner.jpg"
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
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy-900 group-hover:text-atc-green transition-colors">
                    {g.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
