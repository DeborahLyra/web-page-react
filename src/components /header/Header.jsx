import styled from 'styled-components'
import React, { useState } from 'react';

export function Header() {
    const [open, setOpen] = useState(false);

    const toggleButton = () => {
        setOpen(!open);
    }
    return (
        <PageHeader id="home">
            <DivHeaderInfo >
                <DivHeaderTitle>
                    <i className="fa-solid fa-book"></i>
                    <h3>One More Page</h3>
                </DivHeaderTitle>
                <a href="#bookList">Lista de livros</a>
                <a href="#form">Contato</a>
            </DivHeaderInfo>

            <DivHeaderIcons>
                <a href="https://github.com/DeborahLyra" target='_blank'><i className="fa-brands fa-github"></i></a>
                <button onClick={toggleButton}><i className="fa-solid fa-bars"></i></button>
            </DivHeaderIcons>
            <DivHeaderMenu >
                <button onClick={toggleButton}> <i className="fa-solid fa-x"></i></button>
                <div>
                    <a href="#home"><i className="fa-solid fa-house"></i> Home</a>
                    <a href="#bookList"><i className="fa-solid fa-book"></i> Lista de livros</a>
                    <a href="#authorList"><i class="fa-solid fa-pen-to-square"></i> Nossos Autores</a>
                    <a href="#form"><i className="fa-solid fa-envelope"></i> Contato</a>
                </div>
            </DivHeaderMenu>
        </PageHeader>
    )
}

const DivHeaderMenu = styled.div`
    position: absolute;
    background-color: var(--pink-500);
    right: ${({ open }) => (open ? '0' : '-300px')};;
    top: 10%;
    border-radius: 8px;
    z-index: 1;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    transition: right 0.5s ease;

    button {
        align-self: flex-end;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
       
    }
`

const PageHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0 24px;
    font-size: 1rem;
    letter-spacing: 3px;
    position: relative;
    position: fixed;
    width: 100%;
    z-index:1;

    background-color: var(--pink-800);
    color: var(--white);
`
const DivHeaderTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;


    i {
        font-size: 2rem;
    }
`
const DivHeaderInfo = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    gap: 5rem;

   a {
    color: var(--white);
    
    @media (max-width: 960px) {
        display: none;
      }
   }
`

const DivHeaderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    font-size: 1.8rem;
`