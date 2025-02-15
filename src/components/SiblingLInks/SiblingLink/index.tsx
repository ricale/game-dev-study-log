import Link from 'next/link';

import styles from './index.module.css';

type Props = {
  id?: string
  label: string
}
// NOTE(kangseong): 다른 곳에서 사용하게 되면 이름 및 위치 변경
const SiblingLink = ({ id, label }: Props) => {
  if (!id) {
    return (
      <div className={`${styles.link} ${styles.disabled}`}>
        {label}
      </div>
    );
  }
  return (
    <Link
      className={styles.link}
      href={`/posts/${id}`}
    >
      {label}
    </Link>
  );
};

export default SiblingLink;
