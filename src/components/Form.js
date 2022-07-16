import "./form.css";
import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Formthree from "./FormThree";
import FinalStep from "./FinalStep";
import eden from "../asset/eden.png";
const progressSteps = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

export default function Form() {
  const [step, setStep] = useState(0);

  const handleChangeStep = (e) => {
    e.target.value === "next" &&
      step < progressSteps.length &&
      setStep(step + 1);
  };

  return (
    <div>
      <div className='logo-name'>
        <img src={eden} alt='' />
        <h1>Eden</h1>
      </div>
      <div className='progess'>
        <ul>
          {progressSteps.map((val, index) => (
            <>
              {index <= step ? (
                index === step ? (
                  <li>
                    <p className='active'>{val.name}</p>
                  </li>
                ) : (
                  <li>
                    <p className='completed'>{val.name}</p>
                  </li>
                )
              ) : (
                <li>
                  <p className='inactive'>{val.name}</p>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>

      {step == "0" && <FormOne />}
      {step == "1" && <FormTwo />}
      {step == "2" && <Formthree />}
      {step == "3" && <FinalStep />}
      <div className='btn-wrapper'>
        {step !== 3 ? (
          <button
            className='btn-primary'
            value='next'
            onClick={handleChangeStep}>
            Create Workspace
          </button>
        ) : (
          <button className='btn-primary'>Launch Eden</button>
        )}
      </div>
    </div>
  );
}
