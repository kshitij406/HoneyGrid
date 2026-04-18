import type { Locale } from "@/lib/i18n";

export const company = {
  name: "HoneyGrid",
  initials: "HG",
  domain: "https://honeygrid.mu",
  whatsappNumber: "23058503719",
  email: "kshitij.j615@gmail.com",
  location: "Remote",
};

export type NavLink = {
  href: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  accent: string;
  url?: string;
};

type PricingPlan = {
  name: string;
  bestFor: string;
  features: string[];
  priceMur: number;
};

type Faq = {
  question: string;
  answer: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

type HomeText = {
  badge: string;
  headline: string;
  subheadline: string;
  quoteCta: string;
  portfolioCta: string;
  trustTitle: string;
  trustHeadline: string;
  trustBullets: string[];
  processTitle: string;
  featuredTitle: string;
  featuredCta: string;
  testimonialsTitle: string;
  faqTitle: string;
  finalTitle: string;
  finalText: string;
  finalCta: string;
  caseStudyCta: string;
  stepLabel: string;
};

type ServicesPageText = {
  label: string;
  title: string;
  subtitle: string;
  processTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  stepLabel: string;
};

type PricingPageText = {
  label: string;
  title: string;
  subtitle: string;
  popularBadge: string;
  bestForLabel: string;
  fromLabel: string;
  footnote: string;
  customTitle: string;
  customText: string;
  customButton: string;
};

type AboutPageText = {
  label: string;
  title: string;
  intro: string;
  approachTitle: string;
  approachP1: string;
  approachP2: string;
  valuesTitle: string;
  values: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

type ContactPageText = {
  label: string;
  title: string;
  subtitle: string;
  instantTitle: string;
  instantText: string;
  whatsappCta: string;
  emailLabel: string;
  locationLabel: string;
  whatsappMessage: string;
};

type PortfolioPageText = {
  label: string;
  title: string;
  subtitle: string;
  industryLabel: string;
  caseStudyCta: string;
};

type CasePageText = {
  projectSuffix: string;
  challengeTitle: string;
  solutionTitle: string;
  outcomeTitle: string;
  stackTitle: string;
  cta: string;
  liveCta: string;
  notFoundTitle: string;
};

type FooterText = {
  tagline: string;
  navTitle: string;
  contactTitle: string;
  rights: string;
};

type ThankYouText = {
  label: string;
  title: string;
  body: string;
  homeCta: string;
  contactCta: string;
};

type LegalText = {
  privacyDescription: string;
  termsDescription: string;
  privacyTitle: string;
  privacyBody: string;
  termsTitle: string;
  termsBody: string;
};

type ContactFormText = {
  fullName: string;
  businessName: string;
  emailAddress: string;
  phone: string;
  needs: string;
  budget: string;
  details: string;
  sending: string;
  submit: string;
  error: string;
  options: {
    business: string;
    ecommerce: string;
    redesign: string;
    maintenance: string;
  };
  budgets: {
    low: string;
    mid: string;
    high: string;
    enterprise: string;
  };
};

type SeoText = {
  rootTitle: string;
  rootDescription: string;
  twitterDescription: string;
  siteTitleTemplate: string;
  homeTitle: string;
  homeDescription: string;
  servicesTitle: string;
  servicesDescription: string;
  pricingTitle: string;
  pricingDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  contactTitle: string;
  contactDescription: string;
  portfolioTitle: string;
  portfolioDescription: string;
  thankYouTitle: string;
  thankYouDescription: string;
  privacyTitle: string;
  privacyDescription: string;
  termsTitle: string;
  termsDescription: string;
};

type SharedText = {
  getQuote: string;
  whatsappCta: string;
};

const navLinksByLocale: Record<Locale, NavLink[]> = {
  en: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/about", label: "A propos" },
    { href: "/contact", label: "Contact" },
  ],
};

const servicesByLocale: Record<Locale, Service[]> = {
  en: [
    {
      title: "Business Website",
      description:
        "A polished multi-page website to present your business, services, and credibility.",
      deliverables: [
        "5-8 pages",
        "Mobile-first responsive layout",
        "SEO-friendly page structure",
        "Contact + WhatsApp integration",
      ],
    },
    {
      title: "Ecommerce Store",
      description:
        "A conversion-focused online store with intuitive checkout and product management.",
      deliverables: [
        "Product catalog and categories",
        "Cart and checkout experience",
        "Payment gateway setup",
        "Order notification flow",
      ],
    },
    {
      title: "Website Redesign",
      description:
        "Refresh outdated websites with stronger branding, speed improvements, and cleaner UX.",
      deliverables: [
        "Modernized visual identity",
        "Copy and section restructuring",
        "Performance tuning",
        "On-page SEO improvements",
      ],
    },
    {
      title: "Maintenance & Growth",
      description:
        "Ongoing updates, backups, and support so your website stays reliable and current.",
      deliverables: [
        "Security and plugin updates",
        "Monthly health checks",
        "Content updates",
        "Priority support window",
      ],
    },
  ],
  fr: [
    {
      title: "Site Vitrine",
      description:
        "Un site multi-pages professionnel pour presenter votre entreprise, vos services et votre credibilite.",
      deliverables: [
        "5-8 pages",
        "Design responsive mobile-first",
        "Structure optimisee pour le SEO",
        "Formulaire + integration WhatsApp",
      ],
    },
    {
      title: "Boutique Ecommerce",
      description:
        "Une boutique en ligne orientee conversion avec un parcours d'achat clair et efficace.",
      deliverables: [
        "Catalogue produits et categories",
        "Panier et checkout",
        "Configuration du paiement",
        "Notifications de commande",
      ],
    },
    {
      title: "Refonte de Site",
      description:
        "Modernisez un site existant avec une meilleure image, de meilleures performances et une UX plus claire.",
      deliverables: [
        "Nouvelle direction visuelle",
        "Restructuration du contenu",
        "Optimisation des performances",
        "Amelioration SEO on-page",
      ],
    },
    {
      title: "Maintenance & Evolution",
      description:
        "Un suivi continu pour garder votre site rapide, securise et toujours a jour.",
      deliverables: [
        "Mises a jour de securite",
        "Controle mensuel de sante",
        "Mises a jour de contenu",
        "Support prioritaire",
      ],
    },
  ],
};

const projectsByLocale: Record<Locale, Project[]> = {
  en: [
    {
      slug: "seraphim-records",
      title: "Seraphim Records",
      industry: "Music / Retail",
      summary:
        "A curated vinyl record storefront with genre browsing, real album data, and a timeless brand aesthetic.",
      challenge:
        "Build a live e-commerce experience for a record store complete with a real music catalog — without manually entering every product.",
      solution:
        "Wrote Python scrapers and hit music APIs to pull album data, piped it through XML/XSLT for structure, and wrapped it in a clean responsive frontend. Design-wise, everything was built to feel like flipping through crates — warm, tactile, unhurried.",
      result:
        "A live deployed storefront that merges data engineering with front-end craft. Proof that backend pipelines and good design aren't mutually exclusive.",
      stack: ["HTML", "CSS", "JavaScript", "Python", "XML / XSLT", "Vercel"],
      accent: "from-[#4c1d95] to-[#6d28d9]",
      url: "https://recordstore-nine.vercel.app",
    },
    {
      slug: "cafe-555",
      title: "Cafe 555",
      industry: "Food & Beverage",
      summary:
        "A clean, fast web presence for a modern cafe — built to feel as good as the coffee tastes.",
      challenge:
        "The cafe needed somewhere to send customers online that wasn't just an Instagram page — somewhere with actual information, personality, and a reason to visit.",
      solution:
        "Kept it lean and deliberate: fast load, clear layout, strong visual identity. No clutter, no bloat — just the essentials presented well.",
      result:
        "A live site that gives the cafe a professional presence without getting in its own way.",
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      accent: "from-[#78350f] to-[#c2410c]",
      url: "https://cafe555.vercel.app",
    },
  ],
  fr: [
    {
      slug: "seraphim-records",
      title: "Seraphim Records",
      industry: "Musique / Commerce",
      summary:
        "Une boutique de vinyles avec navigation par genre, vraies donnees musicales et une esthetique de marque intemporelle.",
      challenge:
        "Creer une boutique en ligne pour un disquaire avec un vrai catalogue musical, sans saisie manuelle de chaque produit.",
      solution:
        "Scripts Python + APIs musicales pour extraire les donnees albums, structures via XML/XSLT, et habilles d'un frontend responsive soigne. Le design evoque le plaisir de fouiller dans les bacs.",
      result:
        "Une boutique en ligne deployee qui marie ingenierie de donnees et design front-end de qualite.",
      stack: ["HTML", "CSS", "JavaScript", "Python", "XML / XSLT", "Vercel"],
      accent: "from-[#4c1d95] to-[#6d28d9]",
      url: "https://recordstore-nine.vercel.app",
    },
    {
      slug: "cafe-555",
      title: "Cafe 555",
      industry: "Restauration",
      summary:
        "Une presence web epuree et rapide pour un cafe moderne — aussi agreable que son café.",
      challenge:
        "Le cafe avait besoin d'autre chose qu'une page Instagram — un endroit avec des vraies infos, de la personnalite, et une raison de venir.",
      solution:
        "Approche minimaliste et deliberee: chargement rapide, mise en page claire, identite visuelle forte. Rien de superflu.",
      result:
        "Un site en ligne qui donne au cafe une presence professionnelle sans surcharger l'experience.",
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      accent: "from-[#78350f] to-[#c2410c]",
      url: "https://cafe555.vercel.app",
    },
  ],
};

const pricingByLocale: Record<Locale, PricingPlan[]> = {
  en: [
    {
      name: "Starter",
      bestFor: "New businesses",
      priceMur: 5000,
      features: [
        "Up to 5 pages",
        "Professional design",
        "Mobile optimization",
        "Contact form setup",
        "Basic SEO setup",
      ],
    },
    {
      name: "Business",
      bestFor: "Growing companies",
      priceMur: 15000,
      features: [
        "Up to 10 pages",
        "Custom visual direction",
        "Speed optimization",
        "Lead-focused sections",
        "WhatsApp integration",
      ],
    },
    {
      name: "Ecommerce",
      bestFor: "Online selling",
      priceMur: 25000,
      features: [
        "Storefront and products",
        "Cart and checkout",
        "Payment setup",
        "Order email notifications",
        "Product management handover",
      ],
    },
  ],
  fr: [
    {
      name: "Starter",
      bestFor: "Nouvelles entreprises",
      priceMur: 5000,
      features: [
        "Jusqu'a 5 pages",
        "Design professionnel",
        "Optimisation mobile",
        "Formulaire de contact",
        "Configuration SEO de base",
      ],
    },
    {
      name: "Business",
      bestFor: "Entreprises en croissance",
      priceMur: 15000,
      features: [
        "Jusqu'a 10 pages",
        "Direction visuelle sur mesure",
        "Optimisation des performances",
        "Sections orientees conversion",
        "Integration WhatsApp",
      ],
    },
    {
      name: "Ecommerce",
      bestFor: "Vente en ligne",
      priceMur: 25000,
      features: [
        "Boutique et fiches produits",
        "Panier et paiement",
        "Configuration passerelle paiement",
        "Emails de commande",
        "Formation gestion produits",
      ],
    },
  ],
};

const faqsByLocale: Record<Locale, Faq[]> = {
  en: [
    {
      question: "How long does a website project take?",
      answer:
        "Most business websites are delivered in 1 to 3 weeks depending on content readiness and scope.",
    },
    {
      question: "Do you work with clients outside your country?",
      answer:
        "Absolutely. Geography is not a barrier — we work with clients remotely from anywhere in the world. All it takes is a clear brief and good communication.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We can redesign your current site for stronger performance, usability, and visual appeal.",
    },
    {
      question: "Do you provide hosting and domain support?",
      answer:
        "Yes. We can guide setup or fully handle domain and hosting configuration.",
    },
  ],
  fr: [
    {
      question: "Combien de temps prend un projet web?",
      answer:
        "La plupart des sites vitrines sont livres en 1 a 3 semaines selon le contenu et la complexite.",
    },
    {
      question: "Travaillez-vous avec des clients a l'etranger?",
      answer:
        "Absolument. La geographie n'est pas un obstacle — nous travaillons a distance avec des clients partout dans le monde. Il suffit d'un brief clair et d'une bonne communication.",
    },
    {
      question: "Pouvez-vous refaire mon site existant?",
      answer:
        "Oui. Nous pouvons refondre votre site pour ameliorer l'image, la vitesse et l'experience utilisateur.",
    },
    {
      question: "Aidez-vous pour l'hebergement et le domaine?",
      answer:
        "Oui. Nous pouvons vous guider ou gerer completement la configuration.",
    },
  ],
};

const processStepsByLocale: Record<Locale, ProcessStep[]> = {
  en: [
    {
      title: "Discovery",
      description:
        "We ask the right questions — about your offer, your audience, and what success actually looks like for you — before touching a single design element.",
    },
    {
      title: "Design",
      description:
        "We build a visual direction with clear hierarchy, purposeful copy layout, and a personality that actually matches your brand.",
    },
    {
      title: "Build",
      description:
        "Clean code, fast load times, mobile-first. Every section is built with purpose — not just to look good, but to move people toward action.",
    },
    {
      title: "Launch",
      description:
        "QA, final checks, go live. And we don't disappear after launch — we're around for the first growth cycle.",
    },
  ],
  fr: [
    {
      title: "Decouverte",
      description:
        "Nous posons les bonnes questions — sur votre offre, votre audience et ce que le succes signifie vraiment pour vous — avant toute decision de design.",
    },
    {
      title: "Design",
      description:
        "Nous construisons une direction visuelle claire avec une hierarchie efficace et une personnalite qui correspond vraiment a votre marque.",
    },
    {
      title: "Developpement",
      description:
        "Code propre, chargement rapide, mobile-first. Chaque section est construite avec intention — pas juste pour etre jolie, mais pour pousser a l'action.",
    },
    {
      title: "Lancement",
      description:
        "QA, verifications finales, mise en ligne. Et nous ne disparaissons pas apres le lancement — nous sommes la pour le premier cycle de croissance.",
    },
  ],
};

const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  en: [
    {
      quote:
        "The website finally reflects our brand quality. Clients now trust us before the first call.",
      author: "Interior Studio Owner",
    },
    {
      quote:
        "Fast delivery, clear communication, and a design that actually converts.",
      author: "Local Gym Founder",
    },
    {
      quote: "We started receiving better inquiries right after launch.",
      author: "Restaurant Manager",
    },
  ],
  fr: [
    {
      quote:
        "Le site reflète enfin la qualite de notre marque. Les clients nous font confiance des le premier contact.",
      author: "Proprietaire de studio",
    },
    {
      quote:
        "Livraison rapide, communication claire et un design qui convertit reellement.",
      author: "Fondateur de salle de sport",
    },
    {
      quote:
        "Nous avons vu de meilleures demandes clients juste apres la mise en ligne.",
      author: "Manager de restaurant",
    },
  ],
};

