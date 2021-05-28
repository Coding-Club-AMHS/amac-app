
import Carousel from 'react-bootstrap/Carousel'
import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/home.module.css';
import { ThemeContext } from '../util/theme-context';
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
            src='https://i.ibb.co/vhWZznc/amhs1.png'
          />
          <Carousel>
            <Carousel.Item>

              <Carousel.Caption>
                <h1>Home of the Mustangs</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.imageWide} style={{ borderColor: theme.borderColor }}
                src='http://www.breakedu.com/xe/files/attach/images/126694/101/130/6872d9e05030c9f7be1961c73a5fb2b9.png'
              />
              <Carousel.Caption>
                <h1 className={styles.caption}>Diverse programs</h1>
                <p className={styles.caption}>We offer the Arts program, IB, and SHSM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.image} style={{ borderColor: theme.borderColor }}
                src='https://cdn.canada247.info/assets/uploads/06d14329c0326cc15422c47812680644_-ontario-regional-municipality-of-york-richmond-hill-alexander-mackenzie-high-schoolhtml.jpg'
              />
              <Carousel.Caption>
                <h1 className={styles.caption1}>Variety of sports, clubs, and activities</h1>
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
