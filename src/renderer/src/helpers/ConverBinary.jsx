import { Instructions } from '../assets/Instructions'

export function ConvertBinary(instructionList) {
  let list = []
  let binaryInstruction = ''
  instructionList.map((ins) => {
    console.log(ins)
    if (ins[0]) {
      binaryInstruction += Instructions[ins[0]]
    }
    binaryInstruction += ' ' + ins[1]
    binaryInstruction += ' ' + parseInt(ins[2], 10).toString(2).padStart(8, 0)
    binaryInstruction += ' ' + parseInt(ins[3], 10).toString(2).padStart(8, 0)
    list.push(binaryInstruction)
    binaryInstruction = ''
  })
  return list
}
