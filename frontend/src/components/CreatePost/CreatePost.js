import { useState } from "react";
import {
    PanoramaOutlined,
    ArrowBack,
    Clear
} from "@mui/icons-material"
import logo from "../../images/profile_pic.jpg";
import "./CreatePost.css";

const CreatePost = ({ setCreatePost }) => {
    const [caption, setCaption] = useState("");
    const [postImage, setPostImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="createPost">
            <Clear
                style={{ position: "absolute", color: "white", top: "10", right: "10" }}
                onClick={() => setCreatePost(prev => !prev)}
            />
            <div className="createPost--form">
                {!postImage ? (
                    <div className="createPost--selectImage">
                        <h3>Create new post</h3>
                        <hr style={{ width: "100%", border: "1px solid #454444" }} />
                        <div className="selectImage">
                            <PanoramaOutlined style={{ width: "8rem", height: "8rem" }} />
                            <label id="select--file--from--computer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                Select file from computer
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="createPost--newPost">
                        <ArrowBack
                            style={{ color: "black", position: "absolute", top: "10", left: "10" }}
                            onClick={() => setPostImage("")}
                        />
                        <img id="newPost_image" src={postImage} alt="" />
                        <div className="newPost--caption">
                            <div className="caption--header">
                                <img id="post_logo" src={logo} alt="" />
                                <p>harshvardhan28_04</p>
                            </div>
                            <textarea
                                id="caption"
                                rows={10}
                                value={caption}
                                placeholder="Write a caption..."
                                onChange={(event) => setCaption(event.target.value)}
                            />
                            <button type="button" id="post_button">Post</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatePost;