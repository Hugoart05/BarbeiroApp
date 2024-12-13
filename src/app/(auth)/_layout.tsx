import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function AuthLayout() {
  return (
      <Stack screenOptions={{ headerShown: false, animation:'simple_push' }}>
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
      </Stack>
  )
}