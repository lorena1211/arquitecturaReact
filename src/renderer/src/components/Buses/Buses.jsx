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
    if (size < busData.length) {
      inputData.value = busData[size]
      setTimeout(() => {
        handleBusData(size + 1)
      }, 5000)
    } else {
      inputData.value = ''
    }
  }

  if (busData.length != 0) {
    handleBusData(0)
  }

  return (
    <div className="buses_container">
      <Form.Group className="bus_container">
        <Form.Label>Bus de dirección</Form.Label>
        <Form.Control type="text" />
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
