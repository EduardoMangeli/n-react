import LinkGenerico from "../components/LinkGenerico";
import LinkSegundo from "../components/LinkSegundo";

const Primeiro = () => {
    return (<div>
                <h5>Mini título</h5>
                <p>Meu texto</p>
                <LinkGenerico 
                    texto="Link Genérico"
                    endereco="segunda"
                />
            </div>
            );
};

export default Primeiro;