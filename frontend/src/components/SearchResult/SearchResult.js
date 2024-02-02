import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import blankProfilePic from "../../images/blank-profile-picture.png";
import "./SearchResult.css";

const SearchResult = ({ setOpen, searchResult }) => {
    const { setIsOwner, setUserId } = useContext(UserContext);

    return (
        <>
            <Link to={`/profile/${searchResult?.username}`} style={{ textDecoration: "none" }} onClick={() => {
                const ownerId = localStorage.getItem("accountOwnerId");
                if (searchResult?._id === ownerId) {
                    setIsOwner(true);
                } else {
                    setIsOwner(false);
                    setUserId(searchResult?._id);
                }
                console.log("closing");
                setOpen(prev => !prev)
            }}>
                <div className="searchResult">
                    <img id="searchResult--logo" src={searchResult?.profilePictureUrl || blankProfilePic} alt="" />
                    <div className="searchResult--brief">
                        <p>{searchResult?.username}</p>
                        <p id="searchResult--name">{searchResult?.name.length > 18 ? searchResult?.name.substring(0, 18) + "..." : searchResult?.name}<span id="searchdot" />727K followers</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchResult;