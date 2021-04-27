import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import AccessDenied from './access-denied'
import StyledEditor from '../styles/Editor.styled'

export default function Editor() {
    const router = useRouter();
    const contentType = 'application/json';

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [stream, setStream] = useState('');

    const [submitError, setSubmitError] = useState('');

    const addAnnouncement = async ({title, desc, stream}) => {
        let announcement = {title: title, desc: desc, stream: stream, firstPostedDate: Date.now(), lastUpdatedDate: Date.now()};

        try {
            const res = await fetch('/api/modifyannouncement', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(announcement),
            })

            if(!res.ok) {
                throw new Error(res.status);
            }
            router.push('/')
        } catch (err) {
            setSubmitError("Failed to add announcement");
        }
    }

    function submitStream() {
        if (title == '' || content == '' || stream == '') return setSubmitError('Please fill out every field!');
        addAnnouncement({title: title, desc: content, stream: stream});
    }
    return (
        <StyledEditor>
            <div className='title'><h2>Add an announcement</h2></div>
            <div className='input'>
                <label>Title:</label>
                <input type='text' onChange={e => { setTitle(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Content:</label>
                <textarea onChange={e => { setContent(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Stream:</label>
                <select onChange={e => { setStream(e.currentTarget.value) }}>
                    <option value=''></option>
                    <option value='studentcouncil'>Student Council stream</option>
                    <option value='guidance'>Guidance stream</option>
                </select>
            </div>
            <div className='input'>
                <button onClick={() => { submitStream() }}>Submit</button>
            </div>
            {submitError != ''
                ? <div className='error'>{submitError}</div>
                : null}

        </StyledEditor>
    )
}