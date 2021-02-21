import React from 'react';

const RepoInput = ( {repoInput,setRepoinput}) => {
    const RepoHandler=(evt)=>{
        setRepoinput(evt.target.value);
    }
    return (
        <div>
            <input  style={{fontSize:'15px',backgroundColor:'#212121',color:'white',border:'none',padding:'0px 5px'}} placeholder= "Reponame....." onChange= {RepoHandler}></input>

            
        </div>
    );
};

export default RepoInput;