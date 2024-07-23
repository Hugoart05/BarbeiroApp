import styled from "styled-components/native";

export const ContainerCategoriaIcone = styled.ScrollView`
    flex-direction: row;
    gap: 10px;
`
export const Background = styled.Image<{borderColor:string}>`
    height: 100%;
    width: 60px;
    border-color: ${({borderColor})=>borderColor};
    border-width: 3px;
`

export const CategoriaLabel = styled.Text`
    font-size: 9px;
    color: white;
`
export const CategoriaIcone = styled.View`
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin: 10px;
`