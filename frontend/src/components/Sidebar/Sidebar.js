import {
    Instagram,
    HomeOutlined,
    Search,
    ExploreOutlined,
    MenuOutlined
} from "@mui/icons-material";
import profilePic from "../../images/profile_pic.jpg";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar--logo">
                <Instagram />
            </div>
            <div className="sidebar--options">
                <Link to={"/Timeline"} style={{ textDecoration: "none", color: "black" }}><HomeOutlined /></Link>
                <Search />
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