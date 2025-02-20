import Article from '~/components/Article';
import Header from '~/components/Header/indext';
import { getAllPosts } from '~/lib/api';

import styles from './page.module.css';

const Page = async () => {
  const posts = await getAllPosts();
 
  return (
    <div className={styles.container}>
      <Header />
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
