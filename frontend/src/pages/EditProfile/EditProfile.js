import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { userInfoUpdateApiRequests } from "../../apiRequests";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditProfile.css";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [bio, setBio] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const navigateTo = useNavigate();

    const uploadProfilePic = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadPercentage(Math.round(progress));
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProfilePicUrl(downloadURL);
                });
            }
        )
    }

    const submitProfileInfo = async () => {
        try {
            const newProfileInfo = {};
            if (username) {
                newProfileInfo["username"] = username;
            }
            if (fullname) {
                newProfileInfo["name"] = fullname;
            }
            if (gender) {
                newProfileInfo["gender"] = gender;
            }
            if (bio) {
                newProfileInfo["bio"] = bio;
            }
            if (profilePicUrl) {
                newProfileInfo["profilePictureUrl"] = profilePicUrl;
            }
            const accessToken = localStorage.getItem("accessToken");
            const response = await userInfoUpdateApiRequests.editProfile(newProfileInfo, accessToken);
            if (response.status === 200) {
                navigateTo("/profile");
            }
            else {
                window.alert("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        {profilePicUrl ? <img id="newProfilePic" src={profilePicUrl} /> : (uploadPercentage === 0 ? "" : uploadPercentage + "%")}
                        <label id="changePhoto">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                    uploadProfilePic(event.target.files[0])
                                }}
                            />
                            Change photo
                        </label>
                    </div>
                </div>
                <button type="button" onClick={submitProfileInfo} id="submitButton">Submit</button>
            </div>
        </div>
    )
}

export default EditProfile;