import { useState } from "react";
import { Link } from "react-router-dom";
import {
    SettingsOutlined,
    GridOnOutlined,
    BookmarkBorderOutlined,
    AssignmentIndOutlined,
    CameraAltOutlined
} from "@mui/icons-material";
import Sidebar from "../../components/Sidebar/Sidebar";
import profilePic from "../../images/profile_pic.jpg";
import "./Profile.css";

const Profile = () => {
    const [isContent, setIsContent] = useState(false);

    return (
        <div className="profile">
            <Sidebar />
            <div className="profile--page">
                <div className="profile--page--about">
                    <img src={profilePic} className="about--profilePic" />
                    <div className="profile--page--about--details">
                        <div className="details--username">
                            <p>harshvardhan28_04</p>
                            <div className="buttons">
                                <Link to={"/editProfile"}><button type="button" id="editProfileButton">Edit Profile</button></Link>
                                <button type="button" id="settingButton"><SettingsOutlined /></button>
                            </div>
                        </div>
                        <div className="details--metrics">
                            <p>0 posts</p>
                            <p>12 followers</p>
                            <p>38 following</p>
                        </div>
                        <div className="details--bio">
                            <p>Harshvardhan Singh Chauhan</p>
                        </div>
                    </div>
                </div>
                <div className="profile--media">
                    <div className="profile--media--tabs">
                        <p style={{ marginTop: "0.625rem" }}><GridOnOutlined style={{ verticalAlign: "top" }} /> POSTS</p>
                        <p style={{ marginTop: "0.625rem" }}><BookmarkBorderOutlined style={{ verticalAlign: "top" }} /> SAVED</p>
                        <p style={{ marginTop: "0.625rem" }}><AssignmentIndOutlined style={{ verticalAlign: "top" }} /> TAGGED</p>
                    </div>
                    {
                        isContent ? (
                            <div className="profile--media--content">
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                                <img src={profilePic} style={{ width: "21.3rem" }} />
                            </div>
                        ) : (
                            <div className="profile--media--upload">
                                <CameraAltOutlined />
                                <h1>Share Photos</h1>
                                <p>When you share photos, they will appear on your profile</p>
                                <label className="custom--file--upload">
                                    <input
                                        type="file"
                                    />
                                    Share your first photo
                                </label>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;