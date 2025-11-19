"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "revvo",
    title: "Revvo",
    description: "Web app that scrapes used car listings with AI-powered analytics, sentiment analysis, and negotiation assistance.",
    tech: ["React", "Vite", "Python", "Django", "JavaScript", "HTML/CSS"],
    date: "Nov 2025",
    event: "HackPrinceton 2025",
    image: "/images/car.png",
  },
  {
    id: "finxpert",
    title: "FinXpert",
    description: "Web application that advises users on alternative banking institutions using k-nearest neighbor algorithm and MySQL database.",
    tech: ["ReactJS", "Python", "MySQL", "Machine Learning"],
    date: "Mar - Aug 2025",
    event: "UW Fintech Club",
    image: null,
  },
  {
    id: "monte-carlo",
    title: "Monte Carlo Options Pricing Simulator",
    description: "Python script that runs 10,000+ simulations to aid in options pricing with market event variables.",
    tech: ["Python", "Matplotlib", "Pandas", "Finazon API"],
    date: "Mar 2025",
    image: null,
  },
  {
    id: "escrowshield",
    title: "EscrowShield",
    description: "Proof-of-concept web application for blockchain-based escrow on Internet Computer, eliminating third-party costs.",
    tech: ["ReactJS", "Internet Computer", "Rust", "Motoko", "MetaMask API"],
    date: "Feb 2025",
    image: null,
  },
  {
    id: "vex-robotics",
    title: "VEX Robotics",
    description: "Lead programmer and autonomous developer. Placed top 4 in Alberta and competed at VEX Worlds 2023 in Dallas, Texas.",
    tech: ["C++", "VEX PROS", "Git"],
    date: "Sep 2021 - Jun 2024",
    image: null,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <SectionWrapper className="pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I&apos;ve built and learned from
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <Card className="glass border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl">🚀</span>
                          </div>
                        </>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                      {project.event && (
                        <p className="text-xs text-muted-foreground mt-1">{project.event}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{project.date}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-primary group-hover:translate-x-1 transition-transform">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

