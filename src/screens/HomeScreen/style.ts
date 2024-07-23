import styled from "styled-components/native";

export const PerfilNome = styled.Text<{color:string}>`
    font-size: 20px;
    color: ${({color})=>color};
`

export const ImagemDePerfil = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

export const AgendamentoProximo = styled.View<{theme:string}>`
    width: 100%;
    height: 100px;
    background-color: ${({theme})=>theme};
    margin-top: 20px;
    border-radius: 20px;

`


