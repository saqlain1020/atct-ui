import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "Clients - ATC Technology Consultants" },
    { name: "description", content: "Our valued clients across North and South Pakistan." },
  ];
}

const northClients = [
  "AG-GIGI", "AGI Spinning Mills", "Ahmad Lace Works", "Al Karam Group",
  "Al-Rahim Textile", "Artistic Fabric Mills", "Chakwal Group", "Crescent Bahuman",
  "Din Textile", "Ejaz Group", "Fazal Cloth (Group)", "Feroze1888 Mills Ltd",
  "Gadoon Textile Mills", "Gigi Industries", "H.A. Fibres", "Ibrahim Fibres",
  "Interloop", "JK group of Companies", "Kamal Hosiery", "Mahmood Group",
  "Masood Textiles", "MEKOTEX", "Monnoo Group", "Mustaqim Socks",
  "Nagina Group", "Naveena Group", "Nishat Chunian", "Nishat Mills",
  "Pak Kuwait Group", "Premium Textile Mills", "Quality Textile",
  "Rupali Polyester", "Saif Group", "Sapphire Group", "Shafi Texcel",
  "Siddiq Sons Limited", "Suraj Group", "Tata Group", "Umar Group",
  "Zahra Textiles", "Zaman Textile",
];

const southClients = [
  "A.J. Textile", "Al-Muqeet Textile", "Artistic Denim Mills",
  "Artistic Milliners", "Ayesha Spinning", "Combined Fabrics Limited",
  "Crestex", "Dynamic Sports", "Fashion Knit Industries", "Gul Ahmed Textile",
  "Hira Textile", "Indus Group", "Jawaid Bross.", "Khas",
  "Metco Group", "Nagina", "Soorty Group", "United Towel Exporters",
  "Yunus Brothers Group",
];

function clientSeed(name: string, offset: number) {
  let hash = offset;
  for (let i = 0; i < name.length; i++) hash = hash * 31 + name.charCodeAt(i);
  return Math.abs(hash) % 1000;
}

export default function Clients() {
  const [tab, setTab] = useState<"north" | "south">("north");
  const clients = tab === "north" ? northClients : southClients;
  const seedOffset = tab === "north" ? 0 : 500;

  return (
    <>
      <PageBanner
        title="Our Clients"
        subtitle="We divide our clients in terms of North and South of Pakistan."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 mb-12">
            <button
              onClick={() => setTab("north")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                tab === "north"
                  ? "bg-atc-red text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              North Clients
            </button>
            <button
              onClick={() => setTab("south")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                tab === "south"
                  ? "bg-atc-red text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              South Clients
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((name, i) => (
              <div
                key={name}
                className="client-card relative rounded-xl overflow-hidden h-36 cursor-default"
              >
                <img
                  src={`https://picsum.photos/seed/${clientSeed(name, seedOffset + i)}/300/200`}
                  alt={name}
                  className="client-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <span className="client-name text-white text-sm font-bold text-center drop-shadow-lg bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    {name}
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
