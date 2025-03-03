import Link from 'next/link';

import { Post } from '~/lib/api';

import SiblingLink from './SiblingLink';
import styles from './index.module.css';

type Props = {
  prev?: Post;
  next?: Post;
}
const SiblingLinks = ({ prev, next }: Props) => {
  return (
    <div className={styles.container}>
      <SiblingLink id={prev?.id} label='<<<' />
      <Link className={styles.link} href="/posts">☰</Link>
      <SiblingLink id={next?.id} label='>>>' />
    </div>
  );
};

export default SiblingLinks;
