"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type DishVariant = "ember" | "sea" | "garden" | "sweet";

const menuChapters: Array<{
  label: string;
  eyebrow: string;
  variant: DishVariant;
  items: Array<[string, string]>;
}> = [
  {
    label: "First",
    eyebrow: "A quiet opening",
    variant: "garden",
    items: [
      ["Cultured tomato", "burnt whey · lovage"],
      ["Raw scallop", "green almond · sea herbs"],
    ],
  },
  {
    label: "Fire",
    eyebrow: "Direct heat",
    variant: "ember",
    items: [
      ["Dry-aged duck", "smoked plum · bitter leaf"],
      ["Coal-roasted rib", "black garlic · bone jus"],
    ],
  },
  {
    label: "Sea",
    eyebrow: "Salt and clarity",
    variant: "sea",
    items: [
      ["Line-caught turbot", "white miso · coastal greens"],
      ["Blue crab", "fermented pepper · preserved lemon"],
    ],
  },
  {
    label: "Garden",
    eyebrow: "What the soil keeps",
    variant: "garden",
    items: [
      ["Charred leek", "hazelnut · sorrel"],
      ["Celeriac", "brown butter · winter truffle"],
    ],
  },
  {
    label: "Sweet",
    eyebrow: "The final restraint",
    variant: "sweet",
    items: [
      ["Burnt honey", "pear · cultured cream"],
      ["Dark cacao", "malt · smoked salt"],
    ],
  },
];

function SmokeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.58, y: 0.34, tx: 0.58, ty: 0.34 };
    const blobs = [
      { x: 0.18, y: 0.3, r: 0.34, phase: 0.1, color: [176, 54, 36] },
      { x: 0.66, y: 0.22, r: 0.38, phase: 2.1, color: [78, 90, 54] },
      { x: 0.78, y: 0.72, r: 0.35, phase: 4.4, color: [91, 47, 91] },
      { x: 0.35, y: 0.82, r: 0.31, phase: 5.7, color: [204, 118, 51] },
    ];

    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.ty = (event.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const draw = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      const t = media.matches ? 0 : frame * 0.0035;

      blobs.forEach((blob, index) => {
        const driftX = Math.sin(t * (0.8 + index * 0.1) + blob.phase) * 0.055;
        const driftY = Math.cos(t * (0.55 + index * 0.12) + blob.phase) * 0.06;
        const influence = index % 2 === 0 ? 0.08 : -0.05;
        const x = (blob.x + driftX + (pointer.x - 0.5) * influence) * width;
        const y = (blob.y + driftY + (pointer.y - 0.5) * influence) * height;
        const radius = Math.max(width, height) * blob.r;

        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(
          0,
          `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, 0.2)`,
        );
        gradient.addColorStop(
          0.36,
          `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, 0.1)`,
        );
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
      });

      const pointerRadius = Math.max(width, height) * 0.22;
      const pointerGradient = context.createRadialGradient(
        pointer.x * width,
        pointer.y * height,
        0,
        pointer.x * width,
        pointer.y * height,
        pointerRadius,
      );
      pointerGradient.addColorStop(0, "rgba(244, 187, 110, 0.11)");
      pointerGradient.addColorStop(1, "rgba(244, 187, 110, 0)");
      context.fillStyle = pointerGradient;
      context.fillRect(0, 0, width, height);

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="smoke-field" aria-hidden="true" />;
}

function DishArt({
  variant,
  compact = false,
}: {
  variant: DishVariant;
  compact?: boolean;
}) {
  return (
    <div className={`dish-art dish-art--${variant} ${compact ? "dish-art--compact" : ""}`}>
      <div className="dish-art__plate">
        <span className="dish-art__sauce dish-art__sauce--one" />
        <span className="dish-art__sauce dish-art__sauce--two" />
        <span className="dish-art__core" />
        <span className="dish-art__petal dish-art__petal--one" />
        <span className="dish-art__petal dish-art__petal--two" />
        <span className="dish-art__petal dish-art__petal--three" />
        <span className="dish-art__dust" />
      </div>
      <span className="dish-art__shadow" />
    </div>
  );
}

