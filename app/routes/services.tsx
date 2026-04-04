import { PageBanner } from "~/components/PageBanner";
import { SectionHeading } from "~/components/SectionHeading";
import { Wrench, Settings, GraduationCap, ClipboardCheck, Cog, HeadsetIcon, Database, Users } from "lucide-react";

export function meta() {
  return [
    { title: "Technical Services - ATC Technology Consultants" },
    { name: "description", content: "After-sales-service through fully equipped Service Centers in Lahore and Karachi with high caliber technicians and integrated ERP/CRM solutions." },
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
  {
    icon: Database,
    title: "Integrated ERP/CRM Solutions",
    description: "Integrated ERP and CRM systems to better manage customer needs, streamline service delivery, and ensure total customer satisfaction.",
  },
  {
    icon: Users,
    title: "High Caliber Technicians",
    description: "Service Centers deployed with high caliber technicians providing after-sales-service throughout Pakistan from our Lahore and Karachi facilities.",
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

export default function Technical() {
  return (
    <>
      <PageBanner
        title="Technical Services"
        subtitle="After-sales-service through fully equipped Service Centers in Lahore & Karachi, deployed with high caliber technicians and integrated ERP/CRM solutions."
        image="/images/photo-1581092160562-40aa08e78837-w1920.jpg"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Technical Services"
            subtitle="We provide a comprehensive range of technical services to support our clients and global partners."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gold-50 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors border border-gold-200">
                  <service.icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Service Centers" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCenters.map((sc) => (
              <div key={sc.city} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={sc.image}
                    alt={`${sc.city} cityscape`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{sc.city} Service Center</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Fully equipped with high caliber technicians and integrated ERP/CRM solutions for total customer satisfaction.
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
