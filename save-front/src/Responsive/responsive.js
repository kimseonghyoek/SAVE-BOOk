import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const PC = ({children}) => {
  const isPC = useMediaQuery({
    query: "(min-width:1300px)"
  });
  return (
    <>
    {isPC && children}
    </>
  )
}

export const SPC = ({children}) => {
  const isSmallPc = useMediaQuery({
    query: "(min-width:801px) and (max-width:1299px)"
  });
  return (
    <>
      {isSmallPc && children}
    </>
  )
}

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)"
  });
  return (
    <>
      {isMobile && children}
    </>
  )
}