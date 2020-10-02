import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

  let messagesElement = props.state.messages.map( m => <Message message={m.message}/> );

  //создай ссылку
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            { dialogsElement }
          </div>
          <div className={s.messages}>
            <p className={s.alignright}>
              { messagesElement[1] }
            </p>
            <p className={s.alignleft}>
              { messagesElement[2] }
            </p>
            <p className={s.alignright}>
              { messagesElement[3] }
            </p>
            <p className={s.alignleft}>
              { messagesElement[4] }
            </p>
            <textarea ref={ newMessageElement }></textarea>
          </div>
      </div>
    )
}

export default Dialogs;
