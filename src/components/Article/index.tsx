import Link from 'next/link';

import { Post } from '~/lib/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  data: Post;
}
const Article = ({ className: _className, data }: Props) => {
  const className = `${styles.post}${_className ? ` ${_className}` : ''}`;

  const year = +data.date.slice(0, 4) % 100;
  const month = data.date.slice(5, 7);
  const day = data.date.slice(8);
  const dateString = `${year}${month}${day}`;

  return (
    <article className={className} key={data.id}>
      <h2>
        <Link className={styles.postTitleRow} href={`/posts/${data.id}`}>
          <span className={styles.postDate}>
            {dateString}
          </span>
          <span>
            {data.title}
          </span>
        </Link>
      </h2>
      <div
        className={`markdown-body ${styles.postContent}`}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </article>
  );
};

export default Article;
