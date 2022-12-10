/* eslint-disable react/jsx-key */
import { Row, Form, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Memories.css'

/**
 * Se encuentra la memoria principal y la memoria de datos
 * @returns Componente de memorias
 */
export function Memories({ memory }) {
  const fill = memory.map((row) => (
    <tr>
      <td key={Object.keys(row)}>{Object.keys(row).toString()}</td>
      <td>{Object.values(row).toString()}</td>
    </tr>
  ))
  return (
    <Row>
      <Form.Group className="data-memory-container">
        <Form.Label>Memoria de datos</Form.Label>
        <div className="table-body">
          <Table striped bordered hover variant="secondary" size="sm">
            <thead>
              <tr>
                <th>Dirección</th>
                <th>Dato</th>
              </tr>
            </thead>
            <tbody>{fill}</tbody>
          </Table>
        </div>
      </Form.Group>
    </Row>
  )
}

Memories.propTypes = {
  memory: PropTypes.array
}
