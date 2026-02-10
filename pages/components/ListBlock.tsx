import React from "react";
import styles from "@/styles/portfolio.module.scss";

type Props = {
  title: string;
  items?: string[];
  content?: string[];
  image?: string[];
};

export default function ListBlock({ title, items, content, image }: Props) {
  return (
    <div className={styles.block}>
      <h3>{title}</h3>

      {content && (
        <div className={styles.contentArea}>
          {content.map((text, i) => <p key={i} className={styles.description}>{text}</p>)}
        </div>
      )}

      {image && (
        <div className={styles.imageArea}>
          {image.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`${title} 결과 이미지 ${i + 1}`} 
            />
          ))}
        </div>
      )}

      {items && (
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}