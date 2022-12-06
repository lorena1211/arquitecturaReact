import { Form } from 'react-bootstrap'
import './Buses.css'

export default function Buses() {
  return (
    <div className="buses_container">
      <Form.Group className="bus_container">
        <Form.Label>Bus de direccion</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="bus_container">
        <Form.Label>Bus de datos</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="bus_container">
        <Form.Label>Bus de control</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </div>
  )
}
