import { useState} from 'react'
import { useRouter } from 'next/router'
import StyledEditor from '../styles/Editor.styled'

export default function Editor({ setOpen, editProps = {announceTitle: '', announceContent: '', announceStream:'', id:''} }) {
    const router = useRouter();
    const contentType = 'application/json';

    const [title, setTitle] = useState(editProps.announceTitle);
    const [content, setContent] = useState(editProps.announceContent);
    const [stream, setStream] = useState(editProps.announceStream);
    const id = editProps.id;

    const [submitError, setSubmitError] = useState('');

    const addAnnouncement = async () => {
        let announcement = { title: title, desc: content, stream: stream, firstPostedDate: Date.now(), lastUpdatedDate: Date.now() };
        console.log('add announce');
        try {
            const res = await fetch('/api/announcements/', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(announcement),
            })

            if (!res.ok) {
                throw new Error(res.status);
            }
            router.push('/streams/announcements/')
            setOpen(false);
        } catch (err) {
            setSubmitError("Failed to add announcement");
        }
    }

    const editAnnouncement = async () => {
        let announcement = { title: title, desc: content, stream: stream, firstPostedDate: Date.now(), lastUpdatedDate: Date.now() };
        console.log(id);

        try {
            const res = await fetch(`/api/announcements/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(announcement),
            })

            if (!res.ok) {
                throw new Error(res.status);
            }
            router.reload();
            setEdit(false);
        } catch (err) {
            setSubmitError("Failed to edit announcement.");
        }
    }

    function submitStream() {
        if (title == '' || content == '' || stream == '') return setSubmitError('Please fill out every field!');
        if (id == '' || id == undefined) addAnnouncement();
        else editAnnouncement();
    }
    return (
        <StyledEditor>
            <button className='close' onClick={() => {setOpen(false)}}>X</button>
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