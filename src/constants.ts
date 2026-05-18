import { Project, Certification } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Containless",
    image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=800",
    tags: ["Docker", "Go", "Infrastructure"],
    description: "A lightweight container management platform designed for rapid deployment and orchestration of microservices.",
    fullDescription: "Containless is a specialized container management tool written in Go, focusing on minimal resource overhead. It provides a CLI and a web dashboard to monitor container health, resource usage, and logs in real-time. Designed for developers who need speed without the complexity of K8s for smaller staging environments.",
    githubLink: "https://github.com/example/containless",
    link: "#"
  },
  {
    id: "2",
    title: "Openmerlin",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Open Source", "React", "Community"],
    description: "A collaborative open-source platform for sharing and discovery of innovative software architecture patterns.",
    fullDescription: "Openmerlin bridge the gap between architectural theory and practice. It allows architects to upload visual patterns and link them to reference implementations. It features a custom canvas-based diagramming tool built on top of Konva.js, integrated with a React frontend and Node.js backend.",
    githubLink: "https://github.com/example/openmerlin",
    link: "#"
  },
  {
    id: "3",
    title: "DevGuideAI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["LLM", "Next.js", "AI"],
    description: "An AI-powered mentor that provides personalized learning paths and automated code reviews for software engineers.",
    fullDescription: "DevGuideAI leverages Gemini 1.5 Pro to analyze GitHub repositories and suggest improvements based on standard design patterns. It generates a roadmap for junior developers to reach senior-level competency in specific tech stacks by identifying gaps in their current coding style.",
    githubLink: "https://github.com/example/devguide-ai",
    link: "#"
  },
  {
    id: "4",
    title: "RRJ Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    tags: ["E-commerce", "Performance", "UI/UX"],
    description: "A high-performance luxury timepiece marketplace featuring seamless transitions and immersive product storytelling.",
    fullDescription: "RRJ Watch is an experimental e-commerce site where the focus is on motion design. Using Framer Motion and Three.js, it creates a tactile shopping experience. Every watch component can be inspected in 3D, and the purchase flow is integrated with a custom Stripe microservice.",
    githubLink: "https://github.com/example/rrj-watch",
    link: "#"
  },
  {
    id: "5",
    title: "Chat-pdf",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenAI", "NLP"],
    description: "An intelligent document interaction tool that allows users to query and summarize large PDF documents using natural language.",
    fullDescription: "Chat-pdf uses RAG (Retrieval-Augmented Generation) to process thousands of pages across multiple PDF files. It uses Pinecone for vector storage and OpenAI's GPT-4 for high-fidelity responses. It's built to handle complex legal and technical documentation where context is everything.",
    githubLink: "https://github.com/example/chat-pdf",
    link: "#"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-cloud-foundations",
    year: "2025",
    issueDate: "5/19/2025",
    issuer: "AWS",
    title: "AWS Academy Graduate – Cloud Foundations",
    skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
    link: "https://www.credly.com/badges/61043168-2414-40d4-bb88-16f307d29b32/public_url"
  },
  {
    id: "aws-cloud-security",
    year: "2025",
    issueDate: "12/9/2025",
    issuer: "AWS",
    title: "AWS Academy Graduate – Cloud Security Foundations",
    skills: ["Cloud Security", "AWS", "AWS Cloud", "AWS Cloud Security"],
    link: "https://www.credly.com/badges/034c3cdb-c518-4956-a74f-fb6b17edbc26/public_url"
  },
  {
    id: "ccna-switching",
    year: "2024",
    issueDate: "8/24/2024",
    issuer: "Cisco",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    skills: ["Routing", "Switching Protocols", "Wireless LAN Controllers", "Access Security", "High Availability", "IP Services"],
    link: "https://www.credly.com/badges/bde4db6f-a7e4-4df3-9d5a-6599af203b9d/public_url"
  },
  {
    id: "intro-cybersecurity",
    year: "2025",
    issueDate: "4/5/2025",
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    skills: ["Cybersecurity", "Threat Detection", "Cyber Best Practices", "Network Vulnerabilities", "Privacy & Data Confidentiality"],
    link: "https://www.credly.com/badges/a3d528c1-854b-4652-b728-f93ac9ad6e3b/public_url"
  },
  {
    id: "network-defense",
    year: "2025",
    issueDate: "5/7/2025",
    issuer: "Cisco",
    title: "Network Defense",
    skills: ["Application Security", "Cloud Security", "Firewalls", "Cryptography", "Network Hardening", "Defense-in-Depth", "System & Network Defense"],
    link: "https://www.credly.com/badges/d3e7ffeb-3a4b-46d5-ae51-ce61e9d7f7a2/public_url"
  }
];
