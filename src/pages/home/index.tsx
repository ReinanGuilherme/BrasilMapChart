import { BrasilMapaSVG } from '@/components/BrasilMapaSVG'
import CheckBoxEstados from '@/components/CheckBoxEstados'
import { Container, ContainerMain } from './styles'
import { useState } from 'react'
import { EstadoInfo } from './interface'

export default function Home() {
  const [estadosSelecionados, setEstadosSelecionados] = useState<EstadoInfo[]>(
    [],
  )

  const handleCheckboxChange = (uf: string, value: number) => {
    if (estadosSelecionados.some((estado) => estado.uf === uf)) {
      setEstadosSelecionados(
        estadosSelecionados.filter((estado) => estado.uf !== uf),
      )
    } else {
      const estadoInfo: EstadoInfo = {
        uf,
        value: 0, // Defina o valor desejado para o estado selecionado
      }
      setEstadosSelecionados([...estadosSelecionados, estadoInfo])
    }
  }

  return (
    <Container>
      <h1>BRASIL MAP CHART</h1>
      <ContainerMain className="gridIndex">
        <CheckBoxEstados
          setEstadosSelecionados={handleCheckboxChange}
          estadosSelecionados={estadosSelecionados.map((estado) => estado.uf)}
        />
        <BrasilMapaSVG
          estadosSelecionados={estadosSelecionados.map((estado) => estado.uf)}
        />
      </ContainerMain>
    </Container>
  )
}
