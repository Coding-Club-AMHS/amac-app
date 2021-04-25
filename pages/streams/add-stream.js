import {connectToDatabase} from '../../util/db'
import { getSession } from 'next-auth/client'
import LoginHeader from '../../components/login-header'

export default function AddStream({isConnected}) {
  return(
    <div className="container">
      {isConnected 
      ? <div>
        <main>
          {/*waiting to see if perms can be found, this should've really been two different components but i was lazy*/}
          <LoginHeader />
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
  const isConnected = await client.isConnected();
  return {
    props: {
      isConnected
    }
  }

}

