import StyledStucoMember from '../styles/stuco-member.styled'
import React, { useState } from 'react';

const StucoMember = (props) => {
   
    return(
        <StyledStucoMember>
            <div class="card">
                <div class="content">
                    <div class="front" >
                        <img src={props.image} className='image' />
                    </div>
                    <div class="back">
                        <h4>{props.name}</h4>
                        <h5>{props.position}</h5>
                        <p>{props.description}</p>
                        
                        
                        
                        
                    </div>
                </div>
            </div>

        </StyledStucoMember>
            
    )

}
export default StucoMember;

//https://codepen.io/edeesims/pen/iGDzk
//https://codepen.io/elliempatten/pen/KxmoGR
