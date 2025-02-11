import Link from 'next/link';

import { getAllPosts } from '~/lib/api';

import styles from './page.module.css';

const Page = async () => {
  const posts = await getAllPosts();
 
  return (
    <div className={styles.container}>
      <h1>Game Dev Study Log</h1>
      <address>
        by <a href="https://ricale.kr/blog" target="_blank">ricale</a>
      </address>
      <p>취미로 하는 게임 개발 공부 기록</p>
      <div>
        {posts.map(({ id, date, title, html }) => (
          <article className={styles.post} key={id}>
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
