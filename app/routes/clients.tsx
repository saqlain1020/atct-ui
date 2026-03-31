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

export default function Clients() {
  const [tab, setTab] = useState<"north" | "south">("north");
  const clients = tab === "north" ? northClients : southClients;

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
                  ? "bg-atc-green text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              North Clients
            </button>
            <button
              onClick={() => setTab("south")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                tab === "south"
                  ? "bg-atc-green text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              South Clients
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((name) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-center h-28 hover:border-atc-green/50 hover:shadow-md transition-all text-center"
              >
                <span className="text-navy-800 text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
