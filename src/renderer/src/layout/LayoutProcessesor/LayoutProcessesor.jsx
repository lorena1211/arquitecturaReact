import { Buses, Memories, Processor } from '../../components'
import { ConvertBinary, FillMemory, SplitSpacesInstruction, AllocateMemomry } from '../../helpers'
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
   * Estado donde se almacenan los datos que van a pasar por el bus
   *
   */
  const [instruccions_container, setInstruccions_container] = useState('')
  const [listInstructions, setListInstructions] = useState([])
  const [memory, setMemory] = useState([])
  const [busData, setBusData] = useState([])
  const [procesData, setProcesData] = useState([])
  /**
   * Funcion para que cuando se precione el boton
   * "Run" tome los valores del text area y poder ser
   * manipulados
   * @param {event} e evento de captura del text area
   */
  const onSubmitForm = (ev) => {
    ev.preventDefault()
    setListInstructions(SplitSpacesInstruction(instruccions_container))
  }
  /**
   * efecto que al cargar pantalla nos llena la memoria
   */
  useEffect(() => {
    setMemory(FillMemory())
  }, [])

  /**
   * Efecto que espera que en listInstructions y memory hayan cambiado
   * par poder ejecutar AllocateMemory para luego asignarla a ProcesData
   */
  useEffect(() => {
    let newProcessData = AllocateMemomry(listInstructions, memory)
    if (newProcessData.list !== [] && procesData.length == 0) {
      setProcesData(newProcessData.list)
      return () => {}
    }
  }, [listInstructions, memory])

  /**
   * Estado que espera que procesData cambie para luego ser convertida a
   * binaria y luego sea pasda a Buses para ser mostrada en pantalla
   */
  useEffect(() => {
    setBusData(ConvertBinary(procesData))
    return () => {}
  }, [procesData])

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
          <Buses busData={busData} />
        </div>
        <div className="memories-container">
          <Memories memory={memory} />
        </div>
      </div>
    </div>
  )
}
