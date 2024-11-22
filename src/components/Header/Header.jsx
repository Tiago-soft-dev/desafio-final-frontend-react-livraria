import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import logoLivro from '../../assets/image/logoLivro.png'

export default function Header(){
    return (
       <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        
                        <li><Link to='/livrosdoados'>Livros Doados</Link></li>

                        <li><Link to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Inicio />}/>
                
                <Route path='/livrosdoados' element={<LivrosDoados />}/>

                <Route path='/querodoar' element={<QueroDoar />} />
            </Routes>


       </BrowserRouter>
    )
}