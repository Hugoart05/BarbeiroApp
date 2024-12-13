import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function PublicLayout() {
  return (
    <Stack screenOptions={{headerShown:false, animation:'simple_push'}}>
        <Stack.Screen name='index' options={{animation:'simple_push'}}/>
    </Stack>
  )
}