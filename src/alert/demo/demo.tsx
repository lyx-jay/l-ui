import React from 'react'
import Alert from '../index'

export default function demo() {
  return (
    <div style={{display: 'flex', flexWrap:'wrap', gap:10}}>
      <Alert content='this is an info'/>
      <Alert content='this is an warning' kind='warning'/>
      <Alert content='this is an positive info' kind='positive'/>
      <Alert content='this is an negative info' kind='negative'/>
    </div>
  )
}
