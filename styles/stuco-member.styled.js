import styled from 'styled-components'
 
const StyledStucoMember =styled.div`

    .card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40vh;
      height: 50vh;
      margin: 0;
      float: left;
      perspective: 500px;
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

    .description {

    }

    .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
  

`
export default StyledStucoMember;