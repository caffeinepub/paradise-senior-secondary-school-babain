import { fadeUp, stagger, staggerFast } from "@/lib/animations";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "/assets/generated/gallery-campus.dim_600x400.jpg",
    label: "School Campus",
    ocid: "gallery.item.1",
  },
  {
    id: 2,
    src: "/assets/generated/gallery-students.dim_600x400.jpg",
    label: "Classroom Activities",
    ocid: "gallery.item.2",
  },
  {
    id: 3,
    src: "/assets/generated/gallery-event.dim_600x400.jpg",
    label: "Annual Day Celebration",
    ocid: "gallery.item.3",
  },
  {
    id: 4,
    src: "/assets/generated/gallery-lab.dim_600x400.jpg",
    label: "Science Laboratory",
    ocid: "gallery.item.4",
  },
  {
    id: 5,
    src: "/assets/generated/gallery-sports.dim_600x400.jpg",
    label: "Sports Day",
    ocid: "gallery.item.5",
  },
  {
    id: 6,
    src: "/assets/generated/gallery-library.dim_600x400.jpg",
    label: "School Library",
    ocid: "gallery.item.6",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null,
  );

  return (
    <main data-ocid="gallery.page" className="pt-16">
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
              Photos
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-3"
            >
              School Gallery
            </motion.h1>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="gold-divider" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              A glimpse into life at Paradise Senior Secondary School — campus,
              classrooms, labs, celebrations, sports, and learning moments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerFast}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              data-ocid={item.ocid}
              className={`group relative overflow-hidden rounded-2xl shadow-sm border border-border cursor-pointer ${
                item.id === 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-school-blue/0 group-hover:bg-school-blue/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            data-ocid="gallery.modal"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close lightbox"
                data-ocid="gallery.modal.close_button"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="mt-4 text-center text-white/80 font-semibold">
                {selected.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
