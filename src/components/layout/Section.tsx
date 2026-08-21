import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-10 md:py-14 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}