import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, fadeUpSlow, stagger, staggerSlow } from "@/lib/animations";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Phone,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

const quickLinks = [
  {
    to: "/about",
    icon: BookOpen,
    title: "About Us",
    desc: "Learn about our school's history, mission, and vision for quality education.",
    accent: "from-blue-600 to-blue-700",
  },
  {
    to: "/facilities",
    icon: FlaskConical,
    title: "Facilities",
    desc: "Explore our modern classrooms, labs, library, and sports infrastructure.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    to: "/admission",
    icon: UserCheck,
    title: "Admission",
    desc: "Classes from Primary to Senior Secondary. Begin your journey with us.",
    accent: "from-indigo-500 to-indigo-700",
  },
  {
    to: "/contact",
    icon: Phone,
    title: "Contact",
    desc: "Reach out to us for inquiries, admissions, or any assistance.",
    accent: "from-blue-700 to-indigo-700",
  },
];

export function Home() {
  return (
    <main data-ocid="home.page" className="pt-16">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
          }}
        />
        {/* Rich directional overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerSlow}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUpSlow}
              className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em] mb-5 flex items-center gap-2"
            >
              <span className="inline-block w-6 h-px bg-school-gold" />
              Babain, Haryana · Est. Excellence
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={fadeUpSlow}
              className="font-display font-bold text-white leading-[1.1] mb-2"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              Paradise Senior
              <br />
              <span className="text-white">Secondary School</span>
            </motion.h1>

            {/* Gold accent rule */}
            <motion.div variants={fadeUpSlow} className="mb-4">
              <span className="inline-block w-16 h-[3px] rounded-full bg-school-gold" />
            </motion.div>

            {/* Hindi name — lighter treatment, distinct from heading */}
            <motion.p
              variants={fadeUpSlow}
              className="text-white/75 text-xl sm:text-2xl font-medium mb-6 tracking-wide"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              पैराडाइज सीनियर सेकेंडरी स्कूल बाबैन
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeUpSlow}
              className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Where Knowledge Meets Excellence — nurturing every student's
              potential from Primary through Senior Secondary.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpSlow} className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-school-blue hover:bg-white/92 font-semibold shadow-xl shadow-black/20 h-12 px-7"
              >
                <Link to="/admission">
                  Apply for Admission <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/12 backdrop-blur-sm h-12 px-7"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            aria-hidden="true"
            role="presentation"
            preserveAspectRatio="none"
          >
            <path
              d="M0 72L80 60C160 48 320 24 480 18C640 12 800 24 960 30C1120 36 1280 30 1360 27L1440 24V72H1360C1280 72 1120 72 960 72C800 72 640 72 480 72C320 72 160 72 80 72H0Z"
              fill="oklch(0.98 0.004 240)"
            />
          </svg>
        </div>
      </section>

      {/* ── Welcome / Intro Section ────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4"
          >
            Welcome
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3"
          >
            Shaping Futures, Building Character
          </motion.h2>
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <span className="gold-divider" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Paradise Senior Secondary School, Babain is committed to providing
            holistic, quality education in a safe and nurturing environment.
            From Primary to Senior Secondary, we guide every student toward
            academic excellence and personal growth with dedicated faculty and
            modern infrastructure.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "500+", label: "Students Enrolled" },
            { value: "30+", label: "Experienced Faculty" },
            { value: "12", label: "Classes (I–XII)" },
            { value: "6+", label: "Modern Facilities" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-5 bg-white rounded-xl border border-border"
              style={{
                boxShadow:
                  "0 2px 8px -2px oklch(0.38 0.15 250 / 0.10), 0 1px 3px -1px oklch(0.38 0.15 250 / 0.08)",
              }}
            >
              <p className="font-display font-bold text-3xl text-school-blue">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick-link Cards — left-accent design */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {quickLinks.map((item) => (
            <motion.div key={item.to} variants={fadeUp}>
              <Link to={item.to} className="block h-full">
                <div className="card-accent card-hover h-full group cursor-pointer pl-5 pr-5 pt-5 pb-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-school-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-md shadow-school-blue/30">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-school-blue text-sm font-semibold">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="bg-school-blue py-16 section-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-white text-3xl sm:text-4xl mb-2"
          >
            Begin Your Child's Journey With Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex justify-center mb-6"
          >
            <span className="gold-divider" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
          >
            Admissions open for the upcoming academic session. Contact us today
            to secure your child's future at Paradise School.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-school-blue hover:bg-white/90 font-semibold shadow-xl shadow-black/20 h-12 px-7"
            >
              <Link to="/admission">Admission Info</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10 h-12 px-7"
            >
              <a href="tel:+919416410839">
                <Phone className="w-4 h-4 mr-2" /> +91 94164 10839
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
