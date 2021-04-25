import {connectToDatabase} from '../../util/db'

export default function AddStream({isConnected}) {
  return(
    <div className="container">
      {isConnected 
      ? <div>
        <main>
          <h1>
            Test
          </h1>
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

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
/*export const getServerSideProps = withSession(async function ({ req, res }) {
    // Get the user's session based on the request
    const user = req.session.get('user')
  
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  
    return {
      props: { user },
    }
  })
  
  const Profile = ({ user }) => {
    // Show the user. No loading state is required
    return (
      <Layout>
        <h1>Your Profile</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Layout>
    )
  }
  
  export default Profile*/