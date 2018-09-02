import React, { Component } from "react";
import Lottie from "react-lottie";
import "font-awesome/css/font-awesome.min.css";

import { ChatList } from "../../components/messaging/ChatList";
import { ChatHeader } from "../../components/messaging/ChatHeader";
import { ChatSender } from "../../components/messaging/ChatSender";
import { MessageList } from "../../components/messaging/MessageList";

import Navbar from "../../components/navbar/Navbar";
import * as animationData from "../../animations/messaging/data.json";

import { messageData } from "../../data/MessagesData";

import { MIN_WIDTH_TO_MOBILE_VIEW, MESSAGE_LIST_LENGTH } from "../../constants";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class MessagesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.height,
      height: this.props.height,
      isChatOpen: false,
      messageList: null,
      headerData: null
    };
  }

  openedChat = id => {
    this.setState({
      isChatOpen: true,
      messageList: messageData[id].messages,
      headerData: messageData[id].from
    });
  };

  closeChat = () => {
    this.setState({
      isChatOpen: false,
      messageList: null,
      headerData: null
    });
  };

  noChatOpenContent = (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%"
      }}
    >
      <div
        style={{ textAlign: "center", color: "#7a7a7a", paddingTop: "70px" }}
      >
        <p>No Conversations opened yet !</p>
      </div>
      <Lottie options={defaultOptions} height={"300px"} width={"300px"} />
      <div style={{ textAlign: "center", color: "#7a7a7a", padding: "5px" }}>
        <p>Use the search option to start conversations</p>
      </div>
    </div>
  );

  changeScreen = () => {
    let chatList = (
      <div style={{ paddingLeft: "5px" }}>
        <ChatList
          messageData={messageData}
          myUserName="@lazzy07"
          openChatFunc={this.openedChat}
        />
      </div>
    );
    let headerData = this.state.headerData;
    let header;
    let chatSender = <ChatSender width={this.state.width} />;

    let chatListWidth = "20";
    let messageListWidth = "80";

    if (this.state.width < 1138) {
      chatListWidth = "35";
      messageListWidth = "65";
    }

    if (this.state.width > MIN_WIDTH_TO_MOBILE_VIEW)
      chatSender = (
        <ChatSender
          width={this.state.width * (parseInt(messageListWidth, 10) / 100)}
        />
      );

    if (headerData) {
      header = (
        <ChatHeader
          userName={headerData.userName}
          name={headerData.firstName + " " + headerData.lastName}
          profileImage={headerData.profileImage}
          closeChat={this.closeChat}
        />
      );
    }

    let messageArray = null;
    let loadMoreMessagesButton = null;

    if (this.state.messageList) {
      let messages = this.state.messageList;
      let profileImage = this.state.headerData.profileImage;
      if (messages.length % MESSAGE_LIST_LENGTH === 0) {
        loadMoreMessagesButton = (
          <div
            style={{
              paddingtop: "120px",
              textAlign: "center",
              width: "100%",
              paddingBottom: "30px"
            }}
          >
            <i className="fa fa-chevron-up" />
            &nbsp;&nbsp;
            <b>Load More Messages</b>
          </div>
        );
      }
      messageArray = (
        <MessageList
          myUserName="@lazzy07"
          messageList={messages}
          otherProfileImage={profileImage}
        />
      );
    }

    let mobileChatContent;
    let chatContent;

    if (this.state.isChatOpen) {
      let chatMenu = (
        <div style={{ width: "100%" }}>
          <div
            style={{
              marginTop: "60px",
              paddingBottom: "120px"
            }}
          >
            {loadMoreMessagesButton}
            {messageArray}
          </div>
          {header}
          {chatSender}
        </div>
      );

      chatContent = (
        <div
          style={{
            paddingTop: "60px",
            overflow: "scroll",
            overflowX: "hidden",
            height: "100vh"
          }}
        >
          {chatMenu}
        </div>
      );
      mobileChatContent = chatMenu;
    } else {
      chatContent = this.noChatOpenContent;
      mobileChatContent = chatList;
    }

    if (this.state.width) {
      if (this.state.width < MIN_WIDTH_TO_MOBILE_VIEW) {
        console.log("Mobile_View :" + this.state.width);
        return (
          <div
            style={{
              marginLeft: "0px",
              padding: "10px",
              marginTop: "50px",
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingBottom: "60px",
              height: "100vh",
              overflow: "scroll",
              overflowX: "hidden"
            }}
          >
            {mobileChatContent}
          </div>
        );
      } else {
        console.log("PC_View :" + this.state.width);

        return (
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginLeft: "0px",
                marginTop: "50px",
                paddingTop: "15px",
                paddingBottom: "60px",
                height: "100vh",
                boxShadow:
                  "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                overflow: "scroll",
                overflowX: "hidden",
                width: chatListWidth + "%"
              }}
            >
              {chatList}
            </div>
            <div
              style={{
                position: "relative",
                margin: "0px",
                padding: "0px",
                width: messageListWidth + "%"
              }}
            >
              {chatContent}
            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  };

  updateWindowDimensions = () => {
    //if(this._mounted)
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillMount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    let dom = this.changeScreen();
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "fixed"
        }}
      >
        {dom}
        <Navbar active={3} />
      </div>
    );
  }
}

export default MessagesScreen;
