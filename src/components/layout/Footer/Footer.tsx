import Link from "next/link";
import Container from "../Container";
import SocialLinks from "@/components/common/SocialLinks";
import { navigationItems } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#E3D9CB] bg-[#F1ECE3]">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-[#302A24]"
            >
              سامانه جامع مساجد
            </Link>

            <p className="mt-2 max-w-md text-sm leading-7 text-[#756D63]">
              سامانه جامع اطلاعات و خدمات مساجد
            </p>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-[#302A24]">
              ارتباط با ما
            </span>

            <SocialLinks />
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-[#E3D9CB] py-6">
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
                          text-[#756D63]
                          transition-colors
                          hover:text-[#70543A]
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
                        text-[#756D63]
                        transition-colors
                        hover:text-[#70543A]
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
        <div className="border-t border-[#E3D9CB] py-5 text-center text-xs text-[#93897D]">
          © 2026 سامانه جامع مساجد. تمامی حقوق محفوظ است.
        </div>
      </Container>
    </footer>
  );
}