const homeTextByLocale: Record<Locale, HomeText> = {
  en: {
    badge: "Web studio that ships",
    headline:
      "Professional websites for businesses that want real growth.",
    subheadline:
      "We design and build websites that look premium, load fast, and turn visitors into actual leads.",
    quoteCta: "Get a Free Quote",
    portfolioCta: "View Portfolio",
    trustTitle: "Built for results",
    trustHeadline: "From brief to live in 1-3 weeks.",
    trustBullets: [
      "Mobile-first layouts for modern customers",
      "SEO-ready structure from day one",
      "Clean code that loads fast everywhere",
    ],
    processTitle: "How the process works",
    featuredTitle: "Featured projects",
    featuredCta: "See all projects",
    testimonialsTitle: "What clients say",
    faqTitle: "FAQ",
    finalTitle: "Let's build something real.",
    finalText: "Share what you're working on. We'll take it from there.",
    finalCta: "Start Your Project",
    caseStudyCta: "View case study",
    stepLabel: "Step",
  },
  fr: {
    badge: "Studio web qui livre",
    headline:
      "Des sites professionnels pour les entreprises qui veulent une vraie croissance.",
    subheadline:
      "Nous concevons des sites premium, rapides et penses pour convertir les visiteurs en leads reels.",
    quoteCta: "Obtenir un devis gratuit",
    portfolioCta: "Voir le portfolio",
    trustTitle: "Construit pour les resultats",
    trustHeadline: "Du brief au lancement en 1 a 3 semaines.",
    trustBullets: [
      "Design mobile-first pour les clients d'aujourd'hui",
      "Structure SEO des le depart",
      "Code propre qui charge vite partout",
    ],
    processTitle: "Comment se deroule le projet",
    featuredTitle: "Projets a la une",
    featuredCta: "Voir tous les projets",
    testimonialsTitle: "Ce que disent les clients",
    faqTitle: "FAQ",
    finalTitle: "Construisons quelque chose de reel.",
    finalText:
      "Parlez-nous de ce sur quoi vous travaillez. Nous nous occupons du reste.",
    finalCta: "Demarrer votre projet",
    caseStudyCta: "Voir l'etude de cas",
    stepLabel: "Etape",
  },
};

