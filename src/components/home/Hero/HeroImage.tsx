import Image from "next/image";
import HeroContent from "./HeroContent";

type HeroImageProps = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  href: string;
};

export default function HeroImage({
  src,
  alt,
  category,
  title,
  description,
  href,
}: HeroImageProps) {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-3xl md:h-[360px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-[center_41%]"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#241B14]/80 via-black/25 to-transparent" />

      <HeroContent
        category={category}
        title={title}
        description={description}
        href={href}
      />
    </div>
  );
}