import { Link } from 'react-router-dom'

import usuario from '../../assets/icones/user.svg'
import iconStar from '../../assets/icones/star.svg'

import './Card.css'



type CardProps = {
    id: number;
    imgChocolat: string;
    nome: string;
    descricao: string;
    valor: number;
    quantidadeAvaliacoes: number;
    nota: number
}

function Card({
    id,
    imgChocolat,
    nome,
    descricao,
    valor,
    quantidadeAvaliacoes,
    nota            
    } : CardProps) {
    return (
        <article className="prod_card">
            <figure>
                <img
                    src={imgChocolat}
                    alt="foto do produto"
                />
            </figure>
            <h2>
                <Link to={`/detalheproduto/${id}`}>{nome}</Link>
            </h2>
            <p className="card_desc">
                {descricao}
            </p>
            <p className="card_rodape">
                <data value={valor}>R$ {valor}/ kg</data>
                <span className="card_av">
                    <img src={usuario} alt="icone de usuarios" />
                    <data value={quantidadeAvaliacoes}>{quantidadeAvaliacoes}</data>
                    <img src={iconStar} alt="icone de estrela" />
                    <data value={nota}>{nota}</data>
                </span>
            </p>
        </article>
    )
}

export default Card