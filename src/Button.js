import React from 'react';

const Button = ({onClickHandler, children}) => {
  return (
    <div>
      <button onClick={onClickHandler}>{children}</button>
    </div>
  );
}

export default Button;
