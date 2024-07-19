import { View, Text, Image, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import ThemedView from '@/components/ThemedView'
import { ContainerView } from './style'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'
import { router } from 'expo-router'

export const url: string = "https://2.bp.blogspot.com/-ZTfYzFhoZF8/XBramAihOfI/AAAAAAAARCg/VCe6wYsrAHY9mLNuEPMLX_o7Cj6POyyPwCLcBGAs/s1600/Barbershop.png"
export default function TelaInicial() {
    const { isDark, theme } = useCustomTema()

    useEffect(() => {
        buscarDadosDoApp()
    }, [])

    function buscarDadosDoApp() {
        setTimeout(() => {
            router.replace('public')
        }, 5000);
    }


    return (
        <ThemedView
            background={theme.brand}
        >
            <StatusBar
                barStyle={isDark ? 'dark-content' : 'light-content'}
                backgroundColor={theme.brand}
            />
            <ContainerView>
                <Image source={{ uri: url }} width={220} height={220} />
                <ActivityIndicator size={40} color={'white'} />
            </ContainerView>
        </ThemedView>
    )
}