import { Buses, Memories, Processor } from '../../components'
import { Form, Button } from 'react-bootstrap'
import './LayoutProcessor.css'
import { useState } from 'react'

/**
 * Componenete donde se reunten todos los componentes del procesador
 * y compilador, aca es donde se capturan los datos para se manipulados
 * para ser enviados correctamente al procesador.
 */
export function LayoutProcessesor() {
  /**
   * Estado donde se almacena las instrucciones
   */
  const [instruccions_container, setInstruccions_container] = useState('')
  /**
   * Funcion para que cuando se precione el boton
   * "Run" tome los valores del text area y poder ser
   * manipulados
   * @param {event} e evento de captura del text area
   */
  const onSubmitInstruccions = (e) => {
    e.preventDefault()
    setInstruccions_container(e.target.txtInstruccions.value)
    console.log(instruccions_container)
  }
  return (
    <div>
      <div className="processor_instruccions">
        <div className="processor">
          <Processor />
        </div>
        <div className="instruccions">
          <Form onSubmit={onSubmitInstruccions}>
            <Form.Group>
              <Form.Label>Instrucción</Form.Label>
              <Form.Control
                name="txtInstruccions"
                className="instruccions-area"
                as="textarea"
                divs={3}
              />
            </Form.Group>
            <Button type="submit" variant="secondary" className="run">
              Ejecutar
            </Button>
          </Form>
          <Buses />
        </div>
        <div className="memories-container">
          <Memories />
        </div>
      </div>
    </div>
  )
}
