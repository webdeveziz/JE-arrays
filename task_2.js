// Задание #2

const getSumOfSequence = (number) => {
  const arr = []

  for (let i = 1; i <= number; i++) {
    arr.push(i)
  }

  return arr.shift() + arr.pop()
}

console.log(getSumOfSequence(5))
