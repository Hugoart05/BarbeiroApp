import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ContainerProps } from './types'
import { GlobalContainerView } from './style'

export default function GlobalContainer({ children, ...rest }: ContainerProps) {
    return (
        <SafeAreaView style={{flex:1}}>
            <GlobalContainerView {...rest}>
                {children}
            </GlobalContainerView>
        </SafeAreaView>
    )
}