function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="reservation-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>Date</span>
          <input type="date" required />
        </label>
        <label>
          <span>Time</span>
          <select defaultValue="" required>
            <option value="" disabled>
              Select time
            </option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
          </select>
        </label>
        <label>
          <span>Guests</span>
          <select defaultValue="2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </label>
        <label>
          <span>Name</span>
          <input type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" autoComplete="tel" placeholder="+1 000 000 0000" />
        </label>
      </div>

      <label className="form-note">
        <span>Anything we should know?</span>
        <textarea rows={3} placeholder="Dietary requirements, celebration, accessibility…" />
      </label>

      <button className="button button--light form-submit" type="submit">
        <span>{submitted ? "Request received" : "Request a table"}</span>
        <span aria-hidden="true">↗</span>
      </button>

      <p className="form-status" role="status" aria-live="polite">
        {submitted
          ? "Demo complete — a production build would now send this through the booking or email service."
          : "Portfolio prototype. No reservation is actually transmitted."}
      </p>
    </form>
  );
}

export default function RestaurantExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".nav-shell", {
        y: -18,
        opacity: 0,
        duration: reducedMotion ? 0 : 1,
        ease: "power3.out",
      });

      gsap.from(".hero-copy > *", {
        y: reducedMotion ? 0 : 38,
        opacity: 0,
        duration: reducedMotion ? 0 : 1.2,
        stagger: reducedMotion ? 0 : 0.08,
        ease: "power3.out",
      });

      if (!reducedMotion) {
        const desktop = gsap.matchMedia();

        desktop.add("(min-width: 900px)", () => {
          const heroTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "+=1500",
              scrub: 0.7,
              pin: true,
              anticipatePin: 1,
            },
          });

          heroTimeline
            .to(".hero-card--top", { yPercent: 115, rotate: 8, opacity: 0.15 }, 0)
            .to(".hero-card--back", { yPercent: 165, rotate: -10, opacity: 0 }, 0)
            .to(".hero-card--lower", { yPercent: 210, rotate: 12, opacity: 0 }, 0)
            .to(".hero-card--main", { xPercent: -16, scale: 1.13, rotate: -2 }, 0)
            .to(".hero-copy__lede, .hero-actions, .hero-meta", { opacity: 0.18 }, 0)
            .to(".hero-copy__title", { scale: 0.68, transformOrigin: "left top" }, 0);

          gsap.utils.toArray<HTMLElement>(".philosophy-copy").forEach((item) => {
            gsap.fromTo(
              item,
              { opacity: 0.22, y: 40 },
              {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: item,
                  start: "top 72%",
                  end: "bottom 42%",
                  scrub: true,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>(".menu-chapter").forEach((chapter, index) => {
            ScrollTrigger.create({
              trigger: chapter,
              start: "top 54%",
              end: "bottom 46%",
              onEnter: () => setActiveMenu(index),
              onEnterBack: () => setActiveMenu(index),
            });
          });

          const dessert = gsap.timeline({
            scrollTrigger: {
              trigger: ".dessert",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.65,
            },
          });

          dessert
            .fromTo(".dessert-piece--base", { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, 0)
            .fromTo(".dessert-piece--layer-one", { y: -90, opacity: 0 }, { y: 0, opacity: 1 }, 0.12)
            .fromTo(".dessert-piece--cream", { scaleX: 0.4, opacity: 0 }, { scaleX: 1, opacity: 1 }, 0.28)
            .fromTo(".dessert-piece--layer-two", { y: -120, opacity: 0 }, { y: 0, opacity: 1 }, 0.42)
            .fromTo(".dessert-piece--glaze", { scale: 0.55, opacity: 0 }, { scale: 1, opacity: 1 }, 0.6)
            .fromTo(".dessert-piece--garnish-a", { y: -110, rotate: -30, opacity: 0 }, { y: 0, rotate: 0, opacity: 1 }, 0.72)
            .fromTo(".dessert-piece--garnish-b", { y: -120, rotate: 25, opacity: 0 }, { y: 0, rotate: 0, opacity: 1 }, 0.78)
            .fromTo(".dessert-dust", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 }, 0.88);
        });

        return () => desktop.revert();
      }
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="site-shell">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vanta Table home">
          VANTA <span>TABLE</span>
        </a>
        <div className="nav-links">
          <a href="#philosophy">Philosophy</a>
          <a href="#menu">Menu</a>
          <a href="#reserve">Reserve</a>
        </div>
        <a className="nav-reserve" href="#reserve">
          Book <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <main>
        <section id="top" className="hero">
          <SmokeField />
          <div className="hero-grain" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">A study in fire, time & restraint</p>
            <h1 className="hero-copy__title">
              Nothing
              <br />
              arrives
              <br />
              <em>untouched.</em>
            </h1>
            <p className="hero-copy__lede">
              A fictional fine-dining concept where every ingredient is transformed just enough
              to reveal what was already there.
            </p>
            <div className="hero-actions">
              <a className="button button--light" href="#reserve">
                <span>Reserve your table</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#menu">
                Explore the menu
              </a>
            </div>
            <div className="hero-meta" aria-label="Restaurant details">
              <span>DINNER · TUE—SAT</span>
              <span>18:00—23:30</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract plated dishes">
            <article className="hero-card hero-card--back">
              <span className="hero-card__index">04</span>
              <DishArt variant="garden" compact />
            </article>
            <article className="hero-card hero-card--lower">
              <span className="hero-card__index">03</span>
              <DishArt variant="sweet" compact />
            </article>
            <article className="hero-card hero-card--top">
              <span className="hero-card__index">02</span>
              <DishArt variant="sea" compact />
            </article>
            <article className="hero-card hero-card--main">
              <span className="hero-card__index">01</span>
              <DishArt variant="ember" />
              <div className="hero-card__caption">
                <span>Dry-aged duck</span>
                <span>smoked plum · bitter leaf</span>
              </div>
            </article>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span>Scroll to enter</span>
            <i />
          </div>
        </section>

        <section id="philosophy" className="philosophy section-dark">
          <div className="philosophy-visual" aria-hidden="true">
            <div className="philosophy-orb">
              <span className="philosophy-orb__core" />
              <span className="philosophy-orb__ring philosophy-orb__ring--one" />
              <span className="philosophy-orb__ring philosophy-orb__ring--two" />
            </div>
            <p>Transformation / 01—03</p>
          </div>

          <div className="philosophy-stories">
            <article className="philosophy-copy">
              <span className="section-index">01</span>
              <p className="eyebrow">Fire</p>
              <h2>Heat should leave a memory, not a scar.</h2>
              <p>
                We use flame as punctuation: a charred edge, a thread of smoke, a sweetness that
                only appears after surrender.
              </p>
            </article>
            <article className="philosophy-copy">
              <span className="section-index">02</span>
              <p className="eyebrow">Time</p>
              <h2>Some flavours cannot be hurried.</h2>
              <p>
                Ferments, resting, curing and patient reductions build depth without announcing
                the machinery behind them.
              </p>
            </article>
            <article className="philosophy-copy">
              <span className="section-index">03</span>
              <p className="eyebrow">Restraint</p>
              <h2>Knowing when to stop is part of the recipe.</h2>
              <p>
                Every plate ends one decision before decoration becomes noise. What remains has
                room to speak.
              </p>
            </article>
          </div>
        </section>

        <section id="menu" className="menu-section">
          <header className="menu-heading">
            <p className="eyebrow">The tasting sequence</p>
            <h2>Six movements.<br />One table.</h2>
            <p>
              The menu changes with weather, harvest and what arrives in exceptional condition.
              This prototype uses a five-part sequence to demonstrate the interaction.
            </p>
          </header>

          <div className="menu-layout">
            <div className="menu-visual-column">
              <div className="menu-visual">
                <div className="menu-visual__topline">
                  <span>0{activeMenu + 1}</span>
                  <span>{menuChapters[activeMenu].eyebrow}</span>
                </div>
                <div className="menu-dish-swap" key={menuChapters[activeMenu].label}>
                  <DishArt variant={menuChapters[activeMenu].variant} />
                </div>
                <div className="menu-visual__label">
                  <span>Now serving</span>
                  <strong>{menuChapters[activeMenu].label}</strong>
                </div>
              </div>
            </div>

            <div className="menu-chapters">
              {menuChapters.map((chapter, index) => (
                <article className="menu-chapter" key={chapter.label}>
                  <div className="menu-chapter__head">
                    <span>0{index + 1}</span>
                    <h3>{chapter.label}</h3>
                  </div>
                  <p className="menu-chapter__eyebrow">{chapter.eyebrow}</p>
                  <div className="menu-items">
                    {chapter.items.map(([name, detail]) => (
                      <div className="menu-item" key={name}>
                        <strong>{name}</strong>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dessert">
          <div className="dessert-sticky">
            <div className="dessert-copy">
              <p className="eyebrow">The final movement</p>
              <h2>Built one decision at a time.</h2>
              <p>
                Scroll through the section. The plate assembles with you — a deliberately
                low-cost DOM animation proving that spectacle does not always require heavy 3D.
              </p>
            </div>

            <div className="dessert-stage" aria-label="Abstract dessert assembling in layers">
              <div className="dessert-object">
                <span className="dessert-piece dessert-piece--base" />
                <span className="dessert-piece dessert-piece--layer-one" />
                <span className="dessert-piece dessert-piece--cream" />
                <span className="dessert-piece dessert-piece--layer-two" />
                <span className="dessert-piece dessert-piece--glaze" />
                <span className="dessert-piece dessert-piece--garnish-a" />
                <span className="dessert-piece dessert-piece--garnish-b" />
                <span className="dessert-dust" />
              </div>
              <p className="dessert-stage__caption">Burnt honey · pear · cultured cream</p>
            </div>
          </div>
        </section>

        <section className="room-section">
          <div className="room-image" aria-hidden="true">
            <div className="room-image__light" />
            <div className="room-image__table room-image__table--one" />
            <div className="room-image__table room-image__table--two" />
            <div className="room-image__table room-image__table--three" />
          </div>
          <div className="room-copy">
            <p className="eyebrow">The room</p>
            <h2>Quiet enough to hear the plate arrive.</h2>
            <p>
              Twenty-four covers. Low light. Open flame behind glass. The atmosphere section
              deliberately slows the site after two high-motion chapters.
            </p>
            <a href="#reserve" className="text-link text-link--dark">
              Private dining enquiries
            </a>
          </div>
        </section>

        <section id="reserve" className="reservation section-dark">
          <div className="reservation-heading">
            <p className="eyebrow">Reservations</p>
            <h2>Come hungry.<br /><em>Leave altered.</em></h2>
            <p>
              This is a portfolio reservation prototype. The interaction and validation are real;
              transmission is intentionally disabled until a production booking service is chosen.
            </p>
          </div>
          <ReservationForm />
        </section>
      </main>

      <footer className="footer">
        <SmokeField />
        <div className="footer-top">
          <a className="brand" href="#top">
            VANTA <span>TABLE</span>
          </a>
          <span>A Threeell Studio concept</span>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          VANTA
        </div>
        <div className="footer-bottom">
          <span>14 Foundry Lane · Fictional City</span>
          <span>Tue—Sat · 18:00—23:30</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
