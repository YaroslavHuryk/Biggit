import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
  return (
    <div>
      <Profileinfo />
      <Myposts posts={props.posts} />
    </div>
  );
}
export default Profile;
