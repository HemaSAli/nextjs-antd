import React from 'react';
import { Button } from 'antd';
import styles from './styles.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Button type='primary'>
        Nextjs with Antd & Sass
      </Button>
    </div>
  );
}
