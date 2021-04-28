import StyledAnnouncement from '../styles/Announcement.styled'
import { useEffect, useContext } from 'react'
import {ThemeContext} from '../util/theme-context';

const Announcement = ({ lastmodified, firstcreated, heading, description }) => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <StyledAnnouncement theme={theme}>
                <p className='date'>Posted {new Date(firstcreated).toString()}</p>
                {lastmodified == firstcreated
                    ? null
                    :
                    <p className='date'>Updated {new Date(lastmodified).toString()}</p>
                }
                <h1 className='heading'>{heading}</h1>
                {description.split('\n').map(str => <p className='description'>{str}</p>)}
            </StyledAnnouncement>

        </div>
    )
}
export default Announcement;