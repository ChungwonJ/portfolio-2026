export interface ProjectSection {
  title: string;
  content: string[];
}

export interface ProjectLink {
  title: string;
  src: string[];
}

export interface CaseStudyItem {
  title: string;
  content?: string[];
  items?: string[];
  testImg?: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  architectureImage?: string;
  projectSrc?: ProjectLink[];
  templateBlocks: ProjectSection[];
  caseArchitectureImage?: string;
  architectureSrc?: ProjectLink[]; 
  caseStudy: CaseStudyItem[];
}

export type ProjectId = "portforu" | "opparecipe";