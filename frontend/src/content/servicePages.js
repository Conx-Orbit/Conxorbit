import {
  serviceCapabilityImages,
} from "../assets/services";

const sharedApproach = {
  badge: "Our Approach",
  title: "From Workflow Understanding to Working System",
  steps: [
    {
      icon: "understand",
      title: "Understand",
      body: "We map how work actually moves through your team today.",
    },
    {
      icon: "analyse",
      title: "Analyse",
      body: "We identify where manual effort and data gaps cost you the most time.",
    },
    {
      icon: "prototype",
      title: "Prototype",
      body: "A working proof of concept, tested against your real drawings and data.",
    },
    {
      icon: "develop",
      title: "Develop",
      body: "We build the full system around your workflow, not a generic template.",
    },
    {
      icon: "deploy",
      title: "Deploy",
      body: "Rolled out to your team with the access and integrations it needs to be used.",
    },
    {
      icon: "support",
      title: "Support",
      body: "We stay with you after launch—refining, training, and evolving the system as your work changes.",
    },
  ],
};

const sharedWhy = {
  badge: "WHY CONX ORBIT",
  title: "Built Like an Engineering Partner, Not Just a Development Agency.",
  body: "Every solution is shaped around your operations, your people, and the way your projects move—not around pre-built templates or generic AI tools.",
  cta: { label: "Book Consultation", href: "/book-discovery" },
  cards: [
    {
      number: "01",
      icon: "industry",
      title: "Construction First",
      body: "We understand drawings, fabrication, inspections, and delivery before designing the system.",
    },
    {
      number: "02",
      icon: "workflow",
      title: "Workflow Before Technology",
      body: "Technology should adapt to your operations—not force your team into new processes.",
    },
    {
      number: "03",
      icon: "partnership",
      title: "Founder-Led Collaboration",
      body: "You'll work directly with the engineers designing and building your solution.",
    },
  ],
};

const sharedFeatured = {
  badge: "FEATURED SOLUTIONS",
  titleBefore: "Systems Built for Real ",
  titleHighlight: "Construction Workflows",
  titleAfter: ".",
  body: "Explore selected platforms shaped around façade and construction delivery—built to cut manual work and keep projects moving.",
  viewAll: { label: "View All Solutions", href: "/solutions" },
  cards: [
    {
      badge: "Façade",
      title: "Panel X",
      description:
        "Panel lifecycle visibility across shop, logistics, and site—so everyone works from one agreed status.",
      href: "/solutions/panel-x",
      cta: "View Solution",
    },
    {
      badge: "Fabrication",
      title: "Flatforge",
      description:
        "Production and flat-pattern workflows that keep fabrication moving without spreadsheet chase.",
      href: "/solutions",
      cta: "View Solution",
    },
  ],
};

const sharedCta = {
  badge: "DISCUSS YOUR WORKFLOW",
  title: "Let's Talk About Your Workflow.",
  body: "Whether you're exploring AI, replacing manual processes, or planning a custom platform, we'd love to understand your goals and discuss what's possible.",
  primary: { label: "Book a Discovery Call", href: "/book-discovery" },
  secondary: { label: "Explore Solutions", href: "/solutions" },
};

export const serviceFaq = {
  badge: "SERVICE FAQ",
  titleBefore: "Questions About Working ",
  titleHighlight: "With Us",
  titleAfter: ".",
  items: [
    {
      question: "Do you adapt the service to our existing workflow?",
      answer:
        "Yes. We begin by understanding how your team currently works, then shape the scope, technology, and delivery plan around that workflow.",
    },
    {
      question: "Do you only develop AI for façade companies?",
      answer:
        "Façade and curtain-wall workflows are our strongest specialization, but we also work with construction companies, fabricators, consultants, developers, and other specialist trades.",
    },
    {
      question: "How do you determine whether AI is suitable for our workflow?",
      answer:
        "We first examine the problem, available data, required accuracy, existing systems, and how the output will be used. If AI is not the most appropriate solution, we may recommend automation, integration, or conventional software instead.",
    },
    {
      question: "Can we start with a smaller proof of concept?",
      answer:
        "Yes. A focused prototype or pilot is often the best way to validate the workflow, test real project data, and reduce risk before a wider rollout.",
    },
    {
      question: "Can the AI integrate with our current systems?",
      answer:
        "Where suitable access is available, we can connect the solution with existing platforms, databases, document repositories, and internal tools through APIs or purpose-built integrations.",
    },
  ],
};

