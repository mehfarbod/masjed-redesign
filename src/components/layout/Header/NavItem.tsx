import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className="
        relative
        py-2
        text-sm
        
        font-medium
        text-slate-700
        transition-colors
        duration-200
        hover:text-teal-700
      "
    >
      {label}
    </Link>
  );
}
