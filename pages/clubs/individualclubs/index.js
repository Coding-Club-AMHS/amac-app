import Head from 'next/head'
import Menu from '../../../components/Menu'
import styles from '../../../styles/clubs.module.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { ThemeContext } from '../../../util/theme-context';
import { useContext } from 'react';

export default function CodingClub() {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.background}>
      <Head>
        <title>AMHS Clubs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      
      <main style={{ background: theme.backgroundBlue }}>
      <h1>Clubs</h1>
      <div>
          <Breadcrumb>
            <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href='/../clubs'>Clubs List</Breadcrumb.Item>
            <Breadcrumb.Item active className={styles.breadcrumb}>Coding Club</Breadcrumb.Item>
          </Breadcrumb>
      </div>


      <div className={styles.gridContainer}>
          <div className={styles.sectionImage}>
              <img className={styles.clubImage} src='https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8'/>
              <div className={styles.links}>
                Instagram: @Coding_Club_AMHS
              </div>
              <button className={styles.linksbutton}> Classroom</button>
              <button> Instagram</button>
            
          </div>
          <div className={styles.sectionInfo}>
              <div className={styles.info}>
                <h1 className={styles.infoheading}>Coding Club</h1>
                <p className={styles.infodescription}>Coding club is an extracurricular activity at AMHS that aims to promote coding within the AMHS community. We wish to create opportunities for students to engage in practical coding experiences. Coding club hopes to help share and teach coding to others. During club meetings, members can prepare, practice, and learn coding for national coding contests. Coding club is a space where beginning and experienced coders can develop their skills. Beginner coders can learn at their own pace without the pressure from others.</p>
              </div>
              <div className={styles.sectionCalendar}>
                <table className={styles.calendar}>
                  <tr style={{backgroundColor: '#004AAD'}}>
                    <th className={styles.calendar} style={{color: 'white'}}>Mon</th>
                    <th className={styles.calendar} style={{color: 'white'}}>Tues</th>
                    <th className={styles.calendar} style={{color: 'white'}}>Wed</th>
                    <th className={styles.calendar} style={{color: 'white'}}>Thu</th>
                    <th className={styles.calendar} style={{color: 'white'}}>Fri</th>
                  </tr>
                  <tr >
                    <td className={styles.calendar}>N/A</td>
                    <td className={styles.calendar}>3:15 PM</td>
                    <td className={styles.calendar}>N/A</td>
                    <td className={styles.calendar}>N/A</td>
                    <td className={styles.calendar}>N/A</td>
                  </tr>
                </table>

              </div>
                


          </div>

      </div>
        
        
        

      </main>

    </div>
  )
}
