import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import './Buses.css'

/**
 * Componenete de buses
 * @returns Retorna el componenete de buses
 */
export function Buses({ busData }) {
  /**
   * funcion que nos permite enviarle datos al bus de datos
   * @param {*} size tamaño de el arrglo
   */
  const handleBusData = (size) => {
    let inputData = document.getElementById('controlIns')
    let inputAdd = document.getElementById('controlAdd')
    if (size < busData.length) {
      inputAdd.value = busData[size][1]
      inputData.value = busData[size].toString()
      setTimeout(() => {
        handleBusData(size + 1)
      }, 7000)
    } else {
      inputData.value = ''
      inputAdd.value = ''
    }
  }

  if (busData.length != 0) {
    handleBusData(0)
  }

  return (
    <div className="buses_container">
      <Form.Group className="bus_container">
        <Form.Label>Bus de dirección</Form.Label>
        <Form.Control id="controlAdd" type="text" />
      </Form.Group>
      <Form.Group className="bus_container">
        <Form.Label>Bus de datos</Form.Label>
        <Form.Control id="controlIns" name="controlData" type="text"></Form.Control>
      </Form.Group>
      <Form.Group className="bus_container">
        <Form.Label>Bus de control</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </div>
  )
}

Buses.propTypes = {
  busData: PropTypes.array.isRequired
}
