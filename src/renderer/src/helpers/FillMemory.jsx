export function FillMemory() {
  let list = []
  for (let i = 0; i <= 100; i++) {
    list.push({ [i.toString(2).padStart(8, 0)]: '' })
  }
  return list
}
