type SectionTitleProps = {
  subtitle?: string;
  title: string;
};

export default function SectionTitle({
  subtitle,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-6">
      {subtitle && (
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          {subtitle}
        </span>
      )}

      <h2 className="mt-1 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="mt-3 h-1 w-10 rounded-full bg-teal-700" />
    </div>
  );
}