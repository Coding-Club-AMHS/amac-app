import styled from 'styled-components'
 
const StyledStucoMember =styled.div` 

    .card {
      
      height: 60vh;
      width: 37vh; 
      margin: 3vh;
      float: left;
      perspective: 100vh;
      border: solid;
      border-color: #FFD956;

    }
    
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
    
      transition: transform 1.5s;
      transform-style: preserve-3d;
    }
    
    .card:hover .content {
      transform: rotateY( 180deg ) ;
      transition: transform 0.5s;
    }
    
    .front,
    .back {
      position: absolute;
      height: 100%;
      width: 100%;
      background: white;
      color: #03446A;
      text-align: center;
      border-radius: 0.5vh;
      backface-visibility: hidden;
    }
    
    .back {
      background: white;
      color: red;
      transform: rotateY( 180deg );
    }    

    p {
      padding: 1vh;
      color: black;
      font-size: 2.3vh;
    }
    h4 {
      color: black;
      padding-top: 0.5vh;
      font-size: 4vh;
    }
    h5 {
      color: black;
      padding: 0;
      font-size: 3.5vh;
    }


    .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
  

`
export default StyledStucoMember;