import { Buses, Memories, Processor } from '../../components'
import { SplitInstruction, ConvertBinary, FillMemory } from '../../helpers'
import { Form, Button } from 'react-bootstrap'
import './LayoutProcessor.css'
import { useEffect, useState } from 'react'

/**
 * Componenete donde se reunten todos los componentes del procesador
 * y compilador, aca es donde se capturan los datos para se manipulados
 * para ser enviados correctamente al procesador.
 */
export function LayoutProcessesor() {
  /**
   * Estado donde se almacena las instrucciones en formato string
   * Estado donde se almacena la lista de instrucciones dividida
   * Estado donde se contiene la memoria
   */
  const [instruccions_container, setInstruccions_container] = useState('')
  const [listInstructions, setListInstructions] = useState([])
  const [memory, setMemory] = useState([])
  /**
   * Funcion para que cuando se precione el boton
   * "Run" tome los valores del text area y poder ser
   * manipulados
   * @param {event} e evento de captura del text area
   */
  const onSubmitForm = (ev) => {
    ev.preventDefault()
    setListInstructions(SplitInstruction(instruccions_container))
  }

  listInstructions !== []
    ? console.log(ConvertBinary(listInstructions))
    : console.log('no hay formita mono')

  useEffect(() => {
    setMemory(FillMemory())
  }, [])

  return (
    <div>
      <div className="processor_instruccions">
        <div className="processor">
          <Processor />
        </div>
        <div className="instruccions">
          <Form onSubmit={onSubmitForm}>
            <Form.Group>
              <Form.Label>Instrucción</Form.Label>
              <Form.Control
                name="txtInstruccions"
                className="instruccions-area"
                as="textarea"
                divs={3}
                onChange={(ev) => setInstruccions_container(ev.target.value)}
              />
            </Form.Group>
            <Button variant="success" className="run" type="submit">
              Ejecutar
            </Button>
            <Button variant="danger" className="reset">
              Reiniciar
            </Button>
          </Form>
          <Buses />
        </div>
        <div className="memories-container">
          <Memories memory={memory} />
        </div>
      </div>
    </div>
  )
}