const servicesPageTextByLocale: Record<Locale, ServicesPageText> = {
  en: {
    label: "Services",
    title: "Website services designed for real growth.",
    subtitle:
      "From startups to established brands — flexible website solutions for businesses that want a stronger online presence, wherever they are.",
    processTitle: "Our working process",
    ctaTitle: "Not sure which service fits you?",
    ctaText: "Share your goals and we will recommend the right approach.",
    ctaButton: "Get Recommendations",
    stepLabel: "Step",
  },
  fr: {
    label: "Services",
    title: "Des services web concus pour une vraie croissance.",
    subtitle:
      "Des solutions flexibles pour startups et marques etablies qui veulent une presence digitale plus forte, ou qu'elles soient.",
    processTitle: "Notre methode de travail",
    ctaTitle: "Vous ne savez pas quelle offre choisir?",
    ctaText: "Partagez vos objectifs et nous vous orienterons vers la meilleure option.",
    ctaButton: "Recevoir une recommandation",
    stepLabel: "Etape",
  },
};

const pricingPageTextByLocale: Record<Locale, PricingPageText> = {
  en: {
    label: "Pricing",
    title: "Website packages built for different business stages.",
    subtitle: "Starting prices below. Every project is scoped individually — get in touch and we'll figure out the right fit.",
    popularBadge: "Most Popular",
    bestForLabel: "Best for",
    fromLabel: "from",
    footnote: "* Prices are starting points. Add-ons, custom integrations, or extra pages may increase the final quote. USD shown is approximate based on live exchange rates, rounded up.",
    customTitle: "Need something custom?",
    customText: "We can tailor scope, integrations, and timeline to exactly what you need.",
    customButton: "Request a Quote",
  },
  fr: {
    label: "Tarifs",
    title: "Des packs web adaptes a chaque etape de votre business.",
    subtitle: "Prix de depart ci-dessous. Chaque projet est evalue individuellement — contactez-nous pour trouver la bonne formule.",
    popularBadge: "Le plus choisi",
    bestForLabel: "Ideal pour",
    fromLabel: "a partir de",
    footnote: "* Les prix sont des points de depart. Des options supplementaires, integrations ou pages additionnelles peuvent augmenter le devis final. Le montant en USD est approximatif, base sur les taux en temps reel, arrondi au superieur.",
    customTitle: "Besoin d'une solution sur mesure?",
    customText: "Nous adaptons le scope, les integrations et le calendrier exactement a vos besoins.",
    customButton: "Demander un devis",
  },
};

