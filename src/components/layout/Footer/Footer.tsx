import Link from "next/link";

import Container from "../Container";
import SocialLinks from "@/components/common/SocialLinks";
import { navigationItems } from "@/constants/navigation";

export default function Footer() {
return ( <footer className="mt-12 border-t border-[#174C45]/10 bg-[#F1F4F0]"> <Container> <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
{/* Brand */} <div> <Link
           href="/"
           className="
             text-lg
             font-bold
             text-slate-800
             transition-colors
             hover:text-[#174C45]
           "
         >
سامانه جامع مساجد </Link>


        <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">
          سامانه جامع اطلاعات و خدمات مساجد
        </p>
      </div>

      {/* Contact & Social */}
      <div className="flex flex-col gap-4">
        <span className="text-sm font-semibold text-slate-700">
          ارتباط با ما
        </span>

        <SocialLinks />
      </div>
    </div>

    {/* Navigation */}
    <div className="border-t border-slate-200/80 py-6">
      <nav>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {navigationItems.map((item) => {
            if (item.href) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm
                      text-slate-500
                      transition-colors
                      hover:text-[#315A73]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    hover:text-[#315A73]
                  "
                >
                  {child.label}
                </Link>
              </li>
            ));
          })}
        </ul>
      </nav>
    </div>

    {/* Copyright */}
    <div
      className="
        border-t
        border-slate-200/80
        py-5
        text-center
        text-xs
        text-slate-400
      "
    >
      © 2026 سامانه جامع مساجد. تمامی حقوق محفوظ است.
    </div>
  </Container>
</footer>


);
}
