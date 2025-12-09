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
    slug: 'botley-kitchen-project',
    title: 'Handleless Blue Kitchen, Botley',
    category: 'Handleless',
    image: '/aok/project1/Cinney-Ray-4-scaled.jpg',
    description:
      'Systemat AV6000 true handleless in a bespoke blue, bronze mirror splashback, Dekton island, AEG + Bora appliances, Quooker boiling tap, and tall cabinetry for concealed storage.',
  },
  {
    id: 2,
    slug: 'southampton-kitchen-project',
    title: 'Contemporary Shaker Kitchen, Southampton',
    category: 'Shaker',
    image: '/aok/project2/DSC_2513-scaled.jpg',
    description:
      'Full kitchen remodel with building works and reconfiguration. Contemporary shaker cabinetry, peninsula seating, oak shelves with integrated lighting, full-height storage, and solid timber doors for lasting durability.',
  },
  {
    id: 3,
    slug: 'totton-kitchen-project',
    title: 'Taupe & Oak Kitchen, Totton',
    category: 'Classic',
    image: '/aok/project3/image00024-scaled.jpeg',
    description:
      'Supply of bespoke kitchen furniture, quartz worktops, accessories, and appliances. Top Soft taupe with Toronto natural vintage oak fascias and worktops, breakfast bar with wine chiller, bespoke larder and appliance housing for organized, clutter-free living.',
  },
  {
    id: 4,
    slug: 'west-wellow-kitchen-project',
    title: 'Oak Shaker Kitchen, West Wellow',
    category: 'Shaker',
    image: '/aok/project4/image00012-1-scaled-2.jpeg',
    description:
      "Milford shaker in natural oak stained with Osmo Raw, large larder storage with internal drawers, statement Smeg range under a custom mantle, and a re-used oak beam to preserve character.",
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
        <title>Kitchen Projects in Hampshire | Fareham Kitchens</title>
        <meta
          name="description"
          content="Recent kitchens in Fareham, Southampton, and Hampshire: handleless kitchens, Shaker kitchens, granite worktops, and bespoke installations."
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
                    href={`/projects/${project.slug}`}
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
