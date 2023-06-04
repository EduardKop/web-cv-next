import styles from '../styles/Posts.module.css';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post';

export default function Posts({ posts }) {
   return (
     <div className={styles.posts_wrapper}>
       <div className={styles.posts}>
         {posts.map((post, index) => (
           <Post key={post.slug} post={post} />
         ))}
       </div>
     </div>
   );
 }

export async function getStaticProps() {
   //Get files from the posts dir
   const files = fs.readdirSync(path.join('posts'))

   //Get slug and frontmatter from posts
   const posts = files.map(filename=> {
      const slug = filename.replace('.md','')
      const markdownWithMeta = fs.readFileSync(path.join('posts',filename), 'utf-8')
      
      const {data: frontmatter = {}} = matter(markdownWithMeta)

      return{
         slug,
         frontmatter
      }
   }).filter(post => post.frontmatter && post.slug !== '.DS_Store');

   return {
      props:{
         posts,
      }
   }
}
