import React from 'react';
import { Counter } from './components/Counter';


export const App = () => {
  return(
    <>
    <div className='ui container' style={{ marginTop: '20px'}}>
      <Counter />
    </div>
    </>
  )
}