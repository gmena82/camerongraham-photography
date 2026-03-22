import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio - Cameron Graham Photography",
  description:
    "A curated collection of skateboarding, portrait, and lifestyle photography.",
};

const categories = ["All Work", "Skate", "Portraits", "Lifestyle"] as const;

const works = [
  {
    title: "Night Park",
    category: "Skate",
    src: "https://images.unsplash.com/photo-1763044937917-997625dcfffa?auto=format&fit=crop&w=1200&q=80",
    aspect: "aspect-[4/5]",
    layout: "md:col-span-7 lg:col-span-7",
  },
  {
    title: "Midnight Session",
    category: "Skate",
    src: "https://images.unsplash.com/photo-1633083993653-873aaf08da48?auto=format&fit=crop&w=1000&q=80",
    aspect: "aspect-[3/4]",
    layout: "md:col-span-5 lg:col-span-5",
  },
  {
    title: "Studio Light",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1746960854622-cf413c68eea7?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[2/3]",
    layout: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Quiet Confidence",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1770296877116-c4973c84d339?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    layout: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Golden Hour",
    category: "Lifestyle",
    src: "https://images.unsplash.com/photo-1762810664585-9e25b74bcdcd?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    layout: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Hard Light",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1758590776495-ca8a628d1013?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    layout: "md:col-span-5 lg:col-span-5",
  },
  {
    title: "Urban Rhythm",
    category: "Lifestyle",
    src: "https://images.unsplash.com/photo-1772722228113-979047d698b1?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[2/3]",
    layout: "md:col-span-7 lg:col-span-7",
  },
  {
    title: "Street Style",
    category: "Lifestyle",
    src: "https://images.unsplash.com/photo-1744297428826-0a575d7033f6?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    layout: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Soft Focus",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1754476151319-bc8cf50a1807?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    layout: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Silver Lines",
    category: "Skate",
    src: "https://images.unsplash.com/photo-1486358870784-1b85b4d2ce5c?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    layout: "md:col-span-12 lg:col-span-4",
  },
];

function PortfolioCard({
  work,
  sizes,
}: {
  work: (typeof works)[number];
  sizes: string;
}) {
  return (
    <div className="group image-frame">
      <div className={work.aspect}>
        <Image
          src={work.src}
          alt={work.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
          sizes={sizes}
        />
      </div>
      <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/40 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-dark/85 via-dark/35 to-transparent translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
        <p className="eyebrow text-stone">{work.category}</p>
        <p className="font-heading text-2xl md:text-3xl tracking-[0.05em] mt-1">
          {work.title}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main>
      <section className="pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-16 lg:pb-20">
        <div className="container-shell">
          <ScrollReveal>
            <p className="eyebrow mb-4">Portfolio</p>
            <h1 className="font-heading text-[clamp(3rem,8vw,8rem)] leading-[0.85]">
              SELECTED
              <br />
              WORK
            </h1>
            <p className="text-silver text-base md:text-lg mt-5 md:mt-6 max-w-xl">
              A curated collection of skateboarding, portrait, and lifestyle
              photography.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container-shell">
          <ScrollReveal>
            <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`text-[12px] tracking-[0.2em] uppercase ${
                    i === 0 ? "text-cream" : "text-muted"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-shell">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
            {works.map((work, i) => (
              <ScrollReveal
                key={work.title}
                className={work.layout}
                delay={Math.min(i * 0.05, 0.4)}
              >
                <PortfolioCard
                  work={work}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-tight section-divider">
        <div className="container-shell text-center">
          <ScrollReveal>
            <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] leading-[0.9]">
              LIKE WHAT
              <br />
              YOU SEE?
            </h2>
            <p className="text-silver text-base md:text-lg mt-5 md:mt-6 max-w-lg mx-auto">
              Let&apos;s create something together.
            </p>
            <Link href="/contact" className="btn-outline mt-9 md:mt-10">
              Start an Inquiry
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
