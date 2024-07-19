import React from 'react'
import { Stack } from 'expo-router'
import GlobalContainer from '@/components/GlobalContainer'
import { TemaProvider } from '@/context/ThemeContext/TemaProvider'

export default function InitialLayout() {
  return (
    <TemaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='public'/>
          <Stack.Screen name='index' />
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name='(auth)' />
        </Stack>
    </TemaProvider>
  )
}