import React, { useRef } from 'react';
import './style.css';


interface ImageProps {
  src:string
}

export default function Image(props:ImageProps):JSX.Element {
  const imgRef  = useRef<HTMLImageElement|null>(null);
  
  const {src} = props;
  return (
    <div className="l-img-wrapper">
      <img className="l-img" src={src} alt="" ref={imgRef}/>
    </div>
  )
}