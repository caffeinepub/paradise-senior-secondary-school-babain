import { GraduationCap, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "paradise-school",
  );

  return (
    <footer
      className="bg-school-blue-dark text-white"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Identity */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-base leading-tight">
                  Paradise Sr. Sec. School
                </p>
                <p className="text-white/60 text-xs">Babain, Haryana</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Nurturing young minds and building character for a brighter
              tomorrow. Committed to excellence in education since our founding.
            </p>
          </div>

          {/* Hindi Name + Address */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-white/90">
              Our School
            </h3>
            <p className="text-lg font-semibold mb-3 text-school-gold">
              पैराडाइज सीनियर सेकेंडरी स्कूल बाबैन
            </p>
            <div className="flex items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
              <span>3XCQ+899, Babain, Haryana 136156, India</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base mb-4 text-white/90">
              Contact Us
            </h3>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
              <Phone className="w-4 h-4 text-white/50" />
              <a
                href="tel:+919416410839"
                className="hover:text-white transition-colors"
              >
                +91 94164 10839
              </a>
            </div>
            <p className="text-white/50 text-xs mt-4">
              Monday – Saturday: 8:00 AM – 3:00 PM
            </p>
            <p className="text-white/50 text-xs mt-1">
              Admissions: 9:00 AM – 1:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">
            © {year} Paradise Senior Secondary School Babain. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
