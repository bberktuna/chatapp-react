import React, { useState } from "react"

import TextContainer from "../TextContainer/TextContainer"
import Messages from "../Messages/Messages"
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"

import "./Chat.css"

const Chat = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [users, setUsers] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={() => {}}
        />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat
