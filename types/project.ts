export interface ProjectSection {
  title: string;
  content?: string[];  
  items?: string[];
}

export interface CaseStudyItem {
  title: string;
  content?: string[];  
  testImg?: string[];
  items?: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  architectureImage?: string;
  templateBlocks: ProjectSection[];
  caseArchitectureImage?: string;
  caseStudy: CaseStudyItem[];
}

export type ProjectId = 'portforu' | 'opparecipe';