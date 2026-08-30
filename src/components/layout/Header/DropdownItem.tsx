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
      {/* Icon */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#E8EEF2]
          text-[#315A73]
          transition-all
          duration-200
          group-hover:bg-[#315A73]
          group-hover:text-white
        "
      >
        <Icon size={18} />
      </div>

      {/* Content */}
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