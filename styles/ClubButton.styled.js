import styled from 'styled-components';

const ClubButton = styled.button`
    width: 30vh;
    height: 30vh;
    padding: 2vh;
    border-radius: 10%;
    top: 80vh;
    align-items: center;
    justify-content: center;
    margin-left: 3vh;
    .blue {
        font-weight: bold;
        font-size: 4vh;
        text-align: center;
        width: 100%;
        height: auto;
        vertical-align: middle;
        color: #FFDE59;
    }
    .yellow {
        font-weight: bold;
        font-size: 4vh;
        text-align: center;
        width: 100%;
        height: auto;
        vertical-align: middle;
        color: #004AAD;

    }

    :hover {
        border-color: #ffde59;
        color: #ffde59;
    }

`
export default ClubButton;