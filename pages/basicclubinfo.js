import Head from 'next/head'
import Menu from '../components/Menu'

export default function BasicClubInfo() {
    return (
        <div>
            <Head>
                <title> Basic Club Information</title>
            </Head>

            <Menu />
            <main>
                <h1>
                    What is Coding Club?
          </h1>
                <p>
                    Coding club is an extracurricular activity at AMHS that aims to promote coding within the AMHS community. We wish to create opportunities for students to engage in practical coding experiences. Coding club hopes to help share and teach coding to others. During club meetings, members can prepare, practice, and learn coding for national coding contests. Coding club is a space where beginning and experienced coders can develop their skills. Beginner coders can learn at their own pace without the pressure from others.
           </p>
                <h2>
                    Coders meet on Tuesdays at 3:15 pm
           </h2>
                <h1>
                    Club Sign Up
           </h1>
                <h2>Discord</h2>

            </main>
        </div>
    )
}
