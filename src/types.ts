export interface Project {
  id: string;
  year?: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  fullDescription: string;
  githubLink?: string;
  link?: string;
  vscodeLink?: string;
}

export interface Certification {
  id: string;
  year: string;
  issuer: string;
  title: string;
  link?: string;
  issueDate?: string;
  skills?: string[];
}
