"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectDetailClientProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    problem: string;
    solution: string;
    learned: string[];
    image: string;
    date?: string;
    event?: string;
  };
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link href="/projects">
        <Button variant="ghost" className="mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Button>
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        {project.date && (
          <p className="text-sm text-muted-foreground">{project.date}</p>
        )}
        {project.event && (
          <>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">{project.event}</p>
          </>
        )}
      </div>
      <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Problem */}
      <Card className="glass border-border/50 mb-8">
        <CardHeader>
          <CardTitle>Problem</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </CardContent>
      </Card>

      {/* Solution */}
      <Card className="glass border-border/50 mb-8">
        <CardHeader>
          <CardTitle>Solution</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
        </CardContent>
      </Card>

      {/* What I Learned */}
      <Card className="glass border-border/50 mb-8">
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.learned.map((item, index) => (
              <li key={index} className="text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Screenshots */}
      <Card className="glass border-border/50">
        <CardHeader>
          <CardTitle>Screenshots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