const aboutPageTextByLocale: Record<Locale, AboutPageText> = {
  en: {
    label: "About",
    title: "We build websites that help businesses stand out.",
    intro:
      "HoneyGrid is run by Kshitij — a full-stack developer and designer who got tired of seeing businesses settle for generic, slow, forgettable websites. The mission is straightforward: build things that actually work, look the part, and give clients something to be proud of.",
    approachTitle: "Our approach",
    approachP1:
      "Clean design. Practical messaging. Fast execution. The result is a website that makes your business easier to trust and easier to contact — whether a visitor is on the other side of the street or the other side of the world.",
    approachP2:
      "We skip the generic templates. Every project gets a custom structure and a visual personality built around your industry, your audience, and what you're actually trying to achieve.",
    valuesTitle: "What we value",
    values: [
      "Honest, direct communication",
      "Reliable delivery with clear milestones",
      "Design decisions driven by business goals",
      "Support that doesn't stop at launch",
    ],
    ctaTitle: "Ready to work together?",
    ctaText: "Tell us what you're building and we'll figure out the rest.",
    ctaButton: "Start a Conversation",
  },
  fr: {
    label: "A propos",
    title:
      "Nous creons des sites qui aident les entreprises a se demarquer.",
    intro:
      "HoneyGrid est dirige par Kshitij — un developpeur et designer full-stack qui en avait assez de voir des entreprises se contenter de sites generiques, lents et oubliables. La mission est simple: construire des choses qui fonctionnent vraiment, qui ont de la gueule, et dont les clients sont fiers.",
    approachTitle: "Notre approche",
    approachP1:
      "Design propre. Message clair. Execution rapide. Le resultat: un site qui inspire confiance et genere plus de prises de contact — que le visiteur soit a deux rues ou a l'autre bout du monde.",
    approachP2:
      "Pas de templates generiques. Chaque projet recoit une structure et une identite visuelle sur mesure, pensees pour votre secteur, votre audience et vos vrais objectifs.",
    valuesTitle: "Nos valeurs",
    values: [
      "Communication honnete et directe",
      "Livraison fiable avec etapes definies",
      "Decisions design basees sur les objectifs business",
      "Support qui ne s'arrete pas au lancement",
    ],
    ctaTitle: "Pret a collaborer?",
    ctaText: "Dites-nous ce que vous construisez et on s'occupe du reste.",
    ctaButton: "Demarrer la discussion",
  },
};

