import React from 'react';
import { Parallax } from 'react-parallax';

const Service = (props) => {
  const { url, title} = props;
  return(
    <Parallax bgImage={url} strength={950}>
      <div>
        <div>{title}</div>
      </div>
    </Parallax>
  )
}

export default Service;