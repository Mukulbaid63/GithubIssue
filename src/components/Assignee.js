import React, { useState } from 'react';

const Assignee = ({assignees}) => {
    const [zed,setZed]=useState(1)
    return (
        <div style={{position:'relative'}}>
            {
                assignees.map((item)=>(
                    <img src={item.avatar_url} style={{height:'25px',width:'25px',borderRadius:"50%",zIndex:{zed}}}/>
                ))
            }
        </div>
    );
};

export default Assignee;