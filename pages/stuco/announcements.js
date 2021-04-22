import Head from 'next/head'
import { Tab } from 'react-bootstrap'
import Menu from '../../components/Menu'
import Announcement from '../../components/Announcement'

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
                  <Announcement/>
                  <Announcement/>
                  <Announcement/>
              
          </div>
      </main>

    </div>
  )
}
