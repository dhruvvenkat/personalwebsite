const noteDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export type Note = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export const notes: Note[] = [
  {
    slug: "what-yann-lecuns-ami-means-for-ai",
    title: "What Yann LeCun's AMI means for the AI industry (in my opinion)",
    date: "2026-03-10",
    content: `in progress lol`,
  },

  {
    slug: "why-i-write",
    title: "Why I write",
    date: "2026-03-10",
    content: `I think that writing is the most important skill that one can have today. In the rapidly-evolving world of AI, LLMs are getting better and better at understanding natural language, but what good are they if we ourselves can't harness natural language well?
    
    Generally, I like to stick to tech stuff on my X profile, but here I'm gonna talk about anything and everything that I feel like. Take this as a way for me to document my early career as I (try to) get cracked at engineering.`,
  },

  {
    slug: "sports-betting-is-a-product",
    title: "Sports betting is a product, not a hobby",
    date: "2026-03-10",
    content: `I've been a sports fan for my whole life. Some of my earliest memories are of going to see the Seattle Mariners and my hometown Calgary Flames, and while I don't really have time to watch games anymore like I used to, I still like to keep up with the standings every once in a while. With that being said, I can't help but notice how every broadcast is chock-full of gambling. Fox, NBC, CBS, Sportsnet, all of them seem to be sponsored by FanDuel, DraftKings, or one of their competitors.\n
    
    I've tried my hand at sports betting (dw I only lost 10 bucks), and I immediately realized that there's a reason why only parlay betting was allowed in Canada until late. \n
    
    Sports betting preys on the exact emotions that sports are supposed to evoke: hope, momentum, overreaction, the sentiment of 'this time feels different!' It weaponizes our deep need for community into a cash-extraction layer, and I think it has the power to damage entire lives long-term. It dupes people into believing that they're operating based on skill, when in reality most bets are completely up to chance. In trading, that's called exit liquidity and it's where you never want to be. Betting on Shai to score over 25 might sound smart in the moment, but what's stopping him from getting injured, fouling out, or hitting the bench early (I hate load management too but that's a different conversation)?\n
  
    Constantly glorifying and glamorizing gambling through advertisement sets a bad example for everyone in society, and I think we're more vulnerable to it than ever as our need for constant stimulation only increases.

    thanks to airagan for inspiring me to write this btw`,
  },

  {
    slug: "execution-traces-are-the-missing-layer-in-ai-assisted-engineering",
    title: "Execution traces are the missing layer in AI-assisted engineering",
    date: "2026-03-08",
    content: `Most AI coding tools try to earn trust with polished demos. A prompt goes in, a clean diff comes out, and the product feels magical for thirty seconds. That is enough to make someone curious, but it is not enough to make the tool dependable inside a real engineering workflow. Once a system is editing multiple files, running commands, and making structural decisions, the question stops being "can it do this?" and becomes "can I understand what it actually did?".

The missing layer is the execution trace. Engineers build confidence when they can inspect the plan, the commands that ran, the files that changed, and the moments where the system was uncertain. A trace turns opaque automation into something legible. It gives the human a way to calibrate trust instead of relying on vibes or isolated wins.

This matters because software work is not just code generation. It is a loop between intent, implementation, verification, and adjustment. If an assistant only surfaces the final answer, it hides the most important signals in that loop. If it exposes the path it took, the engineer can intervene earlier, correct bad assumptions, and reuse the good decisions.

The AI tooling that lasts will not feel magical for very long. It will feel inspectable. The winning products will be the ones that make judgment easier: show the plan, show the evidence, show the failures, and make it cheap to step in. That is what turns impressive output into dependable workflow.`,
  },
];

export function formatNoteDate(date: string) {
  return noteDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
