import { signIn, signOut, useSession } from 'next-auth/client'
export default function LoginHeader () {
    const [ session, loading ] = useSession()
    
    return (
      <header>
        <div>
          <p>
            {!session && <>
              <span>You are not signed in</span>
              <a
                  href={`/api/auth/signin`}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                >
                  Sign in
                </a>
            </>}
            {session && <>
              <span>
                <small>Signed in as admin</small><br/>
                </span>
              <a
                  href={`/api/auth/signout`}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign out
                </a>
            </>}
          </p>
        </div>
        
      </header>
    )
  }
  