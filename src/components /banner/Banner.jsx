import styled from 'styled-components'
import wallpaper from '../../../public/img/wallpaper-book.jpg'

export function Banner() {
    return (
        <SectionBanner>
            <DivBannerTitle>
                <h1>ONE MORE PAGE</h1>
                <h4>Descubra mundos infinitos em cada página</h4>
            </DivBannerTitle>

        </SectionBanner>
    )
}


const SectionBanner = styled.div` 
    background-image: url(${wallpaper});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 70vh;
    opacity: 0.8; 

    position: relative;
`

const DivBannerTitle = styled.div`
    font-family: var(--fancy-font);
    font-weight: 700;
    font-size: 2rem;
    color: var(--pink-800);
    
    position: absolute;
    right:2rem;
    top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); 

    h1 {
        font-size: 3rem;
      }
`
