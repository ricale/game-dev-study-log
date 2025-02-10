import Link from 'next/link';

import { getAllPosts } from '~/lib/api';

import styles from './page.module.css';

const Page = async () => {
  const posts = await getAllPosts();
 
  return (
    <div className={styles.container}>
      <h1>Game dev study log</h1>
      <div>
        {posts.map(({ id, date, title, html }) => (
          <div className={styles.post} key={id}>
            <h2 className={styles.postTitle}>
              <Link href={`/posts/${id}`}>
                {date}
              </Link>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
            </h2>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
