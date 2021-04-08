import styled from 'styled-components';

const StyledMenu = styled.nav`
    background-color: #002642;
    color: #E0BE36;
    min-width: 80vw;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    padding-top: 2vh;
    padding-bottom: 2vh;
    border-bottom: solid 2px;
    font-weight: bold;

    * {
        width: 14vw;
        text-align:center;
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