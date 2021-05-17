import Head from 'next/head'
import Menu from '../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/mainpages.module.css'
import { ThemeContext } from '../util/theme-context';
import { useContext } from 'react';

export default function StucoHome() {
  const theme = useContext(ThemeContext);

    return(
        <div>
            <Head>
                <title>Stuco</title>
            </Head>
            <Menu/>
            <main>
                <h1>Stuco Main Page</h1>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className={styles.breadcrumb}>STUCO</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className={styles.gridContainer}>
                <div className={styles.featured}>
                  <img className={styles.featuredimage} src='https://cdn.someecards.com/posts/tk-teachers-share-the-changes-theyve-seen-at-high-school-reunions-WPf.png' />
                  <div>
                    <a className={styles.featuredtitle}href='/stuco/meet-stuco'>Meet our team!</a>
                  </div>
                </div>


                <div className={styles.important}>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Important Announcment Numero 1</a>
                  </div>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Important Announcment Numero 2</a>
                  </div>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Important Announcment Numero 3</a>
                  </div>

                </div>

                <div className={styles.latest}>
                  <h1>Latest</h1>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Recent Announcment Numero 1</a>
                  </div>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Recent Announcment Numero 1</a>
                  </div>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/announcements'>Recent Announcment Numero 1</a>
                  </div>
                  
                </div>
              </div>



            </main>
        
        </div>
        
    )
}