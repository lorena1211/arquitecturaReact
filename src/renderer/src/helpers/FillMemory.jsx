let list = []
export function FillMemory() {
  for (let i = 0; i <= 255; i++) {
    list.push({ [i.toString(2).padStart(8, 0)]: '' })
  }
  return list
}

export function AllocateMemomry(val) {
  for (let i = 0; i < list.length; i++) {
    let key = Object.keys(list[i])
    if (list[i][key] === '') {
      list[i][key] = val
      break
    }
  }
}
