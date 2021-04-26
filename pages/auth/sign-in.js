import Head from 'next/head'
import { getCsrfToken } from 'next-auth/client'
import Menu from '../../components/Menu'
import {useEffect} from 'react'

export default function SignIn({ csrfToken, query }) {
    useEffect(() => {console.log(query)});
    return (
        <div>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <main>
                {query.error == 'CredentialsSignin' 
                ?   <div style={{backgroundColor: 'goldenrod', color: 'black'}}>
                    The username or password you entered was incorrect. 
                </div>
                :   null}
                <form method='post' action='/api/auth/callback/credentials'>
                    <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                    <label>
                        Username
                        <input name='username' type='text' />
                    </label>
                    <label>
                        Password
                        <input name='password' type='password' />
                    </label>
                    <button type='submit'>Sign in</button>
                </form>
            </main>

        </div>
    )
}

export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
        query: context.query
      }
    }
  }
  
