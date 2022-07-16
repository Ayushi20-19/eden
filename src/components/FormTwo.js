import React from "react";

const FromTwo = () => {
  return (
    <div className='main'>
      <div className='main-box'>
        <div className='heading-one'>
          <span className='main-heading'>
            Let's setup home for all your work
          </span>
          <span className='small-heading'>
            You can always create another workspace later.
          </span>
        </div>
        <form action='' id='form'>
          <label htmlFor='workspace-name'>Workspace Name</label>
          <input type='text' id='workspace-name' placeholder='Eden' />
          <label htmlFor='workspace-url'>
            Workspace URL <span>(optional)</span>
          </label>
          <div className='url-wrapper'>
            <div className='input-url'>www.eden.com/</div>
            <input type='url' id='workspace-url' placeholder='Example' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FromTwo;
