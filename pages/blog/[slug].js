import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../../styles/Posts.module.css';
import {marked} from 'marked'

marked.setOptions({
   mangle: false,
   headerIds: false

 });


 
export default function PostPage({
   frontmatter:{title,date},
   slug,
   content
}) {
   return(
      <div className={styles.postWrap}>

      <div className={styles.postContainer}>
         <div className={styles.date}>{date}</div>
         <div className={styles.title}>{title}</div>
         <div className={styles.body}>
         <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

         </div>
      </div>
      </div>

   )
}


export async function getStaticPaths() {
   const files = fs.readdirSync(path.join('posts'))
 
   const paths = files.map((filename) => ({
     params: {
       slug: filename.replace('.md', ''),
     },
   }))
 
   return {
     paths,
     fallback: false,
   }
 }
 
 export async function getStaticProps({ params: { slug } }) {
   const markdownWithMeta = fs.readFileSync(
     path.join('posts', slug + '.md'),
     'utf-8'
   )
 
   const { data: frontmatter, content } = matter(markdownWithMeta)
 
   return {
     props: {
       frontmatter,
       slug,
       content,
     },
   }
 }
 