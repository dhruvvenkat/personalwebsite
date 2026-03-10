import { AboutSection } from "@/components/about-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SystemsLabSection } from "@/components/systems-lab-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TopNav } from "@/components/top-nav";
import { WritingSection } from "@/components/writing-section";
import { siteData } from "@/lib/site-data";

export default function Home() {
    return (
        <>
            <TopNav
                brandName={siteData.brand.name}
                descriptor={siteData.brand.descriptor}
                items={siteData.navItems}
            />
            <main id="content" className="page-shell">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-transparent" />
                <HeroSection hero={siteData.hero} />
                <ProjectsSection work={siteData.work} />
                <SystemsLabSection lab={siteData.lab} />
                <AboutSection about={siteData.about} />
                <ExperienceSection experience={siteData.experience} />
                <CapabilitiesSection capabilities={siteData.capabilities} />
                <WritingSection writing={siteData.writing} />
                <TestimonialsSection testimonials={siteData.testimonials} />
                <ContactSection contact={siteData.contact} />
            </main>
        </>
    );
}
