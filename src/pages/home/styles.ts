import { styled } from '@/styles'

export const Container = styled('div', {
  padding: '18px',
  h1: {
    textAlign: 'center',
  },
})

export const ContainerMain = styled('div', {
  height: '90vh',
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  justifyContent: 'center',
  alignItems: 'center',
})
