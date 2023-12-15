import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditProfile.css";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [Bio, setBio] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const submitProfileInfo = async (event) => {
        try {
            console.log(`username: ${username}`);
            console.log(`fullname: ${fullname}`);
            console.log(`gender: ${gender}`);
            console.log(`bio: ${Bio}`);
            console.log(`profilePic: ${JSON.stringify(profilePic)}`);
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
                            <h4 onClick={(event) => setGender("Male")} id="dropdown--male">Male</h4>
                            <h4 onClick={(event) => setGender("Female")} id="dropdown--female">Female</h4>
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
                        value={Bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                </div>
                <div className="editProfile--inputs">
                    <h2>Profile Pic</h2>
                    <div className="profilePic">
                        <img src={profilePic ? profilePic : ""} />
                        <label id="changePhoto">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setProfilePic(event.target.files[0])
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