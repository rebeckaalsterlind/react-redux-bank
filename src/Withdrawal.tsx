
import React, { useState } from 'react'
import { store } from './store';
import { withdrawal } from './actions';


interface State {
  amount: number,
  isForm: boolean
}

export default function Withdrawal({}, state:State) {

  const [amount, setAmount] = useState(0);
  const [isForm, setIsForm] = useState(false);

  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();

    store.dispatch(withdrawal(amount));

    setAmount(0)
    setIsForm(!isForm)
  }

  return (
    <div>
      {!isForm && <button onClick={evt => setIsForm(!isForm)}>Withdrawal money</button>}
      {isForm && 
      <form onSubmit={handleSubmit}>
        <input type="number"  placeholder="Withdrawal amount.." onChange={evt => setAmount(Number(evt.target.value))} />
        <button>Withdrawal</button>
      </form>
      }
    </div>
  )
}
