import React from 'react';
import { Button } from '../index';

export default () => {
  return (
    <div>
      <Button label='button' primary={true} size="small" onClick={()=> console.log('点击')}/>
      <Button label='disabled' size="small" disabled={true} onClick={() => console.log('禁止点击')}/>
      <Button label='button'/>
      <Button label='button' primary={true}/>
      <Button label='button' primary={true} size="large" backgroundColor='#ce553f'/>
    </div>
  )
}


