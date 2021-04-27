import { connectToDatabase } from '../../../util/db'
import {ThemeContext} from '../../../util/theme-context';
import {useContext} from 'react';
import Head from 'next/head'
import Menu from '../../../components/Menu'
import Announcement from '../../../components/Announcement'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../../styles/homepage.module.css'

export default function StucoAnnouncements({ announcementStream }) {
  const theme = useContext(ThemeContext);

  return (
    <div >
      <Head>
        <title>Student Council Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main style={{backgroundColor: theme.backgroundBlue}}>
        <div>
          <h1 style={{color: theme.titleColor}}>Announcements</h1>

          <div style={{color: theme.backgroundBlue}}>
            <Breadcrumb >
              <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='/stuco' className={styles.breadcrumb}>Stuco</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.breadcrumb}>Announcements</Breadcrumb.Item>
            </Breadcrumb>
          </div>


          <div>
            {announcementStream.slice(0).reverse().map((announcement) => (
              announcement.stream == 'studentcouncil'
                ? <div className={styles.entry}>
                  <Announcement lastmodified={announcement.lastUpdatedDate} firstcreated={announcement.firstPostedDate} heading={announcement.title} description={announcement.desc} />
                </div>
                : null
            ))}
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