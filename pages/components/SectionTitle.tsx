import React from 'react'
import styles from "../../styles/portfolio.module.scss";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <h2 className="sectionTitle">{title}</h2>;
}
