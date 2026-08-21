// import Header from "@/components/layout/Header/Header";
// import Services from "@/components/home/Services/Services";
// import Hero from "@/components/home/Hero/Hero";
// export default function HomePage() {
//   return (
//     <main>
//       <Header />
//       <Services/>
// <Hero />
//     </main>
//   );
// }
// import Header from "@/components/layout/Header/Header";
// import Hero from "@/components/home/Hero";
// import Services from "@/components/home/Services/Services";
// import LatestNews from "@/components/home/LatestNews";
// import Footer from "@/components/layout/Footer";
// import ServiceHighlights from "@/components/home/ServiceHighlights";

// export default function HomePage() {
//   return (
//     <main>
      

//       <Hero />

//       <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <Services />
//         <LatestNews />
//         <ServiceHighlights />
//       </div>

   
//     </main>
//   );
// }

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services/Services";
import LatestNews from "@/components/home/LatestNews";
import ServiceHighlights from "@/components/home/ServiceHighlights";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Services />

      <LatestNews />

      <ServiceHighlights />
    </main>
  );
}