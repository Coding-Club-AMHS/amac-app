import Head from 'next/head'
import Menu from '../../components/Menu'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from '../../styles/stuco.module.css'
import StucoMember from '../../components/stuco-member'



export default function MeetStuco() {
    return(
        <div style={{background: '#EEEEFF'}}>
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

                <div className={styles.memberRow}>
                    <StucoMember image={'/STUCO Headshots/Sophie-Conrad.png'} name='Sophie Conrad' position='Co-President' description='My name is Sophie and I am a Grade 12. I’m on the announcements team, I’m a competitive singer and have competed for 8 years. I love learning about astrology; I know it’s not fact-based, but something about it is just so intriguing to me. A fun fact about me is that I have a part-time job working as a children’s birthday party host!' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Wil-Husnutdinov.png'} name='Wil Husnutdinov' position='Co-President' description='My name is Wil and I am a Grade 12 in StuCo. A fun fact about me is that I do competitive trampoline! As Co-Pres, I can’t wait to have a great year with all of you.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Andy-Gong.png'} name='Andy Gong' position='Co-Vice President' description='My name is Andy Gong and I am a Grade 12 in the IB Program. I am the President of DnD and the Robotics Club.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Jason-Yuan.png'} name='Jason Yuan' position='Co-Vice President' description='My name is Jason Yuan and I am a Grade 12 IB student, who is also the president of the World Scholars Cup club.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Danielle-Golinsky.png'} name='Danielle Golinsky' position='Grade 11 Rep' description='My name is Danielle Golinsky and I am a Grade 11 in the IB Program. Some things about me: I love travelling, I speak 3 languages and My spirit (read: favourite) animal is a sloth!' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Mehka-Gnanendran.png'} name='Mehka Gnanendran' position='Grade 10 Rep' description='My name is Mehka and I am a Grade 10 in the IB program, plus I am a member of Medlife. I am also part of the Ontario Provincial Youth Cabinet, L.I.G.H.T. You can often find me playing volleyball, binging greys, or volunteering in the community.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Bertram-Qian.png'} name='Bertram Qian' position='Grade 9 Rep' description='Hello, My name is Bertram Qian, and I am this year’s grade 9 Rep and am enrolled in the IB program. This year, my interests had led me to join the Coding and Robotics Club. An interesting fact about me is that I have climbed Mount Fuji before.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Japji-Madan.png'} name='Japji Madan' position='Senior IB Rep' description='My name is Japji and I am a Grade 11 in the IB Program. You can find me in Dance Club, where we do amazing choreographies led by our presidents, which will help you and myself learn about the various styles of dance. I am also part of the STEM council!' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Hooria-Walajahi.png'} name='Hooria Walajahi' position='Junior IB Rep' description='My name is Hooria Walajahi, and I am this years Junior IB Rep. I am in Grade 10, and any Grade 9 or 10 IB students could come to me if they have any questions or concerns, but I am not limited to that. I am mostly active in the MSA club, but I love to try new things and be able to meet new people.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Madie-Lawrence.png'} name='Madie Lawrence' position='Senior Arts Rep' description='My name is Madie and I am a Gr.12 in the Arts Mackenzie Music Program, Exec on World Scholars Cup, in Band, and I am obsessed with musicals.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Maxine-Manning.png'} name='Maxine Manning' position='Junior Arts Rep' description='My name is Maxine and I am a Grade 10 in the Visual Arts Program.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Erin-Sun.png'} name='Erin Sun' position='Treasurer' description='My name is Erin Sun and I am a Grade 12 in the Arts Program, and I’m also in the SHSM Business Sector. A fun fact about me is that I really enjoy travelling, and some of the top destinations on my bucket list include Italy, Norway, and Paris.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Larry-Pan.png'} name='Larry Pan' position='Junior Treasurer' description='My name is Larry and I am a Grade 9 student in the IB Program. I am a Coding Club Executive and in the Debate Club.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Rida-Ali.png'} name='Rida Ali' position='Community Rep AMHS' description='My name is Rida Ali and I am a Grade 10 in the IB Program. I am President of the Muslim Student Asociation, Special Events Coordinator and Sports Medicine Trainer for HOSA and part of the Promotions Team in the Athletic Council. A fun fact is I cannot snap with my left hand! (trust me I have tried).' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Palp-Ali.png'} name='Palwashah Ali' position='Community Rep AMHS' description='My name is Palwashah Ali and I’m a Grade 12 IB student. Fun Fact about me: I’m a pescatarian (aka a vegetarian who eats seafood).' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Lauren-Kim.png'} name='Lauren Kim' position='Marketing' description='Hey everyone! I’m Lauren and part of this years Marketing Team along with Paul. I’m in grade 10 and currently enrolled in the visual arts program. This year I’m in HOSA, DECA, StuCo and more.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Paul-Beniaminov.png'} name='Paul Beniaminov' position='Marketing' description='My name is Paul Beniaminov and I am a grade 11 in the Visual Arts Program. I’m an executive of ACC, I am in marketing for both PresCo and StuCo, and I’m a general member in the Pride Council. In my spare time I like to watch old movies or paint.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Bogdana-Borysova.png'} name='Bogdana Borysova' position='Secretary' description='My name is Bogdana and I am a Grade 10 in IB. A fun fact about me is that I have been dancing for 12 years.' >
                    </StucoMember>
                    <StucoMember image={'/STUCO Headshots/Mira-Del-Prado.png'} name='Mira Del Prado' position='SVS Rep (Cohort C)' description='Hi everyone! My name is Mira and I am a grade 11 student. I am this years SVS representative, and my fellow SVS students can reach out to me if they have any questions, or ideas to improve the virtual school experience.' >
                    </StucoMember>
                    <StucoMember image='' name='Ms.Clarke' position='Teacher Advisor' description='' >
                    </StucoMember>


                 
               
                    
                </div>
            

            </main>
        
        </div>
        
    )
}