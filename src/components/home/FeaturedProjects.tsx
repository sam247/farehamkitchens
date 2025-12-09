import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const projects = [
  {
    id: 1,
    title: 'The Southsea Residence',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Winchester Manor',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Hampshire Estate',
    category: 'Handleless',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
  },
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <AnimatedSection>
              <span className="label-uppercase text-foreground/60 mb-6 block">Portfolio</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Featured<br />
                <span className="text-foreground/80">Projects</span>
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.2} className="mt-8 lg:mt-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 label-uppercase text-foreground group"
            >
              <span className="link-elegant">View All Projects</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.1 * (index + 1)}
              className="group"
            >
              <Link
                href={`/projects/${project.id}`}
                className="block relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out-expo ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-background/60 transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div
                    className={`transition-all duration-500 ease-out-expo ${
                      hoveredProject === project.id
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span className="label-uppercase text-foreground/60 text-xs mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="heading-medium text-foreground flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight size={24} className="text-foreground" />
                    </h3>
                  </div>
                </div>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-foreground transition-all duration-700 ease-out-expo ${
                    hoveredProject === project.id ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
