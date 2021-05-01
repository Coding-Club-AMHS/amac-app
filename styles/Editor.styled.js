import styled from 'styled-components';

const StyledEditor = styled.div`
    background-color: #EEEEFF;
    color: black;
    width: 85vw;
    padding: 2vh;
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    flex-direction: column;
    z-index: 3;    
    max-height: 90vh;
    overflow-y: scroll;

    .input {
        display:flex;
        flex-direction: row;
        flex-flow: column wrap;
        
        }
    .del {
        background-color: red;
        color: white;
        
    }
    .del:hover {
        background-color:crimson;
    }
    .inputlink {
        display: flex;
        flex-direction: row;
        flex-flow: column wrap;
        margin-top: 2%;
        margin-bottom: 2%;
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 2%;
        background-color: lightgray;
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
        height: 30vh;
    }
    .medium {
        height: 10vh;
    }
    .add {
        background-color: #002443;
        color: white;

    }
    .add:hover {
        background-color: #145EA0;

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
    .close {
        background-color:red;
        left: 0;
        top: 0;
        position: absolute;
        padding: 0.5% 1% 0.5% 1%;
        margin: 0.5%;
    }
    .close:hover {
        background-color:crimson;
    }

`
export default StyledEditor;