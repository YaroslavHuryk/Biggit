import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
      </div>
      <div>
        <img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"></img>
      </div>
      <Myposts />
    </div>
  );
};
export default Profile;
