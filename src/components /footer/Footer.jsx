import styled from 'styled-components'

export function Footer() {
  return (
    <DivFooter>
      <a href="">Home</a>
      <a href="">Contato</a>
      <a href="">Saiba mais</a>
    </DivFooter>
  )
}

const DivFooter = styled.footer`
display: flex;
align-items: center;
justify-content: space-around;
height: 4rem;
padding: 0 24px;
font-size: 1rem;
letter-spacing: 3px;

background-color: var(--pink-800);
color: var(--white);

    a {
        text-decoration: none;
    }
`
