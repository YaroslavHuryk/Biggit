import s from "./Header.module.css";

function Header(props) {
  return (
    <header className={s.header}>
      <img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"></img>
    </header>
  );
}

export default Header;
