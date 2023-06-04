import '../styles/globals.css'
import '../styles/terminal.css'
import '../styles/profilehead.css'
import '../styles/skills.css'
import '../styles/education.css'
import '../styles/contacts.css'
import '../styles/reset.css'
import '../styles/workPage.css'
import Nav from '../components/nav'
import Head from 'next/head';


function MyApp({ Component, pageProps}) {
  return(
  <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet"></link>
    </Head>
    <Nav />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
