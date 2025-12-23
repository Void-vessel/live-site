/**
 * Global Content Data
 * Source of truth for Services, Testimonials, and Projects.
 */

// 1. Services Data
// used for the overview grid and pinned sections
const services = [
    {
        slug: "ecommerce",
        title: "E-commerce Store Management",
        summary: "End-to-end Shopify/Etsy upkeep, tuned for velocity and margin.",
        description: "From launch to monthly iterations: product drops, promos, reporting, and CRO tweaks that keep the shop profitable.",
        accent: "#0bd3d3",
        bg: "/images/ecom_sticky.png",
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

// 2. Testimonials Data
// used for the mid-page social proof section
// services.js

const testimonials = [
    {
        // name: "Amira Patel",
        // role: "Founder, MadeNorth",
        // Using placeholder logos. Replace 'src' with your real file paths later.
        logo_light: "images/LOGOS/LIGHT MODE/afterlife_light.png",
        logo_dark: "images/LOGOS/DARK MODE/afterlife_dark.png",
        quote: "A fresh, playful identity that perfectly captures the tropical energy and fun spirit of our brand.",
        rating: 5
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/khidmat_light.png",
        logo_dark: "images/LOGOS/DARK MODE/khidmat_dark.png",
        quote: "The logo perfectly captures the essence of care and service that defines our mission.",
        rating: 5
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/electroconsult_light.png",
        logo_dark: "images/LOGOS/DARK MODE/electroconsult_dark.png",
        quote: "They completely transformed our guest experience; the cohesive branding across our amenities and suites screams modern luxury.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/posterwala_light.png",
        logo_dark: "images/LOGOS/DARK MODE/posterwala_dark.png",
        quote: "The branding captures the bold, unapologetic personality we wanted, giving Posterwala an identity that feels instantly iconic.",
        rating: 5
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/ananas_light.png",
        logo_dark: "images/LOGOS/DARK MODE/ananas_dark.png",
        quote: "We needed a logo that felt fresh and inviting, and this design delivers on every level.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/kagazpatar_light.png",
        logo_dark: "images/LOGOS/DARK MODE/kagazpatar_dark.png",
        quote: "Simple yet full of personality; this logo makes our brand feel approachable, artistic, and instantly memorable.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/germanstreetfood_light.png",
        logo_dark: "images/LOGOS/DARK MODE/germanstreetfood_dark.png",
        quote: "The playful, bold branding perfectly captures the energy of our fast-food chain and makes our menu instantly recognizable.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/hmu_light.png",
        logo_dark: "images/LOGOS/DARK MODE/hmu_dark.png",
        quote: "Super creative and memorable; the bubbly, 3D style is exactly what we needed to stand out to our subscribers.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/sendrbud_light.png",
        logo_dark: "images/LOGOS/DARK MODE/sendrbud_dark.png",
        quote: "A fresh, iconic identity that fits the energy of our new collection perfectly—clean, sharp, and memorable.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/factotum_light.png",
        logo_dark: "images/LOGOS/DARK MODE/factotum_dark.png",
        quote: "We wanted a modern identity, and [Your Name] delivered a sleek logo that gives our brantd a sophisticated edge.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/thepulse_light.png",
        logo_dark: "images/LOGOS/DARK MODE/thepulse_dark.png",
        quote: "The comprehensive branding and packaging design elevated our hotel's guest experience to a true 5-star level.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/akanlar_light.png",
        logo_dark: "images/LOGOS/DARK MODE/akanlar_dark.png",
        quote: "From listing SEO to shop aesthetics, their management completely revitalized our presence on Etsy.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/spect_light.png",
        logo_dark: "images/LOGOS/DARK MODE/spect_dark.png",
        quote: "They seamlessly blended English and Urdu typography into a modern identity that speaks directly to our diverse audience.",
        rating: 4
    },
    {
        logo_light: "images/LOGOS/LIGHT MODE/highdesert_light.png",
        logo_dark: "images/LOGOS/DARK MODE/highdesert_dark.png",
        quote: "They took our channel's branding to the next level with a design that looks just as professional as the top creators on the platform.",
        rating: 4
    }
];

// 3. Projects Data
// used for project snapshots
// const projects = [
//     {
//         title: "Etsy Thumbnail Refresh",
//         client: "HomeGoods Co.",
//         summary: "Thumbnail system + copy tweaks across 24 SKUs lifted CTR and reduced returns.",
//         metrics: ["CTR +32%", "Returns -12%", "24 SKUs"],
//         tags: ["Etsy", "Media", "CRO"]
//     },
//     {
//         title: "Shopify Launch Sprint",
//         client: "DTC Apparel",
//         summary: "Two-week launch kit: keywords, PDP copy, and hero creative for 8 products.",
//         metrics: ["8 PDPs", "2-week sprint", "SEO-ready"],
//         tags: ["Shopify", "Copy", "SEO"]
//     },
//     {
//         title: "Brand Voice + Templates",
//         client: "MadeNorth Studio",
//         summary: "Voice kit, email microcopy, and Canva templates to speed weekly drops.",
//         metrics: ["Voice kit", "Templates", "Lifecycle"],
//         tags: ["Brand", "Email", "Templates"]
//     }
// ];

// Expose to window for global access
if (typeof window !== 'undefined') {
    window.services = services;
    window.testimonials = testimonials;
    window.projects = projects;
}

// Optional: Export for module environments
// export { services, testimonials, projects };