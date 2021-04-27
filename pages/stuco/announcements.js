import { connectToDatabase } from '../../util/db'
import Head from 'next/head'
import Menu from '../../components/Menu'
import Announcement from '../../components/Announcement'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/homepage.module.css'

export default function StucoAnnouncements({ announcementStream }) {
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
            {announcementStream.slice(0).reverse().map((announcement) => (
              announcement.stream == 'studentcouncil'
                ? <div className={styles.entry}>
                  <Announcement lastmodified={new Date(announcement.lastUpdatedDate).toDateString()} firstcreated={new Date(announcement.firstPostedDate).toDateString()} heading={announcement.title} description={announcement.desc} />
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