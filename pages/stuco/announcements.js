import Head from 'next/head'
import Menu from '../../components/Menu'
import Announcement from '../../components/Announcement'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/homepage.module.css'

export default function StucoAnnouncements() {
  return (
    <div>
      <Head>
        <title>Student Council Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main>
          <div>
              <h1>Announcements</h1>

              <div>
                <Breadcrumb>
                  <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item href='/stuco' className={styles.breadcrumb}>Stuco</Breadcrumb.Item>
                  <Breadcrumb.Item active className={styles.breadcrumb}>Announcements</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              

              <div>
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <Announcement/>
              </div>
                  
              
          </div>
      </main>

    </div>
  )
}
