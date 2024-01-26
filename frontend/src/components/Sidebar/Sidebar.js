import { useState } from "react";
import {
    Instagram,
    HomeOutlined,
    Search,
    ExploreOutlined,
    MenuOutlined
} from "@mui/icons-material";
import profilePic from "../../images/profile_pic.jpg";
import SearchComponent from "../Search/Search";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sidebar">
            <div className="sidebar--logo">
                <Instagram />
            </div>
            <div className="sidebar--options">
                <Link to={"/Timeline"} style={{ textDecoration: "none", color: "black" }}><HomeOutlined /></Link>
                <Search onClick={() => setOpen(prev => !prev)} />
                {open && <SearchComponent setOpen={setOpen} />}
                <ExploreOutlined />
                <Link to={"/profile"}><img src={profilePic} className="sidebar--profilePic" /></Link>
            </div>
            <div className="sidebar--menuButton">
                <MenuOutlined />
            </div>
        </div>
    )
}

export default Sidebar;