export function insert(newSaldo) {
  console.log("actions", newSaldo)

  return {
    type: "SET_INSERT",
    saldo: newSaldo
  }
}

export function withdrawal(newSaldo) {
  console.log('actions', newSaldo);
  
  return {
    type: "SET_WITHDRAWAL",
    saldo: newSaldo
  }
}