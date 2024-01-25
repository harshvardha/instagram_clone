import Sidebar from "../../components/Sidebar/Sidebar";
import FollowingList from "../../components/Sidebar/FollowingList/FollowingList";
import Post from "../../components/Post/Post";
import "./Timeline.css";

const Timeline = () => {
    return (
        <div className="timeline">
            <Sidebar />
            <div className="timeline--feed">
                <FollowingList />
                <div className="feed">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Timeline;