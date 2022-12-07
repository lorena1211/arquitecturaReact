import { Row, Col, Form, Table } from 'react-bootstrap'
import './Memories.css'

export function Memories() {
  return (
    <Row>
      <Col>
        <Form.Group className="principal-memory-container">
          <Form.Label>Memoria Principal</Form.Label>
          <Form.Control className="principal-memory" as="textarea" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group className="data-memory-container">
          <Form.Label>Memoria de datos</Form.Label>
          <Table className="data-memory" border="true" size="sm" variant="secondary">
            <thead>
              <tr>
                <th>Direccion</th>
                <th>Dato</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>000000</td>
                <td>000001</td>
              </tr>
              <tr>
                <td>000000</td>
                <td>000001</td>
              </tr>
              <tr>
                <td>000000</td>
                <td>000001</td>
              </tr>
              <tr>
                <td>000000</td>
                <td>000001</td>
              </tr>
              <tr>
                <td>000000</td>
                <td>000001</td>
              </tr>
            </tbody>
          </Table>
        </Form.Group>
      </Col>
    </Row>
  )
}
