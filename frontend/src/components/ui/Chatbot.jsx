// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";

const API_URL = "https://webringbotbe-production.up.railway.app/chat";
const BOT_AVATAR = "https://img.icons8.com/color/96/robot.png";
const USER_AVATAR = "https://img.icons8.com/ios-glyphs/60/000000/user--v1.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Show initial welcome date message on mount
    const dateMsg = {
      id: "date",
      content: new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      isDate: true,
    };
    setMessages([dateMsg]);
  }, []);

  useEffect(() => {
    // Scroll to bottom on new message
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const createMessageObj = (content, isUser) => ({
    id: Math.random().toString(36).substring(7),
    content,
    isUser,
  });

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = createMessageObj(input.trim(), true);
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });
      const data = await res.json();
      const botMsg = createMessageObj(data.response, false);
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errMsg = createMessageObj(
        "Sorry, there was an error connecting to the server.",
        false
      );
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsTyping(false);
    }
  }

  function onInputKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "70px",
        right: "20px",
        width: "360px",
        maxHeight: "600px",
        background: "#fff",
        boxShadow: "0 6px 24px rgba(58,93,35,0.09)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        zIndex: 9999,
      }}
    >
      <header
        style={{
          backgroundColor: "#FFD600",
          color: "#222",
          padding: "14px 16px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px", userSelect: "none" }}>
          WeBring AI Assistant
        </h1>
        {/* Close button could be handled by parent component if needed */}
      </header>
      <main
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontSize: "15px",
        }}
      >
        {messages.map((msg) =>
          msg.isDate ? (
            <div
              key={msg.id}
              style={{
                textAlign: "center",
                color: "#bbb",
                fontSize: "13px",
                margin: "10px 0 15px",
                userSelect: "none",
              }}
            >
              {msg.content}
            </div>
          ) : (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.isUser ? "flex-end" : "flex-start",
                alignItems: "flex-end",
              }}
            >
              {!msg.isUser && (
                <img
                  src={BOT_AVATAR}
                  alt="Bot"
                  width={36}
                  height={36}
                  style={{ borderRadius: "50%", marginRight: "8px" }}
                  loading="lazy"
                />
              )}
              <div
                style={{
                  maxWidth: "77%",
                  backgroundColor: msg.isUser ? "#FFF9C4" : "#222",
                  color: msg.isUser ? "#222" : "#fff",
                  borderRadius: "18px",
                  borderBottomLeftRadius: msg.isUser ? "18px" : "6px",
                  borderBottomRightRadius: msg.isUser ? "6px" : "18px",
                  padding: "13px 18px",
                  boxShadow: "0 1px 4px rgba(34,34,34,0.06)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {msg.content}
              </div>
              {msg.isUser && (
                <img
                  src={USER_AVATAR}
                  alt="User"
                  width={36}
                  height={36}
                  style={{ borderRadius: "50%", marginLeft: "8px" }}
                  loading="lazy"
                />
              )}
            </div>
          )
        )}
        {isTyping && (
          <div
            style={{
              padding: "9px 14px",
              marginBottom: "10px",
              borderRadius: "18px",
              background: "#f8f8f8",
              border: "1px solid #eee",
              color: "#888",
              fontSize: "14px",
              maxWidth: "77%",
              alignSelf: "flex-start",
            }}
          >
            WeBring Bot is typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>
      <footer
        style={{
          backgroundColor: "#222",
          borderTop: "1.5px solid #FFD600",
          padding: "10px 12px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}
        >
          <textarea
            rows={1}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onInputKeyDown}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "20px",
              fontSize: "15px",
              resize: "none",
              border: "1.5px solid #ececec",
              outline: "none",
              background: "#f8f8f8",
              color: "#222",
              minHeight: 20,
              maxHeight: 80,
              transition: "border 0.18s, background 0.15s",
            }}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            style={{
              backgroundColor: "#FFD600",
              color: "#222",
              border: "none",
              padding: "12px 19px",
              borderRadius: "20px",
              cursor: input.trim() ? "pointer" : "not-allowed",
              fontSize: "17px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(58,93,35,0.06)",
              opacity: input.trim() ? 1 : 0.5,
              transition: "background 0.18s, color 0.18s",
            }}
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Chatbot;
