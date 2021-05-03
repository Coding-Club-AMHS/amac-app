import React, { useState } from 'react';
import StyledMenu from '../styles/Menu.styled';

const Menu = () => {
    const [dropdown, setDropDown] = useState(false);
    const toggleDropdown = () => {
        setDropDown(!dropdown);
    }
    return (
        <StyledMenu>
            <a href='/'>Home</a>
            <div onMouseEnter={() => toggleDropdown()} onMouseLeave={() => toggleDropdown()}>
                <a href='/stuco' className="dropdown">STUCO</a>
                {
                    dropdown ?
                        <div className="school-dropdown">
                            <a href='/stuco/announcements'>Announcements</a>
                            <a href='/stuco/meet-stuco'>Current STUCO Team</a>
                        </div>
                        :null
                }
            </div>
            <a href='/guidance'>Guidance</a>
            <div onMouseEnter={() => toggleDropdown()} onMouseLeave={() => toggleDropdown()}>
                <a href='/clubs' className="dropdown">Clubs</a>
                {
                    dropdown ?
                        <div className="school-dropdown">
                            <a href='/clubs/basicclubinfo'>Basic Club Info</a>
                            <a href='/clubs/clubfeed'> Club Feed</a>
                            <a href=''>Personality Test</a>
                        </div>
                        :null
                }
            </div>
            <div onMouseEnter={() => toggleDropdown()} onMouseLeave={() => toggleDropdown()}>
                <a href='/school-info' className="dropdown">School Info</a>
                {
                    dropdown ?
                        <div className="school-dropdown">
                            <a href='/school-info/covid-info'>COVID Information</a>
                            <a href='/school-info/links'>Frequently Accessed Links</a>
                            <a href='/school-info/weather'>Weather</a>
                        </div>
                        :null
                }
            </div>
            <a target="_blank" href='https://forms.gle/9bMbF7F9pknpF2Cy8'>Contact Your Reps!</a>
            <a href='/faq'>FAQ</a>

        </StyledMenu>
    )
}

export default Menu;