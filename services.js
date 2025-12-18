// Centralized service data used for both the overview grid and the pinned sections
const services = [
    {
        slug: "ecommerce",
        title: "E-commerce Store Management",
        summary: "End-to-end Shopify/Etsy upkeep, tuned for velocity and margin.",
        description: "From launch to monthly iterations: product drops, promos, reporting, and CRO tweaks that keep the shop profitable.",
        accent: "#0bd3d3",
        bg : "/images/ecom_sticky.png",
        // badges: ["Shopify", "Etsy", "CRO"],
        items: [
            {
                label: "Ops runway",
                body: "Calendar-driven launches, inventory sanity checks, and promo sequencing that prevent last-minute scrambles.",
                tag: "Playbook"
            },
            {
                label: "Always-on CRO",
                body: "Iterate copy, offers, and media weekly with lightweight A/Bs for steady lift.",
                tag: "Conversion"
            },
            {
                label: "Store hygiene",
                body: "Speed fixes, alt text, and structured data updates to stay algorithm-friendly.",
                tag: "Quality"
            },
            {
                label: "Reporting",
                body: "Simple dashboards on traffic, cart health, and attachment rates to guide next moves.",
                tag: "Insights"
            }
        ]
    },
    {
        slug: "listing",
        title: "Product Listing Systems",
        summary: "SEO-forward listing builds that surface faster and convert better.",
        description: "Keyword research meets sharp copy, clean media, and variant clarity so every SKU is easy to buy.",
        accent: "#7c3aed",
        // badges: ["SEO", "Conversion", "Research"],
        items: [
            {
                label: "Keyword canvas",
                body: "Primary/secondary keyword maps with intent notes so every listing slots into search cleanly.",
                tag: "SEO"
            },
            {
                label: "Listing anatomy",
                body: "Bullets, FAQs, and objection handling laid out for fast skimming and confident buying.",
                tag: "Copy"
            },
            {
                label: "Media pairing",
                body: "Thumbnail systems, angle guidance, and aspect ratios tailored to each marketplace.",
                tag: "Media"
            },
            {
                label: "QA + publish",
                body: "Checks for metadata, tags, and accessibility before pushing live.",
                tag: "Delivery"
            }
        ]
    },
    {
        slug: "media",
        title: "Media Generation",
        summary: "Graphics and thumbnails that stay on-brand and thumb-stopping.",
        description: "Design sprints with style guides, reusable templates, and export packs for every platform.",
        accent: "#0ea5e9",
        // badges: ["Design", "Templates", "Thumbnails"],
        items: [
            {
                label: "Style DNA",
                body: "Palette, typography, and motion preferences distilled into a lightweight guide.",
                tag: "System"
            },
            {
                label: "Template kit",
                body: "Canva/figma-ready frameworks for promos, drops, and seasonal updates.",
                tag: "Reusable"
            },
            {
                label: "Thumbnail lab",
                body: "Variant testing for CTR lift across Etsy, YouTube, and ads.",
                tag: "Testing"
            },
            {
                label: "Export hygiene",
                body: "Optimized file sizes, naming, and accessibility text baked in.",
                tag: "Delivery"
            }
        ]
    },
    {
        slug: "copy",
        title: "Conversion Copywriting",
        summary: "Voice-consistent copy that sells without feeling pushy.",
        description: "Messaging frameworks, landing flows, and microcopy that keep customers moving forward.",
        accent: "#f97316",
        // badges: ["Voice", "Landing", "Email"],
        items: [
            {
                label: "Voice kit",
                body: "Tone, lexicon, and competitive edges defined to stay consistent everywhere.",
                tag: "Brand"
            },
            {
                label: "Page flows",
                body: "Headline ladders, proof stacking, and CTA placement tested for clarity and momentum.",
                tag: "Flow"
            },
            {
                label: "Lifecycle touchpoints",
                body: "Emails and in-product nudges that reduce drop-off and raise repeat buys.",
                tag: "Retention"
            },
            {
                label: "Offer clarity",
                body: "Pricing, bundles, and guarantees framed to remove friction.",
                tag: "Offers"
            }
        ]
    }
];

// Testimonials used for the mid-page social proof section
const testimonials = [
    {
        name: "Amira Patel",
        role: "Founder, MadeNorth Studio",
        quote: "Tinopia rebuilt our listings and thumbnails; CTR lifted 32% and returns dropped. Smooth weekly cadence.",
        highlight: "CTR up 32%"
    },
    {
        name: "Jules Avery",
        role: "Marketplace Ops, Home Decor",
        quote: "Listings went from generic to clear and skimmable. Support tickets dropped after the rewrite.",
        highlight: "Support -18%"
    },
    {
        name: "Priya Desai",
        role: "Founder, Beauty DTC",
        quote: "Launch sprint was painless—copy, FAQs, and image order dialed in within 10 days.",
        highlight: "10-day launch"
    },
    {
        name: "Marcus Lee",
        role: "YouTube Creator",
        quote: "Thumbnail lab variants boosted CTR on two channels without sacrificing brand consistency.",
        highlight: "CTR lift"
    }
];

// Light-weight project snapshots to keep the page fast
const projects = [
    {
        title: "Etsy Thumbnail Refresh",
        client: "HomeGoods Co.",
        summary: "Thumbnail system + copy tweaks across 24 SKUs lifted CTR and reduced returns.",
        metrics: ["CTR +32%", "Returns -12%", "24 SKUs"],
        tags: ["Etsy", "Media", "CRO"]
    },
    {
        title: "Shopify Launch Sprint",
        client: "DTC Apparel",
        summary: "Two-week launch kit: keywords, PDP copy, and hero creative for 8 products.",
        metrics: ["8 PDPs", "2-week sprint", "SEO-ready"],
        tags: ["Shopify", "Copy", "SEO"]
    },
    {
        title: "Brand Voice + Templates",
        client: "MadeNorth Studio",
        summary: "Voice kit, email microcopy, and Canva templates to speed weekly drops.",
        metrics: ["Voice kit", "Templates", "Lifecycle"],
        tags: ["Brand", "Email", "Templates"]
    }
];

// expose for inline scripts
window.services = services;
window.testimonials = testimonials;
window.projects = projects;
