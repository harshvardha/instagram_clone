import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
    SettingsOutlined,
    GridOnOutlined,
    BookmarkBorderOutlined,
    AssignmentIndOutlined,
    CameraAltOutlined
} from "@mui/icons-material";
import { UserContext } from "../../context/UserContext";
import { userApiRequests } from "../../apiRequests";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostDetails from "../../components/PostDetails/PostDetails";
import "./Profile.css";

const Profile = () => {
    const [createPost, setCreatePost] = useState(false);
    const [openPostDetails, setOpenPostDetails] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [userPosts, setUserPosts] = useState(null);
    const { isOwner, userId } = useContext(UserContext);

    useEffect(() => {
        const id = isOwner ? localStorage.getItem("accountOwnerId") : userId;
        console.log(id);
        const getUserById = async () => {
            try {
                const response = await userApiRequests.getUserById(id);
                if (response.status === 200) {
                    console.log(response.data);
                    setUserInfo(response.data.user);
                    setUserPosts(response.data.posts);
                } else {
                    return window.alert("something went wrong.");
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUserById();
    }, [])

    return (
        <>
            <div className="profile">
                <Sidebar />
                <div className="profile--page">
                    <div className="profile--page--about">
                        <img src={userInfo?.profilePictureUrl} className="about--profilePic" />
                        <div className="profile--page--about--details">
                            <div className="details--username">
                                <p>{userInfo?.username}</p>
                                {
                                    isOwner ? (
                                        <div className="buttons">
                                            <Link to={"/editProfile"}><button type="button" id="editProfileButton">Edit Profile</button></Link>
                                            {userPosts?.length > 0 && <button id="create_post_button" type="button" onClick={() => setCreatePost(prev => !prev)}>Create Post</button>}
                                            <button type="button" id="settingButton"><SettingsOutlined /></button>
                                        </div>
                                    ) : (
                                        <div className="buttons">
                                            <button type="button" id="followUnfollowButton">follow</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="details--metrics">
                                <p>{userPosts?.length} posts</p>
                                <p>{userInfo?.followers.length} followers</p>
                                <p>{userInfo?.following.length} following</p>
                            </div>
                            <div className="details--bio">
                                <p>{userInfo?.name}</p>
                                <p>{userInfo?.bio}</p>
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
                            userPosts?.length > 0 ? (
                                <div className="profile--media--content">
                                    {
                                        userPosts?.map(
                                            post => <img
                                                src={post.url}
                                                style={{ width: "21.3rem", cursor: "pointer" }}
                                                onClick={() => setOpenPostDetails(prev => !prev)}
                                            />
                                        )
                                    }
                                </div>
                            ) : (
                                <div className="profile--media--upload">
                                    <CameraAltOutlined />
                                    <h1>Share Photos</h1>
                                    <p>When you share photos, they will appear on your profile</p>
                                    <button
                                        type="button"
                                        className="custom--file--upload"
                                        onClick={() => setCreatePost(prev => !prev)}
                                    >Share your first photo</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {createPost && <CreatePost setCreatePost={setCreatePost} setUserPosts={setUserPosts} />}
            {openPostDetails && <PostDetails setOpenPostDetails={setOpenPostDetails} />}
        </>
    )
}

export default Profile;