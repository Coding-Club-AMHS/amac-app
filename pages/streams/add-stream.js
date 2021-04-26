import { connectToDatabase } from '../../util/db'
import { getSession, useSession } from 'next-auth/client'
import Menu from '../../components/Menu';
import LoginHeader from '../../components/login-header'
import { useEffect } from 'react';

export default function AddStream({ isConnected, users }) {
  const [session, loading] = useSession();

  return (
    <div>
      <Menu />
      {isConnected
        ? <div>
          <main>
            {/*waiting to see if perms can be found, this should've really been two different components but i was lazy*/}
            <LoginHeader />
            {session 
            ?<div>
            <ul>
              {users.map(user => (
                <li>
                  <h2>{user.username}</h2>
                  <h2>{user.password}</h2>
                </li>
              ))}
            </ul>
          </div>
            : null}
            
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

  const users = await client.db('authdb').collection('users').find({}).toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      isConnected
    }
  }

}

