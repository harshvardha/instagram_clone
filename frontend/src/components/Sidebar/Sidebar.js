import {
    Instagram,
    HomeOutlined,
    Search,
    ExploreOutlined,
    MenuOutlined
} from "@mui/icons-material";
import profilePic from "../../images/profile_pic.jpg";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar--logo">
                <Instagram />
            </div>
            <div className="sidebar--options">
                <HomeOutlined />
                <Search />
                <ExploreOutlined />
                <img src={profilePic} className="sidebar--profilePic" />
            </div>
            <div className="sidebar--menuButton">
                <MenuOutlined />
            </div>
        </div>
    )
}

export default Sidebar;