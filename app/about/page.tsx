"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, Briefcase, Code2, Gamepad2, Music, Dumbbell,
  Code, FileCode, Database, Cloud, GitBranch, Settings,
  Box, Layers, Package, TestTube, BarChart3, CircleDot, FileJson, Globe,
  Cpu, Terminal, Send, Wrench
} from "lucide-react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

// Icon mapping for technologies
const techIcons: Record<string, LucideIcon> = {
  // Languages
  "Embedded C": Code,
  "C++": Code,
  "Java": Cpu,
  "Python": FileCode,
  "HTML/CSS/JavaScript": Globe,
  "Apache Groovy": FileCode,
  "VHDL": Terminal,
  "SQL": Database,
  "R": BarChart3,
  "UML": Layers,
  "XML": FileJson,
  
  // Frameworks & Libraries
  "ReactJS": Box,
  "Three.JS": Box,
  "JUnit 5": TestTube,
  "scikit-learn": Cpu,
  "Pandas": Database,
  "NumPy": Cpu,
  "Matplotlib": BarChart3,
  
  // Cloud Technologies
  "AWS (EC2, S3, IAM, RDS, Lambda, DynamoDB)": Cloud,
  
  // Tools & Databases
  "Git": GitBranch,
  "GitHub": GitBranch,
  "Jenkins": Settings,
  "Postman": Send,
  "MySQL": Database,
  "Gradle": Package,
  "Maven": Package,
  "Artifactory": Box,
};

// Fallback icon
const DefaultIcon = CircleDot;

const timelineItems = [
  {
    year: "Sep 2025 - Present",
    title: "Software Engineering Intern",
    description: "Scotiabank • Toronto, ON • Modernizing enterprise applications, building AI-powered agents, and enhancing security",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "Jan - Apr 2025",
    title: "Platform Engineering (DevOps) Intern",
    description: "Tangerine • Toronto, ON • Developed CI/CD pipelines, security scanning tools, and license tracking systems",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024 - 2029",
    title: "University of Waterloo",
    description: "Bachelor of Applied Science in Computer Engineering (Honours) • Waterloo, ON",
    icon: GraduationCap,
    type: "education",
  }
  // {
  //   year: "Sep 2021 - Jun 2024",
  //   title: "VEX Robotics",
  //   description: "Lead Programmer/Autonomous Developer • Placed top 4 in Alberta, competed at VEX Worlds 2023",
  //   icon: Code2,
  //   type: "project",
  // },
];

const outsideInterests = [
  { name: "Gaming", icon: Gamepad2, description: "Love exploring new worlds and stories" },
  { name: "Music", icon: Music, description: "Always have something playing in the background" },
  { name: "Gym", icon: Dumbbell, description: "Staying active and healthy" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <SectionWrapper className="pt-32 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Me Header with Headshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-center gap-8 mb-20"
          >
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-2xl md:max-w-none">
                A journey through my experiences, education, and interests
              </p>
            </div>
            
            {/* Headshot Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 md:-ml-16"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl" />
                <Image
                  src="/images/dhruv-headshot.JPEG"
                  alt="Dhruv Venkat"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Timeline</h2>
            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technical Proficiencies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="scroll-container">
                    <div className="scroll-content">
                      {["Embedded C", "C++", "Java", "Python", "HTML/CSS/JavaScript", "Apache Groovy", "VHDL", "SQL", "R", "UML", "XML"].map((lang) => {
                        const Icon = techIcons[lang] || DefaultIcon;
                        return (
                          <span key={lang} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {lang}
                          </span>
                        );
                      })}
                      {/* Duplicate for seamless loop */}
                      {["Embedded C", "C++", "Java", "Python", "HTML/CSS/JavaScript", "Apache Groovy", "VHDL", "SQL", "R", "UML", "XML"].map((lang, idx) => {
                        const Icon = techIcons[lang] || DefaultIcon;
                        return (
                          <span key={`${lang}-dup-${idx}`} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {lang}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle>Frameworks & Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="scroll-container">
                    <div className="scroll-content">
                      {["ReactJS", "Three.JS", "JUnit 5", "scikit-learn", "Pandas", "NumPy", "Matplotlib"].map((lib) => {
                        const Icon = techIcons[lib] || DefaultIcon;
                        return (
                          <span key={lib} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {lib}
                          </span>
                        );
                      })}
                      {/* Duplicate for seamless loop */}
                      {["ReactJS", "Three.JS", "JUnit 5", "scikit-learn", "Pandas", "NumPy", "Matplotlib"].map((lib, idx) => {
                        const Icon = techIcons[lib] || DefaultIcon;
                        return (
                          <span key={`${lib}-dup-${idx}`} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {lib}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle>Cloud Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="scroll-container">
                    <div className="scroll-content">
                      {["AWS (EC2, S3, IAM, RDS, Lambda, DynamoDB)"].map((cloud) => {
                        const Icon = techIcons[cloud] || DefaultIcon;
                        return (
                          <span key={cloud} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {cloud}
                          </span>
                        );
                      })}
                      {/* Duplicate for seamless loop */}
                      {["AWS (EC2, S3, IAM, RDS, Lambda, DynamoDB)"].map((cloud, idx) => {
                        const Icon = techIcons[cloud] || DefaultIcon;
                        return (
                          <span key={`${cloud}-dup-${idx}`} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {cloud}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle>Developer Tools & Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="scroll-container">
                    <div className="scroll-content">
                      {["Git", "GitHub", "Jenkins", "Postman", "MySQL", "Gradle", "Maven", "Artifactory"].map((tool) => {
                        const Icon = techIcons[tool] || DefaultIcon;
                        return (
                          <span key={tool} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {tool}
                          </span>
                        );
                      })}
                      {/* Duplicate for seamless loop */}
                      {["Git", "GitHub", "Jenkins", "Postman", "MySQL", "Gradle", "Maven", "Artifactory"].map((tool, idx) => {
                        const Icon = techIcons[tool] || DefaultIcon;
                        return (
                          <span key={`${tool}-dup-${idx}`} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5" />
                            {tool}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Outside of Engineering */}
          {/* <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Outside of Engineering
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {outsideInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="glass border-border/50 hover:shadow-lg transition-all h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle>{interest.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{interest.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div> */}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

