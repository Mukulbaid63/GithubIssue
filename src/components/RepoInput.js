import React from 'react';

const RepoInput = ( {repoInput,setRepoinput}) => {
    const RepoHandler=(evt)=>{
        setRepoinput(evt.target.value);
    }
    return (
        <div>
            <input  style={{fontSize:'15px',backgroundColor:'#212121',color:'white',border:'none',borderBottom:'2px solid white',margin:'2px 5px',padding:'8px'}} placeholder= "Reponame....." onChange= {RepoHandler}></input>

            
        </div>
    );
};

export default RepoInput;
