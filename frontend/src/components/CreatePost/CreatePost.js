import { useState } from "react";
import {
    PanoramaOutlined
} from "@mui/icons-material"
import logo from "../../images/profile_pic.jpg";
import "./CreatePost.css";

const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const [postImage, setPostImage] = useState("");

    return (
        <div className="createPost">
            <div className="createPost--form">
                {!postImage ? (
                    <div className="createPost--selectImage">
                        <h3>Create new post</h3>
                        <div className="selectImage">
                            <PanoramaOutlined />
                            <label id="select--file--from--computer">
                                <input
                                    type="file"
                                    onChange={(event) => setPostImage(event.target.files[0])}
                                />
                                Select file from computer
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="createPost--newPost">
                        <img src={postImage} alt="" />
                        <div className="newPost--caption">
                            <div className="caption--header">
                                <img id="logo" src={logo} alt="" />
                                <p>harshvardhan28_04</p>
                            </div>
                            <textarea
                                name="caption"
                                id="caption"
                                cols="30"
                                rows="10"
                                placeholder="Write a caption..."
                                onChange={(event) => setCaption(event.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatePost;