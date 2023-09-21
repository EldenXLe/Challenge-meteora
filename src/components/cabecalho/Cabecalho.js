import './Cabecalho.css'

const Cabecalho = () => {
    
    return (
        <div className='cabecalho'>
            <h1>METEORA</h1>
            <div className='menu'>
                <a href='/'>Home</a>
                <a href='/Lojas'>Nossas Lojas</a>
                <a href='/Novidades'>Novidades</a>
                <a href='/Promocoes'>Promoções</a>
            </div>

            <div className='pesquisa'>
                <input type='text' placeholder='Digite o produto'/>
                <button>Buscar</button>
            </div>
        </div>
    )
}

export default Cabecalho