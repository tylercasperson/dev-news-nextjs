import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
