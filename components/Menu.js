import React, { useState, useContext } from 'react';
import StyledMenu from '../styles/Menu.styled';

import { ThemeContext } from '../util/theme-context';

const Menu = () => {
    const theme = useContext(ThemeContext);

    const [dropdown, setDropDown] = useState(false);
    const toggleDropdown = () => {
        setDropDown(!dropdown);
    }
    return (
        <StyledMenu theme={theme}>
            <div className='links'>
                <div className='lozlink'>
{/*                    <img src='https://media.discordapp.net/attachments/823340148628520990/838522725806243840/unknown.png?width=528&height=543' style={{width:'5vw', height: '5vw', margin: '5%'}} /> */}
                    <a href='/'>Home</a>
                    <div onMouseEnter={() => toggleDropdown()} onMouseLeave={() => toggleDropdown()}>
                        <a href='/stuco' className="dropdown">STUCO</a>
                        {
                            dropdown ?
                                <div className="school-dropdown">
                                    <a href='/stuco/announcements'>Announcements</a>
                                    <a href='/stuco/meet-stuco'>Current STUCO Team</a>
                                </div>
                                : null
                        }
                    </div>
                    <a href='/guidance'>Guidance</a>
                    <div onMouseEnter={() => toggleDropdown()} onMouseLeave={() => toggleDropdown()}>
                        <a href='/clubs' className="dropdown">Clubs</a>
                        {
                            dropdown ?
                                <div className="school-dropdown">
                                    <a href='/clubs/basicclubinfo'>Basic Club Info</a>
                                    <a href=''>Personality Test</a>
                                </div>
                                : null
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
                                : null
                        }
                    </div>
                    <a target="_blank" href='https://forms.gle/9bMbF7F9pknpF2Cy8'>Contact Your Reps!</a>
                    <a href='/faq'>FAQ</a>

                </div>

            </div>
        </StyledMenu>
    )
}

export default Menu;