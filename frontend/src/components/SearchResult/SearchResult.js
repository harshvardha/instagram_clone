import { Link } from "react-router-dom";
import "./SearchResult.css";
import logo from "../../images/profile_pic.jpg";

const SearchResult = ({ setOpen }) => {
    return (
        <>
            <Link to={"/profile"} style={{ textDecoration: "none" }} onClick={() => setOpen(prev => !prev)}>
                <div className="searchResult">
                    <img id="searchResult--logo" src={logo} alt="" />
                    <div className="searchResult--brief">
                        <p>shubhworldwide</p>
                        <p id="searchResult--name">Shubh<span id="searchdot" />727K followers</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchResult;