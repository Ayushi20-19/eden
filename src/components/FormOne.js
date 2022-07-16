import React from "react";

const FormOne = () => {
  return (
    <div className='main'>
      <div className='main-box'>
        <div className='heading-one'>
          <span className='main-heading'>Welcome! First things first...</span>
          <span className='small-heading'>
            You can always change them later.
          </span>
        </div>
        <form action='' id='form'>
          <label htmlFor='full-name'>Full Name</label>
          <input type='text' id='full-name' placeholder='Steve Jobs' />
          <label htmlFor='display-name'>Display Name</label>
          <input type='text' id='display-name' placeholder='Steve' />
        </form>
      </div>
    </div>
  );
};

export default FormOne;
