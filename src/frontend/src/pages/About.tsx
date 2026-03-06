import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";
import { Award, BookOpen, Eye, Star, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: BookOpen,
    title: "Quality Education",
    desc: "Rigorous academics with a focus on conceptual clarity and practical application across all subjects.",
  },
  {
    icon: Users,
    title: "Student Development",
    desc: "Fostering social skills, emotional intelligence, and teamwork through co-curricular activities.",
  },
  {
    icon: Star,
    title: "Holistic Growth",
    desc: "Balancing academics, arts, sports, and values for all-round development of every child.",
  },
  {
    icon: Award,
    title: "Discipline & Values",
    desc: "Instilling respect, integrity, and responsibility as core values that last a lifetime.",
  },
];

export function About() {
  return (
    <main data-ocid="about.page" className="pt-16">
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
              About Us
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-3"
            >
              About Paradise School
            </motion.h1>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="gold-divider" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Dedicated to nurturing young minds and shaping the future leaders
              of our nation through quality education and strong values.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* School Overview */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-5">
              Building a Legacy of Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Paradise Senior Secondary School, located in Babain, Haryana, is
                a distinguished educational institution committed to providing
                comprehensive, high-quality education to students from Class I
                through Class XII.
              </p>
              <p>
                Our school stands as a beacon of academic excellence and moral
                development in the region. With state-of-the-art facilities, a
                dedicated team of experienced educators, and a curriculum
                designed to meet both national standards and global demands, we
                prepare our students for success in an ever-evolving world.
              </p>
              <p>
                We believe education is not just about textbooks — it is about
                developing critical thinking, creativity, and compassion. Every
                student who walks through our doors receives personalized
                attention and the encouragement to reach their highest
                potential.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/generated/gallery-campus.dim_600x400.jpg"
                alt="Paradise Senior Secondary School campus"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-school-blue rounded-xl p-5 shadow-xl hidden sm:block">
              <p className="text-white font-display font-bold text-3xl">XII</p>
              <p className="text-white/80 text-xs">Classes Offered</p>
              <p className="text-white/60 text-xs">(I through XII)</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4">
              Purpose
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Mission & Vision
            </h2>
            <div className="flex justify-center">
              <span className="gold-divider" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div variants={fadeUp} data-ocid="about.mission_card">
              <div className="card-accent card-hover h-full p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-school-blue flex items-center justify-center shrink-0 shadow-md shadow-school-blue/25">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To provide every student with a world-class education that
                  combines academic rigor with character development, preparing
                  them to be responsible, compassionate, and successful
                  citizens.
                </p>
                <ul className="space-y-2">
                  {[
                    "Deliver excellence in teaching and learning",
                    "Create inclusive and supportive classrooms",
                    "Foster curiosity and love of learning",
                    "Develop well-rounded individuals",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-school-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} data-ocid="about.vision_card">
              <div
                className="card-accent card-hover h-full p-8"
                style={
                  {
                    "--tw-card-accent": "oklch(0.52 0.14 240)",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-school-blue-dark flex items-center justify-center shrink-0 shadow-md shadow-school-blue/25">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To be the leading educational institution in Haryana,
                  recognized for producing graduates who are intellectually
                  capable, morally grounded, and ready to make a positive impact
                  on society and the nation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Be a center of academic and cultural excellence",
                    "Equip students with 21st-century skills",
                    "Inspire innovation and critical thinking",
                    "Serve the community through education",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-school-blue-dark shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-school-blue bg-school-blue-light px-4 py-1.5 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              What We Stand For
            </h2>
            <div className="flex justify-center">
              <span className="gold-divider" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className="card-accent card-hover h-full text-center pt-6 pb-6 pl-5 pr-5">
                  <div className="w-12 h-12 rounded-full bg-school-blue flex items-center justify-center mx-auto mb-4 shadow-md shadow-school-blue/25">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
