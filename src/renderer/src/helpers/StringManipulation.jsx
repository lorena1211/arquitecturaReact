export function SplitInstruction(instruictions) {
  console.log(instruictions)
  let list = []
  instruictions.split('\n').map((inst) => {
    list.push(inst.split(','))
  })
  return list
}
