import StyledAnnouncement from '../styles/Announcement.styled'
const Announcement = ({ lastmodified, firstcreated, heading, description }) => {
    return (
        <div>
            <StyledAnnouncement>
                <p className='date'>Posted {firstcreated}</p>
                {lastmodified == firstcreated
                    ? null
                    : <div>
                        <p className='date'>Updated {lastmodified}</p>
                    </div>}
                <h1 className='heading'>{heading}</h1>
               {description.split('\n').map(str => <p className='description'>{str}</p>)}
            </StyledAnnouncement>

        </div>
    )
}
export default Announcement;