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
        <h1 className={styles.h1}>Frequently asked questions</h1>
           <h2 className={styles.h2}>Question</h2>
           <div className={styles.answer}>answer</div>
           <h2 className={styles.h2}>Question</h2>
           <div className={styles.answer}>answer</div>
           <h2 className={styles.h2}>Question</h2>
           <div className={styles.answer}>answer</div>
      </main>

    </div>
  )
  }