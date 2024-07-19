import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabScreens() {
    return (
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="settings" />
        </Tabs>
    )
}