const customAiFaq = {
  badge: "FAQ",
  titleBefore: "Questions About ",
  titleHighlight: "Custom AI Development",
  titleAfter: ".",
  items: [
    {
      question: "Do you only develop AI for façade companies?",
      answer:
        "Façade and curtain-wall workflows are our strongest specialization, but we also work with construction companies, fabricators, consultants, developers, and other specialist trades.",
    },
    {
      question: "How do you determine whether AI is suitable for our workflow?",
      answer:
        "We first examine the problem, available data, required accuracy, existing systems, and how the output will be used. If AI is not the most appropriate solution, we may recommend automation, integration, or conventional software instead.",
    },
    {
      question: "Can you work with our existing drawings and project documents?",
      answer:
        "Yes. Depending on the use case, the system may work with technical drawings, specifications, BOQs, schedules, inspection reports, images, spreadsheets, and other project records. Suitability is assessed during the initial analysis.",
    },
    {
      question: "Can the AI integrate with our current systems?",
      answer:
        "Where suitable access is available, we can connect the solution with existing platforms, databases, document repositories, and internal tools through APIs or purpose-built integrations.",
    },
    {
      question: "Do we need a large amount of data to begin?",
      answer:
        "Not always. The data requirement depends on the problem and the selected technical approach. Some systems can use existing AI models with controlled project knowledge, while others require labelled examples or historical records.",
    },
  ],
};

const workflowConsultingFaq = {
  badge: "FAQ",
  titleBefore: "Questions About ",
  titleHighlight: "Workflow Analysis",
  titleAfter: ".",
  items: [
    {
      question: "What is workflow analysis?",
      answer:
        "Workflow analysis is a structured examination of how a process currently operates—including its tasks, people, documents, systems, decisions, and handovers. Its purpose is to identify friction and define practical improvements.",
    },
    {
      question: "How is this different from general business consulting?",
      answer:
        "Our work focuses on operational and information-heavy workflows that may benefit from AI, automation, integration, or custom software. We connect process analysis directly with technical feasibility.",
    },
    {
      question: "What types of workflows can you analyse?",
      answer:
        "We can assess workflows such as quotation preparation, drawing review, revision management, BOQ extraction, document control, fabrication tracking, inspections, reporting, approvals, and project-information retrieval.",
    },
    {
      question: "Do you only work with façade companies?",
      answer:
        "Façade and curtain-wall workflows are our strongest specialization, but the service is also suitable for construction companies, manufacturers, engineering consultants, project teams, and other specialist trades.",
    },
    {
      question: "Do we need to know what technology we want?",
      answer:
        "No. You only need to explain the operational problem. Our role is to determine whether AI, automation, integration, custom software, or a process change is the most appropriate response."
    },
  ],
};

const integrationFaq = {
  badge: "INTEGRATION FAQ",
  titleBefore: "Questions About ",
  titleHighlight: "System Integration",
  titleAfter: ".",
  items: [
    {
      question: "Which construction and business systems can you integrate?",
      answer:
        "We can work with ERP, CRM, BIM, document-management, field, reporting, and custom internal platforms where suitable APIs, database access, or supported exchange methods are available.",
    },
    {
      question: "What if one of our systems does not have an API?",
      answer:
        "We assess supported exports, database access, file-based exchanges, and other safe options. If a reliable integration is not possible, we explain the constraint and recommend the most maintainable alternative.",
    },
    {
      question: "How do you protect data during an integration?",
      answer:
        "We design around least-privilege access, secure authentication, controlled data flows, logging, and the security requirements of the connected platforms and your organization.",
    },
    {
      question: "How are sync failures and duplicate records handled?",
      answer:
        "We define source-of-truth rules, validation, retry behavior, conflict handling, and monitoring so failures are visible and recoverable rather than silently corrupting project information.",
    },
    {
      question: "Can integrations be introduced without disrupting live projects?",
      answer:
        "Yes. We plan testing, staged releases, data migration, and cutover around active operations, with rollback and support arrangements appropriate to the risk of the connected workflow.",
    },
  ],
};

