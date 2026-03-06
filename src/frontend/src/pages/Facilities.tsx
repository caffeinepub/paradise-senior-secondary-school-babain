import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "motion/react";

const facilities = [
  {
    id: 1,
    title: "Smart Classrooms",
    description:
      "Fully equipped interactive smart classrooms with LED projectors, digital whiteboards, and audio-visual systems that make learning engaging and effective for every student.",
    image: "/assets/generated/facility-classroom.dim_600x400.jpg",
    ocid: "facilities.item.1",
  },
  {
    id: 2,
    title: "Science Labs",
    description:
      "Well-stocked Physics, Chemistry, and Biology laboratories with modern equipment, enabling students to conduct hands-on experiments and develop scientific temperament.",
    image: "/assets/generated/facility-science-lab.dim_600x400.jpg",
    ocid: "facilities.item.2",
  },
  {
    id: 3,
    title: "Computer Lab",
    description:
      "A state-of-the-art computer laboratory with high-speed internet connectivity, latest software, and one-to-one computing access to prepare students for the digital age.",
    image: "/assets/generated/facility-computer-lab.dim_600x400.jpg",
    ocid: "facilities.item.3",
  },
  {
    id: 4,
    title: "Library",
    description:
      "A well-stocked library with thousands of books, periodicals, encyclopedias, and digital resources to foster a love of reading and support academic research.",
    image: "/assets/generated/facility-library.dim_600x400.jpg",
    ocid: "facilities.item.4",
  },
  {
    id: 5,
    title: "Sports Activities",
    description:
      "Extensive sports infrastructure including cricket ground, football field, basketball court, and indoor games room. Sports develop teamwork, fitness, and a winning mindset.",
    image: "/assets/generated/facility-sports.dim_600x400.jpg",
    ocid: "facilities.item.5",
  },
  {
    id: 6,
    title: "Safe Environment",
    description:
      "A secure campus with CCTV surveillance, trained staff, anti-bullying policies, and a nurturing culture that ensures every student feels safe, respected, and supported.",
    image: "/assets/generated/facility-safe-environment.dim_600x400.jpg",
    ocid: "facilities.item.6",
  },
];

export function Facilities() {
  return (
    <main data-ocid="facilities.page" className="pt-16">
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
              Infrastructure
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-3"
            >
              Our Facilities
            </motion.h1>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="gold-divider" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Modern infrastructure designed to support holistic learning and
              development in a stimulating, safe environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={fadeUp}
              data-ocid={facility.ocid}
            >
              <Card className="h-full border border-border shadow-xs overflow-hidden card-hover group">
                <div className="overflow-hidden h-52">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Note section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 rounded-2xl bg-school-blue-light border border-school-blue/20 p-8 text-center"
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-3">
            Come Visit Our Campus
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-5">
            We invite parents and students to visit our campus and see these
            world-class facilities first-hand. Schedule a tour at your
            convenience.
          </p>
          <a
            href="tel:+919416410839"
            className="inline-flex items-center gap-2 bg-school-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-school-blue-dark transition-colors"
          >
            Call +91 94164 10839
          </a>
        </motion.div>
      </div>
    </main>
  );
}
