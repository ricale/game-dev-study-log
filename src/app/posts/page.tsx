import Link from 'next/link';

import Header from '~/components/Header';
import { getAllPosts } from '~/lib/api';

import styles from './page.module.css';

const Page = async () => {
  const posts = await getAllPosts();
 
  return (
    <div className={styles.container}>
      <Header />
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.item}>
            <span className={styles.date}>{post.date.replace(/-/g, '.')}</span>
            <Link href={`/posts/${post.id}`} className={styles.title}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