const trainingImplementationFaq = {
  badge: "FAQ",
  titleBefore: "Questions About ",
  titleHighlight: "Training & Rollout",
  titleAfter: ".",
  items: [
    {
      question: "Who is the training designed for?",
      answer:
        "Training is tailored by role, so estimators, engineers, project managers, fabrication teams, site teams, administrators, and leaders learn the workflows and responsibilities relevant to them.",
    },
    {
      question: "Can training use our own projects and data?",
      answer:
        "Yes. Where practical, we use your drawings, documents, scenarios, and processes so users practise the tasks they will perform after go-live rather than generic demonstrations.",
    },
    {
      question: "How do you roll out a system across multiple teams or locations?",
      answer:
        "We create a phased implementation plan covering access, champions, training groups, pilot projects, communications, support, and success measures for each team or location.",
    },
    {
      question: "What support is available after launch?",
      answer:
        "We can provide go-live hypercare, user support, refresher sessions, issue triage, adoption reviews, and ongoing improvements based on real usage and feedback.",
    },
    {
      question: "How do you measure whether adoption is successful?",
      answer:
        "We agree practical indicators such as active usage, completion of key workflows, support demand, data quality, time saved, and user feedback, then use them to target further coaching or changes.",
    },
  ],
};

const constructionWebsiteFaq = {
  badge: "WEBSITE DEVELOPMENT FAQ",
  titleBefore: "Questions About ",
  titleHighlight: "Construction Websites",
  titleAfter: ".",
  items: [
    {
      question: "Do you only build websites for construction companies?",
      answer:
        "Construction and facade businesses are our core focus, including contractors, fabricators, consultants, suppliers, and specialist trades. That focus helps us communicate technical capability clearly to industry buyers.",
    },
    {
      question: "Can our team update the website after launch?",
      answer:
        "Yes. We can provide a practical content-management setup and training so your team can update projects, services, news, and other agreed content without relying on a developer for routine changes.",
    },
    {
      question: "Can you help organize our services and project content?",
      answer:
        "Yes. We help shape the site structure, messaging, and content requirements so visitors can quickly understand what you do, where you work, and why they should trust your team.",
    },
    {
      question: "Will the website support SEO, analytics, and lead capture?",
      answer:
        "Yes. Depending on scope, we can include technical SEO foundations, analytics, inquiry forms, CRM or email connections, and clear conversion paths for prospective clients and partners.",
    },
    {
      question: "What happens after the website goes live?",
      answer:
        "We support launch, handover, and team training, and can provide an ongoing arrangement for maintenance, performance checks, content enhancements, and new functionality as the site grows.",
    },
  ],
};

const customAiCapabilities = [
  {
    icon: "blueprint",
    image: serviceCapabilityImages.drawing,
    title: "Drawing Intelligence",
    body: "Extract dimensions, annotations, schedules, quantities, and other structured information from technical drawings. ",
  },
  {
    icon: "docs",
    image: serviceCapabilityImages.docs,
    title: "Intelligent Document Processing",
    body: "Convert specifications, reports, contracts, and project documents into structured, searchable information using AI.",
  },
  {
    icon: "workflow",
    image: serviceCapabilityImages.workflow,
    title: "AI Quantity Takeoff",
    body: "Support the extraction and organization of measurable items from drawings, schedules, and project documents. ",
  },
  {
    icon: "chat",
    image: serviceCapabilityImages.chat,
    title: "Computer Vision",
    body: "Analyse images and video for inspection, quality, safety, progress, and asset-monitoring use cases.",
  },
  {
    icon: "cubes",
    image: serviceCapabilityImages.cubes,
    title: "Project Knowledge Systems",
    body: "Create controlled AI assistants that help teams search and retrieve information from approved project sources.",
  },
  {
    icon: "dashboard",
    image: serviceCapabilityImages.dashboard,
    title: "Predictive & Decision Support",
    body: "Use historical and operational data to surface patterns, risks, exceptions, and information requiring human attention.",
  },
 
];

