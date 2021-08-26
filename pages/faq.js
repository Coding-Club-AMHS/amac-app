import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/faq.module.css'

export default function Faq() {
  return (
    <div>

      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main className={styles}>
        <h1 className={styles.h1}>Frequently Asked Questions</h1>
           <h2 className={styles.h2}>Question 1</h2>
           <div className={styles.answer}>Answer 1</div>
           <h2 className={styles.h2}>Question 1</h2>
           <div className={styles.answer}>Answer 1</div>
           <h2 className={styles.h2}>Question 1</h2>
           <div className={styles.answer}>Answer 1</div>
      </main>

    </div>
  )
  }