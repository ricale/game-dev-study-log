import Link from 'next/link';

import styles from './index.module.css';

type Props = {
  className?: string
}
const Header = ({ className }: Props) => {
  return (
    <>
      <div className={[styles.titleRow, className].filter(Boolean).join(' ')}>
        <h1 className={styles.title}>
          <Link href="/">Game Dev Study Log</Link>
        </h1>
        <address className={styles.writer}>
        by <a href="https://ricale.kr/blog" target="_blank">ricale</a>
        </address>
      </div>
      <p>취미로 하는 게임 개발 공부 기록</p>
    </>
  );
};

export default Header;
