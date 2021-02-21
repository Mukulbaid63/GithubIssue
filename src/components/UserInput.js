import React from 'react';

const UserInput = ({userInput,setuserinput}) => {
    const userHandler=(evt)=>{
        setuserinput(evt.target.value);

    }
    return (
        <div>
            <input  style={{fontSize:'15px',backgroundColor:'#212121',color:'white',border:'none',padding:'0px 5px'}} placeholder="Username....." onChange={userHandler}></input>

            
        </div>
    );
};

export default UserInput;