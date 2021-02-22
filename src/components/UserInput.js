import React from 'react';

const UserInput = ({userInput,setuserinput}) => {
    const userHandler=(evt)=>{
        setuserinput(evt.target.value);

    }
    return (
        <div>
            <input  style={{fontSize:'15px',backgroundColor:'#212121',color:'white',border:'none',borderBottom:'2px solid white',margin:'2px 5px',padding:'8px'}} placeholder="Username....." onChange={userHandler}></input>

            
        </div>
    );
};

export default UserInput;
