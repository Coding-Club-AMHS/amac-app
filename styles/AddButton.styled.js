import styled from 'styled-components';

const StyledAddButton = styled.button`
    background-color: white;
    color: #E0BE36;
    width: 15vh;
    height: 15vh;
    padding: 2vh;
    border-color: #E0BE36;
    border-radius: 100%;
    border-style: outset;
    border-width: 0.8vw;
    position: fixed;
    top: 80vh;
    align-items: center;
    justify-content: center;
    left: calc(95vw - 15vh);
    z-index: 1;
    h1 {
        background-color: rgba(0,0,0,0);
        font-weight: bold;
        font-size: 7vh;
        text-align: center;
        width: 100%;
        height: auto;
        vertical-align: middle;
    }

    :hover {
        border-color: #ffde59;
        color: #ffde59;
    }

`
export default StyledAddButton;