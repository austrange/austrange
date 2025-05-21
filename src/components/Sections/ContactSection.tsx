"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  example?: string;
};
export function ContactSection() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { name, email, subject, message } = data;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append(
        "date",
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
      formData.append(
        "time",
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: true,
        })
      );
      await fetch(
        "https://script.google.com/macros/s/AKfycbxVANhNBF4_yJlNuwGghxTVMBLgBezAwcYGsqG10cT0hFnRRDuveye5ckA5qMPDweZC-Q/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            Have questions or want to collaborate? Reach out to us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  <a href="mailto:austrange.india@gmail.com">
                    austrange.india@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Phone</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  <a href="tel:+919322871984">+91 93228 71984</a> |{" "}
                  <a href="tel:+918433887840">+91 84338 87840</a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Office Address</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  Not yet, we are online.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Facebook", "Instagram", "LinkedIn"].map(
                    (platform, index) => (
                      <a
                        key={index}
                        href={
                          platform === "Facebook"
                            ? "https://www.facebook.com/profile.php?id=61575298985988"
                            : platform === "Instagram"
                            ? "https://www.instagram.com/austrangesolutions?igsh=emg1cHViY2xwY203"
                            : "https://www.linkedin.com/company/austrange-solutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BcNLTR0SpTxikXEDgrLox3w%3D%3D"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-8 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      className="mt-1"
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name?.message || "This field is required"}
                      </span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1"
                      placeholder="Your Email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email?.message || "This field is required"}
                      </span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      className="mt-1"
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <span className="text-red-500 text-sm">
                        {errors.subject?.message || "This field is required"}
                      </span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-1"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      placeholder="Your Message"
                      style={{ resize: "none" }}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">
                        {errors.message?.message || "This field is required"}
                      </span>
                    )}
                  </div>
                  <ShimmerButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full dark:bg-blue-600 dark:text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <p className="text-sm font-medium">Sending Message</p>{" "}
                        <Loader2 className="animate-spin w-4 h-4" />
                      </span>
                    ) : (
                      <span className="text-sm font-medium">Send Message</span>
                    )}
                  </ShimmerButton>
                </form>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
