import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { connectToDatabase } from '../../util/db';
import Menu from '../../components/Menu';
import LoginHeader from '../../components/login-header';
import AccessDenied from '../../components/access-denied';
import AddButton from '../../components/add-button';
import Editor from '../../components/club-editor';
import styles from '../../styles/announcement-editor.module.css'


export default function ManageClubs({ clubStream }) {
    const [session, loading] = useSession();
    const [open, setOpen] = useState(false);
    const [editProps, setEditProps] = useState();

    const router = useRouter();
    const contentType = 'application/json';

    if (typeof window !== 'undefined' && loading) return null
    if (!session) { return <div><AccessDenied /></div> }

    const onEdit = ({ id, name, desc, schedule, links, contact }) => {
            setEditProps({ id: id, clubName: name, clubDesc: desc, clubSchedule: schedule, clubLinks: links, clubContact: contact });

    }

    const onDelete = async ({ id }) => {
        try {
            const res = await fetch(`/api/clubs/${id}`, {
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
            window.alert('There was an error deleting this club.');
        }
    }
    return (
        <div>
            <Menu />
            <div>
                <main>
                    <div>
                        <LoginHeader />
                        {open
                            ? <Editor setOpen={setOpen} editProps={editProps} />
                            : <AddButton setOpen={setOpen} />}
                        <div>
                            {clubStream.map((club) => (
                                <div className={styles.entry}>
                                    <div>
                                        <h1>{club.name}</h1>
                                        {club.desc.split('\n').map(str => <p>{str}</p>)}
                                        <h2>{club.schedule}</h2>
                                        {club.links.length > 0 ? <h2>Links: </h2>: null}
                                        {club.links.map((link) => (
                                                <a href={link.url}>{link.desc}</a>
                                        ))}
                                        <h2>Contact us: </h2>
                                        {club.contact.split('\n').map(str => <p>{str}</p>)}
                                    </div>
                                    <div>
                                        <button onClick={() => { open ? null : setOpen(true); onEdit({ id: club._id, name: club.name, desc: club.desc, schedule: club.schedule, links: club.links, contact: club.contact }) }}>Edit</button>
                                        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete({ id: club._id }) }}>Delete</button>
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
    const result = await client.db('authdb').collection("clubs").find({}).toArray();

    return {
        props: {
            clubStream: JSON.parse(JSON.stringify(result))
        }
    }

}

