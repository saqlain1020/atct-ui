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
    <div className="bg-slate-50 min-h-screen">
      <PageBanner
        title="Our Clients"
        subtitle="Trusted by the largest textile manufacturers across the North and South of Pakistan."
        image="/images/photo-1556761175-5973dc0f32e7-w1920.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Beautiful Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setTab("north")}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                tab === "north"
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              North Clients
            </button>
            <button
              onClick={() => setTab("south")}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                tab === "south"
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              South Clients
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((name) => (
              <div
                key={name}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden h-36 cursor-default hover:border-gold-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
                  <img
                    src={`/clients/${clientLogos[name]}`}
                    alt={name}
                    className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

                {/* Updated hover state overlay using Slate theme */}
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px] flex items-center justify-center p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 border-b-4 border-gold-500">
                  <span className="text-white text-sm font-bold text-center tracking-wide leading-relaxed drop-shadow-md">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
