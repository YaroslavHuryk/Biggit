import p from './Post.module.css';

const Post = (props) => {
    return (
        <div  className = {p.item}>
          <img src='https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg'/>
          {props.message}
          <div>
          <span>like </span>
          {props.likecounts}
          <span>dislike</span>
          </div>
        </div>
    );
}
export default Post;