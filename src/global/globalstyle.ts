import styled from "styled-components/native";

export const ContainerSpaceBetweenLine = styled.View<{lineOrColumn: "row" | "column"}>`
    width: 100%;
    flex-direction: ${({lineOrColumn})=>lineOrColumn};
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 60px;
`

export const ContainerInput = styled.View`
    width: 100%;
    height: 50px;
    margin-top: 15px;
    background-color: #EEEEEE;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`

export const TextInputCustom = styled.TextInput`
    width: 100%;
    padding: 0 20px;
`