
export default function reduce(state, action) {
  
  console.log('reducer', state, action);

  switch(action.type) {
    case "SET_INSERT":
      return {
       ...state, saldo: state.saldo + action.saldo
      }
    
    case "SET_WITHDRAWAL":
      return {
        ...state, saldo: state.saldo - action.saldo
      }

    default:
    return state

  }
}