import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, stagger } from "@/lib/animations";
import {
  CheckCircle2,
  GraduationCap,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "A valid email is required.";
    if (!form.message.trim()) errs.message = "Please enter your message.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsPending(true);
    // Simulate a brief delay for UX feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsPending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main data-ocid="contact.page" className="pt-16">
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
              Get In Touch
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-3"
            >
              Contact Us
            </motion.h1>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="gold-divider" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              We're here to help. Reach out with any questions, admission
              inquiries, or feedback — we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <motion.div variants={fadeUp}>
              <Card className="border border-border shadow-xs">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-school-blue flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg text-foreground">
                        Paradise Senior Secondary School
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Babain, Haryana
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-school-blue-light flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-school-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-0.5">
                          Address
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          3XCQ+899, Babain,
                          <br />
                          Haryana 136156, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-school-blue-light flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-school-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+919416410839"
                          className="text-school-blue text-sm font-medium hover:underline"
                        >
                          +91 94164 10839
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mb-1">
                      School Hours
                    </p>
                    <p className="text-sm text-foreground">
                      Monday – Saturday: 8:00 AM – 3:00 PM
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Office: 9:00 AM – 1:00 PM (Admission enquiries)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp}>
              <div
                className="rounded-2xl overflow-hidden border border-border shadow-xs"
                data-ocid="contact.map_marker"
              >
                <iframe
                  src="https://maps.google.com/maps?q=3XCQ%2B899+Babain+Haryana+136156+India&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paradise School Location"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Card className="border border-border shadow-sm">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill the form below and our team will get back to you within
                    1–2 business days.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      data-ocid="contact.success_state"
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        Thank you for reaching out. We will get back to you
                        soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-school-blue text-sm font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {/* Name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          autoComplete="name"
                          data-ocid="contact.name.input"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-destructive text-xs">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          autoComplete="email"
                          data-ocid="contact.email.input"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-destructive text-xs">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number{" "}
                          <span className="text-muted-foreground text-xs">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          autoComplete="tel"
                          data-ocid="contact.phone.input"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Your message, question, or admission inquiry..."
                          rows={5}
                          data-ocid="contact.message.textarea"
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-destructive text-xs">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isPending}
                        data-ocid="contact.submit_button"
                        className="w-full bg-school-blue hover:bg-school-blue-dark text-white font-semibold"
                        size="lg"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
