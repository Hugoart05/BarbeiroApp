import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/ThemedView'
import { ContainerInput, ContainerSpaceBetweenLine, TextInputCustom } from '@/global/globalstyle'
import { AgendamentoProximo, BarbeiroNome, ContainerIcon, ContainerInfoAgendamento, Data, LogoNome, Saldacao, ServicoNome, WelcomeText } from './style'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'
import { Usuario } from '@/viewModel/Usuario'
import { mokHome } from '@/json/mokHome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/theme/Color'
import ActionsIcones from '@/components/CategoriaIconesDeAcao/ActionsIcones'
import { CategoriaIcons } from '@/components/CategoriaIconesDeAcao/style'

export default function HomeScreen() {
  const { theme } = useCustomTema()
  const [homeData, setHomeData] = useState<Usuario>(mokHome)
  const agendamento = homeData.proximoAgendamento
  return (
    <ThemedView>
      <ContainerSpaceBetweenLine lineOrColumn='row'>
        <LogoNome color={theme.primaria}>BuscFacil</LogoNome>
        <ContainerIcon>
          <Ionicons name='notifications-outline' size={30} color={"orange"}/>
          <Ionicons name='bookmark-outline' size={30}/>
        </ContainerIcon>
      </ContainerSpaceBetweenLine>
      <WelcomeText>
        <Saldacao>Bem vindo,  {homeData.nome} 👋 </Saldacao>
      </WelcomeText>
      <ContainerInput>
          <Ionicons name='search' size={30}/>
          <TextInputCustom
            placeholder='Pesquise por um estabelecimento'
          />
      </ContainerInput>
      <CategoriaIcons>
        <ActionsIcones icon='cut' nome='Cortes' />
        <ActionsIcones icon='cut' nome='Beleza'/>
        <ActionsIcones icon='cut' nome='Beleza'/>
        <ActionsIcones icon='cut' nome='Beleza'/>
      </CategoriaIcons>
    </ThemedView>
  )
}