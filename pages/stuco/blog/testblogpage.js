import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Menu from '../../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../../styles/homepage.module.css'
import BlogEntry from '../../../components/BlogEntry'

export default function StucoBlogTest() {
  return (
    <div>
      <Head>
        <title>Student Council Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main>
          <div>
              <h1>Blog</h1>

              <div>
                <Breadcrumb>
                  <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item href='/stuco' className={styles.breadcrumb}>Stuco</Breadcrumb.Item>
                  <Breadcrumb.Item href='/stuco/blog' className={styles.breadcrumb}>Blog</Breadcrumb.Item>
                  <Breadcrumb.Item active className={styles.breadcrumb}>Post 1</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div>
                <BlogEntry/>
              </div>

          </div>
      </main>

    </div>
  )
}
