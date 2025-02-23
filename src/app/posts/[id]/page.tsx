import Article from '~/components/Article';
import Header from '~/components/Header';
import SiblingLinks from '~/components/SiblingLInks';
import { getPostById, getAllPosts } from '~/lib/api';

import styles from './page.module.css';

type Props = {
  params: Promise<{ id: string }>
}
const Post = async ({ params }: Props) => {
  const { id } = await params;

  const posts = await getAllPosts();
  const currentIndex = posts.findIndex(post => post.id === id);

  const current = posts[currentIndex];
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;

  return (
    <div className={styles.container}>
      <Header />
      <Article
        className={styles.item}
        data={current}
      />
      <SiblingLinks prev={prev} next={next}/>
    </div>
  );
};

export default Post;
 
export async function generateStaticParams() {
  const posts = await getAllPosts();
 
  return posts.map(post => ({
    id: post.id,
  }));
}
 
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const { title } = await getPostById(id);
  return {
    title,
  };
}
