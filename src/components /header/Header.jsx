import styled from 'styled-components'


export function Header() {
    return (
        <PageHeader>

            <DivHeaderInfo>
                <DivHeaderTitle>
                    <i className="fa-solid fa-book"></i>
                    <h3>One More Page</h3>
                </DivHeaderTitle>
                <a href="">Acessar Blog</a>
                <a href="">Contato</a>
            </DivHeaderInfo>

            <DivHeaderIcons>
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-bars"></i>
            </DivHeaderIcons>
        </PageHeader>
    )
}

const PageHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0 24px;
    font-size: 1.3rem;
    letter-spacing: 3px;

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