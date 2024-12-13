import { View, Text } from 'react-native'
import React from 'react'
import { Container, ImageBackgroundCustom } from '@/screens/WelcomeScreen/style'
import { LinearGradient } from 'expo-linear-gradient'
import { BottomSheetStatic, Formulario } from './style'

export default function SignInScreen() {
  const url = "https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <ImageBackgroundCustom
      source={{ uri: url }}
      style={{flex:1}}
    >
      <Formulario>
        <BottomSheetStatic>
            <Text>oi</Text>
        </BottomSheetStatic>
      </Formulario>
      <LinearGradient
        style={{ position: 'absolute', flex: 1, width: '100%', height: '100%' }}
        colors={[ "transparent","rgba(0,0,0,1)"]}
      />
    </ImageBackgroundCustom>
  )
}