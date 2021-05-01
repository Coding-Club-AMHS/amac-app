import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import StyledEditor from '../styles/Editor.styled'

export default function Editor({ setOpen, editProps = { clubName: '', clubDesc: '', clubSchedule: '', clubLinks: [], clubContact: '', id: '' } }) {
    const router = useRouter();
    const contentType = 'application/json';

    const [name, setName] = useState(editProps.clubName);
    const [desc, setDesc] = useState(editProps.clubDesc);
    const [schedule, setSchedule] = useState(editProps.clubSchedule);
    const [links, setLinks] = useState(editProps.clubLinks);
    const [contact, setContact] = useState(editProps.clubContact);
    const id = editProps.id;

    const [submitError, setSubmitError] = useState('');

    const modifyClub = async () => {
        let club = { name: name, desc: desc, schedule: schedule, links: links, contact: contact };
        if (id != '') {
            //PUT instead of POST
            try {
                const res = await fetch(`/api/clubs/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: contentType,
                        'Content-Type': contentType,
                    },
                    body: JSON.stringify(club),
                })

                if (!res.ok) {
                    throw new Error(res.status);
                }
                router.reload();
                setOpen(false);
            } catch (err) {
                setSubmitError([...submitError, 'Failed to edit club.']);
            }
        } else {
            try {
                const res = await fetch('/api/clubs/', {
                    method: 'POST',
                    headers: {
                        Accept: contentType,
                        'Content-Type': contentType,
                    },
                    body: JSON.stringify(club),
                })

                if (!res.ok) {
                    throw new Error(res.status);
                }
                router.reload();
                setOpen(false);
            } catch (err) {
                setSubmitError([...submitError, 'Failed to edit club.']);
            }
        }
    }

    function submitStream() {
        setSubmitError([]);
        if (name == '') return setSubmitError([...submitError, 'Please fill out the name field!']);
        let sanitizedLinks = links.filter(link => !(link.url == '' && link.description == '')).map(link => {
            if (link.desc == '') link.desc = link.url;
            if (link.url == '') return setSubmitError([...submitError, 'Make sure all of your links have URLs in them!']);
            return link;
        });
        setLinks(sanitizedLinks);
        modifyClub();
    }
    return (
        <StyledEditor>
            <button className='close' onClick={() => { setOpen(false) }}>X</button>
            <div className='title'><h2>Club editor</h2></div>
            <div className='input'>
                <label>Club name:</label>
                <input type='text' value={name} onChange={e => { setName(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Club description:</label>
                <textarea className='medium' value={desc} onChange={e => { setDesc(e.currentTarget.value); }} />
            </div>

            <div className='input'>
                <label>Club schedule:</label>
                <textarea className='medium' value={schedule} onChange={e => { setSchedule(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Contact information (no links):</label>
                <input type='text' value={contact} onChange={e => { setContact(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Club links:</label>
                <button className='add' onClick={() => { setLinks([...links, { url: '', desc: '', id: links.length + 1 }]) }}>Add a link</button>
                {links.map((link) => (
                    <div className='inputlink'>
                        <label>Description: </label>
                        <input type='text' value={link.desc} onChange={e => {
                            let updatedLinks = links.map(eachLink => {
                                if (eachLink.id == link.id) return { ...eachLink, desc: e.currentTarget.value };

                                return eachLink;
                            })
                            setLinks(updatedLinks);
                        }} />
                        <label>URL:</label>
                        <input type='text' value={link.url} onChange={e => {
                            let updatedLinks = links.map(eachLink => {
                                if (eachLink.id == link.id) return { ...eachLink, url: e.currentTarget.value };
                                return eachLink;
                            })
                            setLinks(updatedLinks);
                        }} />
                        <button className='del' onClick={() => {setLinks(links.filter(currentLink => currentLink.id != link.id))}}>Delete</button>
                    </div>
                ))}
            </div>
            <div className='input'>
                <button onClick={() => { submitStream() }}>Submit</button>
            </div>
            {submitError.length > 0
                ? <div className='error'>
                    {submitError.map((error) => (
                        <>{error}</>
                    ))}
                </div>
                : null}

        </StyledEditor>
    )
}