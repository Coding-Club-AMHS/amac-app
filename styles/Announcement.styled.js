import styled from 'styled-components';

const StyledAnnouncement = styled.div`
    background-color: #E0BE36;
    width: 90vw;
    height: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    border-color: white;
    border-radius: 15px 50px 30px 1px;
    border-style: outset;
    border-width: 0.8vw;
    align: center;
    
    .heading {
        font-weight: bold;
        font-size: 7vh;
        background-color: transparent;
        color: black;
        text-align: left;
        padding-left: 5vh;
    }

    .description {
        font-size: 2.5vh;
        background-color: transparent;
        color: black;
        text-align: left;
        padding-left: 5vh;
        padding-bottom: 2vh;
    }
    
    .date {
        font-size: 2vh;
        background-color: transparent;
        color: white;
        text-align: left;
        padding-left: 5vh;
        padding-top: 2vh;
    }
`
export default StyledAnnouncement;