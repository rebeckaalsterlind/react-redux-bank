import React, { useState } from 'react';
import { store } from './store';
import { insert } from './actions';

interface State {
  amount: number,
  isForm: boolean
}

export default function Insert({}, state:State) {

  const [amount, setAmount] = useState(0);
  const [isForm, setIsForm] = useState(false)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();     
    
    store.dispatch(insert(amount))

    setAmount(0);
    setIsForm(!isForm)
  } 

  return (
    <div>
      {!isForm && <button onClick={evt => setIsForm(!isForm)}>Insert money</button>}
      {isForm &&   
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Insert amount..." onChange={evt => setAmount(Number(evt.target.value))} />
        <button >Insert</button>
      </form>}
    </div>
  )
}
