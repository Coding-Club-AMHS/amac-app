import styled from 'styled-components';

const StyledAddButton = styled.button`
    background-color: white;
    color: #E0BE36;
    width: 20vh;
    height: 20vh;
    padding: 2vh;
    border-color: #E0BE36;
    border-radius: 100%;
    border-style: outset;
    border-width: 0.8vw;
    
    h1 {
        background-color: rgba(0,0,0,0);
        font-weight: bold;
        font-size: 5em;
    }

    :hover {
        border-color: #ffde59;
        color: #ffde59;
    }

`
export default StyledAddButton;