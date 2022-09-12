import React from 'react';

const Service = ({children, style}) => {
  return(
    <div className={'flex-1 flex h-full ' + style}>
      {children}
    </div>
  )
}

export default Service;