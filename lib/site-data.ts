export type NavItem = {
    label: string;
    href: string;
};

export type HeroCard = {
    eyebrow: string;
    title: string;
    copy: string;
};

export type Project = {
    title: string;
    category: string;
    year: string;
    summary: string;
    href: string;
    gradient: string;
    tags: string[];
    focus: string;
    metric: string;
};

export type LabItem = {
    title: string;
    description: string;
    technologies: string[];
    status: "Prototype" | "In Progress" | "Deployed" | "Research";
    category: "AI" | "Infra" | "DevTools" | "Systems";
};

export type Principle = {
    title: string;
    description: string;
};

export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
};

export type Capability = {
    title: string;
    icon: "ai" | "tooling" | "backend" | "product" | "automation";
    summary: string;
    bullets: string[];
    technologies: string[];
};

export type WritingItem = {
    title: string;
    format: string;
    readTime: string;
    summary: string;
    href: string;
    tags: string[];
};

export type Testimonial = {
    quote: string;
    name: string;
    role: string;
};

export type ContactLink = {
    label: string;
    value: string;
    href: string;
};

export type SiteContent = {
    brand: {
        name: string;
        descriptor: string;
    };
    navItems: NavItem[];
    hero: {
        eyebrow: string;
        title: string;
        subheadline: string;
        description: string;
        primaryCta: NavItem;
        secondaryCta: NavItem;
        capabilityPills: string[];
        metrics: Array<{
            label: string;
            value: string;
        }>;
        cards: HeroCard[];
    };
    work: {
        eyebrow: string;
        title: string;
        description: string;
        items: Project[];
    };
    lab: {
        eyebrow: string;
        title: string;
        description: string;
        items: LabItem[];
    };
    about: {
        eyebrow: string;
        title: string;
        body: string;
        quote: string;
        principles: Principle[];
    };
    experience: {
        eyebrow: string;
        title: string;
        description: string;
        items: ExperienceItem[];
    };
    capabilities: {
        eyebrow: string;
        title: string;
        description: string;
        items: Capability[];
    };
    writing: {
        eyebrow: string;
        title: string;
        description: string;
        items: WritingItem[];
    };
    testimonials: {
        eyebrow: string;
        title: string;
        description: string;
        items: Testimonial[];
    };
    contact: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: ContactLink;
        secondaryCta: ContactLink;
        channels: ContactLink[];
    };
};

