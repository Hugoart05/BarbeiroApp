import styled from "styled-components/native";

export const ImageBackgroundCustom = styled.ImageBackground`

`
export const Container = styled.View`
    flex:1;
    justify-content: flex-end;
    padding: 20px;
    z-index: 200;
`

export const Titulo = styled.Text`
    font-size: 38px;
    font-weight: 700;
    color: white;
`

export const AppNome = styled.Text`
    font-size: 48px;
    font-weight: 800;
    color: orange;
`

export const TextoFinal = styled.Text`
    color: white;
`

export const ButtonPressable = styled.Pressable`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color:orange;
    justify-content:space-between;
    padding: 0 5px 0 20px;
    align-items: center;
    margin-top: 10px;
    flex-direction: row;
    gap: 20px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: 600;
`

export const CiculoIcon = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 22.5px;
    background-color: white;
    justify-content: center;
    align-items: center;
`