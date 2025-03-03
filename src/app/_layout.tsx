import React from 'react'
import { Stack } from 'expo-router'
import GlobalContainer from '@/components/GlobalContainer'
import { TemaProvider } from '@/context/ThemeContext/TemaProvider'

export default function InitialLayout() {
  return (

    <TemaProvider>
      <GlobalContainer>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name='index' />
          <Stack.Screen name='(auth)' />
          <Stack.Screen name='public' options={{ animation: 'simple_push' }} />
        </Stack>
      </GlobalContainer>
    </TemaProvider>
  )
}