import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const featuredWorks = [
  {
    title: "Midnight Session",
    category: "Skate",
    src: "https://images.unsplash.com/photo-1633083993653-873aaf08da48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Studio Light",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1746960854622-cf413c68eea7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quiet Confidence",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1770296877116-c4973c84d339?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golden Hour",
    category: "Lifestyle",
    src: "https://images.unsplash.com/photo-1762810664585-9e25b74bcdcd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hard Light",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1758590776495-ca8a628d1013?auto=format&fit=crop&w=800&q=80",
  },
];

function ImageCard({
  work,
  aspect,
  sizes,
}: {
  work: (typeof featuredWorks)[0];
  aspect: string;
  sizes: string;
}) {
  return (
    <Link
      href="/portfolio"
      className={`group block image-frame ${aspect}`}
      aria-label={`View ${work.title} in portfolio`}
    >
      <Image
        src={work.src}
        alt={work.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.035] transition-all duration-700"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-dark/15 group-hover:bg-dark/40 transition-all duration-500" />

      <div className="absolute top-0 left-0 p-5">
        <p className="eyebrow text-stone">{work.category}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
        <p className="font-heading text-2xl md:text-3xl tracking-[0.04em]">
          {work.title}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1763044937917-997625dcfffa?auto=format&fit=crop&w=1920&q=80"
          alt="Skateboarder performing an ollie at night in a skate park"
          fill
          className="object-cover grayscale brightness-[0.3] scale-[1.05] animate-slow-zoom"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/10 to-transparent" />

        <div className="relative z-10 h-screen min-h-[42rem] flex flex-col justify-end">
          <div className="container-shell pb-14 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-4xl">
              <div className="overflow-hidden">
                <h1 className="font-heading text-[clamp(3.2rem,10.4vw,12rem)] leading-[0.82] tracking-[0.03em] text-cream animate-slide-up">
                  CAMERON
                </h1>
              </div>
              <div className="overflow-hidden mt-1">
                <h1 className="font-heading text-[clamp(3.2rem,10.4vw,12rem)] leading-[0.82] tracking-[0.03em] text-cream animate-slide-up [animation-delay:0.1s]">
                  GRAHAM
                </h1>
              </div>

              <p className="font-serif text-xl sm:text-2xl lg:text-[2rem] text-stone italic tracking-wide mt-4 md:mt-5 animate-fade-in [animation-delay:0.4s]">
                Photography
              </p>
              <p className="text-silver text-base md:text-lg max-w-lg mt-3 md:mt-4 animate-fade-in [animation-delay:0.6s]">
                Capturing raw moments in light and shadow.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 md:mt-9 animate-fade-in [animation-delay:0.8s]">
                <Link href="/portfolio" className="btn-solid">
                  View Portfolio
                </Link>
                <Link href="/contact" className="btn-outline">
                  Book a Shoot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-14 lg:mb-16">
              <div>
                <p className="eyebrow mb-3">Selected Work</p>
                <h2 className="font-heading text-headline">FEATURED</h2>
              </div>
              <Link href="/portfolio" className="btn-text group w-fit">
                View All Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
            <ScrollReveal className="md:col-span-7">
              <ImageCard
                work={featuredWorks[0]}
                aspect="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </ScrollReveal>
            <ScrollReveal className="md:col-span-5" delay={0.15}>
              <ImageCard
                work={featuredWorks[1]}
                aspect="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </ScrollReveal>

            {featuredWorks.slice(2).map((work, i) => (
              <ScrollReveal
                key={work.title}
                className="md:col-span-4"
                delay={0.08 + i * 0.08}
              >
                <ImageCard
                  work={work}
                  aspect="aspect-square"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-divider">
        <div className="container-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="image-frame aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1754476151319-bc8cf50a1807?auto=format&fit=crop&w=800&q=80"
                  alt="Cameron Graham - Photographer"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="space-y-6 md:space-y-7 max-w-xl">
                <p className="eyebrow">The Photographer</p>
                <h2 className="font-heading text-headline leading-[0.9]">
                  CAMERON
                  <br />
                  GRAHAM
                </h2>
                <p className="font-serif text-[1.25rem] text-stone italic leading-snug">
                  Based in the city. Drawn to the edges.
                </p>
                <p className="body-copy">
                  I shoot what moves me - skaters under sodium lights, quiet
                  portraits in hard light, the tension between stillness and
                  motion. Every frame is a decision about what to keep and what
                  to cut.
                </p>
                <Link href="/about" className="btn-text group inline-block">
                  More About Cameron
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad section-divider">
        <div className="container-shell">
          <ScrollReveal>
            <p className="eyebrow mb-3">Focus Areas</p>
            <h2 className="font-heading text-headline mb-12 md:mb-16 lg:mb-20">
              WHAT I SHOOT
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {[
              {
                num: "01",
                title: "SKATE",
                desc: "Night sessions, park flows, street spots. Raw motion captured in available light.",
              },
              {
                num: "02",
                title: "PORTRAITS",
                desc: "Direct, honest portraits. Hard light, clean compositions, real people.",
              },
              {
                num: "03",
                title: "LIFESTYLE",
                desc: "Editorial and lifestyle work. The in-between moments that tell the real story.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="bg-dark p-7 md:p-10 lg:p-12 group hover:bg-surface transition-colors duration-500 h-full">
                  <span className="text-muted text-xs tracking-[0.2em] uppercase font-body">
                    {item.num}
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl mt-4 mb-5 group-hover:text-stone transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-silver text-[15px] leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-divider">
        <div className="container-shell">
          <ScrollReveal>
            <div className="border border-line p-8 sm:p-10 md:p-14 lg:p-16 text-center bg-dark">
              <p className="eyebrow mb-5">Available for Work</p>
              <h2 className="font-heading text-[clamp(2.4rem,6vw,6.5rem)] leading-[0.87]">
                LET&apos;S MAKE
                <br />
                SOMETHING SHARP
              </h2>
              <p className="text-silver text-base md:text-lg mt-5 md:mt-6 max-w-lg mx-auto">
                Portraits, editorial work, and creative collaborations.
              </p>
              <Link href="/contact" className="btn-outline mt-9 md:mt-10">
                Book a Shoot
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
