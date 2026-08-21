import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#7A8270]
          text-white
        "
      >
        🕌
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold text-slate-800">
          سامانه جامع مساجد
        </span>

        <span className="text-xs text-slate-500">
          Mosque Portal
        </span>
      </div>
    </Link>
  );
}