import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { ProjectDetailClient } from "./client";

const projectData: Record<string, {
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  learned: string[];
  image: string;
  date?: string;
  event?: string;
}> = {
  "revvo": {
    title: "Revvo",
    description: "Web app that allows users to enter profile information and scrapes real used car listings from around their area that might suit their use case.",
    tech: ["React", "Vite", "Python", "Django", "JavaScript", "HTML/CSS"],
    problem: "Buying a used car is overwhelming - users struggle to find reliable listings, understand car quality, and negotiate effectively with dealers.",
    solution: "Created a web app that scrapes real used car listings with AI-powered analytics including user sentiment analysis, common defects, dealership reviews, and insurance reports. Users can chat with pre-trained AI chatbots about recommended cars and download PDF scripts to aid in negotiations.",
    learned: [
      "Web scraping techniques and data extraction",
      "AI chatbot integration and natural language processing",
      "Sentiment analysis and data analytics",
      "Full-stack development with React and Django",
      "PDF generation for user-facing documents",
    ],
    image: "/images/car.png",
    date: "Nov 2025",
    event: "HackPrinceton 2025",
  },
  "finxpert": {
    title: "FinXpert",
    description: "Web application that advises users on alternative banking institutions based on their input.",
    tech: ["ReactJS", "Python", "MySQL", "Machine Learning"],
    problem: "Consumers struggle to find the best banking options that match their specific needs from the many institutions and neo-banks available in Canada.",
    solution: "Developed a web application using a k-nearest neighbor algorithm to match users with suitable banking options. Built a MySQL database storing information about chequing accounts offered by all major institutions and neo-banks in Canada.",
    learned: [
      "Machine learning algorithm implementation (k-NN)",
      "Database design and optimization for financial data",
      "Full-stack web development with React and Python",
      "Financial product analysis and comparison logic",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    date: "Mar - Aug 2025",
    event: "UW Fintech Club",
  },
  "monte-carlo": {
    title: "Monte Carlo Options Pricing Simulator",
    description: "Python script that allows a user to input a given option's ticker and runs 10,000+ simulations to aid in pricing.",
    tech: ["Python", "Matplotlib", "Pandas", "Finazon API"],
    problem: "Options pricing is complex and requires understanding various market variables. Traditional calculators don't provide enough insight into potential outcomes.",
    solution: "Developed a script that simulates a variety of market events by introducing variables such as volatility, time to maturity, dividend rates (where applicable), and current price. Runs 10,000+ Monte Carlo simulations to provide comprehensive pricing insights.",
    learned: [
      "Monte Carlo simulation techniques",
      "Financial modeling and options pricing theory",
      "Data visualization with Matplotlib",
      "Working with financial APIs (Finazon)",
      "Statistical analysis and probability distributions",
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    date: "Mar 2025",
  },
  "escrowshield": {
    title: "EscrowShield",
    description: "Proof-of-concept web application to hold down payments in escrow on the blockchain for buyers of new properties.",
    tech: ["ReactJS", "Internet Computer", "Rust", "Motoko", "MetaMask API"],
    problem: "Traditional escrow services for property purchases involve high costs from third-party escrows and notaries, making transactions expensive and slow.",
    solution: "Developed a proof-of-concept web application using the Internet Computer blockchain to hold down payments in escrow. Wrote self-validating smart contracts deployed in ICP canisters, eliminating the cost of third-party escrows and notaries while maintaining security and transparency.",
    learned: [
      "Blockchain development on Internet Computer",
      "Smart contract development with Motoko",
      "Web3 integration and MetaMask wallet connectivity",
      "Rust programming for blockchain applications",
      "Decentralized application (dApp) architecture",
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
    date: "Feb 2025",
  },
  "vex-robotics": {
    title: "VEX Robotics",
    description: "Lead programmer and autonomous developer for VEX Robotics team.",
    tech: ["C++", "VEX PROS", "Git"],
    problem: "Robotics competitions require precise autonomous programming and efficient code management for complex robot behaviors.",
    solution: "Used C++ with the VEX PROS library to program motors and pneumatics, sharing code in a GitHub repository. Led the autonomous development team, creating reliable and efficient code for competition robots.",
    learned: [
      "Embedded systems programming with C++",
      "Robotics control systems and sensor integration",
      "Version control and collaborative development with Git",
      "Competition strategy and autonomous navigation",
      "Team leadership and project management",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    date: "Sep 2021 - Jun 2024",
  },
};

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <SectionWrapper className="pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </SectionWrapper>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <SectionWrapper className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ProjectDetailClient project={project} />
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

