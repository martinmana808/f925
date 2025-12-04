import { 
  Bot, 
  Workflow, 
  DatabaseZap, 
  ShieldCheck, 
  Zap, 
  Users, 
  Activity,
  Cpu
} from 'lucide-react';
import { ServiceItem, TeamMember, ProcessStep, ValueProp, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "AI Assistants",
    subtitle: "RAG + Actions",
    description: "Private, secure, and highly specialized intelligent agents designed for your industry.",
    icon: Bot,
    features: [
      "Learn from manuals & procedures",
      "Understand natural language",
      "Execute tasks (email, CRM, forms)",
      "Industry-specific knowledge base"
    ]
  },
  {
    title: "Agentic Workflows",
    subtitle: "Autonomous Execution",
    description: "Agents that DO things, not just chat. Full lifecycle automation from diagnosis to reporting.",
    icon: Workflow,
    features: [
      "Diagnose → Recommend → Act",
      "Autonomous reporting",
      "Advanced multi-step reasoning",
      "Complex logic handling"
    ]
  },
  {
    title: "AI Automation",
    subtitle: "Deep Integration",
    description: "Connecting AI to your existing digital ecosystem for seamless operational flow.",
    icon: DatabaseZap,
    features: [
      "CRM, ERP, POS Integrations",
      "Pipelines & Ingestion",
      "Custom Dashboards & PWAs",
      "Google Workspace Automation"
    ]
  }
];

export const TEAM: TeamMember[] = [
  { 
    name: "Martin", 
    role: "Product & AI Automation",
    description: "Leads product strategy, focusing on turning complex AI capabilities into tangible business value."
  },
  { 
    name: "Leo", 
    role: "Infrastructure & Systems",
    description: "Architects scalable, secure, and resilient infrastructure to run mission-critical agentic systems."
  },
  { 
    name: "Mike", 
    role: "Operations & Retail Expertise",
    description: "Ensures our products are grounded in operational reality, driving adoption and real-world impact."
  }
];

export const PROCESS: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "Deep dive into your operations, identifying high-impact AI opportunities and defining scope." },
  { number: "02", title: "Prototype", description: "Rapid development of a functional proof-of-concept focusing on core agentic behavior." },
  { number: "03", title: "Pilot", description: "Field-testing the AI assistant in a controlled operational environment to gather real usage data." },
  { number: "04", title: "Deploy", description: "Full integration, infrastructure scaling, and comprehensive training for a successful launch." },
  { number: "05", title: "Iterate", description: "Continuous monitoring, performance tuning, and feature expansion based on production results." },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Operational Expertise",
    description: "Built by people who deeply understand real-world operations, technical support, and retail logistics.",
    icon: Users
  },
  {
    title: "Field-Tested Performance",
    description: "Our solutions are rigorously tested and refined in the most demanding, real-world operational environments.",
    icon: Activity
  },
  {
    title: "Security & Compliance",
    description: "Prioritizing enterprise-grade data security, privacy, and industry compliance from day one.",
    icon: ShieldCheck
  },
  {
    title: "Fast, Iterative Results",
    description: "Rapid prototyping and deployment cycles to deliver measurable results and value quickly.",
    icon: Zap
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How is F925 different from a standard chatbot?",
    answer: "Standard chatbots typically just retrieve information. F925 builds 'Agentic' workflows that can reason, plan, and execute actions—like updating a CRM, sending an email, or diagnosing a complex technical issue—interacting directly with your existing software stack."
  },
  {
    question: "What is the typical timeline for an AI implementation?",
    answer: "We focus on speed to value. Our 'Discovery to Pilot' phase typically takes 4-6 weeks. This allows us to validate the use case in the real world before scaling to full production deployment."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We architect our solutions with enterprise-grade security. We can deploy primarily within your private cloud environment (GCP/AWS/Azure), ensuring your proprietary data never trains public models."
  },
  {
    question: "Do I need a large technical team to manage this?",
    answer: "No. We handle the heavy lifting of infrastructure and model tuning. We deliver finished products (dashboards, chat interfaces, background workers) that your operations team can use immediately."
  }
];