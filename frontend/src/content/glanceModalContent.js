import panelXImage from "../assets/images/panelx-Db.PNG";
import quotation from "../assets/images/Quotation.png";
import checkmateImage from "../assets/images/checkmate-mockup.png"

export const glanceModalContent = {
  badge: "CONX ORBIT",
  title: "AI & Technology Built Around Real Workflows.",
  body: "We build intelligent systems for façade and construction teams.",
  solutionsLabel: "FEATURED SOLUTIONS",
  solutions: [
    {
      badge: "CLIENT SYSTEM",
      title: "PanelX",
      body: "A façade panel management system that connects panel data, production, and project tracking in one workflow.",
      href: "/solutions/panel-x",
      demoHref: "/solutions/panel-x#demo",
      image: panelXImage,
    },
    {
      badge: "INTERNAL PRODUCT",
      title: "Checkmate",
      body: "Site Inspection through voice interaction, attach site photos and generate report. ",
      href: "/solutions/checkmate",
      demoHref: "/solutions/checkmate#demo",
      image: checkmateImage,
    },
    {
      badge: "WORKFLOW SOLUTION",
      title: "Quotation Automation",
      body: "An AI-assisted workflow that extracts project requirements and organizes quotation data from drawings and documents.",
      href: "/solutions/quote-automation",
      demoHref: "/solutions/quote-automation#demo",
      image: quotation,
    },
  ],
  footerPrompt: "See what we're building.",
  primaryCta: { label: "Explore Solutions", href: "/solutions" },
  secondaryCta: { label: "Book a Discovery Call", href: "/book-discovery" },
  actions: {
    viewDemo: "View Demo",
    learnMore: "Learn More",
  },
};
