import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ContainerProps } from './types'
import { GlobalContainerView } from './style'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'

export default function GlobalContainer({ children, ...rest }: ContainerProps) {
    const { isDark , theme } = useCustomTema()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor={theme.background}
            />
            <GlobalContainerView {...rest}>
                {children}
            </GlobalContainerView>
        </SafeAreaView>
    )
}