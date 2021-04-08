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
      </main>

    </div>
  )
}
