import Cartao from "../../components/Cartao/Cartao";
import { ContainerListagem, TituloListagem } from "./style";

const dados = [
    {
        'titulo': 'casa',
        'letra': 'a'
    },
    {
        'titulo': 'banana',
        'letra': 'b'
    },
    {
        'titulo': 'cenoura',
        'letra': 'c'
    },
    {
        'titulo': 'felpudo',
        'letra': 'd'
    },
    {
        'titulo': 'boneco',
        'letra': 'e'
    }
]

const elementos = dados.map( (el, i) => (
    <Cartao 
        key={i}
        titulo={el.titulo}
        letra={el.letra}
    />
))

const Listagem = () => (
    <>
    <TituloListagem>
        Listagem de elementos
    </TituloListagem>
    <ContainerListagem>
        {elementos}
    </ContainerListagem>
    </>
);

export default Listagem;