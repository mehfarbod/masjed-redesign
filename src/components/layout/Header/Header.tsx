"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
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
            className="hidden shrink-0 rounded-lg p-2 transition-colors hover:bg-slate-100 md:block"
            aria-label="جستجو"
          >
            <Search size={20} />
          </button>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              className="rounded-lg p-2 transition-colors hover:bg-slate-100"
              aria-label="جستجو"
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-lg p-2 transition-colors hover:bg-slate-100"
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <nav className="flex flex-col">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                خانه
              </a>

              <a
                href="/news"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                مسجد خبر
              </a>

              <a
                href="/culture"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                مسجد فرهنگ
              </a>

              <a
                href="/education"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                مسجد آموز
              </a>

              <a
                href="/media"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                مسجد نماوا
              </a>

              <a
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                مسجد نگار
              </a>

              <a
                href="/research"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                پژوهش
              </a>

              <a
                href="/announcements"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                اطلاعیه‌ها
              </a>

              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
              >
                درباره ما
              </a>

              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-700"
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