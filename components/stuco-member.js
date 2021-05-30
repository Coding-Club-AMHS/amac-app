import StyledStucoMember from '../styles/stuco-member.styled'
import React, { useState } from 'react';

const StucoMember = () => {
   
    return(
        <StyledStucoMember>
            <div class="card">
                <div class="content">
                    <div class="front" >
                        <img src='https://advokat-fam.ru/img/anonim.jpg' className='image' />
                    </div>
                    <div class="back">
                        <h5>Name</h5>
                        <h5>Position</h5>
                        <p>description</p>
                    </div>
                </div>
            </div>

        </StyledStucoMember>
            
    )

}
export default StucoMember;

//https://codepen.io/edeesims/pen/iGDzk
//https://codepen.io/elliempatten/pen/KxmoGR
