type SectionTitleProps = {
subtitle?: string;
title: string;
};

export default function SectionTitle({
subtitle,
title,
}: SectionTitleProps) {
return ( <div className="mb-6">
{subtitle && ( <div className="flex items-center gap-3"> <span
         aria-hidden="true"
         className="h-px w-6 bg-[#B39455]/70"
       />

      <span className="text-xs font-semibold text-[#174C45]">
        {subtitle}
      </span>
    </div>
  )}

  <h2
    className="
      mt-2
      text-2xl
      font-bold
      leading-9
      text-slate-900
      md:text-3xl
      md:leading-10
    "
  >
    {title}
  </h2>

  <div
    aria-hidden="true"
    className="
      mt-4
      h-[3px]
      w-10
      rounded-full
      bg-[#174C45]
    "
  />
</div>


);
}
