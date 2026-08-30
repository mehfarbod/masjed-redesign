import Link from "next/link";

export default function Logo() {
return ( <Link
   href="/"
   aria-label="سامانه جامع مساجد"
   className="group inline-flex items-center gap-3"
 > <span
     aria-hidden="true"
     className="
       flex
       h-10
       w-10
       shrink-0
       items-center
       justify-center
       rounded-xl
       border
       border-[#174C45]/10
       bg-[#174C45]/[0.06]
       text-[#174C45]
       transition-all
       duration-300
       group-hover:border-[#315A73]/20
       group-hover:bg-[#315A73]
       group-hover:text-white
     "
   > <svg
       viewBox="0 0 48 48"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       className="h-7 w-7"
     >
{/* Main dome */} <path
         d="M13 27C13 20.37 18.37 15 25 15C31.63 15 37 20.37 37 27"
         stroke="currentColor"
         strokeWidth="2.2"
         strokeLinecap="round"
       />


      {/* Dome finial */}
      <path
        d="M25 15V11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M22.5 11H27.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Mosque building */}
      <path
        d="M9 27H41V37H9V27Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Entrance */}
      <path
        d="M21 37V32C21 29.79 22.79 28 25 28C27.21 28 29 29.79 29 32V37"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Side arches */}
      <path
        d="M13 37V32C13 30.34 14.34 29 16 29C17.66 29 19 30.34 19 32V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M31 37V32C31 30.34 32.34 29 34 29C35.66 29 37 30.34 37 32V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ground line */}
      <path
        d="M7 37H41"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  </span>

  <span className="hidden text-base font-bold text-slate-800 sm:block">
    سامانه جامع مساجد
  </span>
</Link>


);
}
