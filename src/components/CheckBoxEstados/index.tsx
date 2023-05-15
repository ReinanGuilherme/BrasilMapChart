import React from 'react'
import { Form } from 'react-bootstrap'
import { CheckBoxEstadosProps } from './interface'

type EstadoInfo = {
  uf: string
  value: number
}

const estadosInfo: EstadoInfo[] = [
  { uf: 'AC', value: 0 },
  { uf: 'AL', value: 0 },
  { uf: 'AP', value: 0 },
  { uf: 'AM', value: 0 },
  { uf: 'BA', value: 0 },
  { uf: 'CE', value: 0 },
  { uf: 'DF', value: 0 },
  { uf: 'ES', value: 0 },
  { uf: 'GO', value: 0 },
  { uf: 'MA', value: 0 },
  { uf: 'MT', value: 0 },
  { uf: 'MS', value: 0 },
  { uf: 'MG', value: 0 },
  { uf: 'PA', value: 0 },
  { uf: 'PB', value: 0 },
  { uf: 'PR', value: 0 },
  { uf: 'PE', value: 0 },
  { uf: 'PI', value: 0 },
  { uf: 'RJ', value: 0 },
  { uf: 'RN', value: 0 },
  { uf: 'RS', value: 0 },
  { uf: 'RO', value: 0 },
  { uf: 'RR', value: 0 },
  { uf: 'SC', value: 0 },
  { uf: 'SP', value: 0 },
  { uf: 'SE', value: 0 },
  { uf: 'TO', value: 0 },
]

export function CheckBoxEstados(props: CheckBoxEstadosProps) {
  return (
    <Form>
      {estadosInfo.map((estado) => (
        <Form.Check
          key={estado.uf}
          type="checkbox"
          label={estado.uf}
          checked={props.estadosSelecionados.includes(estado.uf)}
          onChange={() => props.setEstadosSelecionados(estado.uf, estado.value)}
        />
      ))}
    </Form>
  )
}

export default CheckBoxEstados
