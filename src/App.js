import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserInput from "./components/UserInput";
import RepoInput from "./components/RepoInput";
import IssueItem from "./components/IssueItem";
import GitHubIcon from "@material-ui/icons/GitHub";
import Pagination from "./components/Pagination";
import TopBar from "./components/TopBar";
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
function App() {
  const [userInput, setuserinput] = useState("");
  const [repoInput, setRepoinput] = useState("");
  const [Message, setMessage] = useState("");
  const [issueList, setIssueList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [click,addClick]=useState(false)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = issueList.slice(indexOfFirstPost, indexOfLastPost);
  let myStatus
  const fetchIssueList = () => {
    fetch(`https://api.github.com/repos/${userInput}/${repoInput}/issues`)
      .then((response) => {
        myStatus = response.status;

        return response.json()})
      .then((result) => {
        if(myStatus==200){
        setIssueList(result);
        addClick(true)
          setMessage("")
      }
          else{
            setMessage("Oopps!!! Error in the repository or user name")
          }
      })
      .catch(console.log("error"));
  };
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#212121",
          color: "white",
          padding: "15px 5px",
         
        }}
      >
        <GitHubIcon style={{ fontSize: "40px", padding: "0px 10px" }} />
        <UserInput userInput={userInput} setuserinput={setuserinput} />
        <RepoInput repoInput={repoInput} setRepoinput={setRepoinput} />
        <button
          style={{
            fontSize: "15px",
            backgroundColor: "#212121",
            color: "white",
            border: "1px solid white",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "5px 5px",
          }}
          onClick={fetchIssueList}
        >
          Submit
        </button>
      </div>
          
      {click && issueList.length>0?<TopBar length={issueList.length} userInput={userInput} repoInput={repoInput}/>:<p style={{display:'flex',color:'blue',justifyContent:'center',fontWeight:'bold',fontSize:'20px',fontFamily:'monospace'}}><ReportProblemOutlinedIcon/>No Open issues found in the repository.</p>}
      <span style={{color:'red',fontWeight:'bold',fontSize:'40px',fontFamily:'monospace'}}>{Message}</span>
      {currentPosts.map((item) => (
        <IssueItem item={item} />
      ))}
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={issueList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
