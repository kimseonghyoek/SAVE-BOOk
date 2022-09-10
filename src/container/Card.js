import React from 'react';

const Card = ({children, styled}) => {
  return (
    <div className={"rounded-test " + styled}>
      {children}
    </div>
  )
}

export default Card;