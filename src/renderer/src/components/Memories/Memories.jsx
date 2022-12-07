import { Row, Col, Form, Table } from 'react-bootstrap'
import './Memories.css'

/**
 * Se encuentra la memoria principal y la memoria de datos
 * @returns Componente de memorias
 */
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
          <div className="table-body">
            <Table striped bordered hover variant="secondary" size="sm">
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
          </div>
        </Form.Group>
      </Col>
    </Row>
  )
}
