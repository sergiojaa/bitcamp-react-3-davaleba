import React from 'react'
import './App.css'
import Star from './assets/Star.png'
import { useState } from 'react';
function Text(){
    const [showThanks, setShowThanks] = useState(false);
    const handleSubmitClick = () => {
        setShowThanks(true); 
    };
    const handleClick = (event)=>{
        event.target.style.backgroundColor = 'red'
    }
    const text = (tex) =>{
        tex.target.value = 'thanks forvoting '
    }
    return <div>
        <div className='mtavaridivi'>
            <div className='mtavarisshvili'>
                <img className='star' src={ Star}/>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className='cifrebisdeda'>
                    <div className='cifri' onClick={handleClick}>1</div>
                    <div className='cifri' onClick={handleClick}>2</div>
                    <div className='cifri' onClick={handleClick}>3</div>
                    <div className='cifri' onClick={handleClick}> 4</div>
                    <div className='cifri' onClick={handleClick}>5</div>
                </div>
                <div className='submit'>
                    <button onClick={handleSubmitClick}>submit</button>
                </div>
            </div>
        </div>
        {showThanks && <div>Thanks for voting</div>}
    </div>
}
export default Text