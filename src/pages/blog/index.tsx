/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const posts = [
  {
    slug: "what-is-a-shaker-kitchen",
    title: "What Is a Shaker Kitchen?",
    excerpt: "History, materials, and how to personalise the timeless Shaker style for modern homes.",
    image: "/aok/blogimages/what_is_a_shaker_kitchen.webp",
    category: "Design Insight",
  },
  {
    slug: "best-kitchen-appliances-for-small-uk-homes",
    title: "Best Kitchen Appliances for Small UK Homes",
    excerpt: "Compact ovens, hobs, cooling, dishwashers, and smart tech to maximise small kitchens in the UK.",
    image: "/aok/blogimages/best-kitchen-appliances-for-small-uk-homes.jpg",
    category: "Appliance Guide",
  },
  {
    slug: "kitchen-prices-uk",
    title: "Average Kitchen Prices in the UK 2025",
    excerpt: "Breakdown of kitchen costs by size, budget, materials, appliances, and fitting across the UK.",
    image: "/aok/blogimages/window-prices-uk.jpg",
    category: "Budget & Planning",
  },
  {
    slug: "affordable-kitchen-worktops-materials",
    title: "Affordable Kitchen Worktop Materials",
    excerpt: "Budget-friendly worktops that balance durability, maintenance, and style without breaking the bank.",
    image: "/aok/blogimages/aaffordable-kitchen-worktops.jpg",
    category: "Materials Guide",
  },
];

const BlogIndex = () => {
  return (
    <>
      <Head>
        <title>Kitchen Design Blog | Fareham Kitchens</title>
        <meta
          name="description"
          content="Kitchen design insights, case studies, and guides from our Fareham kitchen showroom team."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <span className="label-uppercase text-primary mb-4 block">Insights</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-display text-foreground mb-6">
                Kitchen Knowledge,<br />
                <span className="text-primary">On Tap</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground max-w-3xl">
                Design guidance, materials know-how, and inspiration from the AOK team to help you plan your perfect kitchen.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={0.1 * (index + 1)}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full border border-border hover:border-primary transition-colors duration-500">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="label-uppercase text-primary text-xs">{post.category}</span>
                      <h2 className="heading-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="body-elegant text-muted-foreground">{post.excerpt}</p>
                      <span className="label-uppercase text-xs text-foreground/70 group-hover:text-primary transition-colors duration-300">
                        Read More
                      </span>
                    </div>
                  </Link>
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

export default BlogIndex;

