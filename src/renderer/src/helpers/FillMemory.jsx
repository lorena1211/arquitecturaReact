export function FillMemory() {
  let list = []
  for (let i = 0; i <= 255; i++) {
    list.push({ [i.toString(2).padStart(8, 0)]: '' })
  }
  return list
}

export function AllocateMemomry(instructions, memory) {
  let copyMemory = [...memory]
  let list = []
  instructions.map((ins) => {
    let separateInstruction = ins.split(' ')
    for (let i in copyMemory) {
      let key = Object.keys(copyMemory[i])
      if (copyMemory[i][key] == '') {
        copyMemory[i][key] = separateInstruction[1]
        separateInstruction[1] = key.toString()
        break
      }
    }
    list.push(separateInstruction)
  })
  return { list, copyMemory }
}

export function storeMemory(results, memory) {
  let copyMemory = [...memory]
  results.map((result) => {
    let key = Object.keys(result).toString()
    for (const position in copyMemory) {
      if (Object.keys(copyMemory[position]).toString() === key) {
        copyMemory[position][key] = result[key]
        break
      }
    }
  })
}
