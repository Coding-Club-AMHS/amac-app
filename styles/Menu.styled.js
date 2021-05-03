import styled from 'styled-components';

const StyledMenu = styled.nav`
    background: linear-gradient(to right, #002642, #ede574, #002642 );
    color: #ff4040;
    height: 9vh;
    min-width: 80%;
    .links {
        width: 100%;
    }
    .lozlink {
        width: 100%;

        background-color: #002642;
        height: 8vh;
        display: flex;
        flex-direction: row;
        padding-top: 2vh;
        padding-bottom: 2vh;
        font-weight: bold;
    }

    * {
        width: 14vw;
        text-align:center;
    }

    a {
        color: ${({theme}) => theme.defaultYellow}};

        text-decoration: none;
    }

    a:hover {
        opacity: 0.5;
    }

    .dropdown:hover {

    }

    .school-dropdown {
        width: 14vw;
        display: flex;
        flex-direction:column;
    }

    .school-dropdown a {
        align-self: left;
    }

`

export default StyledMenu;