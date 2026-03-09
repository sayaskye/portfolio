export interface ProjectFrontmatter {
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  featured: boolean;
  image?: {
    src: string;
    alt: string;
  };
  github?: string;
  demo?: string;
  language: string;
}
