import * as React from 'react';
import { connect } from 'react-redux';
import { ChatInput } from '../ChatInput';
import  {ChatHistory} from '../ChatHistory';
import { addMessage } from '../_actions';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    componentDidMount() {
        debugger;
        let msgs = JSON.parse(localStorage.getItem('msgs')) || [];
        if(msgs.length >0){
        msgs.map((messageObj) => {
            this.props.addMessage(messageObj);        
        });
    }
    else{
        this.props.addMessage([]);
        
    }
        console.log(msgs);
        }
sendMessage = (message) => {
    let msgs = JSON.parse(localStorage.getItem('msgs')) || [];
    this.props.addMessage(message);
    msgs.push(message);
    
    setTimeout(() => {
        const messageObjnew = {
            Who: Math.round(Math.random() * 1000000),
            What: "random "+message.What,
            time:new Date().toLocaleString(),
            replyclass:"darker"
        };
        this.props.addMessage(messageObjnew);
        msgs.push(messageObjnew);
        localStorage.setItem('msgs', JSON.stringify(msgs));
    }, 15000);
    
}
    render() {
        const { props, sendMessage  } = this;
        return (
            <div className="homeContainer">
                 <div>
                 <span>
            Welcome <strong>{this.props.auth.user.username}</strong> |{" "}
          </span>&nbsp;
          <Link to="/login">Logout</Link>
                 </div>
                 
                   
               
                <h3 className=" text-center">Messaging</h3>
                
                <ChatHistory ref="history" history={props.history} />
                <ChatInput sendMessage={sendMessage} />
            </div>
          
        )
    }

   
}
function mapStateToProps(state) {
    return {
        history: state.homereducer.get('messages').toJS()
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (message) => dispatch(addMessage(message))   
        
    };
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };