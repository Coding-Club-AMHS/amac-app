import StyledAnnouncement from '../styles/Announcement.styled'
const Announcement = () => {
    return(
        <div>
            <StyledAnnouncement>
                <p className='date'>04/22/2021</p>
                <h1 className='heading'>Heading</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus</p>
            </StyledAnnouncement>
            
        </div>
    )
}
export default Announcement;