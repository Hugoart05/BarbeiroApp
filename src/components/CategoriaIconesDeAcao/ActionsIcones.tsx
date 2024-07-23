import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Background, CategoriaIcone, CategoriaLabel, ContainerCategoriaIcone } from './style'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'

export default function ActionsIcones() {
  const { theme } = useCustomTema()
  return (
    <CategoriaIcone>
        <Background 
          source={{uri:"https://th.bing.com/th/id/OIP.oKAVQPxy70SomcoK93e2gwHaE8?rs=1&pid=ImgDetMain"}}
          borderRadius={30}
          borderColor={theme.principal}
        />
        <CategoriaLabel>Nome Categoria</CategoriaLabel>
    </CategoriaIcone>
  )
}