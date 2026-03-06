import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck,
  GraduationCap,
  Phone,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

const classLevels = [
  {
    label: "Primary",
    range: "Classes I – V",
    desc: "Building the foundation of learning with a nurturing, activity-based approach to literacy, numeracy, and environmental studies.",
    color: "from-sky-500 to-blue-500",
  },
  {
    label: "Middle School",
    range: "Classes VI – VIII",
    desc: "Deepening subject knowledge across Science, Mathematics, Social Studies, and Languages with project-based learning.",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Secondary",
    range: "Classes IX – X",
    desc: "Rigorous preparation for CBSE Board examinations with expert faculty, regular assessments, and career counselling.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    label: "Senior Secondary",
    range: "Classes XI – XII",
    desc: "Specialized streams — Science, Commerce, and Arts — with comprehensive board preparation and higher education guidance.",
    color: "from-indigo-600 to-indigo-700",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Visit School Office",
    desc: "Visit us at our campus in Babain during school hours (Monday–Saturday, 9 AM – 1 PM) to collect admission forms and learn about the process.",
  },
  {
    icon: FileCheck,
    step: "Step 2",
    title: "Fill Application Form",
    desc: "Complete the admission application form with accurate student and parent/guardian information. Forms are also available online.",
  },
  {
    icon: FileCheck,
    step: "Step 3",
    title: "Submit Documents",
    desc: "Submit required documents: birth certificate, previous school mark sheets (Class II onwards), transfer certificate, and passport photos.",
  },
  {
    icon: UserCheck,
    step: "Step 4",
    title: "Entrance Assessment",
    desc: "Students may be called for a brief assessment or interaction to understand their learning level and place them in the appropriate class.",
  },
  {
    icon: CheckCircle2,
    step: "Step 5",
    title: "Confirmation & Enrollment",
    desc: "Upon selection, complete fee payment and receive your official enrollment confirmation. Welcome to the Paradise School family!",
  },
];

export function Admission() {
  return (
    <main data-ocid="admission.page" className="pt-16">
      {/* Page Header */}
      <section className="page-header-bg py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-4"
            >
              Join Us
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-3"
            >
              Admissions
            </motion.h1>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="gold-divider" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              We welcome students from Primary to Senior Secondary. Begin your
              child's journey toward excellence at Paradise School, Babain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Class Levels */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4">
              Available Classes
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Classes We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classLevels.map((level) => (
              <motion.div key={level.label} variants={fadeUp}>
                <Card className="h-full border border-border shadow-xs overflow-hidden card-hover">
                  <div className={`h-2 bg-gradient-to-r ${level.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-school-blue" />
                      <span className="text-xs font-bold text-school-blue uppercase tracking-wide">
                        {level.label}
                      </span>
                    </div>
                    <p className="font-display font-bold text-xl text-foreground mb-3">
                      {level.range}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {level.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Admission Process */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Admission Process
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-8 bottom-8 w-px bg-border" />

            <div className="space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  variants={fadeUp}
                  className={`flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0
                      ? "md:flex-row md:pr-[calc(50%+2rem)]"
                      : "md:flex-row-reverse md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Mobile connector */}
                  <div className="md:hidden flex flex-col items-center pt-1 shrink-0">
                    <div className="w-9 h-9 rounded-full bg-school-blue flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-full min-h-[2rem] bg-border mt-2" />
                    )}
                  </div>

                  {/* Card */}
                  <Card className="flex-1 border border-border shadow-xs overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-school-blue-light flex items-center justify-center shrink-0">
                          <s.icon className="w-5 h-5 text-school-blue" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-school-blue uppercase tracking-widest">
                            {s.step}
                          </p>
                          <h3 className="font-display font-bold text-lg text-foreground">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Center step number (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-school-blue items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-school-blue text-white p-8 sm:p-12 text-center section-pattern"
        >
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">
            Ready to Enroll?
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
            For admission enquiries, visit our office or call us directly. Our
            team is happy to guide you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919416410839"
              data-ocid="admission.cta_button"
              className="inline-flex items-center gap-2 bg-white text-school-blue font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              +91 94164 10839
            </a>
            <Button
              asChild
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10"
            >
              <Link to="/contact">Send an Inquiry</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
