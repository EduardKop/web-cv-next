// import Link from 'next/link'
import styles from '../styles/Posts.module.css';

export default function Post({ post }) {
   return (
      <div key={post.id} className={styles.card}  onClick={() => window.location.href=`/blog/${post.slug}`}>
         <div className={styles.date}>
            <span>{post.frontmatter.date}</span>
         </div>
         <div className={styles.title}>
           <h2>{post.frontmatter.title}</h2>
         </div>
         <div className={styles.subtitle}>
            {post.frontmatter.subtitle}
         </div>
            <div className={styles.btn}>Read More</div>
      </div>
   );
}
