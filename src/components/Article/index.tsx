import Link from 'next/link';

import { Post } from '~/lib/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  data: Post;
}
const Article = ({ className: _className, data }: Props) => {
  const className = `markdown-body ${styles.post}${_className ? ` ${_className}` : ''}`;

  return (
    <article className={className} key={data.id}>
      <div className={styles.titleRow}>
        <span className={styles.date}>{data.date.replace(/-/g, '.')}</span>
        <Link href={`/posts/${data.id}`}>
          <h1>
            {data.title}
          </h1>
        </Link>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </article>
  );
};

export default Article;
