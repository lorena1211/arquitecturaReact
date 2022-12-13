export function Execution(instructions) {
  let list = []
  instructions.map((ins) => {
    let map = {}
    switch (ins[0]) {
      case 'ADD': {
        map[ins[1].toString()] = parseInt(ins[2], 10) + parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'SUB': {
        map[ins[1].toString()] = parseInt(ins[2], 10) - parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'MPY': {
        map[ins[1].toString()] = parseInt(ins[2], 10) * parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'DIV': {
        map[ins[1].toString()] = parseInt(ins[2], 10) / parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'ABS': {
        map[ins[1].toString()] = Math.abs(parseInt(ins[2], 10))
        list.push(map)
        map = {}
        break
      }
      case 'NEG': {
        map[ins[1].toString()] = parseInt(ins[2], 10) * -1
        list.push(map)
        map = {}
        break
      }
      case 'INC': {
        map[ins[1].toString()] = parseInt(ins[2], 10) + 1
        list.push(map)
        map = {}
        break
      }
      case 'DEC': {
        map[ins[1].toString()] = parseInt(ins[2], 10) - 1
        list.push(map)
        map = {}
        break
      }
      case 'AND': {
        map[ins[1].toString()] = parseInt(ins[2], 10) & parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'NOT': {
        map[ins[1].toString()] = parseInt(ins[2], 10) < 1 ? true : false
        list.push(map)
        map = {}
        break
      }
      case 'OR': {
        map[ins[1].toString()] = parseInt(ins[2], 10) | parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'COMP': {
        map[ins[1].toString()] = parseInt(ins[2], 10) == parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'ORX': {
        map[ins[1].toString()] = parseInt(ins[2], 10) ^ parseInt(ins[3], 10)
        list.push(map)
        map = {}
        break
      }
      case 'HALT': {
        break
      }
    }
  })
  return list
}
