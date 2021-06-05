import { connectToDatabase } from '../util/db'
import {ThemeContext} from '../util/theme-context';
import {useContext} from 'react';
import Head from 'next/head'
import Menu from '../components/Menu'
import Announcement from '../components/Announcement'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../styles/announcement.module.css'

export default function Guidance({ announcementStream }) {
  const theme = useContext(ThemeContext);

  return (
    <div >
      <Head>
        <title>Guidance Announcements</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main style={{backgroundColor: theme.backgroundBlue}}>
        <div>
          <h1 style={{color: theme.titleColor}}>Guidance Announcements</h1>

          <div style={{color: theme.backgroundBlue}}>
            <Breadcrumb >
              <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.breadcrumb}>Guidance</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.sectionPermanent}>
              <div className={styles.permanentAnnouncement}> <h1>Sample Guidance Announcement </h1> Sample Guidance Announcement <br/>Sample Guidance Announcement </div>
              <div className={styles.permanentAnnouncement}> <h1>Sample Guidance Announcement </h1>Sample Guidance Announcement </div>
              <div className={styles.permanentAnnouncement}><h1>Sample Guidance Announcement </h1>Sample Guidance Announcement Sample Guidance Announcement Sample Guidance Announcement </div>

            </div>

            <div className={styles.sectionMain}>
              {announcementStream.slice(0).reverse().map((announcement) => (
                announcement.stream == 'guidance'
                  ? <div >
                    <Announcement lastmodified={announcement.lastUpdatedDate} firstcreated={announcement.firstPostedDate} heading={announcement.title} description={announcement.desc} />
                  </div>
                  : null
              ))}
            </div>
            
          </div>

          


        </div>
      </main>

    </div>
  )
}


export const getServerSideProps = async function () {
  const { client } = await connectToDatabase();
  const result = await client.db('authdb').collection("announcements").find({}).toArray();

  return {
    props: {
      announcementStream: JSON.parse(JSON.stringify(result))
    }
  }

}