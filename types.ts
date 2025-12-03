
export type Language = 'es' | 'en';

export interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'tech' | 'business' | 'soft';
}

export interface EducationEntry {
  type: 'academic' | 'certification' | 'course';
  title: string;
  institution: string;
  period: string; // "YYYY - YYYY" or "YYYY"
  details?: string; // Optional description for courses/certifications
  url?: string; // Optional URL for digital credentials
}

export interface InvestmentCategory {
  name: string;
  allocation: number; // percentage of total portfolio
  type: 'index' | 'pension' | 'other';
}

export interface ToolCategory {
  category: string;
  tools: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    summary: string;
  };
  projects: Project[];
  experience: Job[];
  itSkills: Skill[];
  softSkills: string[];
  personalTraits: string[];
  businessKnowledge: string[];
  investmentPortfolio: InvestmentCategory[];
  education: EducationEntry[];
  investmentInsight: string;
  qualifiedRoles: string[];
  physicalTools: ToolCategory[];
}