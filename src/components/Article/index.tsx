import Link from 'next/link';

import { Post } from '~/lib/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  data: Post;
}
const Article = ({ className: _className, data }: Props) => {
  const className = `markdown-body ${styles.post}${_className ? ` ${_className}` : ''}`;

  const year = +data.date.slice(0, 4) % 100;
  const month = data.date.slice(5, 7);
  const day = data.date.slice(8);
  const dateString = `${year}${month}${day}`;

  return (
    <article className={className} key={data.id}>
      <h1 className={styles.title}>
        <Link href={`/posts/${data.id}`}>
          {`${dateString} ${data.title}`}
        </Link>
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </article>
  );
};

export default Article;
