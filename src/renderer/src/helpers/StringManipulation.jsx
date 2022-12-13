export function SplitInstruction(instruictions) {
  console.log(instruictions)
  let list = []
  instruictions.split('\n').map((inst) => {
    list.push(inst.split(','))
  })
  return list
}

export function splitSpacesInstruction(instructions) {
  let list = []
  instructions.split('\n').map((ins) => {
    list.push(ins.split(','))
  })
  return list
}
