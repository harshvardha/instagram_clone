import { useState } from "react";
import "./Comment.css";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import image from "../../images/profile_pic.jpg";

const Comment = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="comment">
            <div className="comment--user">
                <img id="post_logo" src={image} alt="" />
                <div className="comment--details">
                    <div className="description">
                        <p>harshvardhan28_04</p>
                        <p>very good</p>
                    </div>
                    <div className="information">
                        <p>36w</p>
                        <p>627 likes</p>
                    </div>
                </div>
            </div>
            {isLiked ?
                <Favorite style={{ cursor: "pointer", color: "red" }} onClick={() => setIsLiked(prev => !prev)} /> :
                <FavoriteBorderOutlined style={{ cursor: "pointer" }} onClick={() => setIsLiked(prev => !prev)} />
            }
        </div>
    )
}

export default Comment;