export const siteData: SiteContent = {
    brand: {
        name: "Dhruv Venkat",
        descriptor: "AI systems portfolio"
    },
    navItems: [
        { label: "Work", href: "#work" },
        { label: "Lab", href: "#lab" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Experience", href: "#experience" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Writing", href: "#writing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
    ],
    hero: {
        eyebrow: "Software engineer / AI systems / developer tooling",
        title: "Intelligent software systems with product-grade clarity.",
        subheadline:
            "Software engineer building AI systems, developer tooling, automation, and technical infrastructure.",
        description:
            "I design and ship operator surfaces, orchestration layers, internal platforms, and automation products that make complex systems easier to run, inspect, and trust.",
        primaryCta: { label: "Discuss a role", href: "#contact" },
        secondaryCta: { label: "Explore projects", href: "#work" },
        capabilityPills: [
            "AI Systems",
            "Developer Tooling",
            "Automation",
            "Infrastructure",
            "Intelligent Workflows",
            "Full-Stack Engineering"
        ],
        metrics: [
            { label: "Current focus", value: "AI orchestration, infra surfaces, and builder tools" },
            { label: "Operating mode", value: "Systems thinking from backend runtime to operator UI" },
            { label: "Preferred problems", value: "Workflow clarity, reliability, and technical leverage" }
        ],
        cards: [
            {
                eyebrow: "Systems design",
                title: "Interfaces for serious technical work",
                copy: "Designing product surfaces that make complex systems more legible, faster to operate, and easier to trust."
            },
            {
                eyebrow: "Tooling",
                title: "Builder-first product thinking",
                copy: "Strong bias toward tools, internal platforms, and AI workflows that improve engineering speed and decision quality."
            },
            {
                eyebrow: "Execution",
                title: "Polished delivery across the stack",
                copy: "Comfortable shaping architecture, interaction design, implementation details, and the operating constraints in between."
            }
        ]
    },
    work: {
        eyebrow: "Selected work",
        title: "Case studies across AI orchestration, developer platforms, and production-grade system design.",
        description:
            "These project modules are structured as technical product panels: a concise summary, the stack, the core engineering focus, and the operational signal each system is meant to carry.",
        items: [
            {
                title: "Operator Grid",
                category: "AI workflow platform",
                year: "2026",
                summary:
                    "A coordination layer for agent-assisted operations, combining workflow state, evaluation tooling, and human review into one resilient control surface.",
                href: "#",
                gradient:
                    "linear-gradient(140deg, rgba(110,168,254,0.36), rgba(155,140,255,0.28) 42%, rgba(103,232,249,0.18) 72%, rgba(8,12,28,0.88))",
                tags: ["TypeScript", "AI Agents", "Postgres", "Queues"],
                focus: "Orchestration framework for autonomous task execution with human checkpoints",
                metric: "42% faster review cycles"
            },
            {
                title: "Relay Forge",
                category: "Developer tooling",
                year: "2025",
                summary:
                    "A local-first developer platform for scaffolding internal tools, standardizing service contracts, and accelerating repeatable product delivery.",
                href: "#",
                gradient:
                    "linear-gradient(140deg, rgba(103,232,249,0.32), rgba(110,168,254,0.24) 40%, rgba(17,24,45,0.92) 76%)",
                tags: ["Next.js", "tRPC", "DX", "Monorepo"],
                focus: "Reusable foundation for teams shipping internal products without reinventing the stack",
                metric: "3x faster tool creation"
            },
            {
                title: "Signal Trace",
                category: "Observability interface",
                year: "2025",
                summary:
                    "A premium telemetry surface for tracing automation pipelines, surfacing failure states, and reducing ambiguity across distributed workflows.",
                href: "#",
                gradient:
                    "linear-gradient(140deg, rgba(155,140,255,0.32), rgba(110,168,254,0.22) 42%, rgba(11,16,32,0.94) 76%)",
                tags: ["Telemetry", "Infra", "React", "Analytics"],
                focus: "Operational visibility for intelligent systems running beyond a single request-response loop",
                metric: "58% faster incident triage"
            },
            {
                title: "Task Mesh",
                category: "Automation infrastructure",
                year: "2024",
                summary:
                    "An event-driven execution layer for multi-step automations, built around durable state, observability hooks, and product-facing control interfaces.",
                href: "#",
                gradient:
                    "linear-gradient(140deg, rgba(110,168,254,0.24), rgba(103,232,249,0.18) 40%, rgba(11,16,32,0.94) 78%)",
                tags: ["Node.js", "Workers", "Redis", "Events"],
                focus: "Distributed execution primitives for automation products that need reliability under real load",
                metric: "99.95% workflow completion"
            }
        ]
    },
    lab: {
        eyebrow: "Systems Lab",
        title: "Experiments, infrastructure ideas, and active technical explorations.",
        description:
            "A space for prototypes, research threads, and production-adjacent systems work. The goal is to show active technical curiosity, not just polished outcomes.",
        items: [
            {
                title: "Agent Eval Harness",
                description:
                    "A compact framework for regression-testing agent behaviors across prompts, tools, and model variants with reproducible scoring.",
                technologies: ["Python", "OpenTelemetry", "SQLite"],
                status: "In Progress",
                category: "AI"
            },
            {
                title: "Workflow Runtime Console",
                description:
                    "A glassy operator UI for inspecting task graphs, replaying failed jobs, and understanding system state in real time.",
                technologies: ["TypeScript", "React", "WebSockets"],
                status: "Prototype",
                category: "Systems"
            },
            {
                title: "CLI Design Kit",
                description:
                    "An opinionated package of terminal patterns, visual conventions, and DX helpers for internal engineering tools.",
                technologies: ["Node.js", "CLI", "Build Systems"],
                status: "Deployed",
                category: "DevTools"
            },
            {
                title: "Policy-Driven Queue Layer",
                description:
                    "An infrastructure experiment around scheduling guarantees, dead-letter handling, and product-level control over background execution.",
                technologies: ["Queues", "Redis", "Observability"],
                status: "Research",
                category: "Infra"
            }
        ]
    },
    about: {
        eyebrow: "Engineering philosophy",
        title: "I care about systems that are technically sharp, operationally useful, and pleasant to use.",
        body:
            "My work tends to sit at the intersection of infrastructure, product engineering, and interface design. I am most interested in software that helps builders think more clearly: AI systems that remain observable, developer tools that reduce friction, and product surfaces that expose complexity without becoming chaotic.",
        quote:
            "The best systems make people faster, calmer, and more certain about what the machine is doing.",
        principles: [
            {
                title: "Build tools for builders",
                description:
                    "I like products that improve engineering workflows directly, whether that means better automation, clearer observability, or sharper internal platforms."
            },
            {
                title: "Product-minded architecture",
                description:
                    "Systems design should reflect the user journey, operational realities, and the failure modes the product must communicate honestly."
            },
            {
                title: "Elegance under constraint",
                description:
                    "Strong software feels composed because the technical boundaries, interfaces, and decisions are disciplined rather than improvised."
            }
        ]
    },
    experience: {
        eyebrow: "Experience",
        title: "A systems-focused track through product engineering, developer experience, and technical infrastructure.",
        description:
            "These roles are framed as technical chapters: what was built, what kinds of systems were involved, and how product judgment shaped the implementation.",
        items: [
            {
                role: "Senior Software Engineer",
                company: "Studio Meridian",
                period: "2024 - Present",
                location: "Toronto / Remote",
                description:
                    "Leading product engineering for AI-enabled software platforms, shipping operator interfaces, orchestration tooling, and front-end systems that expose complex workflow state cleanly.",
                technologies: ["TypeScript", "Next.js", "AI Workflows", "Postgres"]
            },
            {
                role: "Founding Engineer",
                company: "Fieldnote Labs",
                period: "2022 - 2024",
                location: "Remote",
                description:
                    "Built the core product and internal tooling stack from early concept through production, balancing rapid iteration with reliability, modularity, and strong developer ergonomics.",
                technologies: ["React", "Node.js", "Infra", "DX Systems"]
            },
            {
                role: "Design Engineer",
                company: "Signal Works",
                period: "2021 - 2022",
                location: "Waterloo",
                description:
                    "Worked across prototypes, product interfaces, and system design explorations to help teams turn ambitious technical ideas into usable software concepts.",
                technologies: ["Front-end Systems", "Prototyping", "Interaction", "UI Architecture"]
            },
            {
                role: "Software Engineering Intern",
                company: "Placeholder Company",
                period: "2020 - 2021",
                location: "Canada",
                description:
                    "Contributed to internal platforms and user-facing software while developing a stronger point of view on maintainability, tool quality, and interface clarity.",
                technologies: ["Internal Tools", "Backend APIs", "Automation", "Testing"]
            }
        ]
    },
    capabilities: {
        eyebrow: "Capabilities",
        title: "Technical capability framed around systems leverage, not a flat stack list.",
        description:
            "The emphasis here is on what I can help a team build: practical AI systems, better developer workflows, resilient backend architecture, and polished product delivery.",
        items: [
            {
                title: "AI Systems",
                icon: "ai",
                summary:
                    "Designing agentic and AI-assisted workflows that remain observable, testable, and grounded in real product operations.",
                bullets: [
                    "Agent orchestration and workflow design",
                    "Evaluation surfaces and failure visibility",
                    "Human-in-the-loop systems"
                ],
                technologies: ["LLM tooling", "Evals", "Queues", "Telemetry"]
            },
            {
                title: "Developer Tooling",
                icon: "tooling",
                summary:
                    "Building internal products, CLIs, and platform abstractions that make engineering teams faster without hiding critical complexity.",
                bullets: [
                    "Platform UX and internal tools",
                    "CLI and workflow design",
                    "Reusable engineering foundations"
                ],
                technologies: ["TypeScript", "Node.js", "Monorepos", "DX"]
            },
            {
                title: "Backend Architecture",
                icon: "backend",
                summary:
                    "Comfortable shaping system boundaries, event flow, persistence, and operational behavior for products that need to stay reliable at scale.",
                bullets: [
                    "APIs, jobs, and background execution",
                    "State management across services",
                    "Observability-aware system design"
                ],
                technologies: ["Postgres", "Redis", "Workers", "Events"]
            },
            {
                title: "Full-Stack Product Engineering",
                icon: "product",
                summary:
                    "Bridging product intent with technical execution, from interface systems and interaction details to backend contracts and runtime behavior.",
                bullets: [
                    "Interface architecture",
                    "Design-to-code execution",
                    "Product-oriented delivery"
                ],
                technologies: ["React", "Next.js", "TypeScript", "Design Systems"]
            },
            {
                title: "Automation & Infrastructure",
                icon: "automation",
                summary:
                    "Shipping systems that remove repetitive work while keeping operators informed, in control, and able to intervene when it matters.",
                bullets: [
                    "Workflow automation",
                    "Infra-facing product surfaces",
                    "Operational control loops"
                ],
                technologies: ["Jobs", "Pipelines", "Monitoring", "Scheduling"]
            }
        ]
    },
    writing: {
        eyebrow: "Writing / Ideas",
        title: "Technical notes on AI workflows, tooling, systems design, and engineering clarity.",
        description:
            "This section is positioned as technical writing rather than a generic journal. It is where system design notes, devtools ideas, and engineering principles can live.",
        items: [
            {
                title: "Designing agent systems that fail legibly",
                format: "Technical essay",
                readTime: "7 min read",
                summary:
                    "On building agent-driven workflows that surface uncertainty, state, and operator control instead of pretending the model is always right.",
                href: "#",
                tags: ["AI Agents", "Reliability", "Workflow Design"]
            },
            {
                title: "Developer tools should reduce ambiguity first",
                format: "Field note",
                readTime: "5 min read",
                summary:
                    "A short note on why the best internal tools do not just accelerate tasks, they make the system easier to reason about under pressure.",
                href: "#",
                tags: ["DevTools", "DX", "Internal Platforms"]
            },
            {
                title: "The interface layer of infrastructure products",
                format: "Systems note",
                readTime: "6 min read",
                summary:
                    "Reflections on designing front-end surfaces for technical products without flattening the complexity that operators actually need to see.",
                href: "#",
                tags: ["Infra UX", "Observability", "Product Engineering"]
            }
        ]
    },
    testimonials: {
        eyebrow: "Selected words",
        title: "Technical rigor paired with product judgment.",
        description:
            "Structured as concise proof points from collaborators who have seen the work at the level of systems decisions, product execution, and interface craft.",
        items: [
            {
                quote:
                    "Dhruv brings the rare combination of systems thinking and product polish. He can reason about architecture, then make the interface communicate that architecture clearly.",
                name: "Avery Collins",
                role: "Design Director, Placeholder Studio"
            },
            {
                quote:
                    "He consistently improved the technical quality of the work while making the product easier for people to operate. That combination is unusually valuable.",
                name: "Leena Shah",
                role: "Product Lead, Example Company"
            },
            {
                quote:
                    "What stands out is clarity. The systems are real, the implementation is disciplined, and the final product still feels deliberate and refined.",
                name: "Marcus Reid",
                role: "Creative Technologist"
            }
        ]
    },
    contact: {
        eyebrow: "Contact",
        title: "Let us build software that feels intelligent, reliable, and sharp in execution.",
        description:
            "Open to roles and projects across AI systems, developer tooling, automation, infrastructure products, and product engineering where technical seriousness matters.",
        primaryCta: {
            label: "Email",
            value: "dhruv@example.com",
            href: "mailto:dhruv@example.com"
        },
        secondaryCta: {
            label: "LinkedIn",
            value: "linkedin.com/in/dhruvvenkat",
            href: "https://linkedin.com/in/dhruvvenkat"
        },
        channels: [
            {
                label: "Email",
                value: "dhruv@example.com",
                href: "mailto:dhruv@example.com"
            },
            {
                label: "GitHub",
                value: "github.com/dhruv",
                href: "https://github.com/dhruv"
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/dhruvvenkat",
                href: "https://linkedin.com/in/dhruvvenkat"
            }
        ]
    }
};
