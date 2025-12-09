/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent',
      description: 'Thank you for your enquiry. We\'ll be in touch within 24 hours.',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['123 High Street', 'Fareham, Hampshire', 'PO16 7AZ'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 (0) 1329 123 456'],
      link: 'tel:+441329123456',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@farehamkitchens.co.uk'],
      link: 'mailto:hello@farehamkitchens.co.uk',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon – Sat: 9am – 6pm', 'Sunday: By Appointment'],
    },
  ];

  return (
    <>
      <Head>
        <title>Contact | Fareham Kitchens</title>
        <meta
          name="description"
          content="Contact Fareham Kitchens to book a complimentary design consultation or enquire about bespoke luxury kitchens in Hampshire."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Get in Touch</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Let's Create" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Something Beautiful" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Ready to begin your kitchen journey? Contact us to arrange a
                  complimentary design consultation at our Fareham showroom or
                  in your home.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-secondary p-8 lg:p-12 border border-border">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={64} className="text-primary mx-auto mb-6" />
                      <h3 className="heading-medium text-foreground mb-4">Thank You</h3>
                      <p className="body-elegant text-muted-foreground">
                        Your message has been received. One of our design consultants
                        will be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label htmlFor="name" className="label-uppercase text-foreground text-xs block mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="email" className="label-uppercase text-foreground text-xs block mb-3">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="label-uppercase text-foreground text-xs block mb-3">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                            placeholder="+44 1234 567890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="label-uppercase text-foreground text-xs block mb-3">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant cursor-pointer"
                        >
                          <option value="" className="bg-background">Select project type</option>
                          <option value="new-kitchen" className="bg-background">New Kitchen</option>
                          <option value="renovation" className="bg-background">Kitchen Renovation</option>
                          <option value="extension" className="bg-background">Extension Project</option>
                          <option value="other" className="bg-background">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="label-uppercase text-foreground text-xs block mb-3">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 label-uppercase py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">◐</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection
                      key={info.title}
                      delay={0.1 * (index + 1)}
                      className="group"
                    >
                      <info.icon
                        size={32}
                        className="text-primary mb-4"
                        strokeWidth={1}
                      />
                      <h3 className="heading-medium text-foreground mb-3 text-lg">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="body-elegant text-muted-foreground">
                          {info.link && detailIndex === 0 ? (
                            <a
                              href={info.link}
                              className="hover:text-primary transition-colors duration-300"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </AnimatedSection>
                  ))}
                </div>

                {/* Map Placeholder */}
                <AnimatedSection delay={0.5}>
                  <div className="aspect-[4/3] bg-secondary border border-border relative overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                      alt="Map location"
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin size={48} className="text-primary mx-auto mb-4" />
                        <p className="label-uppercase text-foreground">Fareham, Hampshire</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Have Questions?</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="heading-large text-foreground mb-8">
                  Frequently Asked<br />
                  <span className="text-primary">Questions</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-8 text-left mt-12">
                {[
                  {
                    q: 'How long does the design process take?',
                    a: 'Our design process typically takes 2-4 weeks, depending on complexity. We ensure every detail is perfect before proceeding to manufacturing.',
                  },
                  {
                    q: 'Do you offer installation services?',
                    a: 'Yes, we provide a complete end-to-end service including professional installation by our expert team.',
                  },
                  {
                    q: 'What areas do you cover?',
                    a: 'We primarily serve Hampshire and the surrounding counties, including Surrey, West Sussex, and Dorset.',
                  },
                ].map((faq, index) => (
                  <AnimatedSection
                    key={index}
                    delay={0.1 * (index + 1)}
                    className="border-b border-border pb-8"
                  >
                    <h3 className="heading-medium text-foreground text-lg mb-3">{faq.q}</h3>
                    <p className="body-elegant text-muted-foreground">{faq.a}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
