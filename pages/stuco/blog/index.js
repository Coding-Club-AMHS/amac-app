import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Menu from '../../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../../styles/blog.module.css'

export default function StucoBlog() {
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
                  <Breadcrumb.Item active className={styles.breadcrumb}>Blog</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className={styles.gridContainer}>
                <div className={styles.featured}>
                  <img className={styles.featuredimage} src='https://www.saltstrong.com/wp-content/uploads/Screen-Shot-2020-02-19-at-4.16.29-PM-1024x638.png' />
                  <div>
                    <a className={styles.featuredtitle}href='/stuco/blog/testblogpage'>Featured Article Title</a>
                  </div>
                </div>


                <div className={styles.important}>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Important Article Title Numero 1</a>
                  </div>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Important Article Title Numero 2</a>
                  </div>
                  <div className={styles.importantsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Important Article Title Numero 3</a>
                  </div>

                </div>

                <div className={styles.latest}>
                  <h1>Latest</h1>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Recent Article Title Numero 1</a>
                  </div>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Recent Article Title Numero 1</a>
                  </div>
                  <div className={styles.latestsection}>
                    <a className={styles.importanttitle} href='/stuco/blog/testblogpage'>Recent Article Title Numero 1</a>
                  </div>
                  
                </div>
              </div>
              

          </div>
      </main>

    </div>
  )
}
