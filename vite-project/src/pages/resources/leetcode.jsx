import YT from '../yt';
import { Link } from "react-router-dom";
import leetCodeLogo from "../../assets/leetCodeLogo.png";

const LeetCode = () => {
    return(<>
    <div className="tooldiv">
        <h2>Description</h2>
        <p>Leetcode is the main website used by comp-sci students to prepare for techincal interviews. The website contains a vast variety of programming problems, covering key topics such as arrays, hash tables, linked lists, matricies, and many others. Special features of leetcode include pre-made study plans, company specific interview problems, and a difficulty rating on each problem, allowing users to figure out where to start.</p>
        <a href="https://leetcode.com" target="_blank" style={{color: 'black', textDecoration: 'none'}}>
            <h2>Visit site ↓</h2>
            <img src={leetCodeLogo} alt="Leetcode Logo" style={{width: '200px'}}/>
        </a>
        <h2>Main categories</h2>
        <p>Array, String, Hash Table, Dynamic programming, Math, Sorting, Greedy, DFS/BFS, Two pointers, Trees, Linked list, Binary search, Data base, Matrix, Bit Manipulation, Sliding window, Stack, Graph. </p>
        <h2>Videos</h2>
        <div className="video-row">
            <div className="video-wrapper">
                <YT videoId="IB_F10twtvY"/>
            </div>
        </div>
        <Link to="/tools/resources" className="L">
            <button className="divbut3">Back</button>
        </Link>
    </div>
    </>)
}

export default LeetCode;