import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { Execution, getResultado } from '../../helpers'
import './Processor.css'

/**
 * Componenete donde se encuentra el sector del procesador
 * con sus memorias, alu y registros
 * @returns El componenete procesador
 */
export function Processor({ busData, procesData }) {
  const [results, setResults] = useState([])
  // Inputs que se van a modificar
  let MBR = document.getElementById('mbr')
  let IR = document.getElementById('ir')
  let MAR = document.getElementById('mar')
  let AC = document.getElementById('ac')
  let OP1 = document.getElementById('op1')
  let OP2 = document.getElementById('op2')
  let RR = document.getElementById('rr')
  let CP = document.getElementById('cp')
  /**
   * Proceso:
   * 1. llevar el op1 desde IR a MAR
   * 2. op Del MAR va al MBR
   * 3. op1 se lleva al op1 de la alu
   * 4. se lleva a la
   */
  useEffect(() => {
    setResults(Execution(procesData))
  }, [procesData])

  useEffect(() => {
    let size = 0
    let time = 0
    const showInfo = () => {
      if (size < busData.length) {
        if (time == 0) {
          console.log('IR: ' + busData[size][1])
          console.log('Contador Programa:' + size.toString().padStart(8, 0))
          RR.value = ''
          IR.value = busData[size][1]
          CP.value = size.toString().padStart(8, 0)
          time++
        } else if (time == 1) {
          console.log('MAR: ' + busData[size][1])
          MAR.value = busData[size][1]
          time++
        } else if (time == 2) {
          console.log('MBR: ' + busData[size][2])
          MBR.value = busData[size][2]
          time++
        } else if (time == 3) {
          console.log('Op1: ' + busData[size][2])
          OP1.value = busData[size][2]
          time++
        } else if (time == 4) {
          console.log('AC: ' + busData[size][2])
          AC.value = busData[size][2]
          time++
        } else if (time == 5) {
          console.log('Op1: ' + busData[size][2])
          console.log('OP2: ' + busData[size][3])
          OP1.value = busData[size][2]
          OP2.value = busData[size][3]
          AC.value = ''
          MBR.value = ''
          MAR.value = ''
          IR.value = ''
          time++
        } else if (time == 6) {
          let result = getResultado(results, busData[size][1]).toString(2).padStart(8, 0)
          console.log('Registro resultado: ' + result)
          OP1.value = ''
          OP2.value = ''
          RR.value = result
          console.log('--------------------')
          time = 0
          size++
        }
      } else {
        clearInterval(intervalo)
        MBR.value = ''
        MAR.value = ''
        IR.value = ''
        RR.value = ''
        OP1.value = ''
        OP2.value = ''
        CP.value = ''
        AC.value = ''
        size = 0
        time = 0
      }
    }
    let intervalo = setInterval(showInfo, 1000)
    return () => {}
  }, [results])

  return (
    <>
      <h5>Procesador</h5>
      <div className="processor-container">
        {/* Seccion de memorias */}
        <div className="memories">
          <Form.Group className="memory">
            <Form.Label>MBR</Form.Label>
            <Form.Control id="mbr" type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>MAR</Form.Label>
            <Form.Control id="mar" type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>IR</Form.Label>
            <Form.Control id="ir" type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>AC</Form.Label>
            <Form.Control id="ac" type="text" />
          </Form.Group>
        </div>
        {/* Seccion de la ALU */}
        <div className="alu">
          <Row>
            <Col>
              <Form.Group className="operating">
                <Form.Label>OP1</Form.Label>
                <Form.Control id="op1" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="operating">
                <Form.Label>OP2</Form.Label>
                <Form.Control id="op2" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="alu-container">
            <div className="alu-figure">ALU</div>
          </Row>
          <Row>
            <Form.Group className="result-record">
              <Form.Label>Registro de resultado</Form.Label>
              <Form.Control id="rr" className="result" type="text" />
            </Form.Group>
          </Row>
        </div>
        {/* Seccion de la unidad de control */}
        <div className="control-unit-container">
          <div className="control-unit">
            <p>Unidad de control</p>
          </div>
          <Form.Group className="program-counter">
            <Form.Label>Contador de programa</Form.Label>
            <Form.Control id="cp" type="text" />
          </Form.Group>
        </div>
      </div>
    </>
  )
}
Processor.propTypes = {
  busData: PropTypes.array.isRequired,
  procesData: PropTypes.array.isRequired
}
