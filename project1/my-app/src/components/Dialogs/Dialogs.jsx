import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function DialogsItems(props) {
  let path = "dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

function Message(props) {
  return <div className={s.message}>{props.message}</div>;
}

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItems name="Sasha" id="1" />
        <DialogsItems name="Tom" id="2" />
        <DialogsItems name="Oleg" id="3" />
        <DialogsItems name="Petro" id="4" />
        <DialogsItems name="Ivan" id="5" />
        <DialogsItems name="Mykola" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi, how are you?" />
        <Message message="Hi, it`s me" />
        <Message message="Hi, you are in my lesson" />
      </div>
    </div>
  );
}

export default Dialogs;
