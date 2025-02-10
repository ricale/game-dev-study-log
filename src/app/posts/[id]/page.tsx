import { getPostById, getAllPosts } from '~/lib/api';

type Props = {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
const Post = async ({ params: { id } }: Props) => {
  const { html, title, date } = await getPostById(id);
  return (
    <article>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default Post;
 
export async function generateStaticParams() {
  const posts = await getAllPosts();
 
  return posts.map(post => ({
    id: post.id,
  }));
}
 
export async function generateMetadata({ params: { id } }: Props) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}
