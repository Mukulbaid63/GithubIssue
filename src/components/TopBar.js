import React from 'react';
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import IssueItem from './IssueItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
const TopBar = ({length,userInput,repoInput}) => {
    return (
        <>
        <div style={{ display: "flex",border:"0.1px solid #cfcfcf",fontSize: "14px",backgroundColor:'#f5f5f5',padding: "40px 30px 30px 10px",marginBottom: "30px",fontSize:'20px'}}><BookOutlinedIcon style={{color:'#636363',fontSize:'24px',padding:'0px 5px'}}/><span style={{color:'#4250eb'}}>{userInput}</span><span style={{color:'#636363'}}>/</span><span style={{color:'#4250eb',fontWeight:'500'}}>{repoInput}</span></div>
        <div style={{ display: "flex",border:"0.1px solid #cfcfcf",fontSize: "14px",backgroundColor:'#f5f5f5',borderRadius:'8px 8px 0px 0px', justifyContent: "space-between",alignItems:'center',width:'80vw',marginLeft: "150px",padding: "10px"}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="checkbox" />
            <ErrorOutlineIcon
              style={{
                color: "black",
                fontWeight: "lighter",
                fontSize: "18px",
                padding: "3px 6px",
              }}
            />
            <span style={{fontWeight: "550",fontSize: "15px"}}>
            {length} Open</span>
          </div>
          <div style={{ display: "flex",color:'#6e6e6e' ,justifyContent: "center" }}>
              
              <span>Author</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
              <span>Label</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
              <span>Projects</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
              <span>Milestone</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
              <span>Assignee</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
              <span>Sort</span>
              <ArrowDropDownIcon style={{paddingRight:'3px'}}/>
          </div>
        </div>
        </>
    );
};

export default TopBar;
