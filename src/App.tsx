import React from 'react';
import './App.css';
import Saldo from './Saldo'
import Insert from './Insert';
import Withdrawal from './Withdrawal';


// interface State {
//   saldo: number
// }



//function App({}, state: State) {
  function App() {


  return (
    <div className="App">
      <Saldo />
      <Insert />
      <Withdrawal />
    </div>
  );
};

export default App;
