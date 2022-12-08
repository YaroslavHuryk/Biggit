import Post from "./Post/Post";
import p from "./Myposts.module.css";

function Myposts(props) {
  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add a new post</button>
        </div>
      </div>
      <div className={p.posts}>
        <Post message="Hi , how are you" likecounts="20 " />
        <Post message="Hi , how is he" likecounts="15 " />
      </div>
    </div>
  );
}
export default Myposts;
