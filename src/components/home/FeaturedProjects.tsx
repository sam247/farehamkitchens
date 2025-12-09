/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const projects = [
  {
    id: 1,
    title: 'Handleless Blue Kitchen, Botley',
    category: 'Handleless',
    image: '/aok/project1/Cinney-Ray-4-scaled.jpg',
  },
  {
    id: 2,
    title: 'Contemporary Shaker, Southampton',
    category: 'Shaker',
    image: '/aok/project2/DSC_2513-scaled.jpg',
  },
  {
    id: 3,
    title: 'Taupe & Oak, Totton',
    category: 'Classic',
    image: '/aok/project3/image00024-scaled.jpeg',
  },
  {
    id: 4,
    title: 'Oak Shaker, West Wellow',
    category: 'Shaker',
    image: '/aok/project4/image00012-1-scaled-2.jpeg',
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
