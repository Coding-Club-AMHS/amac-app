import { useState } from 'react'
import { useRouter } from 'next/router'
import StyledEditor from '../styles/Editor.styled'

export default function ModifyStream({setEdit, id, announceTitle, announceContent, announceStream}) {
    const router = useRouter();
    const contentType = 'application/json';

    const [title, setTitle] = useState(announceTitle);
    const [content, setContent] = useState(announceContent);
    const [stream, setStream] = useState(announceStream);

    const [submitError, setSubmitError] = useState('');

    const editAnnouncement = async ({title, desc, stream}) => {
        let announcement = {title: title, desc: desc, stream: stream, lastUpdatedDate: Date.now()};

        try {
            const res = await fetch(`/api/announcements/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(announcement),
            })

            if(!res.ok) {
                throw new Error(res.status);
            }
            router.reload();
            setEdit(false);
        } catch (err) {
            setSubmitError("Failed to add announcement.");
        }
    }

    function submitStream() {
        if (title == '' || content == '' || stream == '') return setSubmitError('Please fill out every field!');
        editAnnouncement({title: title, desc: content, stream: stream});
    }
    return (
        <StyledEditor>
            <button className='close' onClick={() => {setEdit(false)}}>X</button>
            <div className='title'><h2>Editing announcement</h2></div>
            <div className='input'>
                <label>Title:</label>
                <input value={title} type='text' onChange={e => { setTitle(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Content:</label>
                <textarea value={content} onChange={e => { setContent(e.currentTarget.value); }} />
            </div>
            <div className='input'>
                <label>Stream:</label>
                <select value={stream} onChange={e => { setStream(e.currentTarget.value) }}>
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