"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, BookOpen, ChevronDown, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { ThreeBackground } from "@/components/ThreeBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  // Fade out when scrolling down, fade in when scrolling back up
  // Use a threshold (e.g., 100px) to determine when to start fading
  const scrollThreshold = 100;
  const scrollOpacity = scrollY < scrollThreshold 
    ? Math.max(0, 1 - scrollY / scrollThreshold)
    : 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-normal"
            >
              <span className="block">Dhruv Venkat</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Computer Engineering student at the University of Waterloo
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <Link href="/projects">
                <Button size="lg" variant="gradient" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group">
                  View Resume
                  <FileText className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Animated gradient background effect */}
          <div
            className="fixed inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), transparent 50%)`,
            }}
          />
        </div>
        
        {/* Scroll for more cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollOpacity }}
          transition={{ duration: 0.3, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground pointer-events-none"
        >
          <span className="text-sm">Scroll for more</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <SectionWrapper className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <CardTitle className="text-3xl">About Me</CardTitle>
                <CardDescription className="text-base">
                  A brief introduction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m a Computer Engineering student at the University of Waterloo, 
                  passionate about building innovative solutions and learning new technologies. 
                  Currently working as a Software Engineering Intern at Scotiabank, I love 
                  working on projects that solve real-world problems and push the boundaries 
                  of what&apos;s possible.
                </p>
                <Link href="/about">
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Currently Working On */}
      <SectionWrapper className="pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Currently Working On</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle>Software Engineering @ Scotiabank</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modernizing enterprise applications, building AI-powered tools, and enhancing 
                    security posture across multiple repositories.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Computer Engineering @ UW</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pursuing my Bachelor of Applied Science in Computer Engineering, 
                    expected graduation 2029.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

