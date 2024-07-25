import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { CategoriaContainer, CategoriaIcone, CategoriaLabel } from './style'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'
import { Categoria } from '@/viewModel/Categoria'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from "@expo/vector-icons/FontAwesome"

interface props {
  nome: string
  icon: keyof typeof Ionicons.glyphMap
}

export default function ActionsIcones({ icon, nome }: props) {
  const { theme } = useCustomTema()
  return (
    <CategoriaContainer>
      <CategoriaIcone>
        <Ionicons name={icon} size={30} />
      </CategoriaIcone>
      <CategoriaLabel>{nome}</CategoriaLabel>
    </CategoriaContainer>
  )
}