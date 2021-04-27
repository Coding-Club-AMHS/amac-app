import styled from 'styled-components';

const StyledEditor = styled.div`
    background-color: lightgray;
    color: black;
    width: 85vw;
    padding: 2vh;
    display: flex;
    text-align: left;
    flex-direction: column;
    
    .input {
        display:flex;
        flex-direction: row;
        flex-flow: column wrap;
        
        }
    * {
        background-color: rgba(0,0,0,0);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: auto;
        padding-top: 1vh;
        padding-bottom: 1vh;
        border-color: rgba(0,0,0,0);


    }

    label {
        padding-right: 2vw;
        vertical-align: text-top;
    }
    textarea {
        background-color: white;
        height: 50vh;
    }
    input {
        background-color: white;
    }
    select {
        background-color: white;
    }
    button {
        background-color: #E0BE36;
        color: black;
    }
    button:hover {
        background-color: #ffde59;

    }
    .title {
        text-align: center;
    }
    .error {
        color: red;
    }

`
export default StyledEditor;