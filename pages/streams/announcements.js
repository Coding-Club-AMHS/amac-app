import { connectToDatabase } from '../../util/db'
import { useSession } from 'next-auth/client'
import Menu from '../../components/Menu';
import LoginHeader from '../../components/login-header'
import AccessDenied from '../../components/access-denied'
import AddButton from '../../components/add-button'
import Editor from '../../components/editor'
import { useState,useEffect } from 'react';


export default function AddStream({ isConnected, announcementStream }) {
    const [session, loading] = useSession();
    const [open, setOpen] = useState(false);

    useEffect(() => console.log(announcementStream))
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
                            {open
                                ? <Editor />
                                : undefined}
                            <div>
                                {announcementStream.map((announcement) => (
                                    <div>
                                        <p>{new Date(announcement.lastUpdatedDate).toDateString()}</p>
                                        <h1>{announcement.title}</h1>
                                        {announcement.desc.split('\n').map(str => <p>{str}</p>)}
                                        <h2>Stream: {announcement.stream}</h2>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <AddButton open={open} setOpen={setOpen} />
                            </div>
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
    const result = await client.db('authdb').collection("announcements").find({}).toArray();

    return {
        props: {
            announcementStream: JSON.parse(JSON.stringify(result)),
            isConnected: client.isConnected()
        }
    }

}

