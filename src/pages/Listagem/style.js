import { styled } from "styled-components";


const TituloListagem = styled.h1`
    color: red;
`;

const ContainerListagem = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 400px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
`;

export {TituloListagem, ContainerListagem}