import React from 'react'
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectData } from '@/types/project';

export default function ProjectListPage() {
  const projectList: ProjectData[] = Object.values(PROJECTS_DATA);

  return (
    <div className="p-8">
      <h1>프로젝트 리스트</h1>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <Link 
              href={`/portfolio/${project.id}`} 
            >
              {project.name} 상세보기 →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}