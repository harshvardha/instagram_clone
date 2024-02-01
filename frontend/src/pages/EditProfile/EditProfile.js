import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApiRequests } from "../../apiRequests";
import usePreviewImage from "../../hooks/usePreviewImage";
import useUploadPost from "../../hooks/useUploadPost";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditProfile.css";
import { UserContext } from "../../context/UserContext";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicUrl, setProfileUrl] = useState("");
    const { setIsOwner } = useContext(UserContext);
    const { handleImageChange, imageFile, setImageFile } = usePreviewImage();
    const { setFile, downloadUrl, uploadPercentage, isUploading, uploadPostImage, setUploadPercentage } = useUploadPost();
    const navigateTo = useNavigate();

    const updateProfile = async () => {
        try {
            const newProfileDetails = {};
            if (username) {
                newProfileDetails["username"] = username;
            }
            if (fullname) {
                newProfileDetails["name"] = fullname;
            }
            if (gender) {
                newProfileDetails["gender"] = gender;
            }
            if (bio) {
                newProfileDetails["bio"] = bio;
            }
            if (downloadUrl || profilePicUrl) {
                newProfileDetails["profilePictureUrl"] = downloadUrl || profilePicUrl;
            }
            const accessToken = localStorage.getItem("accessToken");
            const response = await userApiRequests.editProfile(newProfileDetails, accessToken);
            if (response.status === 200) {
                setIsOwner(true);
                navigateTo(`/profile/${username}`);
            } else {
                window.alert("Something went wrong.");
            }
        } catch (error) {
            setUploadPercentage(0);
            console.log(error);
        }
    }

    useEffect(() => {
        if (isUploading === false && uploadPercentage === 100) {
            console.log("updating profile");
            updateProfile();
            setUploadPercentage(0);
        }
    }, [isUploading]);

    useEffect(() => {
        const getAccountOwnerInfo = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await userApiRequests.getOwnerAccountInfo(accessToken);
                if (response.status === 200) {
                    setUsername(response.data.userInfo.username);
                    setFullname(response.data.userInfo.name);
                    setGender(response.data.userInfo.gender);
                    setBio(response.data.userInfo.bio);
                    setImageFile(response.data.userInfo.profilePictureUrl);
                    setProfileUrl(response.data.userInfo.profilePictureUrl);
                }
            } catch (error) {
                console.log(error);
            }
        }
        setIsOwner(false);
        getAccountOwnerInfo();
    }, [])

    return (
        <div className="editProfile">
            <Sidebar />
            <div className="editProfile--information">
                <h1>Edit profile</h1>
                <div className="editProfile--inputs">
                    <h2>Username</h2>
                    <input
                        className="entry"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div className="editProfile--inputs">
                    <h2>Fullname</h2>
                    <input
                        className="entry"
                        type="text"
                        value={fullname}
                        onChange={(event) => setFullname(event.target.value)}
                        placeholder="Fullname"
                    />
                </div>
                <div className="editProfile--inputs">
                    <h2>Gender</h2>
                    <div className="dropdown">
                        <input
                            className="entry"
                            type="text"
                            value={gender}
                            placeholder="gender"
                            readOnly
                        />
                        <div className="dropdown--content">
                            <h4 onClick={(event) => setGender("MALE")} id="dropdown--male">MALE</h4>
                            <h4 onClick={(event) => setGender("FEMALE")} id="dropdown--female">FEMALE</h4>
                        </div>
                    </div>
                </div>
                <div className="editProfile--inputs">
                    <h2>Bio</h2>
                    <textarea
                        name="bio"
                        id="bioTextarea"
                        cols="90"
                        rows="3"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                </div>
                <div className="editProfile--inputs">
                    <h2>Profile Pic</h2>
                    <div className="profilePic">
                        {imageFile && <img id="newProfilePic" src={imageFile} />}
                        <label id="changePhoto">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                    setFile(event.target.files[0]);
                                    setImageFile(null);
                                    handleImageChange(event);
                                }}
                            />
                            Change photo
                        </label>
                    </div>
                </div>
                <button type="button" onClick={() => {
                    if (imageFile === profilePicUrl) {
                        updateProfile();
                    } else {
                        uploadPostImage()
                    }
                }} id="submitButton">Submit</button>
            </div>
        </div>
    )
}

export default EditProfile;