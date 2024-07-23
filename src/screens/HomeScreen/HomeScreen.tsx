import { View, Text } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'
import { ContainerSpaceBetweenLine } from '@/global/globalstyle'
import { AgendamentoProximo, ImagemDePerfil, PerfilNome } from './style'
import CategoriaIconesDeAcaoContainer from '@/components/CategoriaIconesDeAcao'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'

export default function HomeScreen() {
  const { theme } = useCustomTema()
  let profileimage = "https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png"
  return (
    <ThemedView>
      <ContainerSpaceBetweenLine lineOrColumn='row'>
        <PerfilNome color={theme.primaria}>Hugo Silva</PerfilNome>
        <ImagemDePerfil source={{ uri: profileimage }} />
      </ContainerSpaceBetweenLine>
      <CategoriaIconesDeAcaoContainer
        listaCategorias={[]}
      />
      <AgendamentoProximo
        theme={theme.secundaria}
      >

      </AgendamentoProximo>
    </ThemedView>
  )
}