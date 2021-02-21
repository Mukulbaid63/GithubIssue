import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserInput from "./components/UserInput";
import RepoInput from "./components/RepoInput";
import IssueItem from "./components/IssueItem";
import GitHubIcon from "@material-ui/icons/GitHub";
import Pagination from "./components/Pagination";
function App() {
  const [userInput, setuserinput] = useState("");
  const [repoInput, setRepoinput] = useState("");
  const [issueList, setIssueList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = issueList.slice(indexOfFirstPost, indexOfLastPost);
  const fetchIssueList = () => {
    fetch(`https://api.github.com/repos/${userInput}/${repoInput}/issues`)
      .then((response) => response.json())
      .then((result) => {
        setIssueList(result);
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
          marginBottom: "20px",
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
