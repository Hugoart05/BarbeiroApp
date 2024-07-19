import React from 'react'
import { AppNome, ButtonPressable, ButtonText, CiculoIcon, Container, ImageBackgroundCustom, TextoFinal, Titulo } from './style'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import IonIcon from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'

export default function WelcomeScreen() {
    const backgroundurl = "https://i.pinimg.com/originals/a7/1c/a2/a71ca2ccc76243e06e8b456957bf2f33.jpg"
    return (
        <ImageBackgroundCustom source={{ uri: backgroundurl }} style={{ flex: 1 }}>
            <Container>
                <Titulo>Bem vindo ao</Titulo>
                <AppNome>BarberShop</AppNome>
                <TextoFinal>Agradecemos por escolher o BarberShop. Nosso
                    objetivo é proporcionar a melhor experiência em cuidados
                    pessoais para você.
                </TextoFinal>
                <Link href={'welcome2'} asChild>
                    <ButtonPressable>
                        <ButtonText>Proximo</ButtonText>
                        <CiculoIcon>
                            <IonIcon name='arrow-forward' size={25} color={'orange'} />
                        </CiculoIcon>
                    </ButtonPressable>
                </Link>
            </Container>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
                style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
            />
        </ImageBackgroundCustom>
    )
}