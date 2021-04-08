import React from 'react';
import StyledMenu from '../styles/Menu.styled';

const Menu = () => {
    return(
        <StyledMenu>
            <a href='/'>Home</a>
            <a href='/stuco'>Student Council</a>
            <a href='/guidance'>Guidance</a>
            <a href='/clubs'>Clubs</a>
            <a href='/school-info'>School Information</a>
            <a href='/contact-reps'>Contact Your Reps!</a>
            <a href='/faq'>FAQ</a>

        </StyledMenu>
    )
}

export default Menu;