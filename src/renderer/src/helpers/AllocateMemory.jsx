export function AllocateMemory(results, memory) {
  let list = []
  results.map((ins) => {
    let instruccionSeparada = ins.split(' ')
    for (let i in memory) {
      let key = Object.keys(memory[i])
      if (memory[i][key] == '') {
        memory[i][key] = instruccionSeparada[1]
        instruccionSeparada[1] = key.toString()
        break
      }
    }
    list.push(instruccionSeparada)
  })
  return { list, memory }
}
