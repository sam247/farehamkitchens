/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";

const categories = ['All', 'Contemporary', 'Classic', 'Handleless', 'Shaker'];

const projects = [
  {
    id: 1,
    title: 'The Southsea Residence',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    description: 'A stunning open-plan kitchen with sleek handleless cabinetry and integrated appliances.',
  },
  {
    id: 2,
    title: 'Winchester Manor',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    description: 'Traditional craftsmanship meets modern functionality in this elegant country kitchen.',
  },
  {
    id: 3,
    title: 'The Hampshire Estate',
    category: 'Handleless',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
    description: 'Minimalist design with maximum impact, featuring custom bronze accents.',
  },
  {
    id: 4,
    title: 'Petersfield Farmhouse',
    category: 'Shaker',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    description: 'A warm and inviting shaker-style kitchen with natural oak finishes.',
  },
  {
    id: 5,
    title: 'The Chichester Project',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
    description: 'Bold colour choices and innovative storage solutions define this modern space.',
  },
  {
    id: 6,
    title: 'Lymington Coastal Home',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Coastal-inspired elegance with hand-painted cabinetry and marble worktops.',
  },
  {
    id: 7,
    title: 'The New Forest Retreat',
    category: 'Handleless',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop',
    description: 'Seamless integration with nature through floor-to-ceiling glazing and organic materials.',
  },
  {
    id: 8,
    title: 'Emsworth Victorian',
    category: 'Shaker',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop',
    description: 'Period charm preserved with modern conveniences in this Victorian renovation.',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Head>
        <title>Projects | Fareham Kitchens</title>
        <meta
          name="description"
          content="Explore bespoke kitchen projects crafted by Fareham Kitchens across contemporary, classic, handleless, and shaker styles."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Portfolio</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Our" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Projects" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Explore our collection of bespoke kitchens, each one a unique
                  testament to our commitment to exceptional design and craftsmanship.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`label-uppercase text-sm transition-all duration-300 pb-2 border-b-2 ${
                      activeCategory === category
                        ? 'text-primary border-primary'
                        : 'text-muted-foreground border-transparent hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  delay={0.1 * ((index % 4) + 1)}
                  className="group"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="block relative overflow-hidden"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-700 ease-out-expo ${
                          hoveredProject === project.id ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 bg-background/70 transition-opacity duration-500 ${
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
                        <p className="body-elegant text-foreground/80 mb-4 max-w-md">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-700 ease-out-expo ${
                        hoveredProject === project.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>

                  {/* Project Info */}
                  <div className="mt-6 flex items-start justify-between">
                    <div>
                      <span className="label-uppercase text-primary text-xs block mb-2">
                        {project.category}
                      </span>
                      <h3 className="heading-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className={`text-primary transition-all duration-300 ${
                        hoveredProject === project.id
                          ? 'translate-x-1 -translate-y-1'
                          : ''
                      }`}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Projects;