export const servicePages = {
  "custom-ai-development": {
    slug: "custom-ai-development",
    meta: {
      title: "Custom AI Development — ConX Orbit",
      description:
        "Custom AI systems for construction workflows—drawing intelligence, quotation automation, document analysis, and operational decision support.",
    },
    hero: {
      badge: "CUSTOM AI DEVELOPMENT",
      titleBefore: "AI Systems Built Around ",
      titleHighlight: "Real Construction ",
      titleAfter: "Workflow",
      body: "We design and develop custom AI systems for complex façade and construction workflows—from drawing and document intelligence to quotation, inspection, and project-data automation.",
      primaryCta: { label: "Book Consultation", href: "/book-discovery" },
      secondaryCta: { label: "View Solutions", href: "/solutions" },
    },
    value: {
      badge: "WHERE IT CREATES VALUE",
      title: "Where Custom AI Creates Value",
      cards: [
        {
          icon: "compare",
          title: "Drawing Review",
          body: "Extract, compare, and interpret information from technical drawings, schedules, and revisions.",
        },
        {
          icon: "quote",
          title: "Quotation Workflows",
          body: "Support enquiry review, requirement extraction, scope identification, and quotation preparation.",
        },
        {
          icon: "boq",
          title: "Quantity & Cost Extraction",
          body: "Identify quantities, materials, and cost-related data from drawings, BOQs, and enquiry documents.",
        },
        {
          icon: "docs",
          title: "Document Processing",
          body: "Turn specifications, reports, contracts, and project files into structured, searchable information.",
        },
        {
          icon: "workflow",
          title: "Project Knowledge",
          body: "Help teams retrieve reliable information across drawings, specifications, reports, and historical records.",
        },
        {
          icon: "shield",
          title: "Inspection & Monitoring",
          body: "Apply computer vision to quality inspections, site observations, progress tracking, and safety workflows.",
        },
      ],
    },
    approach: sharedApproach,
    capabilities: {
      badge: "Capabilities",
      title: "Custom AI Capabilities for Construction",
      body: "We combine AI, automation, and product engineering to build systems around the information and workflows that construction teams already rely on.",
      cards: customAiCapabilities,
    },
    featured: sharedFeatured,
    why: sharedWhy,
    faq: customAiFaq,
    cta: sharedCta,
  },

  "workflow-analysis-consulting": {
    slug: "workflow-analysis-consulting",
    meta: {
      title: "Workflow Analysis & Consulting — ConX Orbit",
      description:
        "Map construction workflows, find bottlenecks, and define where custom software or AI creates real impact.",
    },
    hero: {
      badge: "WORKFLOW ANALYSIS & CONSULTING",
      titleBefore: "Find Where Your Workflow Is  ",
      titleHighlight: "Losing Time.",
      titleAfter: "",
      body: "We examine how work moves across your people, documents, systems, and decisions—then define practical opportunities for AI, automation, integration, or process improvement.",
      primaryCta: { label: "Explore Your Workflow", action: "open-workflow" },
      secondaryCta: { label: "View Solutions", href: "/solutions" },
    },
    value: {
      badge: "WHERE IT CREATES VALUE",
      title: "Where Workflow Analysis Creates Value",
      cards: [
        {
          icon: "compare",
          title: "Repetitive Manual Work",
          body: "Identify recurring tasks such as data entry, document checking, file preparation, and report creation that consume skilled time.",
        },
        {
          icon: "quote",
          title: "Disconnected Information",
          body: "Find where project information is fragmented across emails, spreadsheets, drawings, and documents.",
        },
        {
          icon: "boq",
          title: "Process Bottlenecks",
          body: "Locate approvals, handovers, reviews, and decisions that repeatedly delay progress.",
        },
        {
          icon: "docs",
          title: "Inconsistent Outputs",
          body: "Understand why quotations, reports, inspections, or project records vary between teams, projects, and working methods.",
        },
        {
          icon: "shield",
          title: "Less Workflow Visibility",
          body: "Reveal where management lacks a reliable view of progress and responsibilities.",
        },
        {
          icon: "site",
          title: "Unclear Technology Decisions",
          body: "Determine whether a problem requires AI, automation, integration, custom software, or simply a better-defined process.",
        },
      ],
    },
    approach: {
      ...sharedApproach,
      title: "Every Recommendation Starts with Understanding Your Workflow",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What We Analyse and Define.",
      body: "Our consulting connects operational understanding with technical judgment, helping construction teams move from a broad problem to a clearly defined improvement plan.",
      cards: [
        {
          icon: "workflow",
          image: serviceCapabilityImages.bProcess,
          title: "Workflow Mapping",
          body: "Visualise how work moves between people, departments, documents, and systems.",
        },
        {
          icon: "dashboard",
          image: serviceCapabilityImages.bBottleneck,
          title: "Bottleneck Analysis",
          body: "Identify the stages where work regularly slows down, returns for correction, or depends on manual coordination.",
        },
        {
          icon: "blueprint",
          image: serviceCapabilityImages.bMap,
          title: "Automation Opportunity Assessment",
          body: "Identify repetitive, rule-based, and data-heavy activities that could be simplified or automated.",
        },
        {
          icon: "docs",
          image: serviceCapabilityImages.bWorkshop,
          title: "AI Use-Case Assessment",
          body: "Evaluate where AI can provide practical value, what data it would require, and where human review must remain part of the process.",
        },
        {
          icon: "cubes",
          image: serviceCapabilityImages.bSystems,
          title: "Systems & Integration Review",
          body: "Assess how existing tools are used, where data is being re-entered, and which systems should exchange information.",
        },
        {
          icon: "chat",
          image: serviceCapabilityImages.bPeople,
          title: "Technology Roadmapping",
          body: "Turn findings into a phased plan covering priorities, recommended solutions and dependencies. ",
        },
       
      ],
    },
    featured: sharedFeatured,
    why: sharedWhy,
    faq: workflowConsultingFaq,
    cta: sharedCta,
  },

  "integration-services": {
    slug: "integration-services",
    meta: {
      title: "Integration Services — ConX Orbit",
      description:
        "Connect new platforms with ERP, BIM, drawings, and the tools construction teams already use.",
    },
    hero: {
      badge: "INTEGRATION SERVICES",
      titleBefore: "Connect the Systems Your ",
      titleHighlight: "Projects Depend On",
      titleAfter: "",
      body: "We connect software, project data, documents, and AI capabilities into coordinated workflows—reducing repeated data entry and helping information move reliably between teams and systems.",
      primaryCta: { label: "Book Consultation", href: "/book-discovery" },
      secondaryCta: { label: "View Solutions", href: "/solutions" },
    },
    value: {
      badge: "WHERE IT CREATES VALUE",
      title: "One Connected Operating Picture",
      cards: [
        {
          icon: "docs",
          title: "Repeated Data Entry",
          body: "Reduce the need to enter the same project, material, quotation, inspection, or progress information. ",
        },
        {
          icon: "workflow",
          title: "Disconnected Project Systems",
          body: "Connect the platforms used for documents, project management, estimation, fabrication, and reporting.",
        },
        {
          icon: "blueprint",
          title: "Manual File Transfers",
          body: "Automate the movement of approved files and structured data between software, databases, cloud storage, and internal systems.",
        },
        {
          icon: "chat",
          title: "Delayed Information Updates",
          body: "Help relevant teams and systems receive current information when a record, document, status, or approval changes.",
        },
        {
          icon: "dashboard",
          title: "Fragmented Reporting",
          body: "Bring information from multiple sources into a more consistent operational view without replacing every existing tool.",
        },
        {
          icon: "cubes",
          title: "Isolated AI Capabilities",
          body: "Embed AI-based extraction, classification, comparison, or retrieval into the systems. ",
        },
      ],
    },
    approach: {
      ...sharedApproach,
      title: "Every Integration Starts with Understanding Your Workflow",
    },
    capabilities: {
      badge: "Capabilities",
      title: "Connecting Systems Without Breaking Daily Work.",
      body: "We design integrations around construction reality—drawings, commercial systems, and field tools—so data moves with the project, not against it.",
      cards: [
        {
          icon: "cubes",
          image: serviceCapabilityImages.cApi,
          title: "API Integrations",
          body: "Secure, maintainable connections between custom platforms and third-party software.",
        },
        {
          icon: "blueprint",
          image: serviceCapabilityImages.cBim,
          title: "BIM & Drawing Workflows",
          body: "Wire model and drawing pipelines into review, fabrication, and delivery tools.",
        },
        {
          icon: "dashboard",
          image: serviceCapabilityImages.cErp,
          title: "ERP / CRM Connectivity",
          body: "Keep commercial and project records aligned across estimating and delivery.",
        },
        {
          icon: "workflow",
          image: serviceCapabilityImages.cSync,
          title: "AI Workflow Integration",
          body: "Embed document extraction, drawing intelligence, knowledge retrieval, and computer vision capabilities. ",
        },
        {
          icon: "docs",
          image: serviceCapabilityImages.cDocs,
          title: "Data Transformation",
          body: "Convert information between different schemas and file formats, before it reaches another system.",
        },
        {
          icon: "chat",
          image: serviceCapabilityImages.cNotify,
          title: "Event & Notification Hooks",
          body: "Trigger the right alerts when status, drawings, or inspections change.",
        },
    
      ],
    },
    featured: sharedFeatured,
    why: sharedWhy,
    faq: integrationFaq,
    cta: sharedCta,
  },

  "training-implementation": {
    slug: "training-implementation",
    meta: {
      title: "Training & Implementation — ConX Orbit",
      description:
        "Onboarding, training, and rollout support so new systems become part of daily construction operations.",
    },
    hero: {
      badge: "TRAINING & IMPLEMENTATION",
      titleBefore: "Turn New Technology Into a",
      titleHighlight: " Working Part of the Business",
      titleAfter: "",
      body: "We help construction and façade teams introduce new systems, train the people who use them, and establish the processes required for consistent day-to-day adoption.",
      primaryCta: { label: "Book Consultation", href: "/book-discovery" },
      secondaryCta: { label: "View Related Solutions", href: "/solutions" },
    },
    value: {
      badge: "WHERE IT CREATES VALUE",
      title: "Adoption That Survives Real Project Pressure",
      cards: [
        {
          icon: "launch",
          title: "New System Introduction",
          body: "Prepare teams to adopt a newly developed AI system, platform, integration, or automated workflow.",
        },
        {
          icon: "standardize",
          title: "Inconsistent Ways of Working",
          body: "Establish a shared process so different users and departments operate the system consistently.",
        },
        {
          icon: "adoption",
          title: "Low Technology Adoption",
          body: "Identify practical barriers that prevent teams from using a new tool as intended.",
        },
        {
          icon: "roles",
          title: "Unclear Roles & Responsibilities",
          body: "Define who enters information, reviews outputs, resolves exceptions, and maintains the workflow.",
        },
        {
          icon: "validate",
          title: "AI Output Validation ",
          body: "Train users to interpret AI-generated results, check supporting evidence, and recognize when human review is required.",
        },
        {
          icon: "transition",
          title: "Operational Transition",
          body: "Move from existing manual processes to a new workflow without losing critical information or operational control.",
        },
      ],
    },
    approach: {
      ...sharedApproach,
      title: "Every Rollout Starts with Understanding Your Workflow",
    },
    capabilities: {
      badge: "Capabilities",
      title: "Implementation Built for Construction Teams.",
      body: "Training and rollout are designed around how projects actually run—so new tools stick under deadline pressure.",
      cards: [
        {
          icon: "chat",
          image: serviceCapabilityImages.tOnboard,
          title: "Implementation Planning",
          body: "Define rollout stages, dependencies, risks, and the resources required for adoption.",
        },
        {
          icon: "workflow",
          image: serviceCapabilityImages.tSupport,
          title: "Workflow Configuration",
          body: "Configure user roles, approval paths, templates, data structures, and system rules.",
        },
        {
          icon: "docs",
          image: serviceCapabilityImages.tTrain,
          title: "User Training",
          body: "Live sessions and recorded refreshers tailored to each role.",
        },
        {
          icon: "devices",
          image: serviceCapabilityImages.tField,
          title: "AI Readiness & Responsible Use",
          body: "Help teams understand AI capabilities, limitations, data requirements, validate responsbilities.",
        },
        {
          icon: "dashboard",
          image: serviceCapabilityImages.tAdopt,
          title: "Adoption Tracking",
          body: "See who is using the system—and where coaching is still needed.",
        },
        {
          icon: "blueprint",
          image: serviceCapabilityImages.suportT,
          title: "Ongoing Support",
          body: "A durable support path for questions, fixes, and small enhancements.",
        },
      ],
    },
    featured: sharedFeatured,
    why: sharedWhy,
    faq: trainingImplementationFaq,
    cta: sharedCta,
  },

  "construction-website-development": {
    slug: "construction-website-development",
    meta: {
      title: "Construction Website Development — ConX Orbit",
      description:
        "Marketing and product websites for construction and façade companies—fast, clear, and easy to update.",
    },
    hero: {
      badge: "CONSTRUCTION WEBSITE DEVELOPMENT",
      titleBefore: "Digital Platforms Built for ",
      titleHighlight: "How Your Business Operates",
      titleAfter: "",
      body: "We design and develop professional websites and web platforms for façade contractors, manufacturers, consultants, and construction specialists—combining industry understanding with clear positioning and purposeful technology.",
      primaryCta: { label: "Book Consultation", href: "/book-discovery" },
      secondaryCta: { label: "View Related Solutions", href: "/solutions" },
    },
    value: {
      badge: "WHERE IT CREATES VALUE",
      title: "Where a Better Website Creates Value",
      cards: [
        {
          icon: "compare",
          title: "Unclear Market Positioning",
          body: "Present your specialization, technical capabilities, and project experience with greater clarity.",
        },
        {
          icon: "quote",
          title: "Lead Capture",
          body: "Turn project inquiries into structured conversations your team can act on.",
        },
        {
          icon: "boq",
          title: "Project Showcase",
          body: "Tell project stories with the detail technical buyers expect.",
        },
        {
          icon: "docs",
          title: "Content Control",
          body: "Update case studies, news, and capabilities without waiting on a developer every time.",
        },
        {
          icon: "shield",
          title: "Trust Signals",
          body: "Certifications, partners, and safety culture presented with credibility.",
        },
        {
          icon: "site",
          title: "Performance",
          body: "Fast loads on site Wi‑Fi and mobile—because your audience is often on the go.",
        },
      ],
    },
    approach: {
      ...sharedApproach,
      title: "Every Website Starts with Understanding Your Workflow",
    },
    capabilities: {
      badge: "Capabilities",
      title: "Sites Built for How Construction Buyers Decide.",
      body: "From brand storytelling to product marketing, we ship websites that match the pace and language of façade and construction teams.",
      cards: [
        {
          icon: "devices",
          image: serviceCapabilityImages.wMarketing,
          title: "Marketing Sites",
          body: "Responsive company sites with clear navigation and strong project narratives.",
        },
        {
          icon: "blueprint",
          image: serviceCapabilityImages.wProduct,
          title: "Product Pages",
          body: "Dedicated surfaces for platforms and modules you want the market to find.",
        },
        {
          icon: "docs",
          image: serviceCapabilityImages.wCms,
          title: "CMS & Editing",
          body: "Practical content models so marketing can publish without breaking layout.",
        },
        {
          icon: "dashboard",
          image: serviceCapabilityImages.wSeo,
          title: "SEO Foundations",
          body: "Structure and metadata that help the right buyers discover you.",
        },
        {
          icon: "chat",
          image: serviceCapabilityImages.wForms,
          title: "Inquiry Flows",
          body: "Contact and discovery forms wired to the inbox your founders actually check.",
        },

        {
          icon: "cubes",
          image: serviceCapabilityImages.wIntegrate,
          title: "Integrations",
          body: "Analytics, CRM, and calendar hooks without slowing the experience.",
        },
      ],
    },
    featured: sharedFeatured,
    why: sharedWhy,
    faq: constructionWebsiteFaq,
    cta: sharedCta,
  },
};

export function getServicePage(slug) {
  return servicePages[slug] || null;
}

export const serviceSlugs = Object.keys(servicePages);
