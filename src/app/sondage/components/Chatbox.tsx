import { useEffect, useState } from "react";

interface ChatBoxProps {
  message?: React.ReactNode;
  avatarUrl?: string;
}

const ChatBox = ({ message = '', avatarUrl = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }: ChatBoxProps) => {
  const initMessage = `Bonjour, je suis [votre nom ou rôle], votre assistant(e) pour ce sondage. Votre participation est essentielle pour nous aider à faire avancer ce projet et renforcer notre voix auprès des instances administratives. Merci de prendre quelques instants pour partager votre avis.`;
  
  const [isWaiting, setWaiting] = useState<boolean>(true);
  const [currentMessage, setCurrentMessage] = useState<React.ReactNode>(initMessage);

  useEffect(() => {
    // Simule une attente avant d'afficher le message
    const timer = setTimeout(() => {
      setWaiting(false);
      if (message) {
        setCurrentMessage(message);
      }
    }, 1500);

    return () => clearTimeout(timer); // Nettoie le timeout si le composant est démonté
  }, [message]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-2 my-2">
        <img
          className="h-10 w-10 rounded-full ring-2 ring-white"
          src={avatarUrl}
          alt="Avatar"
        />
        <div
          className={`py-3 px-4 bg-slate-50 rounded-lg shadow ${
            isWaiting ? "opacity-0" : "opacity-100 transition-opacity duration-500 ease-in-out"
          }`}
        >
          {currentMessage}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
