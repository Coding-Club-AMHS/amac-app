import { connectToDatabase } from '../../util/db'
import { useSession } from 'next-auth/client'
import Menu from '../../components/Menu';
import LoginHeader from '../../components/login-header'
import AccessDenied from '../../components/access-denied'

export default function AddStream({ isConnected}) {
  const [session, loading] = useSession();
  if (typeof window !== 'undefined' && loading) return null
  if (!session) { return <div><AccessDenied /></div> }

  return (
    <div>
      <Menu />
      {isConnected
        ? <div>
          <main>
            {/*waiting to see if perms can be found, this should've really been two different components but i was lazy*/}
            <div>
              <LoginHeader />
              <button onClick={() => {window.location='/streams/announcements'}}>Edit announcements</button>
              <button onClick={() => {window.location='/streams/clubs'}}>Edit clubs</button>
              <button onClick={() => {window.location='/streams/clubs'}}>Change password</button>
            </div>

          </main>
        </div>
        : <div>
          <main>
            <h1> Something went wrong! Please either wait for the page to load, or refresh the page. </h1>
          </main>
        </div>}
    </div>
  )
}

export const getServerSideProps = async function () {
  const { client } = await connectToDatabase();
  const isConnected = client.isConnected();

  return {
    props: {
      isConnected
    }
  }

}

