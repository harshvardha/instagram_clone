import { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import logo from "../../images/profile_pic.jpg";
import {
    FavoriteBorderOutlined,
    BookmarkBorderOutlined,
    ShareOutlined,
    MapsUgcOutlined,
    AddOutlined,
    MoreHorizOutlined,
    Favorite,
    Bookmark
} from "@mui/icons-material";

const Post = () => {
    const [comment, setComment] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className="post">
            <div className="post--header">
                <div className="header--info">
                    <img id="post_logo" src={logo} alt="" />
                    <p><Link to={"/profile"} style={{ textDecoration: "none", color: "black", fontWeight: "500" }}>therealprogramminghub</Link><span id="dot" /><span style={{ marginLeft: "1rem" }}>1h</span></p>
                </div>
                <MoreHorizOutlined style={{ justifySelf: "flex-end", cursor: "pointer" }} />
            </div>
            <div className="post--image">
                <img id="post_image" src={logo} alt="" />
            </div>
            <div className="post--actions">
                <div className="like--comment--share">
                    {isLiked ?
                        <Favorite style={{ cursor: "pointer", color: "red" }} onClick={() => setIsLiked(prev => !prev)} /> :
                        <FavoriteBorderOutlined style={{ cursor: "pointer" }} onClick={() => setIsLiked(prev => !prev)} />}
                    <MapsUgcOutlined style={{ cursor: "pointer" }} />
                    <ShareOutlined style={{ cursor: "pointer" }} />
                </div>
                {!isBookmarked ?
                    <BookmarkBorderOutlined style={{ cursor: "pointer" }} onClick={() => setIsBookmarked(prev => !prev)} /> :
                    <Bookmark style={{ cursor: "pointer" }} onClick={() => setIsBookmarked(prev => !prev)} />}
            </div>
            <div className="post--information">
                <p id="post_likes">212,413 likes</p>
                <p id="post_caption"> <Link to={"/profile"} style={{ textDecoration: "none", color: "black" }}><span style={{ fontWeight: "bold" }}>therealprogramminghub </span></Link>What you created with css recently? let me know in the comments</p>
            </div>
            <div className="post--comments">
                <p>View all 7 comments</p>
                <div className="comment">
                    <textarea
                        name="comment"
                        id="comment"
                        cols="83"
                        rows="2"
                        placeholder="Add a comment..."
                        onChange={(event) => setComment(event.target.value)}
                    ></textarea>
                    {comment && <AddOutlined style={{ cursor: "pointer" }} />}
                </div>
            </div>
        </div>
    )
}

export default Post;