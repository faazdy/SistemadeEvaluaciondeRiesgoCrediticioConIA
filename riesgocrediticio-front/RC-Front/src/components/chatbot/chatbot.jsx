import { useState } from "react";
import "./chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen((prev) => {
      if (!prev) {
        setMessages([
          {
            text: "¡Hola! Soy Stromper, tu asistente virtual. ¿En qué puedo ayudarte?",
            type: "bot",
            imgSrc: "/robot.png",
          },
        ]);
      }
      return !prev;
    });
  };

  const sendMessage = (event) => {
    if (event.key === "Enter") {
      const message = event.target.value.trim();
      if (message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message, type: "client" },
        ]);

        event.target.value = "";

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Estoy procesando tu solicitud...",
              type: "bot",
              imgSrc: "/robot.png",
            },
          ]);
        }, 1000);
      }
    }
  };

  return (
    <div>
      {!isOpen && (
        <button id="chatbot-btn" onClick={toggleChatbot}>
          <img src="/icono_chat.png" alt="Chatbot Icon" />
        </button>
      )}
      <div id="chatbot" className={isOpen ? "visible" : ""}>
        <div id="chatbot-header">
          <h4>Chat</h4>
          <button className="close-btn" onClick={toggleChatbot}>x</button>
        </div>
        <div id="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}-message`}>
              {msg.type === "bot" && <img src={msg.imgSrc} alt="Bot" />}
              {msg.text}
            </div>
          ))}
        </div>
        <input
          id="input-box"
          type="text"
          placeholder="Escribe aquí..."
          onKeyUp={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chatbot;