const contactPageTextByLocale: Record<Locale, ContactPageText> = {
  en: {
    label: "Contact",
    title: "Let's talk about your project.",
    subtitle: "Tell us what you're working on and we will get back to you within 24 hours.",
    instantTitle: "Prefer instant chat?",
    instantText: "Message us directly on WhatsApp for a quick first discussion.",
    whatsappCta: "Chat on WhatsApp",
    emailLabel: "Email",
    locationLabel: "Based",
    whatsappMessage:
      "Hi, I'm interested in building a website for my business. Can I get a quote?",
  },
  fr: {
    label: "Contact",
    title: "Parlons de votre projet.",
    subtitle:
      "Parlez-nous de ce sur quoi vous travaillez et nous revenons vers vous sous 24 heures.",
    instantTitle: "Besoin d'une reponse rapide?",
    instantText: "Ecrivez-nous directement sur WhatsApp pour un premier echange.",
    whatsappCta: "Discuter sur WhatsApp",
    emailLabel: "Email",
    locationLabel: "Base",
    whatsappMessage:
      "Bonjour, je souhaite creer un site web pour mon entreprise. Puis-je avoir un devis?",
  },
};

const portfolioPageTextByLocale: Record<Locale, PortfolioPageText> = {
  en: {
    label: "Portfolio",
    title: "Projects we've shipped.",
    subtitle:
      "A mix of client work and personal builds — each one approached with the same attention to structure, speed, and craft.",
    industryLabel: "Industry",
    caseStudyCta: "View case study",
  },
  fr: {
    label: "Portfolio",
    title: "Projets que nous avons livres.",
    subtitle:
      "Un mix de projets clients et de realisations personnelles — chacun aborde avec la meme rigueur de structure, de vitesse et de soin.",
    industryLabel: "Secteur",
    caseStudyCta: "Voir l'etude de cas",
  },
};

