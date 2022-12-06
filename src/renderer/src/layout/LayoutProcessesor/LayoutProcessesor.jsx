import { Processor } from '../../components'
import { Form, Button } from 'react-bootstrap'
import './LayoutProcessor.css'
import Buses from '../../components/Buses/Buses'

export function LayoutProcessesor() {
  return (
    <div>
      <div className="processor_instruccions">
        <div className="processor">
          <Processor />
        </div>
        <div className="instruccions">
          <Form.Group>
            <Form.Label>Instruccion</Form.Label>
            <Form.Control className="instruccions-area" as="textarea" divs={3} />
          </Form.Group>
          <Button variant="secondary" className="run">
            Run
          </Button>
          <Buses />
        </div>
      </div>
    </div>
  )
}