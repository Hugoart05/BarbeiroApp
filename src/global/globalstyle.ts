import styled from "styled-components/native";

export const ContainerSpaceBetweenLine = styled.View<{lineOrColumn: "row" | "column"}>`
    width: 100%;
    flex-direction: ${({lineOrColumn})=>lineOrColumn};
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 60px;
`