import React from "react";

const Formthree = () => {
  return (
    <div className='main'>
      <div className='main-box'>
        <div className='heading-one'>
          <span className='main-heading'>
            How Are You Planning To use Eden?
          </span>
          <span className='small-heading'>
            We'll streamline your setup experience accordingly.
          </span>
        </div>

        <form action='' className='box-wrapper'>
          <div className='box focus'>
            <div className='icon focus-icon'>
              <i class='fas fa-user'></i>
            </div>
            <div className='box-heading'>For Myself</div>
            <div className='box-subheading'>
              Write better. Think more clearly. Stay organized.
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <i class='fas fa-users'></i>
            </div>
            <div className='box-heading'>With my team</div>
            <div className='box-subheading'>
              Wikis, doc, tasks & project, all in one place.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formthree;