const casePageTextByLocale: Record<Locale, CasePageText> = {
  en: {
    projectSuffix: "— Case Study",
    challengeTitle: "The challenge",
    solutionTitle: "Our solution",
    outcomeTitle: "Outcome",
    stackTitle: "Project stack",
    cta: "Build Something Similar",
    liveCta: "View Live Project →",
    notFoundTitle: "Case Study Not Found",
  },
  fr: {
    projectSuffix: "— Etude de cas",
    challengeTitle: "Le challenge",
    solutionTitle: "Notre solution",
    outcomeTitle: "Resultat",
    stackTitle: "Technologies utilisees",
    cta: "Construire quelque chose de similaire",
    liveCta: "Voir le projet en ligne →",
    notFoundTitle: "Etude de cas introuvable",
  },
};

const footerTextByLocale: Record<Locale, FooterText> = {
  en: {
    tagline:
      "We build high-converting, modern websites for businesses that mean business.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
  fr: {
    tagline:
      "Nous creons des sites modernes et performants pour les entreprises ambitieuses.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "Tous droits reserves.",
  },
};

const thankYouTextByLocale: Record<Locale, ThankYouText> = {
  en: {
    label: "Request received",
    title: "Thank you.",
    body:
      "Your quote request has been received. We will contact you shortly to discuss your project.",
    homeCta: "Back to Home",
    contactCta: "Contact Again",
  },
  fr: {
    label: "Demande recue",
    title: "Merci.",
    body:
      "Votre demande de devis a bien ete recue. Nous vous contacterons tres bientot.",
    homeCta: "Retour a l'accueil",
    contactCta: "Recontacter",
  },
};

const legalTextByLocale: Record<Locale, LegalText> = {
  en: {
    privacyDescription: "Privacy policy for HoneyGrid website services.",
    termsDescription: "Terms of service for HoneyGrid website projects.",
    privacyTitle: "Privacy Policy",
    privacyBody:
      "We collect only the information required to respond to your quote requests and project inquiries. We do not sell personal data. You can request data updates or deletion by contacting us via email.",
    termsTitle: "Terms of Service",
    termsBody:
      "Project timelines depend on scope and content readiness. Work begins after scope confirmation. Payment milestones and deliverables are agreed in writing before development starts.",
  },
  fr: {
    privacyDescription: "Politique de confidentialite des services web HoneyGrid.",
    termsDescription: "Conditions de service des projets web HoneyGrid.",
    privacyTitle: "Politique de confidentialite",
    privacyBody:
      "Nous collectons uniquement les informations necessaires pour repondre a vos demandes de devis et de projet. Nous ne vendons pas vos donnees. Vous pouvez demander la mise a jour ou la suppression de vos donnees par email.",
    termsTitle: "Conditions de service",
    termsBody:
      "Les delais de projet dependent du scope et de la disponibilite du contenu. Le travail commence apres validation du scope. Les paiements et livrables sont fixes par ecrit avant le debut du developpement.",
  },
};

const contactFormTextByLocale: Record<Locale, ContactFormText> = {
  en: {
    fullName: "Full Name",
    businessName: "Business Name",
    emailAddress: "Email Address",
    phone: "Phone / WhatsApp",
    needs: "What do you need?",
    budget: "Rough Budget",
    details: "Project Details",
    sending: "Sending...",
    submit: "Request My Free Quote",
    error: "Your message could not be sent. Please try again.",
    options: {
      business: "Business Website",
      ecommerce: "Ecommerce Website",
      redesign: "Website Redesign",
      maintenance: "Maintenance",
    },
    budgets: {
      low: "Small (just getting started)",
      mid: "Medium (standard project)",
      high: "Large (complex build)",
      enterprise: "Not sure yet / Let's talk",
    },
  },
  fr: {
    fullName: "Nom complet",
    businessName: "Nom de l'entreprise",
    emailAddress: "Adresse email",
    phone: "Telephone / WhatsApp",
    needs: "De quoi avez-vous besoin?",
    budget: "Budget approximatif",
    details: "Details du projet",
    sending: "Envoi...",
    submit: "Demander mon devis gratuit",
    error: "Votre message n'a pas pu etre envoye. Veuillez reessayer.",
    options: {
      business: "Site vitrine",
      ecommerce: "Site ecommerce",
      redesign: "Refonte de site",
      maintenance: "Maintenance",
    },
    budgets: {
      low: "Petit (demarrage)",
      mid: "Moyen (projet standard)",
      high: "Grand (build complexe)",
      enterprise: "Pas encore defini / A discuter",
    },
  },
};

const seoTextByLocale: Record<Locale, SeoText> = {
  en: {
    rootTitle: "HoneyGrid — Web Design Studio",
    rootDescription:
      "Custom websites built for businesses that want real results. Fast, mobile-friendly, SEO-ready, and designed to convert.",
    twitterDescription:
      "Need a modern, high-performing website? Get a free quote within 24 hours.",
    siteTitleTemplate: "%s | HoneyGrid",
    homeTitle: "HoneyGrid — Professional Web Design Studio",
    homeDescription:
      "Custom websites for ambitious businesses. Fast, mobile-friendly, SEO-ready, and built to convert visitors into leads.",
    servicesTitle: "Website Services",
    servicesDescription:
      "Business websites, ecommerce stores, redesigns, and ongoing maintenance for businesses that want more from their online presence.",
    pricingTitle: "Website Packages",
    pricingDescription:
      "Flexible website packages for startups, growing businesses, and ecommerce brands. Every project is quoted individually.",
    aboutTitle: "About HoneyGrid",
    aboutDescription:
      "HoneyGrid is a web design studio run by Kshitij — building fast, professional websites for businesses around the world.",
    contactTitle: "Get a Website Quote",
    contactDescription:
      "Tell us about your project and receive a free website quote within 24 hours.",
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "A collection of web projects — from client sites to personal builds — each one built with purpose and craft.",
    thankYouTitle: "Thank You",
    thankYouDescription: "Your request has been received.",
    privacyTitle: "Privacy Policy",
    privacyDescription: "Privacy policy for HoneyGrid website services.",
    termsTitle: "Terms of Service",
    termsDescription: "Terms of service for HoneyGrid website projects.",
  },
  fr: {
    rootTitle: "HoneyGrid — Studio Web",
    rootDescription:
      "Sites web sur mesure pour les entreprises qui veulent de vrais resultats. Rapides, responsives et optimises pour convertir.",
    twitterDescription:
      "Besoin d'un site moderne et performant? Recevez un devis gratuit en 24 heures.",
    siteTitleTemplate: "%s | HoneyGrid",
    homeTitle: "HoneyGrid — Studio de Design Web Professionnel",
    homeDescription:
      "Sites web sur mesure pour les entreprises ambitieuses, rapides et concus pour la conversion.",
    servicesTitle: "Services Web",
    servicesDescription:
      "Sites vitrines, ecommerce, refonte et maintenance pour les entreprises qui veulent plus de leur presence en ligne.",
    pricingTitle: "Tarifs Web",
    pricingDescription:
      "Des packs web flexibles pour startups, PME et marques ecommerce. Chaque projet est devisé individuellement.",
    aboutTitle: "A propos de HoneyGrid",
    aboutDescription:
      "HoneyGrid est un studio web dirige par Kshitij — construisant des sites rapides et professionnels pour des entreprises partout dans le monde.",
    contactTitle: "Obtenir un devis web",
    contactDescription:
      "Parlez-nous de votre projet et recevez un devis gratuit sous 24 heures.",
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Une selection de projets web — de sites clients a des realisations personnelles — chacun construit avec intention et soin.",
    thankYouTitle: "Merci",
    thankYouDescription: "Votre demande a bien ete recue.",
    privacyTitle: "Politique de confidentialite",
    privacyDescription: "Politique de confidentialite des services web HoneyGrid.",
    termsTitle: "Conditions de service",
    termsDescription: "Conditions de service des projets web HoneyGrid.",
  },
};

const sharedTextByLocale: Record<Locale, SharedText> = {
  en: {
    getQuote: "Get a Free Quote",
    whatsappCta: "Chat on WhatsApp",
  },
  fr: {
    getQuote: "Obtenir un devis gratuit",
    whatsappCta: "Discuter sur WhatsApp",
  },
};

export function getNavLinks(locale: Locale) {
  return navLinksByLocale[locale];
}

export function getServices(locale: Locale) {
  return servicesByLocale[locale];
}

export function getProjects(locale: Locale) {
  return projectsByLocale[locale];
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return projectsByLocale[locale].find((project) => project.slug === slug);
}

export function getPricing(locale: Locale) {
  return pricingByLocale[locale];
}

export function getFaqs(locale: Locale) {
  return faqsByLocale[locale];
}

export function getProcessSteps(locale: Locale) {
  return processStepsByLocale[locale];
}

export function getTestimonials(locale: Locale) {
  return testimonialsByLocale[locale];
}

export function getHomeText(locale: Locale) {
  return homeTextByLocale[locale];
}

export function getServicesPageText(locale: Locale) {
  return servicesPageTextByLocale[locale];
}

export function getPricingPageText(locale: Locale) {
  return pricingPageTextByLocale[locale];
}

export function getAboutPageText(locale: Locale) {
  return aboutPageTextByLocale[locale];
}

export function getContactPageText(locale: Locale) {
  return contactPageTextByLocale[locale];
}

export function getPortfolioPageText(locale: Locale) {
  return portfolioPageTextByLocale[locale];
}

export function getCasePageText(locale: Locale) {
  return casePageTextByLocale[locale];
}

export function getFooterText(locale: Locale) {
  return footerTextByLocale[locale];
}

export function getThankYouText(locale: Locale) {
  return thankYouTextByLocale[locale];
}

export function getLegalText(locale: Locale) {
  return legalTextByLocale[locale];
}

export function getContactFormText(locale: Locale) {
  return contactFormTextByLocale[locale];
}

export function getSeoText(locale: Locale) {
  return seoTextByLocale[locale];
}

export function getSharedText(locale: Locale) {
  return sharedTextByLocale[locale];
}
