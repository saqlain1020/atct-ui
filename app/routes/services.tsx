import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Wrench, Settings, GraduationCap, ClipboardCheck, Cog, HeadsetIcon } from "lucide-react";

export function meta() {
  return [
    { title: "Services - ATC Technology Consultants" },
    { name: "description", content: "Technical support to the principals with fully equipped and trained service centers." },
  ];
}

const services = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description: "Complete installation and commissioning services for all machinery and systems provided by our global partners.",
  },
  {
    icon: Settings,
    title: "Preventive Maintenance",
    description: "Scheduled preventive maintenance programs to ensure optimal performance and longevity of textile machinery.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Comprehensive training programs for operators and maintenance staff at client facilities and our service centers.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Audits",
    description: "Regular quality audits and performance assessments to identify areas of improvement in spinning, weaving and processing.",
  },
  {
    icon: Cog,
    title: "Spare Parts Management",
    description: "Well-stocked warehouses in Lahore and Karachi ensuring quick availability of essential spare parts and travelers.",
  },
  {
    icon: HeadsetIcon,
    title: "Remote Support",
    description: "24/7 remote technical support and troubleshooting assistance for urgent issues and operational queries.",
  },
];

const serviceCenters = [
  {
    city: "Lahore",
    image: "/images/photo-1587293852726-70cdb56c2866-w600.jpg",
  },
  {
    city: "Karachi",
    image: "/images/photo-1567157577867-05ccb1388e66-w600.jpg",
  },
];

export default function Services() {
  return (
    <>
      <PageBanner
        title="Technical Services"
        subtitle="Technical Support to the Principals Fully Equipped & Trained Service Centers in Lahore & Karachi."
        image="/images/photo-1581092160562-40aa08e78837-w1920.jpg"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Technical Services"
            subtitle="We provide a comprehensive range of technical services to support our clients and global partners."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-[#FFC107] hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-16 h-16 rounded-lg bg-[#FFC107]/20 flex items-center justify-center mb-6 group-hover:bg-[#FFC107] transition-colors border border-[#FFC107]/30">
                  <service.icon className="w-8 h-8 text-[#FFC107] group-hover:text-[#111111] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Service Centers" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {serviceCenters.map((sc) => (
              <div key={sc.city} className="bg-white rounded-xl border-2 border-transparent hover:border-[#111111] overflow-hidden shadow-sm transition-all group">
                <div className="h-56 relative overflow-hidden border-b-4 border-[#FFC107]">
                  <img
                    src={sc.image}
                    alt={`${sc.city} cityscape`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#111111]/40 group-hover:bg-[#111111]/20 transition-colors" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#111111]">{sc.city} Service Center</h3>
                  <p className="text-gray-600 mt-3">
                    Fully equipped and trained engineers available for on-site and in-house support.
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
