import styled from 'styled-components'
import autor1 from '../../../public/img/author-1.jpg'
import autor2 from '../../../public/img/author-2.jpg'
import autor3 from '../../../public/img/author-3.avif'



const list = [
    {
        img: autor1,
        name: 'Evelyn Riversong',
        description: 'Há um mistério envolvendo a vida e obra de Evelyn Riversong, autora de romances de época que encantam os leitores com suas tramas intricadas e personagens cativantes. Rumores sugerem que ela é uma viajante do tempo, inspirando-se diretamente nas eras que visita para criar suas histórias. Sua verdadeira identidade permanece um enigma, acrescentando uma camada de fascínio à sua obra.'
    },
    {
        img: autor2,
        name: 'Maximilian Blackwood',
        description: 'Conhecido por seus contos sombrios e reviravoltas inesperadas, Maximilian Blackwood é um autor que mergulha nas profundezas da mente humana. Sua escrita habilidosa transporta os leitores para mundos macabros e perturbadores, onde a linha entre realidade e fantasia se torna tênue. Sua identidade é tão enigmática quanto seus enredos, deixando os fãs ansiosos por mais.'
    },
    {
        img: autor3,
        name: 'Aurora Frost',
        description: 'Aurora Frost é aclamada por suas obras de fantasia que exploram reinos mágicos e jornadas heróicas. Seus livros são amados por leitores de todas as idades, transportando-os para mundos cheios de magia e maravilhas. Embora pouco se saiba sobre a autora em si, sua habilidade em criar universos vívidos e personagens memoráveis captura a imaginação de todos que mergulham em suas páginas.'
    }
]

export default function AuthorsList() {
    return (
        <DivAuthorsList>
             <h2>Alguns de nossos autores</h2>
            {
                list.map((item, index) => {
                    return (
                        <DivAuthor key={index}>
                            <img src={item.img} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        </DivAuthor>
                    )
                })
            }
        </DivAuthorsList>
    )
}

const DivAuthorsList = styled.div`
    background-color: var(--pink-800);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    color: var(--white);
    padding: 4rem 8rem;

    h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        letter-spacing: 3px;
        font-family:var(--fancy-font);
    }
`

const DivAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: justify;

    h4 {
        margin-bottom: 0.3rem;
    }

    img {
        width: 200px;
        height: 150px;
        border-radius: 50%;
    }

    &:nth-child(3) {
        display: flex;
        flex-direction: row-reverse; 
    }

    @media(max-width: 800px){
        flex-direction: column;
        h4 {
            text-align: center;
        }

        &:nth-child(3) {
            flex-direction: column;
        }
    }
`