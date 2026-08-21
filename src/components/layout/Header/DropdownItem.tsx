import Link from "next/link";

import type { NavigationChild } from "@/constants/navigation";

type DropdownItemProps = {
  item: NavigationChild;
};

export default function DropdownItem({
  item,
}: DropdownItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="
        group
        flex
        items-start
        gap-3
        rounded-xl
        p-3
        transition-all
        duration-200
        hover:bg-slate-50
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#EEF0E9]
          text-[#7A8270]
          transition-colors
          group-hover:bg-[#7A8270]
          group-hover:text-white
        "
      >
        <Icon size={18} />
      </div>

      <div>
        <h4 className="font-medium text-slate-800">
          {item.label}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {item.description}
        </p>
      </div>
    </Link>
  );
}