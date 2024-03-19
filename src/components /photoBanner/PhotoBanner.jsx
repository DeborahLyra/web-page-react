
export function PhotoBanner() {
  return (
    <div
    style={{
        position:'relative',
        width: '100%',
        color:'var(--white)',
    }}
    >

        <img 
        src="../../../public/img/livraria.avif" 
        alt="Bookstore One More Page" 
        width={'100%'}
        style={{height: '60vh'}}
        />
      <div
      style={{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'var(--pink-800)',
        padding:'1.5rem',
        textAlign:'center',
        borderRadius:'8px',
    }}
      >
        <h2
        style={{
            fontFamily:'var(--fancy-font)',  
            fontSize: '1.5rem',
            letterSpacing: '3px',
        }}
        >
        Explore a grandiosidade da leitura na maior livraria da América Latina 
        </h2>
        <p
        style={{
            fontSize:'1.2rem',  
            marginTop: '1rem',
        }}
        >
        Agende uma visita guiada: 
        </p>
        <button
        style={{
            backgroundColor: 'var(--pink-300)',
            padding:'0.5rem 2rem',
            borderRadius:'8px',
            border:'none',
            color:'var(--white)',
            fontWeight:'bold',
            cursor:'pointer',
            letterSpacing: "3px",
            marginTop: '1rem',

            ':hover': { backgroundColor: 'var(--pink-500)' } 

        }}
        >Agendar</button>
      </div>

    </div>
  )
}
