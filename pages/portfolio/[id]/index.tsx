import React from 'react'
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectId } from '@/types/project';
import { notFound } from 'next/navigation';
import styles from '@/styles/portfolio.module.scss';
import SectionTitle from '../../components/SectionTitle';
import ListBlock from '../../components/ListBlock';
import { useRouter } from 'next/router';
import BackButton from '@/pages/components/BackButton';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const project = PROJECTS_DATA[id as ProjectId];

  if (!project) {
    notFound();
    return null;
  }

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

      {project.projectSrc && project.projectSrc.length > 0 && (
        <ul>
          {project.projectSrc.map((link, linkIndex) => (
            <React.Fragment key={`link-group-${linkIndex}`}>
              {link.src.map((url, urlIndex) => (
                <li key={`${linkIndex}-${urlIndex}`} className={styles.src}>
                  {link.title}
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}

      {/* templateBlocks 렌더링 */}
      {project.templateBlocks.map((item, index) => (
        <ListBlock
          key={`template-${index}`}
          title={item.title}
          content={item.content}
          // items 속성은 ProjectSection에 없으므로 제거
        />
      ))}

      <SectionTitle title="Case Study : Elasticsearch를 활용한 검색 성능 개선" />
      
      {project.caseArchitectureImage && (
        <div className={styles.imageGrid}>
          <img
            src={project.caseArchitectureImage}
            alt={`${project.name} 아키텍처`}
          />
        </div>
      )}

      {project.architectureSrc && project.architectureSrc.length > 0 && (
        <ul>
          {project.architectureSrc.map((link, linkIndex) => (
            <React.Fragment key={`arch-link-${linkIndex}`}>
              {link.src.map((url, urlIndex) => (
                <li key={`${linkIndex}-${urlIndex}`} className={styles.src}>
                  {link.title}
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}

      {/* caseStudy 렌더링 */}
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