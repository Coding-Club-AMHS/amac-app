import styled from 'styled-components';

const StyledBlogEntry = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    text-align: left;
    height: auto;


    .heading {
        color: black;
        margin-left: 30vh;
        padding-top: 10vh;
        font-size: 8vh;
        margin-right: 30vh;
  
    }

    .subtitle {
        color: grey;
        margin-left: 30vh;
        font-size: 3vh;
        margin-right: 30vh;

    }

    .bodytext {
        color: black;
        margin-left: 30vh;
        font-size: 3vh;
        margin-right: 30vh;
        padding-bottom: 30vh;
        padding-top: 5vh;
  
    }

    .coverimage {
        width: 100%;
        height: 35vh;
        object-fit: cover;
    }

`
export default StyledBlogEntry;