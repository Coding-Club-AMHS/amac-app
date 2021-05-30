
import Carousel from 'react-bootstrap/Carousel'
import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/home.module.css';

import { ThemeContext } from '../util/theme-context'
import { useContext } from 'react';

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>AMHS Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main style={{ background: theme.backgroundBlue }} className={styles.fade}>
        <h1 style={{ color: theme.titleColor, fontSize: '6vh', fontWeight: 'bold' }} >Welcome to Alexander Mackenzie High School!</h1>
        <div>
          <img style={{ margin: '2%', borderStyle: 'solid', borderWidth: '1 vh', borderRadius: '100%', width: '60vh', height: '60vh', objectFit: 'cover', borderColor: theme.borderColor }} onClick={() => { style = { width: '100vw', borderRadius: '0%' } }}
            src='https://photos.smugmug.com/Markland/n-PL9ZmX/Schools/Alexander-Mackenzie-High-School-Art-Programe/i-mNW92HM/0/0631f8ae/M/TED_0661-M.jpg'
          />
          <Carousel>
            <Carousel.Item>

              <Carousel.Caption>
                <h1>Home of the Mustangs</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.image} style={{ borderColor: theme.borderColor }}


                src='https://www.playbillder.com/static/productions/Alexander_Mackenzie_High_School/2017/Disney_s_Beauty_and_the_Beast/images/IMG_6829_copy_204_.jpg'
              />
              <Carousel.Caption>
                <h1>Diverse programs</h1>
                <p>We offer the Arts program, IB, and SHSM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.image} style={{ borderColor: theme.borderColor }}

                src='https://pbs.twimg.com/media/DBkq_yYXUAA9Qmt.jpg'
              />
              <Carousel.Caption>
                <h1 className={styles.caption}>Variety of sports, clubs, and activities</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <a href='./streams/add-stream/'>Add an announcement</a>
        </div>

        <div>

        </div>

      </main>

    </div>
  )
}
