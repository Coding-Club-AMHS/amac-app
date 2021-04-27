import { connectToDatabase } from '../../util/db'
import { useSession } from 'next-auth/client'
import Menu from '../../components/Menu';
import LoginHeader from '../../components/login-header'
import AccessDenied from '../../components/access-denied'
import AddButton from '../../components/add-button'
import Editor from '../../components/editor'
import ModifyStream from '../../components/modify-announcement-stream'
import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/announcement-editor.module.css'


export default function AddStream({ announcementStream }) {
    const [session, loading] = useSession();
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editProps, setEditProps] = useState({});

    const router = useRouter();
    const contentType = 'application/json';

    if (typeof window !== 'undefined' && loading) return null
    if (!session) { return <div><AccessDenied /></div> }

    const onEdit = ({ id, title, content, stream }) => {
        if (!edit) {
            setEdit(true);
            setEditProps({id: id, announceTitle: title, announceContent: content, announceStream: stream });
        }
    }

    const onDelete = async ({ id }) => {
        try {
            const res = await fetch(`/api/announcements/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType
                }
            })
            if (!res.ok) {
                throw new Error(res.status);
            }
            router.reload();
        } catch (error) {
            console.log(id);
            window.alert('There was an error deleting this post.');
        }
    }
    return (
        <div>
            <Menu />

            <div>
                <main>
                    {/*waiting to see if perms can be found, this should've really been two different components but i was lazy*/}
                    <div>
                        <LoginHeader />
                        {open
                            ? <Editor setOpen={setOpen} />
                            : null}
                        <div>
                            {edit
                                ? <ModifyStream setEdit={setEdit} id={editProps.id} announceTitle={editProps.announceTitle} announceContent={editProps.announceContent} announceStream={editProps.announceStream} />
                                : <AddButton setOpen={setOpen} />
                            }
                            {announcementStream.map((announcement) => (
                                <div className={styles.entry}>
                                    <div>
                                        <p>{new Date(announcement.lastUpdatedDate).toDateString()}</p>
                                        <h1>{announcement.title}</h1>
                                        {announcement.desc.split('\n').map(str => <p>{str}</p>)}
                                        <h2>Stream: {announcement.stream}</h2>
                                    </div>
                                    <div>
                                        <button onClick={() => { open || edit ? null : onEdit({id: announcement._id, title: announcement.title, content: announcement.desc, stream: announcement.stream} ) }}>Edit</button>
                                        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) /*delete logic*/ onDelete({ id: announcement._id }) }}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </main>
            </div>
        </div>
    )
}

export const getServerSideProps = async function () {
    const { client } = await connectToDatabase();
    const result = await client.db('authdb').collection("announcements").find({}).toArray();

    return {
        props: {
            announcementStream: JSON.parse(JSON.stringify(result))
        }
    }

}

