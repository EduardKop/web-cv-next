import '../styles/globals.css'
import '../styles/terminal.css'
import '../styles/profilehead.css'
import '../styles/skills.css'
import '../styles/education.css'
import '../styles/contacts.css'
import '../styles/reset.css'
import '../styles/workPage.css'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return(
    <>
  <Nav />
  <Component {...pageProps} />
    </>
  )
}

export default MyApp
