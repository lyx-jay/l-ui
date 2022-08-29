import React, { useState } from 'react';
import {MouseEvent} from 'react';
import './style.css';


// NOTE: 关闭按钮
// NOTE: 自动消失（2秒后）

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
  content: string;
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert = ({ content, kind = 'info', ...rest }: AlertProps) => {

  const [closed, setClosed] = useState<boolean>(false)

  const handleClose = (e:MouseEvent<HTMLSpanElement>)=> {
    e.preventDefault();
    setClosed(true);
  }
  
  return (
    <div
      className={'l-alert' + (closed ? '--hide' : '')}
      style={{
        background: kinds[kind],
      }}
      {...rest}
    >
      {content}
      <span className='l-alert--close'
            onClick={handleClose}>
        x
      </span>
    </div>
  );
}


export default Alert;