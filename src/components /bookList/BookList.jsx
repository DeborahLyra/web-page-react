import styled from 'styled-components'
import styles from './BookList.module.css';
import book1 from '../../../public/img/livro-1.jpg'
import book2 from '../../../public/img/livro-2.jpg'
import book3 from '../../../public/img/livro-3.jpg'
import book4 from '../../../public/img/livro-4.jpg'
import book5 from '../../../public/img/livro-5.jpg'
import book6 from '../../../public/img/livro-6.jpg'
import book7 from '../../../public/img/livro-7.jpg'
import book8 from '../../../public/img/livro-8.jpg'
import book9 from '../../../public/img/livro-9.jpg'

export function BookList() {

    const books = [
        {
            cover: book1,
            title: 'É assim que acaba',
            author: 'Collen Hoover',
        },
        {
            cover: book2,
            title: 'Biblioteca da Meia Noite',
            author: 'Matt Haig',
        },
        {
            cover: book3,
            title: 'A Paciente Sielnciosa',
            author: 'Alex Michaelides',
        },
        {
            cover: book4,
            title: 'A Empregada',
            author: 'Freida McFadden',
        },
        {
            cover: book5,
            title: 'Os Sete Maridos de Evelyn Hugo',
            author: 'Taylor Jenkins Reid',
        },
        {
            cover: book6,
            title: 'A Princesa Salva a Si Mesma Neste Livro',
            author: 'Amanda Lovelace',
        },
        {
            cover: book7,
            title: 'Jogos Vorazes',
            author: 'Suzanne Collins',
        },
        {
            cover: book8,
            title: 'Orgulho e Preconceito',
            author: 'Jane Austen',
        },
        {
            cover: book9,
            title: 'Jane Eyre',
            author: 'Charlotte Brönte',
        },

    ]

    return (
        <DivBookList>
            <DivBookListTitle>
                <h2>Livros que amamos</h2>
                <p>Aqui estão alguns títulos variados que podem atrair diferentes gostos:</p>
            </DivBookListTitle>
            <ul className={styles.bookList}>
                {books.map((book, index) => (
                    <li key={index}>
                        <img src={book.cover} alt="Capa do Livro" width={"250px"} />
                        <DivCardDetails>
                            <h4>{book.title}</h4>
                            <p>Autor(a): {book.author}</p>
                        </DivCardDetails>
                    </li>
                ))}
            </ul>
        </DivBookList>
    )
}


const DivBookList = styled.div` 
    background-color: var(--pink-300);
    color: var(--white);
`

const DivCardDetails = styled.div` 
    padding: 0.5rem ;
`


const DivBookListTitle = styled.div` 
    line-height: 2rem;
    padding: 4rem 0;
    text-align: center;
    h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        letter-spacing: 3px;
        font-family:var(--fancy-font);
    }
    p {
        font-size: 1.2rem;
    }
`