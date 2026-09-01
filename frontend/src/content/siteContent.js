import serviceImage from "../assets/images/services-image.png";
import panlexmockup from "../assets/images/Panelx-mockup.PNG";
import panelXMobile from "../assets/images/Panelx-mobile.png";

export const site = {
  name: "ConX Orbit",
  tagline: "Custom software and AI for construction and façade teams",
  email: "Founder@conxorbit.com",
  phone: "+92-303-7342110",
  whatsapp: "+92-303-7342110",
  whatsappLabel: "WhatsApp",
  linkedin: "https://www.linkedin.com/company/conxorbit",
};

export const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [{ label: "View All Solutions", href: "/solutions", emphasis: true }],
  },
  {
    label: "Trades",
    href: "/trades/facade",
    children: [
      { label: "Façade & Curtain Wall", href: "/trades/facade" },
      { label: "Construction Technology", href: "/trades/construction" },
    ],
  },
  {
    label: "Services",
    href: "/services/custom-ai-development",
    children: [
      { label: "Custom AI Development", href: "/services/custom-ai-development" },
      {
        label: "Workflow Analysis & Consulting",
        href: "/services/workflow-analysis-consulting",
      },
      { label: "Integration Services", href: "/services/integration-services" },
      {
        label: "Training & Implementation",
        href: "/services/training-implementation",
      },
      {
        label: "Construction Website Development",
        href: "/services/construction-website-development",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export const homeContent = {
  meta: {
    title: "ConX Orbit — Software & AI for Construction and Façade",
    description:
      "We build custom software and AI systems for façade fabricators and construction teams — clear tools that remove friction from design to site.",
  },
  hero: {
    eyebrow: "Built for Façade & Construction Teams",
    title: "AI Automation Built Around How Your Team Actually Works",
    body: "From drawings and estimating to fabrication and site operations, we build AI-powered systems that reduce manual work, connect project information, and help your team move faster.",
    primaryCta: { label: "Book a Discovery Call", href: "/book-discovery" },
    secondaryCta: { label: "Explore Solutions", href: "/solutions" },
    statCards: [
      { label: "No generic software" },
      { label: "No forced workflows" },
      { label: "We build around your workflow" },
    ],
  },
  tradeShowcase: {
    badge: "Who We Build For",
    title: "Built for the Specialists Behind Modern Buildings.",
    body: "From façade engineering to wider construction operations, we build intelligent systems around the way these teams work.",
  },
  challenges: {
    badge: "Where We Create Impact",
    titleBefore: "Too Much Work Still ",
    titleHighlight: "Happens Manually",
    titleAfter: ".",
    body: "Your team already has the tools. The problem is everything happening between them.",
    ctaLabel: "Explore your Workflow",
    closingLine:
      "Those small tasks add up — more time, more rework, and more room for mistakes.",
    cards: [
      {
        icon: "estimation",
        accent: "olive",
        title: "Estimating & RFQs",
        body: "RFQs arrive through email and WhatsApp. Analyze documents to extract Quantities.",
      },
      {
        icon: "revisions",
        accent: "gold",
        title: "Drawing Workflows",
        body: "Tracking revisions across multiple drawing versions wastes engineering hours.",
      },
      {
        icon: "reporting",
        accent: "olive",
        title: "Site Reporting",
        body: "Disconnected inspections slow communication between site and office.",
      },
      {
        icon: "fabrication",
        accent: "gold",
        title: "Fabrication Tracking",
        body: "Production, installation and documentation often live in separate systems.",
      },
    ],
  },
  services: {
    badge: "HOW WE HELP",
    titleBefore: "Technology Built Around",
    titleHighlight: " Your Workflow",
    titleAfter: ".",
    body: "We identify workflow gaps and build practical systems using AI, automation and custom software.",
    image: serviceImage,
      alt: "Illustration of a construction workflow with AI and automation",
    imageCaption: "Implement, Train, Adopt. ",
    items: [
      {
        id: "workflow",
        label: "Workflow Analysis & Consulting",
        title: "Workflow Analysis & Consulting",
        body: "We examine your processes, identify bottlenecks and define where technology can make a practical difference.",
        points: [
          "Workflow & process assessment",
          "Operational bottleneck analysis",
          "Automation opportunity mapping",
          "Solution roadmap & recommendations",
        ],
      },
      {
        id: "custom",
        label: "Custom AI Development",
        title: "Custom AI Development",
        body: "We build AI systems for specific construction and façade workflows.",
        points: [
          "AI-assisted workflows",
          "Drawing & document intelligence",
          "Drawing analysis & Data Extraction",
          "Computer vision & data extraction",
        ],
      },
      {
        id: "integration",
        label: "Integration Services",
        title: "Integration Services",
        body: "We connect your tools and data to reduce manual work and disconnected information.",
        points: [
          "Integration with existing tools",
          "Data synchronization",
          "ERP / CRM connectivity",
          "Connected Workflows"
        ],
      },
      {
        id: "training",
        label: "Training & Implementation",
        title: "Training & Implementation",
        body: "We help your team adopt new systems and use them effectively in daily work.",
        points: [
          "Workflow setup",
          "Implementation planning",
          "Team training",
          "Ongoing support",
        ],
      },
    ],
  },
  featuredSolutions: {
    badge: "FEATURED SOLUTIONS",
    titleBefore: "Systems Built for Real ",
    titleHighlight: "Construction Workflows",
    titleAfter: ".",
    body: "A look at what we've actually built — real systems solving real workflow problems",
    viewAll: { label: "View All Solutions", href: "/solutions" },
    cards: [
      {
        badge: "Quotation",
        imageKey: "quoteGen",
        title: "Quote Automation",
        description: "Analyze your project drawings and documents to extract quantities and generate accurate quotes faster.",
        href: "/solutions/quote-automation",
        cta: "View Solution",
      },
      {
        badge: "DWG Viewer",
        imageKey: "flatforge",
        title: "FlatForge AI",
        description: "FlatForge AI converts 2D aluminium panel drawings into 3D views and automates bending calculations.",
        href: "/solutions/flatforge-ai",
        cta: "View Solution",
      },
      
    ],
  },
  framework: {
    badge: "Our AI Transformation Framework",
    titleBefore: "We Start With Your Workflow ",
    titleHighlight: " — Not the Technology",
    titleAfter: "",
    body: "Before recommending AI or software, we understand how your team actually works. Then we identify where technology can create the most impact.",
    callout: "A proven approach that delivers real business impact with AI.",
    steps: [
      {
        title: "Understand",
        body: "Map the current workflow.",
      },
      {
        title: "Find the Bottleneck",
        body: "Identify where time, information, or accuracy is being lost.",
      },
      {
        title: "Design",
        body: "Decide what should be automated and what should remain human.",
      },
      {
        title: "Build",
        body: "Develop the system around your actual process.",
      },
      {
        title: "Integrate",
        body: "Connect it with the tools and data you already use.",
      },
      {
        title: "Improve",
        body: "Refine it as your team uses it in real projects.",
      },
    ],
  },
  featuredCaseStudy: {
    badge: "FEATURED CASE STUDY",
    titleBefore: "From DWG Drawings to  ",
    titleHighlight: "On-Site Panel Tracking.",
    titleAfter: "",
    body: "A custom platform connecting drawings, panel information, site photos, installation progress, and project documents in one browser-based system.",
    mockupLabel: "A SINGLE SOURCE OF TRUTH",
    mockupImages: {
      laptop: panlexmockup, // Add the desktop/web screenshot URL here
      mobile: panelXMobile, // Add the mobile screenshot URL here
    },
    cta: { label: "Explore the Case Study", href: "/case-studies/panel-x-case-study" },
    features: [
      {
        icon: "drawing",
        title: "Browser-Based DWG Viewing",
        lines: ["Open and review façade DWG drawings directly in the browser. "],
      },
      {
        icon: "progress",
        title: "Centralized Project Information",
        lines: ["Keep drawings, panel details, site images and project records connected at one place."],
      },
      {
        icon: "docs",
        title: "Project Status Tracking",
        lines: ["Find specific panels quickly, attach site photos and update their installation status."],
      },
      {
        icon: "files",
        title: "Natural Language Panel Query",
        lines: ["Ask the AI assistant about any panel and retrieve relevant information without manually searching."],
      },
    ],
  },
  whyWorkWithUs: {
    badge: "What Makes Us Different",
    title: "Built around how construction teams actually work.",
    cards: [
      {
        icon: "industry",
        badge: "Construction First",
        title: "Industry Before Technology",
        body: "Before we recommend AI or software, we understand how your teams estimate, fabricate, inspect, and deliver projects.",
      },
      {
        icon: "workflow",
        badge: "Built Around Your Workflow",
        title: "We Build What Fits",
        body: "Every construction business is different. We design systems around your existing operations instead of forcing your team to adapt to generic software.",
      },
      {
        icon: "partnership",
        badge: "Founder-Led",
        title: "Founder-Led Collaboration",
        body: "You work directly with the people designing and building your solution. Faster decisions, clearer communication, and a shared focus on solving the right problems.",
      },
      {
        icon: "growth",
        badge: "Long-Term Thinking",
        title: "Built to Grow",
        body: "Construction businesses grow. Every platform is designed to scale with new workflows, integrations, and future AI capabilities as your operations evolve.",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    titleBefore: "Questions teams ask ",
    titleHighlight: "before we start",
    titleAfter: "",
    items: [
      {
        question: "What does ConX Orbit build?",
        answer:
          "We build custom AI systems, workflow automations and software platforms around real façade and construction processes—from drawing intelligence and quotation workflows to document management, site reporting and fabrication tracking.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We primarily work with façade contractors, curtain wall fabricators, aluminium manufacturers, building-envelope consultants and façade engineering teams. We also support construction companies, developers and other specialist trades.",
      },
      {
        question: "Do you provide ready-made products or custom solutions?",
        answer:
          "Our work is primarily client-specific. We study the existing workflow and build a solution around the team’s requirements. We also develop internal products and workflow demonstrators for selected industry problems.",
      },
      {
        question: "How do you decide whether a workflow needs AI?",
        answer:
          "We do not add AI simply because it is available. We first identify where time, accuracy or information is being lost, then determine whether AI, automation, integration or conventional software is the most appropriate solution.",

      },
      {
        question: "Can you integrate with our existing tools and systems?",
        answer:"Yes. Where technically possible, we can connect new workflows with existing databases, document repositories, APIs and business systems—reducing the need to replace tools that already work."
      },
      {
        question:"How does a project begin?",
        answer:"It starts with a discovery call. We discuss the workflow, current tools, users, constraints and desired outcome. We then recommend the appropriate scope, technical approach and next steps."
      }

    ],
  },
  testimonials: {
    badge: "Testimonials",
    titleBefore: "What clients say about ",
    titleHighlight: "working with us",
    titleAfter: "",
    items: [
      {
        quote:
          "They mapped our real shop-floor friction first — then built something our team actually opened every day.",
        name: "Operations Lead",
        role: "Façade fabricator",
        initials: "OL",
      },
      {
        quote:
          "Clear ownership, short cycles, and no black-box demos. We always knew what was shipping next.",
        name: "Project Director",
        role: "Construction firm",
        initials: "PD",
      },
      {
        quote:
          "The AI assistant didn’t replace our people — it gave them faster answers against our own project context.",
        name: "Technical Manager",
        role: "Curtain wall specialist",
        initials: "TM",
      },
    ],
  },
  closingCta: {
    title: "Got a Workflow That Shouldn't Be This Manual?",
    body: "Show us how your team handles it today. We'll identify where AI, automation, or custom software can actually make a difference.",
    primaryCta: { label: "Book a Discovery Call", href: "/book-discovery" },
    secondaryCta: { label: "View Portfolio", href: "/portfolio" },
  },
};

export const facadeContent = {
  meta: {
    title: "Façade & Curtain Wall Solutions — ConX Orbit",
    description:
      "From design and drawings to fabrication, quantities and installation — intelligent systems that connect the workflows behind modern façade projects.",
  },
  hero: {
    eyebrow: "Façade & Curtain Wall Technology",
    titleBefore: "Engineering the intelligence behind the ",
    titleHighlight: "building envelope.",
    titleAfter: "",
    body: "From design and drawings to fabrication, quantities and installation, ConX Orbit builds intelligent systems that connect the workflows behind modern façade projects.",
    primaryCta: { label: "Explore Façade Solutions", href: "/solutions" },
    secondaryCta: { label: "Talk to Our Team", href: "/book-discovery" },
    footerNote: "Connected data\nBetter decisions",
    callouts: [
      { label: "Mullion", code: "CW-04", side: "Left", top: "12%", left: "4%", right: "auto" },
      { label: "Vision Panel", code: "P-204", side: "Left", top: "58%", left: "0%", right: "auto" },
      { label: "Glass Unit", code: "IGU-28", side: "Right", top: "18%", left: "auto", right: "2%" },
      { label: "Pressure Plate", code: "AL-6063-T6", side: "Right", top: "48%", left: "auto", right: "0%" },
    ],
  },
  workflow: {
    eyebrow: "The Façade Workflow",
    title: "From Design Intent to Installed Panel.",
    body: "A façade project moves through interconnected stages — each producing information that the next team depends on.",
    steps: [
      { icon: "design", title: "Design", details: ["Drawings", "Revisions"] },
      { icon: "engineering", title: "Engineering", details: ["Details", "Coordination"] },
      { icon: "quantification", title: "Quantification", details: ["BOQ", "Takeoff"] },
      { icon: "fabrication", title: "Fabrication", details: ["Panels", "Assembly"] },
      { icon: "documentation", title: "Documentation", details: ["Approvals", "Records"] },
      { icon: "installation", title: "Installation", details: ["Site", "Handover"] },
    ],
  },
  complexity: {
    eyebrow: "Where Complexity Builds",
    title: "The Façade Is More Than a Building Skin.",
    body: "Behind every panel is a chain of drawings, quantities, documents, components and decisions. When that information becomes fragmented, small inefficiencies multiply across the project.",
    left: [
      { label: "Drawings", detail: "Revision comparison & coordination" },
      { label: "Quantities", detail: "Manual takeoffs & spreadsheets" },
      { label: "Fabrication", detail: "Panel and component tracking" },
    ],
    right: [
      { label: "Documents", detail: "Information scattered across files" },
      { label: "Site", detail: "Inspection & progress reporting" },
      { label: "Coordination", detail: "Information moving between teams" },
    ],
  },
  panelX: {
    eyebrow: "Featured Façade System",
    title: "PanelX — From Façade Drawing to Panel Tracking.",
    body: "PanelX connects façade drawings with structured panel records, production status, and project information—giving teams one place to locate panels, review details, and follow progress.",
    image: panlexmockup, // Replace this with your PanelX screenshot URL.
    features: [
      { icon: "dwg", title: "DWG Viewer", body: "Review façade drawings directly within the platform." },
      { icon: "tracking", title: "Panel Identification", body: "Locate individual panels and access their linked records." },
      { icon: "field", title: "Panel Data", body: "Keep dimensions, references, and project details organized." },
      { icon: "info", title: "Production Tracking", body: "Follow each panel through defined production stages." },
      { icon: "measure", title: "Project Reportingt", body: "Turn current panel data into clearer progress views." },
    ],
    cta: { label: "Explore PanelX", href: "/solutions/panel-x" },
  },
  solutions: {
    eyebrow: "Our Façade Solutions",
    title: "Purpose-Built Systems for Complex Façade Work.",
    body: "From drawing intelligence to field operations, our solutions are designed around specific points where façade teams lose time, information or accuracy.",
  },
  aiWorkflow: {
    eyebrow: "Intelligent Façade Technology",
    title: "Where Façade Expertise\nMeets AI.",
    body: "We apply AI where it can meaningfully reduce manual work — from understanding drawings and documents to extracting quantities, comparing revisions and automating repetitive decisions.",
    steps: [
      {
        title: "Drawings",
        body: "Shop drawings, DWGs, PDFs, spec sheets",
        accent: "gold",
        leftCallout: "Drawing Analysis",
        rightCallout: "Document Intelligence",
      },
      {
        title: "Computer Vision",
        body: "Reads geometry, layers and annotations",
        accent: "olive",
      },
      {
        title: "Structured Data",
        body: "Quantities, dimensions, materials, revisions",
        accent: "gold",
        leftCallout: "AI Extraction",
      },
      {
        title: "Workflow Automation",
        body: "Applies rules, flags changes, drafts outputs",
        accent: "olive",
      },
      {
        title: "Action",
        body: "Synced to estimating, PM and BIM tools",
        accent: "gold",
        rightCallout: "System Integration",
      },
    ],
  },
  cta: {
    eyebrow: "Façade Workflow",
    title: "Have a Façade Workflow Worth Improving?",
    body: "Tell us where the process gets difficult. We'll explore whether AI, automation or a purpose-built system can make it work better.",
    primary: { label: "Book a Discovery Call", href: "/book-discovery" },
    secondary: { label: "Explore Our Solutions", href: "/solutions" },
  },
};

export const constructionContent = {
  meta: {
    title: "Construction Technology — ConX Orbit",
    description:
      "Custom construction technology: field apps, automation, dashboards, and integrations built around your process.",
  },
  hero: {
    eyebrow: "Construction Technology",
    title: "Tools that match your process — not the other way around",
    body: "We design software for contractors, consultants, and project teams who need clarity across people, places, and decisions.",
  },
  painPoints: {
    title: "Familiar friction",
    items: [
      "Handoffs that drop context between office and site",
      "Reporting that takes hours and still feels late",
      "Tools that don’t talk to each other",
      "New hires who can’t find how things are supposed to work",
    ],
  },
  capabilities: {
    title: "Capability areas",
    items: [
      {
        title: "Project & field apps",
        body: "Mobile-friendly tools for logs, checklists, and status that people will actually use.",
      },
      {
        title: "Automation & AI",
        body: "Reduce repetitive chasing — summaries, alerts, and assistants grounded in your data.",
      },
      {
        title: "Integrations & dashboards",
        body: "Connect the systems you already pay for and surface what leaders need to decide.",
      },
      {
        title: "Internal platforms",
        body: "Shared hubs for standards, documents, and workflows across teams and partners.",
      },
    ],
  },
  relatedSolutions: {
    eyebrow: "Our Construction Solutions",
    title: "Purpose-Built Systems for Live Construction Work.",
    body: "From field capture to automation and project intelligence, these solutions address the points where construction teams lose time and clarity.",
  },
  cta: {
    title: "Build the next layer of your stack",
    body: "Describe the bottleneck. We’ll propose a practical path — custom build, AI, or both.",
    href: "/book-discovery",
    label: "Start a project",
  },
};

export { servicePages, getServicePage, serviceSlugs } from "./servicePages";

export const caseStudiesContent = {
  meta: {
    title: "Case Studies — ConX Orbit",
    description: "Selected ConX Orbit work: problem, what we built, results, and client voice.",
  },
  hero: {
    eyebrow: "Case studies",
    title: "Outcomes you can point to",
    body: "Placeholder stories for structure — swap in real projects when you’re ready.",
  },
};

export const aboutContent = {
  meta: {
    title: "About — ConX Orbit",
    description:
      "ConX Orbit builds custom software and AI for construction and façade. Meet our team.",
  },
  glowHero: {
    phase1: {
      eyebrow: "About ConX Orbit",
      titleLine1: "Technology Should Understand",
      titleLine2: "the Work It Is Built For.",
    },
    phase2: "Understand the workflow. Build around it. Make it work better.",
  },
  offer: {
    badge: "We offer",
    title: "One focused practice",
    pillars: [
      {
        graphic: "orbit",
        title: "Delivering seamless experiences",
        body: "Make it clear. We turn complex project workloads into software people actually use.",
      },
      {
        graphic: "rays",
        title: "Orchestrating unified frameworks",
        body: "Keep it simple. We own the path from workshop to production without typical handoff gaps.",
      },
      {
        graphic: "flow",
        title: "Compounding partnership gains",
        body: "Do good work for people. We serve with care so every release impacts what matters on site.",
      },
    ],
  },
  story: {
    eyebrow: "OUR STORY",
    title: "Built From How the Work\nActually Happens.",
    opening: [
      "Construction and façade teams work with enormous amounts of information — drawings, specifications, quantities, documents, fabrication data, site updates, and countless decisions. Yet much of that work still depends on disconnected tools, spreadsheets, repetitive processes, and manual coordination.",
    ],
    pullQuote: "We saw an opportunity to build technology differently.",
    body: [
      "ConX Orbit started with a focus on understanding the work before building the technology. Instead of forcing teams into generic software, we work closely with real workflows to identify where information gets lost, where repetitive work slows teams down, and where AI and automation can genuinely make a difference.",
      "Today, we work directly with companies to build custom platforms and intelligent systems around their operations. At the same time, we're developing our own products around recurring challenges we see across the industry.",
    ],
    closing:
      "Our direction is simple: build technology that understands the industry, solves real problems, and makes complex work easier to move forward.",
  },
  team: {
    title: "Meet our team",
  },
  values: {
    eyebrow: "Our core values",
    titleBefore: "We build as ",
    titleHighlight: "one team",
    titleAfter: "",
    body: "Our values shape the way we think, collaborate, and deliver technology that makes a real difference.",
    items: [
      {
        icon: "clarity",
        title: "Clarity first",
        body: "Every decision and screen should reduce noise, not add it.",
      },
      {
        icon: "field",
        title: "Field truth",
        body: "We design from how work actually happens on site and in the shop.",
      },
      {
        icon: "honest",
        title: "Honest delivery",
        body: "Visible progress, real timelines, and no theatre.",
      },
      {
        icon: "craft",
        title: "Lasting craft",
        body: "We ship software meant to earn its place for years, not a demo week.",
      },
    ],
  },
};

export const footerContent = {
  blurb: "Custom software and AI for construction and façade teams.",
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "PanelX", href: "/solutions/panel-x" },
        { label: "ElectraX", href: "/solutions/electra-x" },
        { label: "Construction Inspection", href: "/solutions/construction-inspection" },
        { label: "Quote Automation", href: "/solutions/quote-automation" },
        { label: "Drawing Intelligence", href: "/solutions/drawing-intelligence" },
        { label: "All Solutions", href: "/solutions" },
      ],
    },
    {
      title: "Trades",
      links: [
        { label: "Façade & Curtain Wall", href: "/trades/facade" },
        { label: "Construction Technology", href: "/trades/construction" },
        { label: "Aluminium", href: "/portfolio" },
        { label: "Exterior", href: "/portfolio" },
        { label: "Site Operations", href: "/trades/construction" },
        { label: "Engineering", href: "/trades/facade" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Our Team", href: "/about" },
        { label: "Careers", href: "mailto:founder@conxorbit.com?subject=Careers" },
        { label: "Book a Discovery Call", href: "/book-discovery" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Custom AI Development", href: "/services/custom-ai-development" },
        {
          label: "Workflow Analysis & Consulting",
          href: "/services/workflow-analysis-consulting",
        },
        { label: "Integration Services", href: "/services/integration-services" },
        {
          label: "Training & Implementation",
          href: "/services/training-implementation",
        },
        {
          label: "Construction Website Development",
          href: "/services/construction-website-development",
        },
      ],
    },
  ],
  legal: "© 2026 ConX Orbit. All rights reserved.",
};
