import Post from "./Post/Post";
import p from "./Myposts.module.css";

function Myposts(props) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likecounts={p.likeCounts} />
  ));

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
      <div className={p.posts}>{postsElement}</div>
    </div>
  );
}
export default Myposts;
