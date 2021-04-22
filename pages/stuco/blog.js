import Head from 'next/head'
import { Nav } from 'react-bootstrap'
import Menu from '../../components/Menu'

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
          </div>
      </main>

    </div>
  )
}
