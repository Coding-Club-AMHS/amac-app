import StyledAddButton from '../styles/AddButton.styled'
import {useState, useEffect} from 'react'
const Announcement = ({open, setOpen}) => {
    return(
        <div>
            <StyledAddButton onClick={() => {open? null: setOpen(true)}}><h1>+</h1></StyledAddButton>
        </div>
    )
}
export default Announcement;