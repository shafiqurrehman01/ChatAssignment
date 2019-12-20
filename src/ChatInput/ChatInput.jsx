import* as React from 'react';

class ChatInput extends React.Component {
   
    componentDidMount() {
        this.refs.txtMessage.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();

        // Check if the message is empty
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }

        // Build a message object and send it
        const messageObj = {
            Who: 'admin',
            What: message,
            time:new Date().toLocaleString()
        };
        this.props.sendMessage(messageObj);

        // Clear the input field and set focus
        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();
    };

    render() {
        const { props, onSubmit } = this;
        
        return (
           
                <form onSubmit={onSubmit}>
                <div className="type_msg">
            <div className="input_msg_write">
              <input ref="txtMessage" type="text" placeholder="Type your message"  className="write_msg" />
              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
                </form>
           
           
        );
    }
}
const connectedChatInput = ChatInput;
export { connectedChatInput as ChatInput };


