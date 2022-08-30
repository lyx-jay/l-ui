import React from 'react';
import './style.css';

interface LoadingProps {
  width?: number;
  height?: number;
}

export default function Loading(props: LoadingProps) {
  const { width, height } = props;
  const widthSize = width || 50;
  const heightSize = height || 50;
  return (
    <div className='l-load' style={{width:widthSize, height:heightSize}}>
    </div>
  )
}
