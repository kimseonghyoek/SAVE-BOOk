import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const PC = ({children}) => {
  const isPC = useMediaQuery({
    query: "(min-width:1258px)"
  });
  return (
    <>
    {isPC && children}
    </>
  )
}

export const SPC = ({children}) => {
  const isSmallPc = useMediaQuery({
    query: "(max-width:1300px)"
  });
  return (
    <>
      {isSmallPc && children}
    </>
  )
}

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:1257px)"
  });
  return (
    <>
      {isMobile && children}
    </>
  )
}