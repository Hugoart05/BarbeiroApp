import styled from "styled-components/native";

export const LogoNome = styled.Text<{color:string}>`
    font-size: 18px;
    color: ${({color})=>color};
`
export const ContainerIcon = styled.View`
    width: 120px;
    flex-direction:row;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`
export const WelcomeText = styled.View`
   width: 100%;
   height: 50px;
   justify-content: center;
`
export const Saldacao = styled.Text`
   font-size: 25px;
   font-weight: 600;
`

export const AgendamentoProximo = styled.TouchableOpacity<{theme:string}>`
    width: 100%;
    height: 100px;
    background-color: ${({theme})=>theme};
    margin-top: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items:center;
    justify-content: space-around;
    flex-direction:row;
    padding: 0 20px;
`


export const ContainerInfoAgendamento = styled.TouchableOpacity<{theme:string}>`
    
`

export const BarbeiroNome = styled.Text<{theme:string}>`
    font-size: 20px;

`

export const ServicoNome = styled.Text<{theme:string}>`
`

export const Data = styled.Text<{theme:string}>`
`