import Head from 'next/head'
import Menu from '../../components/Menu'

export default function BasicClubInfo() {
    return (
        <div>
            <Head>
                <title> Basic Club Information</title>
            </Head>
            <main>
                <h1>
                    What is Coding Club?
                </h1>
                <p>
                    Coding club is an extracurricular activity at AMHS that aims to promote coding within the AMHS community. We wish to create opportunities for students to engage in practical coding experiences. Coding club hopes to help share and teach coding to others. During club meetings, members can prepare, practice, and learn coding for national coding contests. Coding club is a space where beginning and experienced coders can develop their skills. Beginner coders can learn at their own pace without the pressure from others.
                </p>
                <h3>
                    Coders meet on Tuesdays at 3:15 pm
                </h3>
                <h1>
                    Club Sign Up
                </h1>
                <a href="https://forms.gle/iU8wq1nHQhaicnqNA"></a>
                <h3>
                    Want to be an Executive? Submit your form!
                </h3>
                <a href="https://forms.gle/GKqaAisjdWUmW3xq8"></a>
                <h2>
                    Connect with us
                </h2>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
            <a href="https://discord.gg/dKqAR6Qy"></a>
            <i class="fa fa-discord fa-4x" aria-hidden="true"></i>
            <a href="coding_club_amhs"></a>
            <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
            <i class="fa fa-github fa-4x" aria-hidden="true"></i>
            <a href="https://classroom.google.com/c/MjE3MjE0MjgyMDc4?cjc=ieqmyxg"></a>
            <i class="fa fa-users fa-4x" aria-hidden="true"></i>
           </main>
        </div>
    )
}
