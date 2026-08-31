
"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#D9D2C6] bg-[#FCFAF5]">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <Navbar />
          </div>

          {/* Desktop Search */}
          <button
            className="
              hidden
              shrink-0
              rounded-lg
              p-2
              text-slate-600
              transition-colors
              hover:bg-[#174C45]/[0.07]
              hover:text-[#315A73]
              md:block
            "
            aria-label="جستجو"
          >
            <Search size={20} />
          </button>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              className="
                rounded-lg
                p-2
                text-slate-600
                transition-colors
                hover:bg-[#174C45]/[0.07]
                hover:text-[#315A73]
              "
              aria-label="جستجو"
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="
                rounded-lg
                p-2
                text-slate-600
                transition-colors
                hover:bg-[#174C45]/[0.07]
                hover:text-[#315A73]
              "
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-[#E8E2D8] py-4 md:hidden">
            <nav className="flex flex-col">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                خانه
              </a>

              <a
                href="/news"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                مسجد خبر
              </a>

              <a
                href="/culture"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                مسجد فرهنگ
              </a>

              <a
                href="/education"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                مسجد آموز
              </a>

              <a
                href="/media"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                مسجد نماوا
              </a>

              <a
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                مسجد نگار
              </a>

              <a
                href="/research"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                پژوهش
              </a>

              <a
                href="/announcements"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                اطلاعیه‌ها
              </a>

              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                درباره ما
              </a>

              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-[#174C45]/[0.06]
                  hover:text-[#174C45]
                "
              >
                ارتباط با ما
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
