import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles, Trash2 } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import { initialChatMessages, aiResponses } from '../data/mockData'

function getMockResponse() {
  return aiResponses[Math.floor(Math.random() * aiResponses.length)]
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialChatMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    const userMsg = { id: Date.now(), role: 'user', content: text, time: getTime() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        content: getMockResponse(),
        time: getTime(),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200)
  }

  const clearChat = () => {
    setMessages(initialChatMessages)
  }

  return (
    <div className="page ai-assistant">
      <PageHeader
        title="AI Assistant"
        subtitle="Your intelligent guide for schemes, opportunities, and documents"
        badge="Online"
      />

      <div className="chat-container glass-card">
        <div className="chat-header">
          <div className="chat-header__info">
            <div className="chat-header__avatar">
              <Bot size={20} />
            </div>
            <div>
              <span className="chat-header__name">BharatOS AI</span>
              <span className="chat-header__status">
                <span className="status-dot" /> Ready to assist
              </span>
            </div>
          </div>
          <button type="button" className="icon-btn" onClick={clearChat} aria-label="Clear chat">
            <Trash2 size={18} />
          </button>
        </div>

        <div className="chat-messages">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={`chat-message chat-message--${msg.role}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="chat-message__avatar">
                  {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
                </div>
                <div className="chat-message__bubble">
                  {msg.role === 'assistant' && (
                    <span className="chat-message__label">
                      <Sparkles size={12} /> BharatOS AI
                    </span>
                  )}
                  <p>{msg.content}</p>
                  <span className="chat-message__time">{msg.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              className="chat-message chat-message--assistant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="chat-message__avatar">
                <Bot size={18} />
              </div>
              <div className="chat-message__bubble chat-message__bubble--typing">
                <span className="typing-dots">
                  <span /><span /><span />
                </span>
              </div>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form className="chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Ask about schemes, opportunities, or your documents..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <motion.button
            type="submit"
            className="chat-input__send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </motion.button>
        </form>
      </div>

      <div className="chat-suggestions">
        {[
          'What schemes am I eligible for?',
          'Show me internships',
          'Help with scholarship application',
        ].map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            className="suggestion-chip"
            onClick={() => setInput(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
