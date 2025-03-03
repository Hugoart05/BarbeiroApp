import { View, Text } from 'react-native'
import React from 'react'
import { ContainerProps } from '../GlobalContainer/types'
import styled from 'styled-components/native'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'

export default function ThemedView({children, background,...rest }: ContainerProps) {
  const {theme} = useCustomTema()
  return (
    <Container
        {...rest}
        background={background || theme.background}
    >
        {children}
    </Container>
  )
}

const Container = styled.View<{background:string}>`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color:${({background})=>background};
`