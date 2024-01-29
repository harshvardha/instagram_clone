import { Clear } from "@mui/icons-material";
import "./PostDetails.css";
import postImage from "../../images/profile_pic.jpg";
import Comment from "../Comment/Comment";

const PostDetails = ({ setOpenPostDetails }) => {
    return (
        <div className="overlay">
            <Clear
                style={{ position: "absolute", color: "white", top: "10", right: "10" }}
                onClick={() => setOpenPostDetails(prev => !prev)}
            />
            <div className="postDetails">
                <img id="postDetails--image" src={postImage} alt="" />
                <div className="postDetails--details">
                    <div className="postDetails--header">
                        <img id="post_logo" src={postImage} alt="" />
                        <p>harshvardhan28_04</p>
                    </div>
                    <div className="postDetails--comments">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;