import s from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";
function Dialogs(props) {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogsItems name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
