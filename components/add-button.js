import StyledAddButton from '../styles/AddButton.styled'
import {useState, useEffect} from 'react'
const Announcement = ({setOpen}) => {
    return(
        <div>
            <StyledAddButton onClick={() => {setOpen(true)}}><h1>+</h1></StyledAddButton>
        </div>
    )
}
export default Announcement;