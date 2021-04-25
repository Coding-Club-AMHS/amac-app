import Head from 'next/head'
import Menu from '../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/homepage.module.css'

export default function MeetStuco() {
    return(
        <div>
            <Head>
                <title>Stuco</title>
            </Head>
            <Menu/>
            <main>
                <h1>Current STUCO Members</h1>

                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/stuco' className={styles.breadcrumb}>Stuco</Breadcrumb.Item>
                        <Breadcrumb.Item active className={styles.breadcrumb}>Current STUCO Team</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                
            </main>
        
        </div>
        
    )
}