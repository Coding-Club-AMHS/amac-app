import Head from 'next/head'
import Menu from '../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/homepage.module.css'

export default function StucoHome() {
    return(
        <div>
            <Head>
                <title>Stuco</title>
            </Head>
            <Menu/>
            <main>
                <h1>Stuco Main Page</h1>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className={styles.breadcrumb}>STUCO</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                



            </main>
        
        </div>
        
    )
}