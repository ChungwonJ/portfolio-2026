import React from "react";
import { useRouter } from 'next/router';
import styles from '../../styles/backButton.module.scss';

interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = '뒤로가기' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/portfolio');
    }
  };

  return (
    <button 
      type="button" 
      className={styles.backButton} 
      onClick={handleBack}
    >
      <span>←</span> {label}
    </button>
  );
}