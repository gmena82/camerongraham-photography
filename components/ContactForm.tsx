"use client";

import { useState, FormEvent } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pb-24 md:pb-32 lg:pb-40">
      <div className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-7">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="border border-line p-6 sm:p-8 md:p-10 space-y-8 bg-dark"
              >
                <div className="space-y-2">
                  <p className="eyebrow">Inquiry Form</p>
                  <p className="body-copy max-w-lg">
                    Share a few details and I will reply with availability, pricing,
                    and next steps.
                  </p>
                </div>

                <div className="space-y-6 md:space-y-7">
                  <div>
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-control"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="project-type">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="project-type"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value,
                          })
                        }
                        className="form-control appearance-none pr-8 cursor-pointer"
                      >
                        <option value="" className="bg-dark text-silver">
                          Select a project type
                        </option>
                        <option value="portrait" className="bg-dark">
                          Portrait Session
                        </option>
                        <option value="skate" className="bg-dark">
                          Skate Photography
                        </option>
                        <option value="editorial" className="bg-dark">
                          Editorial / Lifestyle
                        </option>
                        <option value="brand" className="bg-dark">
                          Brand / Commercial
                        </option>
                        <option value="other" className="bg-dark">
                          Other
                        </option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="#8a8a8a"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-control min-h-[9rem] resize-y"
                      placeholder="Tell me about your project, location, and preferred timeline."
                    />
                  </div>
                </div>

                <button type="submit" className="btn-outline">
                  Send Inquiry
                </button>
              </form>
            ) : (
              <div className="border border-line p-8 md:p-12 bg-dark min-h-[25rem] flex flex-col justify-center">
                <p className="eyebrow mb-4">Inquiry Received</p>
                <h3 className="font-heading text-5xl md:text-6xl tracking-[0.06em] mb-4">
                  THANK YOU
                </h3>
                <p className="body-copy max-w-md">
                  Your inquiry is in. I will be in touch soon with next steps.
                </p>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={0.18}>
            <div className="border border-line p-6 sm:p-8 md:p-10 lg:sticky lg:top-32 space-y-10 bg-dark">
              <div>
                <p className="eyebrow mb-3">Email</p>
                <a
                  href="mailto:hello@camerongraham.com"
                  className="text-cream text-lg md:text-xl hover:text-stone transition-colors"
                >
                  hello@camerongraham.com
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">Instagram</p>
                <a
                  href="https://instagram.com/camerongraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream text-lg md:text-xl hover:text-stone transition-colors"
                >
                  @camerongraham
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">Based In</p>
                <p className="text-cream text-lg md:text-xl">Los Angeles, CA</p>
              </div>

              <div className="pt-8 border-t border-line space-y-4">
                <p className="eyebrow">Booking Window</p>
                <p className="body-copy">
                  Currently accepting bookings for Q2 and Q3 2026. For urgent
                  timelines, reach out via email directly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
