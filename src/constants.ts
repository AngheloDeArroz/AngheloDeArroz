import { Project, Certification } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Containless",
    image: "/images/containless.webp",
    tags: ["NPM Package", "VSCode Extension", "Runtime Isolation"],
    description: "Instant project runtimes. No containers, no global installs, no version conflicts.",
    fullDescription: "Containless is an npm package and VS Code extension that installs the exact runtime your project needs directly inside your project folder, keeping everything isolated without containers, version managers, or global installs.",
    githubLink: "https://github.com/AngheloDeArroz/Containless",
    link: "https://www.npmjs.com/package/containless?activeTab=readme",
    vscodeLink: "https://marketplace.visualstudio.com/items?itemName=containless.containless",
    platforms: ["NPM", "VSCode Marketplace", "GitHub"],
    technicalChallenge: "Every runtime publishes binaries differently. Node.js ships clean tarballs, Python requires python-build-standalone for portable static builds, Java resolves through Adoptium's versioning scheme, and Ruby splits between ruby-builder on Unix and RubyInstaller2 on Windows.\n\nVersion detection has real edge cases. .nvmrc is trivial but package.json engines fields are semver ranges that need resolving, pyproject.toml uses PEP 518 syntax, and build.gradle comes in both Groovy and Kotlin DSL variants.\n\nThe VS Code extension writes only to workspace settings, never user settings, and tracks exactly which keys it owns so the reset command removes only what it wrote. On a fresh clone it checks for containless.json first — if the config exists but runtimes are missing it prompts, if neither exists it stays quiet."
  },
  {
    id: "2",
    title: "Openmerlin",
    image: "/images/openmerlin.webp",
    tags: ["Open Source", "React", "Community"],
    description: "A collaborative open-source platform for sharing and discovery of innovative software architecture patterns.",
    fullDescription: "Openmerlin bridge the gap between architectural theory and practice. It allows architects to upload visual patterns and link them to reference implementations. It features a custom canvas-based diagramming tool built on top of Konva.js, integrated with a React frontend and Node.js backend.",
    githubLink: "https://github.com/example/openmerlin",
    link: "https://www.npmjs.com/package/openmerlin"
  },
  {
    id: "3",
    title: "DevGuide AI",
    image: "/images/devguideai.webp",
    tags: ["RAG", "FastAPI", "pgvector", "Python", "Gemini", "Next.js"],
    description: "An AI-powered codebase analysis platform that lets developers upload GitHub repositories and interact with them through natural-language questions.",
    fullDescription: "DevGuide AI is an AI-powered codebase analysis platform that enables developers to upload GitHub repositories through ZIP files and interact with the project using natural-language questions. The system uses Retrieval-Augmented Generation (RAG) to parse repositories, generate embeddings, retrieve semantically relevant code snippets, and provide contextual explanations that help developers quickly understand unfamiliar or complex codebases.",
    githubLink: "https://github.com/AngheloDeArroz/DevGuideAI",
    link: "#",
    platforms: ["Web App"],
    technicalChallenge: "The project required handling large and structurally different repositories while maintaining accurate semantic retrieval across multiple programming languages and file formats. Repository parsing involved recursively extracting files, chunking source code intelligently to preserve context, generating embeddings locally using sentence-transformers, and storing vectors efficiently in PostgreSQL with pgvector for similarity search. The retrieval pipeline also needed to balance embedding relevance, chunk size, and prompt context limits to improve Gemini-generated responses without introducing hallucinations or unrelated snippets. On the frontend, asynchronous upload progress, background indexing, and conversational query handling had to remain responsive while coordinating with FastAPI APIs and real-time retrieval workflows."
  },
  {
    id: "4",
    title: "RRJ Watch",
    year: "2025",
    image: "/images/rrjwatch.webp",
    tags: ["IoT", "Flutter", "Firebase"],
    description: "An IoT-powered aquarium monitoring and automation platform for real-time water quality tracking and smart fish care.",
    fullDescription: "RRJ Watch is an IoT-powered aquarium monitoring and automation platform designed to maintain stable water quality and automate critical fish care tasks. The system combines embedded sensors, cloud synchronization, and real-time dashboards through both web and Flutter mobile applications to help aquarium owners monitor and manage their tanks remotely.",
    githubLink: "https://github.com/example/rrj-watch",
    link: "https://rrjwatch.shop",
    platforms: ["Web App", "Mobile App", "IoT"],
    technicalChallenge: "The project required integrating multiple water quality sensors with different calibration behaviors, noisy analog readings, and varying sampling intervals while keeping real-time synchronization consistent across the IoT device, Firestore, the Flutter mobile app, and the web dashboard. Historical trend visualization introduced challenges in graph scaling, scrolling, and rendering multiple parameters simultaneously without affecting readability. Automation features such as scheduled feeding, pH balancing, and abnormal condition alerts also required fail-safe logic to prevent duplicate executions and false notifications, while Firebase Cloud Functions and Gemini AI were integrated to process real-time data, generate push notifications, and provide AI-driven insights based on historical water quality records."
  },
  {
    id: "5",
    title: "Chat-pdf",
    image: "/images/chatpdf.webp",
    tags: ["RAG", "pgvector", "Python", "sentence-transformers", "FastAPI"],
    description: "A full-stack semantic PDF search platform that lets users upload documents and ask natural-language questions to instantly retrieve exact excerpts with page references.",
    fullDescription: "Chat-pdf is a full-stack semantic PDF search platform that allows users to upload PDF documents, ask questions in natural language, and instantly retrieve exact excerpts with page references. The system uses local sentence embeddings and vector similarity search to provide fast and privacy-focused semantic retrieval without relying on external APIs or large language models.",
    githubLink: "https://github.com/AngheloDeArroz/ChatPDF",
    link: "#",
    platforms: ["Web App"],
    technicalChallenge: "The project required building an efficient semantic retrieval pipeline capable of processing large PDF documents while preserving contextual accuracy across fragmented text chunks. PDF extraction introduced inconsistencies in formatting, spacing, and page structures, requiring custom chunking logic to maintain meaningful semantic boundaries before generating embeddings with sentence-transformers. The backend also needed optimized vector indexing and similarity querying using PostgreSQL with pgvector to ensure low-latency searches even with thousands of embedded chunks. On the frontend, synchronizing semantic search results with the PDF viewer required accurate page mapping, responsive rendering, and seamless navigation between retrieved excerpts and their exact document locations without interrupting the reading experience."
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
