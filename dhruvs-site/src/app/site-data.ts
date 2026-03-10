export type WritingEntry = {
  slug: string;
  title: string;
  type: string;
  summary: string;
};

export const writing: WritingEntry[] = [
  {
    slug: "ai-assisted-engineering-is-changing-how-software-gets-built",
    title: "AI-assisted engineering is changing how software gets built",
    type: "essay",
    summary:
      "How AI changes the shape of implementation work, code review, and iteration speed when the tooling is treated as part of the engineering system.",
  },
  {
    slug: "trust-is-the-missing-layer-in-autonomous-developer-tools",
    title: "Trust is the missing layer in autonomous developer tools",
    type: "note",
    summary:
      "Why autonomy alone is not enough, and which product signals help engineers understand when an agent is reliable enough to use.",
  },
  {
    slug: "why-faster-feedback-loops-produce-better-software",
    title: "Why faster feedback loops produce better software",
    type: "systems",
    summary:
      "A short argument for tighter loops between idea, execution, and evaluation, especially in product teams working with AI-assisted workflows.",
  },
  {
    slug: "shipping-tools-before-the-workflow-is-fully-clear",
    title: "Shipping tools before the workflow is fully clear",
    type: "draft",
    summary:
      "On building internal tools early, watching how people actually use them, and letting the workflow reveal itself through real constraints.",
  },
  {
    slug: "interfaces-for-agents-should-expose-intent-not-just-output",
    title: "Interfaces for agents should expose intent, not just output",
    type: "essay",
    summary:
      "A case for agent interfaces that show plan quality, uncertainty, and tradeoffs instead of presenting polished output with no context.",
  },
  {
    slug: "taste-judgment-and-stronger-product-feedback-rituals",
    title: "Taste, judgment, and stronger product feedback rituals",
    type: "note",
    summary:
      "Why better products often come from better feedback habits, sharper taste, and more deliberate review rituals rather than more feature volume.",
  },
];
