import React from 'react'
import { AppNome, Container, ImageBackgroundCustom, TextoFinal, Titulo } from './style'

export default function SignInScreen() {
    const backgroundurl = "https://i.pinimg.com/564x/b2/fd/5b/b2fd5bfc0123959d6cc72a377fe15864.jpg"
    return (
        <ImageBackgroundCustom source={{ uri: backgroundurl }} style={{ flex: 1 }}>
            <Container>
                <Titulo>Bem vindo ao</Titulo>
                <AppNome>BarberShop</AppNome>
                <TextoFinal>Agradecemos por escolher o BarberShop. Nosso
                    objetivo é proporcionar a melhor experiência em cuidados
                    pessoais para você.
                </TextoFinal>
            </Container>
        </ImageBackgroundCustom>
    )
}