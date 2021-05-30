import Head from 'next/head'
import Menu from '../../components/Menu'
import ClubButton from '../../styles/ClubButton.styled'
import styles from '../../styles/clubs.module.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { ThemeContext } from '../../util/theme-context';
import { useContext } from 'react';

export default function Clubs() {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.background}>
      <Head>
        <title>AMHS Clubs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      
      <main style={{ background: theme.backgroundBlue }}>
      <h1>Clubs</h1>
      <div>
          <Breadcrumb>
            <Breadcrumb.Item href='/' className={styles.breadcrumb}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active className={styles.breadcrumb}>Clubs List</Breadcrumb.Item>
          </Breadcrumb>
      </div>
        <div className={styles.clubsdiv}>
          <ClubButton style={{background: '#004AAD'}} >
  
            <h1 className='blue'>Club Name</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Club Name</h1> </ClubButton>
          <ClubButton style={{background: '#004AAD'}}>
            <h1 className='blue'>Club Name</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Club Name</h1></ClubButton>
        </div>
        <div className={styles.clubsdiv}>
          <ClubButton style={{background: '#004AAD'}} >
            <h1 className='blue'>Club Name</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Club Name</h1> </ClubButton>
          <ClubButton style={{background: '#004AAD'}}>
            <h1 className='blue'>Club Name</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Club Name</h1></ClubButton>
        </div>
        <div className={styles.clubsdiv}>
          <ClubButton style={{background: '#004AAD'}} >
            <h1 className='blue'>Club Name</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Club Name</h1> </ClubButton>
          <ClubButton style={{background: '#004AAD'}}>
            <h1 className='blue'>Mathletes</h1></ClubButton>
          <ClubButton style={{background: '#FFDE59'}}>
            <h1 className='yellow'>Coding Club</h1></ClubButton>
        </div>
        
        

      </main>

    </div>
  )
}
