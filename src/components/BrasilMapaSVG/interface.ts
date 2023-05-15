interface EstadoText {
  transform: string
  fill: string
  content: string
}

interface EstadoPathAux {
  path: string
}

export interface EstadoPath {
  uf: string
  path: string
  text: EstadoText
  pathAux?: EstadoPathAux
}

export interface BrasilMapaSVGProps {
  estadosSelecionados: string[]
}
