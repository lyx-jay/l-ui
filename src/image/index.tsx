import React, { useEffect, useState } from 'react';
import './style.css';


interface ImageProps {
  src:string;
  loader:any;
  unloader:any;
  width?:number;
  height?:number;
}

function imgPromise(src:string):Promise<string> {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(src);
    i.onerror = (err) => reject(err);
    i.src = src;
  })
}

function useImage(src:string):{isLoading:boolean, src: string, err: string} {

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    imgPromise(src)
      .then(src => {
        setLoading(false);
        setValue(src);
      }).catch(err => {
        setLoading(false);
        setError(err);
      })
  }, [src]);

  return {isLoading:loading, src:value, err:error}
}



export default function LImage({src, loader, unloader, ...rest}:ImageProps):JSX.Element {

  const {isLoading, src:imgSrc, err} = useImage(src);
  const width = rest.width || 50;
  const height = rest.height || 50;

  if (imgSrc) {
   return (
    <div className='l-img--wrapper' style={{width: width, height: height}}>
      <img className='l-img' src={imgSrc}/>
    </div>
   )
  }
  if (isLoading) {
    return (
      <div className='l-img--wrapper' style={{width: width, height: height}}>
      {loader}
    </div>
    )
  }
  if (err) {
    return (
      <div className='l-img--wrapper' style={{width: width, height: height}}>
      {unloader}
    </div>
    )
  }

  return <></>

}