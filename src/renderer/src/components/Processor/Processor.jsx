import { Form, Row, Col } from 'react-bootstrap'
import './Processor.css'

export function Processor() {
  return (
    <>
      <h5>Processor</h5>
      <div className="processor-container">
        {/* Seccion de memorias */}
        <div className="memories">
          <Form.Group className="memory">
            <Form.Label>MBR</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>MAR</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>IR</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="memory">
            <Form.Label>AC</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
        {/* Seccion de la ALU */}
        <div className="alu">
          <Row>
            <Col>
              <Form.Group className="operating">
                <Form.Label>OP1</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="operating">
                <Form.Label>OP2</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="alu-container">
            <div className="alu-figure">Alu</div>
          </Row>
          <Row>
            <Form.Group className="result-record">
              <Form.Label>Registro de resultado</Form.Label>
              <Form.Control className="result" type="text" />
            </Form.Group>
          </Row>
        </div>
        {/* Seccion de la unidad de control */}
        <div className="control-unit-container">
          <Form.Group className="control-unit">
            <Form.Label>Unidad de control</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="program-counter">
            <Form.Label>Contador de programa</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
      </div>
    </>
  )
}
