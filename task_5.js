// Задание #5

const clientsEstimations = []

function askClientToGiveEstimation() {
  const number = Number(
    prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`).trim()
  )
  if (number >= 1 && number <= 10) {
    clientsEstimations.push(number)
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((count) => count > 5)
const notGoodEstimations = clientsEstimations.filter((count) => count <= 5)

alert(
  `*********
Всего положительных оценок: ${goodEstimations.length}
Всего отрицательных оценок: ${notGoodEstimations.length}
**********`
)
