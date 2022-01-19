// Задание #3

const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:').trim()

const coffee = coffees.findIndex(
  (name) => name.toLowerCase() === coffeeName.toLowerCase()
)

if (coffee >= 0) {
  alert(
    `Держите ваш любимый кофе ${coffees[coffee]}. Он ${
      coffee + 1
    }-й по популярности в нашей кофейне.`
  )
} else {
  alert(`К сожалению, такого вида кофе нет в наличии`)
}
