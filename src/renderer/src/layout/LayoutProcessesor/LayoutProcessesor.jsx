import { Buses, Memories, Processor } from '../../components'
import {
  ConvertBinary,
  FillMemory,
  SplitSpacesInstruction,
  AllocateMemomry,
  convertListInstuc,
  Execution,
  StoreMemory
} from '../../helpers'
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
  const [results, setResults] = useState([])
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
    if (memory.length == 0) {
      setMemory(FillMemory())
    }
  }, [])

  /**
   * Efecto que espera que en listInstructions y memory hayan cambiado
   * par poder ejecutar AllocateMemory para luego asignarla a ProcesData
   */
  useEffect(() => {
    let newProcessData = AllocateMemomry(listInstructions, memory)
    if (newProcessData.list.length != 0 && procesData.length == 0) {
      setProcesData(newProcessData.list)
      return () => {
        return memory
      }
    }
  }, [listInstructions, memory])

  /**
   * Estado que espera que procesData cambie para luego ser convertida a
   * binaria y luego sea pasda a Buses para ser mostrada en pantalla
   */
  useEffect(() => {
    setBusData(convertListInstuc(ConvertBinary(procesData)))
    setResults(Execution(procesData))
    return () => {}
  }, [procesData])

  useEffect(() => {
    let newMemory = StoreMemory(results, memory)
    const setMemoryStored = () => {
      setMemory(newMemory)
    }
    if (results.length != 0) {
      setTimeout(() => {
        setMemoryStored()
      }, 12000)
    }
    return () => {}
  }, [results, memory])

  return (
    <div>
      <div className="processor_instruccions">
        <div className="processor">
          <Processor results={results} busData={busData} />
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
            <Button
              variant="danger"
              className="reset"
              type="reset"
              onClick={() => window.location.reload()}
            >
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
