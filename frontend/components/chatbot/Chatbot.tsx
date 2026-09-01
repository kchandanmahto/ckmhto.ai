"use client";

import Image from "next/image";

import {
    FormEvent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    Bot,
    Loader2,
    Plus,
    Send,
    X,
} from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const INITIAL_MESSAGE: Message = {
    role: "assistant",
    content:
        "Hi! I'm Chandan's AI assistant. Ask me about his projects, skills, experience or AI work.",
};

export default function Chatbot() {
    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        INITIAL_MESSAGE,
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const [conversationId] = useState(() => {
        if (typeof window === "undefined") {
            return "";
        }

        const saved = sessionStorage.getItem(
            "ckmhto-chat-conversation",
        );

        if (saved) {
            return saved;
        }

        const id = crypto.randomUUID();

        sessionStorage.setItem(
            "ckmhto-chat-conversation",
            id,
        );

        return id;
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    /*
     * Auto-scroll whenever messages change.
     */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    /*
     * Start a completely new conversation.
     */
    function startNewConversation() {
        if (loading) {
            return;
        }

        const id = crypto.randomUUID();

        sessionStorage.setItem(
            "ckmhto-chat-conversation",
            id,
        );

        // setConversationId(id);
        setMessages([INITIAL_MESSAGE]);
        setInput("");
    }

    /*
     * Send message.
     */
    async function handleSubmit(
        event?: FormEvent<HTMLFormElement>,
    ) {
        event?.preventDefault();

        const message = input.trim();

        if (
            !message ||
            loading ||
            !conversationId
        ) {
            return;
        }

        setInput("");
        setLoading(true);

        setMessages((current) => [
            ...current,
            {
                role: "user",
                content: message,
            },
            {
                role: "assistant",
                content: "",
            },
        ]);

        try {
            const apiUrl =
                process.env.NEXT_PUBLIC_API_URL ||
                "http://127.0.0.1:8000";

            const response = await fetch(
                `${apiUrl}/api/chat/stream`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        conversation_id:
                            conversationId,
                        message,
                    }),
                },
            );

            if (!response.ok) {
                throw new Error(
                    `Request failed: ${response.status}`,
                );
            }

            if (!response.body) {
                throw new Error(
                    "Streaming is not supported.",
                );
            }

            const reader =
                response.body.getReader();

            const decoder =
                new TextDecoder();

            while (true) {
                const { value, done } =
                    await reader.read();

                if (done) {
                    break;
                }

                const chunk =
                    decoder.decode(value, {
                        stream: true,
                    });

                if (!chunk) {
                    continue;
                }

                setMessages((current) => {
                    const updated = [...current];

                    const lastIndex =
                        updated.length - 1;

                    const last =
                        updated[lastIndex];

                    if (
                        last &&
                        last.role ===
                        "assistant"
                    ) {
                        updated[lastIndex] = {
                            ...last,
                            content:
                                last.content +
                                chunk,
                        };
                    }

                    return updated;
                });
            }
        } catch (error) {
            console.error(
                "CHATBOT ERROR:",
                error,
            );

            setMessages((current) => {
                const updated = [...current];

                const lastIndex =
                    updated.length - 1;

                const last =
                    updated[lastIndex];

                if (
                    last &&
                    last.role === "assistant"
                ) {
                    updated[lastIndex] = {
                        ...last,
                        content:
                            "Sorry, I couldn't process that request right now. Please try again.",
                    };
                }

                return updated;
            });
        } finally {
            setLoading(false);
        }
    }

    /*
     * Enter sends message.
     * Shift + Enter creates a new line.
     */
    function handleKeyDown(
        event: KeyboardEvent<HTMLTextAreaElement>,
    ) {
        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();

            if (!loading) {
                handleSubmit();
            }
        }
    }

    return (
        <>
            {/* =================================================
                CHAT WINDOW
            ================================================= */}

            {open && (
                <div className="fixed bottom-24 right-4 z-[60] flex h-[min(650px,calc(100vh-120px))] w-[calc(100vw-32px)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-theme bg-theme-surface shadow-2xl backdrop-blur-xl sm:right-6">

                    {/* Header */}
                    <div className="flex shrink-0 items-center justify-between border-b border-theme px-5 py-4">

                        <div className="flex items-center gap-3">

                            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-theme">
                                <Image
                                    src="/chandan3.png"
                                    alt="Chandan Kumar"
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-theme-primary">
                                    Ckmhto.AI
                                </p>

                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                                    <span className="text-xs text-theme-muted">
                                        Online
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">



                            {/* New conversation */}
                            <button
                                type="button"
                                onClick={
                                    startNewConversation
                                }
                                disabled={loading}
                                aria-label="New conversation"
                                className="flex h-8 w-8 items-center justify-center rounded-full text-theme-muted transition hover:bg-theme-soft hover:text-theme-primary disabled:opacity-40"
                            >
                                <Plus size={18} />
                            </button>

                            {/* Close */}
                            <button
                                type="button"
                                onClick={() =>
                                    setOpen(false)
                                }
                                aria-label="Close chatbot"
                                className="flex h-8 w-8 items-center justify-center rounded-full text-theme-muted transition hover:bg-theme-soft hover:text-theme-primary"
                            >
                                <X size={18} />
                            </button>

                        </div>
                    </div>

                    {/* =================================================
                        MESSAGES
                    ================================================= */}

                    <div className="flex-1 overflow-y-auto p-4 sm:p-5">

                        <div className="space-y-4">

                            {messages.map(
                                (
                                    message,
                                    index,
                                ) => (
                                    <div
                                        key={`${message.role}-${index}`}
                                        className={`flex ${message.role ===
                                            "user"
                                            ? "justify-end"
                                            : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${message.role ===
                                                "user"
                                                ? "rounded-br-md bg-theme-primary text-[var(--accent-foreground)]"
                                                : "rounded-bl-md bg-theme-soft text-theme-secondary"
                                                }`}
                                        >
                                            {message.content ||
                                                (loading &&
                                                    message.role ===
                                                    "assistant"
                                                    ? "..."
                                                    : "")}
                                        </div>
                                    </div>
                                ),
                            )}

                            <div
                                ref={
                                    messagesEndRef
                                }
                            />
                        </div>
                    </div>

                    {/* =================================================
                        INPUT
                    ================================================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="shrink-0 border-t border-theme p-3"
                    >
                        <div className="flex items-end gap-2 rounded-2xl border border-theme bg-theme-soft p-1.5">

                            <textarea
                                value={input}
                                onChange={(event) =>
                                    setInput(
                                        event.target
                                            .value,
                                    )
                                }
                                onKeyDown={
                                    handleKeyDown
                                }
                                placeholder="Ask about Chandan..."
                                disabled={
                                    loading ||
                                    !conversationId
                                }
                                rows={1}
                                className="max-h-32 min-h-10 min-w-0 flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-6 text-theme-primary outline-none placeholder:text-theme-muted"
                            />

                            <button
                                type="submit"
                                disabled={
                                    loading ||
                                    !input.trim() ||
                                    !conversationId
                                }
                                aria-label="Send message"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-theme-primary text-[var(--accent-foreground)] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {loading ? (
                                    <Loader2
                                        size={16}
                                        className="animate-spin"
                                    />
                                ) : (
                                    <Send
                                        size={16}
                                    />
                                )}
                            </button>

                        </div>

                        <p className="mt-2 px-2 text-[10px] text-theme-muted">
                            Enter to send · Shift + Enter
                            for new line
                        </p>
                    </form>
                </div>
            )}

            {/* =================================================
                FLOATING BUTTON
            ================================================= */}

            <button
                type="button"
                onClick={() =>
                    setOpen((value) => !value)
                }
                aria-label={
                    open
                        ? "Close AI assistant"
                        : "Open AI assistant"
                }
                aria-expanded={open}
                className="fixed bottom-5 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-theme bg-theme-primary text-[var(--accent-foreground)] shadow-xl transition hover:scale-105 hover:opacity-90 sm:right-6"
            >
                {open ? (
                    <X size={21} />
                ) : (
                    <Bot size={21} />
                )}

                {!open && (
                    <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[var(--background)]" />
                )}
            </button>
        </>
    );
}