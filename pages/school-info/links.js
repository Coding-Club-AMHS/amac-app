import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Menu from '../../components/Menu';
import styles from '../../styles/links.module.css';
import FadeInText from '../../components/FadeInText';

const FrequentlyAccessedLinks = () => {
  return (
    <div className={styles.container} id={styles.currentproject}>
      <Head>
        <title> Frequently Accessed Links </title>
      </Head>
      <main>
        <Menu />
        <Container>
          <FadeInText>
            <Row className={styles.containerrow}>
              <div className={styles.title}>
                Frequently Accessed Links
                </div>
              <div className={styles.description}>
                project description here
                </div>
              <div className={styles.subtitles}>
                TeachAssist
                </div>
              <p>
                <a href="https://ta.yrdsb.ca/yrdsb/">
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/teachassist-1-logo-png-transparent.png" alt="TeachAssist" >
                  </img>
                </a>
              </p>
              <div className={styles.subtitles}>
                SchoolCashOnline
                </div>
              <p>
                <a href="https://yrdsb.schoolcashonline.com/Home/SignIn">
                  <img src="https://123alexmuir.files.wordpress.com/2015/09/school-cash-online-link.jpg" alt="YRDSB SchoolCashOnline">
                  </img>
                </a>
              </p>
              <div className={styles.subtitles}>
                YRDSB board website
                </div>
              <p>
                <a href="https://www2.yrdsb.ca/">
                  <img src="https://pbs.twimg.com/profile_images/1364936214650961926/0rPWFRYV_400x400.png" alt="YRDSB board website">
                  </img>
                </a>
              </p>
              <div className={styles.subtitles}>
                MyBluePrint
                </div>
              <p>
                <a href="https://mypathwayplanner.yrdsb.ca/LoginFormIdentityProvider/Login.aspx?ReturnUrl=%2fLoginFormIdentityProvider%2fDefault.aspx">
                  <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGFlng-OeHKIw/company-logo_200_200/0/1530713619703?e=2159024400&v=beta&t=4-_TALrmxswN6sIZ0nNpx8IClKu6DpPiHrk2YBE3h6E" alt="YRDSB MyBluePrint">
                  </img>
                </a>
              </p>
              <div className={styles.subtitles}>
                Transit
                </div>
              <p>
                <a href="https://www.yrt.ca/en/index.aspx">
                  <img src="https://www.yrt.ca/en/images/structure/news_avatar.jpg" alt="York Region Transit and Bus Routes">
                  </img>
                </a>
              </p>
              <div className={styles.subtitles}>
                YRDSB Students COVID-19 Screening form
                </div>
              <p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSedNWLgRdQKVfNqT4gwYrq0PEJqj2vnOL5GHqfopjwnakC-0g/viewform">
                  <img src="https://d3fgqmmhgv8ngq.cloudfront.net/sites/default/files/form_2.png" alt="YRDSB screening form">
                  </img>
                </a>
              </p>
            </Row>
          </FadeInText>
        </Container>
      </main>
    </div>
  )
}

export default FrequentlyAccessedLinks;