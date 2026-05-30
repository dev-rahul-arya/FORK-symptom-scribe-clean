import { useState, useRef, useEffect } from "react";

const AIHealthAssistant = () => {
  const [symptoms, setSymptoms] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleAnalyze = async () => {
    if (!symptoms.trim() || loading) return;

    const userMessage = symptoms.trim();
    setSymptoms("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            `Based on your symptoms ("${userMessage}"), here are some general insights:\n\n` +
            `• Monitor the duration and intensity of your symptoms.\n` +
            `• Stay hydrated and get adequate rest.\n` +
            `• If symptoms persist for more than 48 hours or worsen, consult a healthcare professional.\n\n` +
            `⚠️ This is AI-generated information only and does not constitute medical advice.`,
        },
      ]);
      setLoading(false);
    }, 1800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">

      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center text-lg">
            🩺
          </div>
          <div>
            <h1 className="font-semibold text-base">AI Health Assistant</h1>
            <p className="text-xs text-muted-foreground">Describe your symptoms for instant AI analysis</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-b border-border bg-muted/40 px-6 py-2.5">
        <div className="max-w-3xl mx-auto flex items-start gap-2">
          <span className="text-amber-500 text-xs mt-0.5">⚠️</span>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Medical Disclaimer:</span>{" "}
            This provides general information only. Always seek professional medical advice for diagnosis or treatment.
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="max-w-3xl mx-auto px-4 space-y-5">

          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl">
                🩺
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">How can I help you today?</h2>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Describe your symptoms and I'll provide instant AI-powered health insights and guidance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 w-full max-w-sm">
                {[
                  "I have a headache and fever",
                  "Sore throat for 3 days",
                  "Feeling tired and dizzy",
                  "Stomach pain after eating",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSymptoms(suggestion)}
                    className="text-xs text-left px-3 py-2.5 rounded-xl border border-border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  🩺
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm border border-border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-sm flex-shrink-0">
                🩺
              </div>
              <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border px-4 py-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3 bg-muted border border-border rounded-2xl px-4 py-3 focus-within:border-teal-500/50 focus-within:ring-1 focus-within:ring-teal-500/20 transition-all">
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your symptoms… (e.g. 'I have a sore throat and headache')"
              rows={1}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none max-h-32"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !symptoms.trim()}
              className="w-8 h-8 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Send"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>

    </div>
  );
};

export default AIHealthAssistant;
