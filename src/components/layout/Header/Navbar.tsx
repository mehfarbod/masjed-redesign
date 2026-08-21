import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { navigationItems } from "@/constants/navigation";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <Dropdown item={item} />
            ) : (
              <NavItem
                label={item.label}
                href={item.href!}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}