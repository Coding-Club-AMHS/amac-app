
import Carousel from 'react-bootstrap/Carousel'
import Head from 'next/head'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AMHS Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main>
        <h1>Welcome to Alexander Mackenzie High School!</h1>
        <div>
          <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://photos.smugmug.com/Markland/n-PL9ZmX/Schools/Alexander-Mackenzie-High-School-Art-Programe/i-mNW92HM/0/0631f8ae/M/TED_0661-M.jpg'
              />
              <Carousel.Caption>
                <h1>Home of the Mustangs</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='https://www.playbillder.com/static/productions/Alexander_Mackenzie_High_School/2017/Disney_s_Beauty_and_the_Beast/images/IMG_6829_copy_204_.jpg'
              />
              <Carousel.Caption>
                <h1>Diverse programs</h1>
                <p>We offer the Arts program, IB, and SHSM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src='https://pbs.twimg.com/media/DBkq_yYXUAA9Qmt.jpg'
              />
              <Carousel.Caption>
                <h1>Variety of sports, clubs, and activties</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>

        </div>

      </main>

    </div>
  )
}
