import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
import "./SidebarChat.css";
import axios from "axios";
import Pusher from 'pusher-js'

const pusher = new Pusher('a45c6db8c79610f3ee49', {
  cluster: 'ap2'
});

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch()

  const [lastMsg, setLastMsg] = useState('')
  const [lastPhoto, setLastPhoto] = useState('')
  const [lastTimestamp, setLastTimestamp] = useState('')

  const getSidebarElement = () => {
    axios.get(`https://chat-backendd.herokuapp.com/get/lastMessage?id=${id}`).then(res => {
      setLastMsg(res.data.message)
      setLastPhoto(res.data.user.photo)
      setLastTimestamp(res.data.timestamp)
    })
  }

  useEffect(() => {
    getSidebarElement()

    const channel = pusher.subscribe('messages')
    channel.bind('newMessage', (data) => {
      getSidebarElement()
    })
  }, [id]);

  return (
    <div
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        )
      }
      className="sidebarChat"
    >
      <Avatar src={lastPhoto} />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{lastMsg}</p>
        <small>
          {new Date(parseInt(lastTimestamp)).toLocaleString()}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
