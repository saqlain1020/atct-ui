import { useState } from "react";
import { PageBanner } from "~/components/PageBanner";

export function meta() {
  return [
    { title: "Clients - ATC Technology Consultants" },
    { name: "description", content: "Our valued clients across North and South Pakistan." },
  ];
}

const clientLogos: Record<string, string> = {
  "A.J. Textile": "a-j-textile.png",
  "AG-GIGI": "ag-gigi.webp",
  "AGI Spinning Mills": "agi-spinning-mills.png",
  "Ahmad Lace Works": "ahmad-lace-works.jpg",
  "Al Karam Group": "al-karam-group.png",
  "Al-Muqeet Textile": "al-muqeet-textile.png",
  "Al-Rahim Textile": "al-rahim-textile.png",
  "Artistic Denim Mills": "artistic-denim-mills.png",
  "Artistic Fabric Mills": "artistic-fabric-mills.png",
  "Artistic Milliners": "artistic-milliners.png",
  "Ayesha Spinning": "ayesha-spinning.png",
  "Chakwal Group": "chakwal-group.png",
  "Combined Fabrics Limited": "combined-fabrics-limited-logo.jpg",
  "Crescent Bahuman": "crescent-bahuman.png",
  "Crestex": "crestex.png",
  "Din Textile": "din-textile.png",
  "Dynamic Sports": "dynamic-sports.png",
  "Ejaz Group": "ejaz-group.png",
  "Fashion Knit Industries": "fashion-knit-industries.png",
  "Fazal Cloth (Group)": "fazal-cloth-group.png",
  "Feroze1888 Mills Ltd": "feroze1888-mills-ltd.png",
  "Gadoon Textile Mills": "gadoon-textile-mills.png",
  "Gigi Industries": "gigi-industries.png",
  "Gul Ahmed Textile": "gul-ahmed-textile.png",
  "H.A. Fibres": "h-a-fibres.png",
  "Hira Textile": "hira-textile.png",
  "Ibrahim Fibres": "ibrahim-fibres.png",
  "Indus Group": "indus-group.png",
  "Interloop": "interloop.png",
  "Jawaid Bross.": "jawaid-bross.jpg",
  "JK group of Companies": "jk-group-of-companies.png",
  "Kamal Hosiery": "kamal-hosiery.png",
  "Khas": "khas.png",
  "Mahmood Group": "mahmood-group.png",
  "Masood Textiles": "masood-textiles.png",
  "MEKOTEX": "mekotex.png",
  "Metco Group": "metco-group.png",
  "Monnoo Group": "monnoo-group.png",
  "Mustaqim Socks": "mustaqim-socks.png",
  "Nagina": "nagina.png",
  "Nagina Group": "nagina-group.png",
  "Naveena Group": "naveena-group.png",
  "Nishat Chunian": "nishat-chunian.png",
  "Nishat Mills": "nishat-mills.png",
  "Pak Kuwait Group": "pak-kuwait-group.png",
  "Premium Textile Mills": "premium-textile-mills.png",
  "Quality Textile": "quality-textile.png",
  "Rupali Polyester": "rupali-polyester.png",
  "Saif Group": "saif-group.png",
  "Sapphire Group": "sapphire-group.png",
  "Shafi Texcel": "shafi-texcel.png",
  "Siddiq Sons Limited": "siddiq-sons-limited.png",
  "Soorty Group": "soorty-group.png",
  "Suraj Group": "suraj-group.png",
  "Tata Group": "tata-group.png",
  "Umar Group": "umar-group.png",
  "United Towel Exporters": "united-towel-exporters.png",
  "Yunus Brothers Group": "yunus-brothers-group.png",
  "Zahra Textiles": "zahra-textiles.png",
  "Zaman Textile": "zaman-textile.png",
};

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
        image="/images/photo-1556761175-5973dc0f32e7-w1920.jpg"
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
            {clients.map((name) => (
              <div
                key={name}
                className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden h-32 cursor-default hover:border-atc-green/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center p-5 transition-all duration-400 group-hover:opacity-0 group-hover:scale-90">
                  <img
                    src={`/clients/${clientLogos[name]}`}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-navy-900 to-atc-blue flex items-center justify-center p-4 opacity-0 transition-all duration-400 group-hover:opacity-100">
                  <span className="text-white text-sm font-bold text-center">
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
