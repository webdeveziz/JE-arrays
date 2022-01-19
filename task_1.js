// Задание #1

const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

const giveParcel = (arr) => {
  for (let i = 0; i < 3; i++) {
    const removedEl = arr.shift()
    alert(
      `${removedEl} получил(а) посылку. В очереди осталось ${arr.length} человек.`
    )
  }
  return arr
}

const leaveQueueWithoutParcel = (arr) => {
  const count = arr.length
  for (let i = 0; i < count; i++) {
    const removedEl = arr.pop()
    alert(`${removedEl} не получил(а) посылку и ушел(ла) из очереди.`)
  }
}

leaveQueueWithoutParcel(giveParcel(peopleWaiting))
