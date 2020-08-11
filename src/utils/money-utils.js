
export  const roundMoney = (amount, precision) => {
    return amount.toFixed(precision)
  }
export  const formatMoney = (amount, precision=2) => {
    return `$${roundMoney(amount, precision)}`
  }


