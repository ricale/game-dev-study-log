import Article from '~/components/Article';
import { getPostById, getAllPosts } from '~/lib/api';

import styles from './page.module.css';

type Props = {
  params: Promise<{ id: string }>
}
const Post = async ({ params }: Props) => {
  const { id } = await params;
  const post = await getPostById(id);
  return (
    <Article
      className={styles.item}
      data={post}
    />
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
