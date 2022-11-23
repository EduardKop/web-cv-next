
import Contacts from '../components/contacts'
import Education from '../components/education'
import ProfileHead from '../components/profile-head'
import SkillsContainer from '../components/skills'
import TypedTerminal from '../components/terminal'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>  
      <div className='wrapper'>
      <div className='container-app'>
        <TypedTerminal />
        <ProfileHead />
        <SkillsContainer />
        <Education />
        <Contacts />
      </div>
    </div>
    </div>
  )
}
