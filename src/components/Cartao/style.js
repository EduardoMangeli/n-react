const { styled } = require("styled-components");


const CartaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    min-width: 8em;
    align-items: center;

    p {
        text-align: center;
        font-family: 'Delius Unicase', cursive;
        font-weight: bold;
    }
`;

const Titulo = styled.h3`
    color: coral;
    font-family: 'Delius Unicase', cursive;
    font-weight: 400;
`;

export {CartaoContainer, Titulo}