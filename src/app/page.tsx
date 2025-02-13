import Article from '~/components/Article';
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
        {posts.map((post) => (
          <Article
            key={post.id}
            className={styles.item}
            data={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
