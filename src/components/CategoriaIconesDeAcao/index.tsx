import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import ActionsIcones from './ActionsIcones'
import { ContainerCategoriaIcone } from './style'

interface Props {
    listaCategorias: []
}
export default function CategoriaIconesDeAcaoContainer({ listaCategorias }: Props) {
    return (
        <ContainerCategoriaIcone
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{maxHeight:70}}
        >
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
            <ActionsIcones />
        </ContainerCategoriaIcone>
    )
}