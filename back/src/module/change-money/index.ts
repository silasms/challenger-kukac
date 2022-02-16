const changedMoney = (payment: number, moneyChange: number) => {
  const money = payment - moneyChange
  if (money % 100 === 0) return {"100": money/100}
  const moneyRest = String(money/100).split(".")
  return {
    "100": moneyRest[0],
    "10": moneyRest[1][0] || '0',
    "1": moneyRest[1][1] || '0'
  }
}

export default changedMoney