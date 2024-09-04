"use client";

import React, { useEffect, useState } from 'react';
import ChatBox from "./components/Chatbox";

const Sondage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [conversation, setConversation] = useState([]);
  const [chatbotBotLoaded, setChatbotBotLoaded] = useState(false);

  const botMessages = [
    {
      message: 'Êtes-vous pour la pratique du rugby à Thouaré ?',
      question: (
        <>
          <label><input type="radio" value="oui" name="rugbyWish" onClick={() => handleAnswer('Oui')} /> Oui </label>
          <label><input type="radio" value="non" name="rugbyWish" onClick={() => handleAnswer('Non')} /> Non </label>
        </>
      ),
    },
    {
      message: 'En tant que ?',
      question: (
        <>
          <label><input type="radio" value="joueur" name="rugbyAction" onClick={() => handleAnswer('Joueur')} /> Joueur </label>
          <label><input type="radio" value="benevol" name="rugbyAction" onClick={() => handleAnswer('Bénévol')} /> Bénévol </label>
          <label><input type="radio" value="dirigeant" name="rugbyAction" onClick={() => handleAnswer('Dirigeant')} /> Dirigeant </label>
        </>
      ),
    },
    {
      message: 'Vous êtes plutôt',
      question: (
        <>
          <label><input type="radio" value="7" name="rugbyType" onClick={() => handleAnswer('Rugby à 7')} /> Rugby à 7 </label>
          <label><input type="radio" value="15" name="rugbyType" onClick={() => handleAnswer('Rugby à XV (15)')} /> Rugby à XV (15) </label>
          <label><input type="radio" value="les deux" name="rugbyType" onClick={() => handleAnswer('Les deux')} /> Les deux </label>
        </>
      ),
    },
    {
      message: 'Vous souhaiteriez pratiquer le rugby pour :',
      question: (
        <>
          <label><input type="radio" value="loisir" name="rugbyPractice" onClick={() => handleAnswer('Le loisir')} /> Le loisir </label>
          <label><input type="radio" value="compet" name="rugbyPractice" onClick={() => handleAnswer('La compétition')} /> La compétition </label>
        </>
      ),
    },
  ];

  const handleAnswer = (answer) => {
    console.log('User Answered:', answer);
    // Ajout de la réponse de l'utilisateur au flux de la conversation
    setConversation((prev) => [
      ...prev,
      { type: 'user', text: answer },
    ]);


      setCurrentStep((prevStep) => {
        const nextStep = prevStep + 1;

        if (nextStep < botMessages.length) {
          // Vérifiez si le message et la question ne sont pas déjà dans la conversation
          setConversation((prev) => {
            const newConversation = [...prev];

            // Ajoutez uniquement le message et la question s'ils ne sont pas déjà présents
            if (!newConversation.find(entry => entry.text === botMessages[nextStep].message)) {
              newConversation.push({ type: 'bot', text: botMessages[nextStep].message });
            }

            if (!newConversation.find(entry => entry.text === botMessages[nextStep].question)) {
              newConversation.push({ type: 'bot', text: botMessages[nextStep].question });
            }

            return newConversation;
          });
        }

        return nextStep;
      });
   
  };

  // Initialisation : charger le premier message du bot une seule fois
  useEffect(() => {
    if (!chatbotBotLoaded) {
      console.log('Loading initial message');
      setConversation([
        { type: 'bot', text: botMessages[0].message },
        { type: 'bot', text: botMessages[0].question },
      ]);
      setChatbotBotLoaded(true);
    }
  }, [chatbotBotLoaded]);

  return (
    <div className="container mx-auto p-4">
      {/* <div className="text-[#ADB7B3] bg-[#94a3b8] rounded-xl p-8"> */}
      <ChatBox />
        {/* Affichage du flux de conversation */}
        {conversation.map((entry, index) => (
          <ChatBox key={index} message={entry.text} />
        ))}
     {/*  </div> */}
    </div>
  );
};

export default Sondage;
