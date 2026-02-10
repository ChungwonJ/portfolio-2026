import React from 'react'
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectId } from '@/types/project';
import { notFound } from 'next/navigation';
import styles from '@/styles/portfolio.module.scss';
import SectionTitle from '../../components/SectionTitle';
import ListBlock from '../../components/ListBlock';
import { useRouter } from 'next/router';
import BackButton from '@/pages/components/BackButton';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return null;

  const project = PROJECTS_DATA[id as ProjectId];

  if (!project) notFound();

  return (
    <main className={styles.container}>
      {/* <nav className={styles.navigation}>
        <BackButton label="뒤로가기" />
      </nav> */}
      <header className={styles.header}>
        <h1>{project.name}</h1>
      </header>

      <SectionTitle title="Project" />
      <div className={styles.imageGrid}>
        <img
          src={project.architectureImage}
          alt={`${project.name} 전체 아키텍처`}
        />
      </div>

      {project.templateBlocks.map((item, index) => (
        <ListBlock
          key={`template-${index}`}
          title={item.title}
          content={item.content}
          items={item.items}
        />
      ))}

      <SectionTitle title="Case Study : Elasticsearch를 활용한 검색 성능 개선" />
      <div className={styles.imageGrid}>
        <img
          src={project.caseArchitectureImage}
          alt={`${project.name} 아키텍쳐`}
        />
      </div>
      {project.caseStudy.map((item, index) => (
        <ListBlock
          key={`case-${index}`}
          title={item.title}
          content={item.content}
          image={item.testImg}
          items={item.items}
        />
      ))}
    </main>
  );
}