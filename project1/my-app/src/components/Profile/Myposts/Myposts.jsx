import Post from './Post/Post';
import p from './Myposts.module.css';


const Myposts = () => {
  return (
    <div>
      <div className={p.item}>
        <Post message='Hi , how are you' likecounts = '20 '/>
        <Post message='Hi , how is he' likecounts = '15 '/>
      </div>
    </div>
  );
}
export default Myposts;