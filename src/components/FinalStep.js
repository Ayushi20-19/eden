import React from "react";

const FinalStep = () => {
  var name = "Eren";
  return (
    <div className='main'>
      <div className='main-box'>
        <div className='heading-one'>
          <i className='fas fa-check-circle tickmark'></i>
          <span className='main-heading'>Congratulation, {name}!</span>
          <span className='small-heading'>
            You have completed onboarding, you can start using the Eden!
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
