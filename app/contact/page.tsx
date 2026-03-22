import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Cameron Graham Photography",
  description:
    "Get in touch for portrait sessions, skate photography, editorial work, and creative collaborations.",
};

export default function Contact() {
  return (
    <main>
      <section className="pt-28 md:pt-36 lg:pt-40 pb-14 md:pb-16 lg:pb-20">
        <div className="container-shell">
          <ScrollReveal>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-heading text-[clamp(3rem,8vw,8rem)] leading-[0.85]">
              LET&apos;S WORK
              <br />
              TOGETHER
            </h1>
            <p className="text-silver text-base md:text-lg mt-5 md:mt-6 max-w-xl">
              Available for shoots, portraits, and editorial projects. Tell me
              about your goals and timeline.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
