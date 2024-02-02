import { useContext, useEffect, useState } from "react";
import { Clear } from "@mui/icons-material";
import "./PostDetails.css";
import { timeAgo } from "../../utils/timeAgo";
import Comment from "../Comment/Comment";
import { postsApiRequests } from "../../apiRequests";
import { UserContext } from "../../context/UserContext";
import { useDeleteImage } from "../../hooks/useDeleteImage";

const PostDetails = ({ setOpenPostDetails, setUserPosts, postId }) => {
    const { isOwner } = useContext(UserContext);
    const [post, setPost] = useState(null);
    const { setUrl, isDeleting, url, deleteImageFile } = useDeleteImage();

    const deletePost = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await postsApiRequests.deletePost(postId, accessToken);
            if (response.status === 200) {
                setUserPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isDeleting === false && url !== "") {
            deletePost();
            setUrl("");
            setOpenPostDetails(false);
        }
    }, [isDeleting])

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await postsApiRequests.getPostById(postId);
                if (response.status === 200) {
                    setPost(response.data);
                    if (isOwner) {
                        setUrl(response.data.url);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        getPost();
    }, [postId]);

    return (
        <div className="overlay">
            <Clear
                style={{ position: "absolute", color: "white", top: "10", right: "10" }}
                onClick={() => setOpenPostDetails(prev => !prev)}
            />
            <div className="postDetails">
                <img id="postDetails--image" src={post?.url} alt="" />
                <div className="postDetails--details">
                    <div className="postDetails--header">
                        <div style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
                            <img id="post_logo" src={post?.user.profilePictureUrl} alt="" />
                            <p>{post?.user.username}</p>
                        </div>
                        {isOwner && <button
                            type="button"
                            id="delete_post_button"
                            onClick={deleteImageFile}
                        >Delete Post</button>}
                    </div>
                    <div className="postDetails--comments">
                        <div className="postDetails--caption">
                            <img id="post_logo" src={post?.user.profilePictureUrl} alt="" />
                            <div className="caption--about">
                                <p>{post?.caption}</p>
                                <p style={{ fontSize: "0.75rem" }}>{timeAgo(post?.createdAt)}</p>
                            </div>
                        </div>
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