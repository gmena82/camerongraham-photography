import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About - Cameron Graham Photography",
  description:
    "Photographer specializing in skateboarding, portraiture, and lifestyle editorial work.",
};

export default function About() {
  return (
    <main>
      <section className="pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-16 lg:pb-20">
        <div className="container-shell">
          <ScrollReveal>
            <p className="eyebrow mb-4">About</p>
            <h1 className="font-heading text-[clamp(3rem,8vw,8rem)] leading-[0.85]">
              THE
              <br />
              PHOTOGRAPHER
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <div className="image-frame aspect-[3/4]">
                <Image
                  src="/photos/100f0aa0.jpg"
                  alt="Cameron Graham"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="lg:col-span-7 flex flex-col justify-center"
              delay={0.15}
            >
              <div className="space-y-5 md:space-y-6 lg:max-w-2xl">
                <p className="font-serif text-xl md:text-2xl text-stone italic leading-relaxed">
                  I&apos;ve always been more interested in what happens at the
                  edges - the moments just before or after the obvious shot.
                </p>
                <p className="body-copy">
                  Cameron Graham is a photographer based in Los Angeles,
                  specializing in skateboarding, portraiture, and lifestyle
                  editorial work. With a focus on available light and honest
                  compositions, his work captures subjects in their most
                  authentic state.
                </p>
                <p className="body-copy">
                  Growing up around skate culture shaped the way he sees -
                  always looking for the decisive moment, the tension between
                  movement and stillness. That sensibility carries through
                  everything he shoots, from late-night park sessions to
                  controlled studio portraits.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad-tight section-divider">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <p className="eyebrow mb-4">Approach</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
                THE WAY
                <br />I WORK
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="space-y-5 lg:pt-8 max-w-2xl">
                <p className="body-copy">
                  I keep things minimal. One camera. Available light when
                  possible. No heavy retouching, no gimmicks. The goal is always
                  clarity - a clean frame that says exactly what it needs to say.
                </p>
                <p className="body-copy">
                  Whether it&apos;s a portrait session or a skate shoot, I
                  approach every project the same way: understand the subject,
                  find the light, eliminate everything that doesn&apos;t serve
                  the frame.
                </p>
                <p className="body-copy">
                  I&apos;m drawn to contrast - dark backgrounds, hard light, the
                  kind of images that feel like they have weight. Photography
                  should feel intentional, not accidental.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad-tight section-divider">
        <div className="container-shell">
          <ScrollReveal>
            <p className="eyebrow mb-4">Specialties</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-14 lg:mb-16">
              WHAT I SHOOT
            </h2>
          </ScrollReveal>

          <div className="divide-y divide-line">
            {[
              {
                title: "Skateboarding",
                desc: "Night sessions, park runs, street spots. Capturing the raw energy and precision of skate culture.",
              },
              {
                title: "Portraits",
                desc: "Studio and natural light portraits. Direct, honest, stripped back to what matters.",
              },
              {
                title: "Lifestyle & Editorial",
                desc: "Brand campaigns, lookbooks, and editorial features. Real moments, styled with intention.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="py-8 md:py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center">
                  <h3 className="font-heading text-3xl md:text-4xl tracking-[0.06em] md:col-span-6">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="body-copy md:col-span-6 md:text-right md:justify-self-end max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-tight section-divider">
        <div className="container-shell text-center">
          <ScrollReveal>
            <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] leading-[0.9]">
              INTERESTED IN
              <br />
              WORKING TOGETHER?
            </h2>
            <p className="text-silver text-base md:text-lg mt-5 md:mt-6 max-w-lg mx-auto">
              I&apos;m always open to new projects, collaborations, and creative
              work.
            </p>
            <Link href="/contact" className="btn-outline mt-9 md:mt-10">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
