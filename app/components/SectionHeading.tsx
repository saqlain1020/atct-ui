interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ overline, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {overline && (
        <p className="text-atc-green font-semibold text-sm uppercase tracking-wider mb-2">
          {overline}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-3xl mx-auto text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-atc-red mx-auto rounded-full" />
    </div>
  );
}
