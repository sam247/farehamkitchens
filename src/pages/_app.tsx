import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17794452347"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17794452347');
            `,
          }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="hXXV1F6z10G66uO1p3UrmA"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fareham Kitchens by AOK",
              image: "https://www.farehamkitchens.co.uk/logo.webp",
              url: "https://www.farehamkitchens.co.uk",
              telephone: "+441489788617",
              email: "info@aokitchens.co.uk",
              priceRange: "£££",
              address: {
                "@type": "PostalAddress",
                streetAddress: "491-493 Bitterne Road East",
                addressLocality: "Southampton",
                postalCode: "SO18 5EQ",
                addressCountry: "UK",
              },
              sameAs: [
                "https://uk.trustpilot.com/review/aokitchens.co.uk",
                "https://www.google.com/search?q=Andrew+Osborne+Kitchens+reviews",
              ],
            }),
          }}
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Component {...pageProps} />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

