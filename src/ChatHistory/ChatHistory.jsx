import * as React from 'react';
class ChatHistory extends React.Component {
   

    render() {
        const { props } = this;
        return (
            <div ref={`thing`} className="mainContainer dataDiv">
                {props.history.map((messageObj,i) => {
                    return (
                        <div key={i} className={"container " +  messageObj.replyclass }>
                        <img src="https://i.pravatar.cc/150?img=54" alt="Avatar"></img>
                        <h5>{messageObj.Who}</h5>
                        <p>{messageObj.What}</p>
                        <span className="time-right">{messageObj.time}</span>
                      </div>
                        
                    );
                })
                }
            </div>
           
            )
    }
    componentDidUpdate(prevProps, prevState){
        this.scrollToBottom();
      }
    scrollToBottom() {
        const {thing} = this.refs;
        thing.scrollTop = thing.scrollHeight - thing.clientHeight;
      }
}
const connectedChatHistory = (ChatHistory);
export { connectedChatHistory as ChatHistory };

