import LinkGenerico from "../components/LinkGenerico/LinkGenerico";
import LinkSegundo from "../components/LinkSegundo";

const dados = [
    ["https://www.ibmec.br/", "ibmec"],
    ["https://estude.ibmec.br/ibmec-hubs", "ibmec-hubs"],
    ["https://botafogo.com.br/", "botafogo"]
];

const elementos = dados.map(
    (item, i) => (
        <LinkGenerico
                key={i} 
                texto={item[1]}
                endereco={item[0]}
        />
    )
);

const Primeiro = () => {
    
    return (<div>
                <h5>Mini título</h5>
                <p>Meu texto</p>
                {elementos}
            </div>
            );
};

export default Primeiro;