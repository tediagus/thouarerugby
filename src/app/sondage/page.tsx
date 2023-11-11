"use client";

import React, { useState, ChangeEvent } from "react";

interface RugbyQuestionnaireState {
  gender: string;
  age: string;
  durationOfResidence: string;
  currentlyPlayingRugby: string;
  reasonsForNotPlayingRugby: string[];
  satisfactionLevel: string;
  desiredFacilities: string[];
  interestInRugbyEvents: string;
  desiredEventTypes: string[];
  additionalComments: string;
}

const Sondage = () => {
  const [state, setState] = useState<RugbyQuestionnaireState>({
    gender: "",
    age: "",
    durationOfResidence: "",
    currentlyPlayingRugby: "",
    reasonsForNotPlayingRugby: [],
    satisfactionLevel: "",
    desiredFacilities: [],
    interestInRugbyEvents: "",
    desiredEventTypes: [],
    additionalComments: "",
  });

  const handleCheckboxChange = (
    value: string,
    stateKey: keyof RugbyQuestionnaireState
  ) => {
    /*  const updatedArray = [...state[stateKey]];
    if (updatedArray.includes(value)) {
      updatedArray.splice(updatedArray.indexOf(value), 1);
    } else {
      updatedArray.push(value);
    }
    setState({ ...state, [stateKey]: updatedArray });
  }; */

    const handleChange = (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
      stateKey: keyof RugbyQuestionnaireState
    ) => {
      setState({ ...state, [stateKey]: e.target.value });
    };

    return (
      <div className="text-[#ADB7B3]">
        <div> Mettre une intro</div>
        <div className="flex flex-col">
          <label className="flex gap-10">
            Genre:
            <select
              value={state.gender}
              onChange={(e) => handleChange(e, "gender")}
            >
              <option value="">Sélectionnez</option>
              <option value="F">Féminin</option>
              <option value="M">Masculin</option>
            </select>
          </label>

          <label>
            Tranche d&#39;âge :
            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("Moins de 18 ans")}
                  onChange={() =>
                    handleCheckboxChange("Moins de 18 ans", "age")
                  }
                />
                <span className="px-2">Moins de 18 ans</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("18-24 ans")}
                  onChange={() => handleCheckboxChange("18-24 ans", "age")}
                />
                <span className="px-2">18-24 ans</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("25-34 ans")}
                  onChange={() => handleCheckboxChange("25-34 ans", "age")}
                />
                <span className="px-2">25-34 ans</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("35-44 ans")}
                  onChange={() => handleCheckboxChange("35-44 ans", "age")}
                />
                <span className="px-2">35-44 ans</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("45-54 ans")}
                  onChange={() => handleCheckboxChange("45-54 ans", "age")}
                />
                <span className="px-2">45-54 ans</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={state.age.includes("55 ans et plus")}
                  onChange={() => handleCheckboxChange("55 ans et plus", "age")}
                />
                <span className="px-2">55 ans et plus</span>
              </label>
            </div>
          </label>

          <label className="flex flex-col">
            Dans que ville habitez vous ?
            <input
              type="text"
              value={state.durationOfResidence}
              onChange={(e) => handleChange(e, "durationOfResidence")}
            />
          </label>

          <label className="flex flex-col">
            Depuis combien de temps habitez vous dans cette ville ?
            <input
              type="text"
              value={state.durationOfResidence}
              onChange={(e) => handleChange(e, "durationOfResidence")}
            />
          </label>

          <label className="flex flex-col">
            Pratiquez-vous actuellement le rugby ?
            <select
              value={state.currentlyPlayingRugby}
              onChange={(e) => handleChange(e, "currentlyPlayingRugby")}
            >
              <option value="">Sélectionnez</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </label>

          <label className="flex flex-col">
            Si oui où ?
            <input
              type="text"
              value={state.durationOfResidence}
              onChange={(e) => handleChange(e, "durationOfResidence")}
            />
          </label>

          <label className="flex flex-col">
            Si non, quelles sont les raisons principales ?
            <div>
              <label>
                Manque d&#39;infrastructures sportives
                <input
                  type="checkbox"
                  checked={state.reasonsForNotPlayingRugby.includes(
                    "Manque d'infrastructures sportives"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "Manque d'infrastructures sportives",
                      "reasonsForNotPlayingRugby"
                    )
                  }
                />
              </label>
              <label className="flex flex-col">
                Manque de temps
                <input
                  type="checkbox"
                  checked={state.reasonsForNotPlayingRugby.includes(
                    "Manque de temps"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "Manque de temps",
                      "reasonsForNotPlayingRugby"
                    )
                  }
                />
              </label>
              <label className="flex flex-col">
                Manque de motivation
                <input
                  type="checkbox"
                  checked={state.reasonsForNotPlayingRugby.includes(
                    "Manque de motivation"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "Manque de motivation",
                      "reasonsForNotPlayingRugby"
                    )
                  }
                />
              </label>
              <label className="flex flex-col">
                Vous n&#39;aimez pas ce sport
                <input
                  type="checkbox"
                  checked={state.reasonsForNotPlayingRugby.includes(
                    "aime pas le rugby"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "aime pas le rugby",
                      "reasonsForNotPlayingRugby"
                    )
                  }
                />
              </label>
            </div>
          </label>

          <label className="flex flex-col">
            Êtes-vous favorable à installation d&#39;;infrastructure pour la
            praztique du rugby dans notre ville ?
            <select
              value={state.satisfactionLevel}
              onChange={(e) => handleChange(e, "satisfactionLevel")}
            >
              <option value="">Sélectionnez</option>
              <option value="favorable">Favorable</option>
              <option value="Neutre">Sans plus</option>
              <option value="defavorable">Défavorable</option>
            </select>
          </label>

          <label className="flex flex-col">
            Quels distance Seriez vous pret à faire pour voir ou pratiquer ce
            sport
            <div>
              <label>Terrains de rugby</label>
            </div>
          </label>

          <label className="flex flex-col">
            Seriez-vous intéressé(e) par la participation à des événements
            sportifs de rugby locaux, tels que des tournois ou des compétitions
            ?
            <select
              value={state.interestInRugbyEvents}
              onChange={(e) => handleChange(e, "interestInRugbyEvents")}
            >
              <option value="">Sélectionnez</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
              <option value="Peut-être">Peut-être</option>
            </select>
          </label>

          <label>
            Quels types d&#39;événements sportifs de rugby aimeriez-vous voir
            organisés dans notre ville ?
            <div>
              <label className="flex flex-col">
                Tournois de rugby
                <input
                  type="checkbox"
                  checked={state.desiredEventTypes.includes(
                    "Tournois de rugby"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "Tournois de rugby",
                      "desiredEventTypes"
                    )
                  }
                />
              </label>
              {/* Ajoutez d'autres types d'événements spécifiques au rugby si nécessaire */}
            </div>
          </label>

          <label className="flex flex-col">
            Avez-vous des suggestions ou des commentaires supplémentaires
            concernant la pratique du rugby dans notre ville ?
            <textarea
              value={state.additionalComments}
              onChange={(e) => handleChange(e, "additionalComments")}
            />
          </label>
        </div>

        <button onClick={() => console.log(state)}>Soumettre</button>
      </div>
    );
  };
};
export default Sondage;
