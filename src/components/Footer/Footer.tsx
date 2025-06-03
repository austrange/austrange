"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Facebook,
  Youtube,
} from "lucide-react";

// Define navigation sections
const footerNavs = [
  {
    label: "Company",
    items: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "R&D", href: "#rnd" },
      { name: "Collaborate", href: "#collaborate" },
    ],
  },
  {
    label: "Product",
    items: [
      { name: "E-SIGHT", href: "#product" },
      { name: "Features", href: "#product" },
      { name: "Impact", href: "#impact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  {
    icon: <Facebook size={18} />,
    href: "https://www.facebook.com/profile.php?id=61575298985988",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/company/austrange-solutions/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BcNLTR0SpTxikXEDgrLox3w%3D%3D",
  },
  {
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/austrangesolutions?igsh=emg1cHViY2xwY203",
  },
  { icon: <Youtube size={18} />, href: "https://youtube.com/@austrange" },
  {
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/x.svg" alt="X" width={18} />,
    href: "https://x.com/austrangesolns",
  },
];

// Handle smooth scrolling for navigation links
const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  if (href.startsWith("#")) {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState({}, "", href);
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 py-10">
          {/* Company info and logo - made more compact */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/Austrange Logo.png"
                className="dark:invert w-8 h-8"
                alt="Austrange Logo"
                width={32}
                height={32}
              />
              <Link
                href="/"
                className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
              >
                Austrange
              </Link>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
              Empowering lives through intelligent solutions.
            </p>

            {/* Contact Info - simplified */}
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-center">
                <Mail
                  size={14}
                  className="text-neutral-500 mr-2 flex-shrink-0"
                />
                <span className="text-neutral-600 dark:text-neutral-400">
                  <a href="mailto:contact.austrange@gmail.com">
                    contact.austrange@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Phone
                  size={14}
                  className="text-neutral-500 mr-2 flex-shrink-0"
                />
                <span className="text-neutral-600 dark:text-neutral-400">
                  <a href="tel:+919322871984">+91 93228 71984</a> /{" "}
                  <a href="tel:+918433887840">+91 84338 87840</a>
                </span>
              </div>
            </div>

            {/* Social Media - smaller */}
            <div className="flex items-center gap-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-full transition-colors"
                >
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links - more compact */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-3 gap-4">
            {footerNavs.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-neutral-800 dark:text-neutral-200 font-medium text-sm mb-2">
                  {item.label}
                </h3>
                <ul className="space-y-1">
                  {item.items.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 text-xs transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar with copyright - simplified */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-neutral-500 dark:text-neutral-400 mb-2 md:mb-0">
            © {new Date().getFullYear()} Austrange Solutions Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
