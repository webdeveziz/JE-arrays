// Задание #4

const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)

coffees.forEach((coffee, i) =>
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[i]} евро.`)
)
