"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/dhruvvenkat" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/dhruv-venkat" },
  { name: "Email", icon: Mail, href: "mailto:dhruv.venkat.2024@gmail.com" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/40 mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dhruv Venkat. Built with Next.js & Framer Motion.
          </p>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

