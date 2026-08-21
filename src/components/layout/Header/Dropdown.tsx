import { ChevronDown } from "lucide-react";

import type { NavigationItem } from "@/constants/navigation";
import DropdownItem from "./DropdownItem";

type DropdownProps = {
  item: NavigationItem;
};

export default function Dropdown({
  item,
}: DropdownProps) {
  return (
    <div className="group relative">
      <button
        className="
          flex
          items-center
          gap-1
          py-2
          text-sm
          font-medium
          text-slate-700
          transition-colors
          hover:text-[#7A8270]
        "
      >
        {item.label}

        <ChevronDown
          size={16}
          className="
            z-10
            transition-transform
            duration-200
            group-hover:rotate-180
          "
        />
      </button>

      <div
        className="
          invisible
          absolute
          right-0
          top-full
          z-10
          mt-0
          w-80
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-2
          opacity-0
          shadow-lg
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
      >
        {item.children?.map((child) => (
          <DropdownItem
            key={child.href}
            item={child}
          />
        ))}
      </div>
    </div>
  );
}