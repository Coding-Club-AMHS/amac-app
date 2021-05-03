import { connectToDatabase } from '../../util/db'
import {ThemeContext} from '../../util/theme-context';
import {useContext} from 'react';
import Head from 'next/head'
import Menu from '../../components/Menu'
import Announcement from '../../components/Announcement'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/homepage.module.css'

export default function ClubFeed({ announcementStream }) {
  const theme = useContext(ThemeContext);

  return (
    <div >
      <Head>
        <title>Club Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main style={{backgroundColor: theme.backgroundBlue}}>
        <div>
          <h1 style={{color: theme.titleColor}}>Club Feed</h1>

          <div style={{color: theme.backgroundBlue}}>
            <Breadcrumb >
              <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='/clubs' className={styles.breadcrumb}>Clubs</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.breadcrumb}>Clubs Feed</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            {announcementStream.slice(0).reverse().map((announcement) => (
              announcement.stream == 'clubs'
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