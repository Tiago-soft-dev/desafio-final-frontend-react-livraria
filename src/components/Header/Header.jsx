import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import logoLivro from '../../assets/image/logoLivro.png'
import lupa from '../../assets/image/lupa.png'

import style from './Header.module.scss'

export default function Header(){
    return (
       <BrowserRouter>
            <header className={style.header}>
             <section className={style.logoHeader}>
                <img src={logoLivro} alt="imagem de ilustração de livro aberto cm capa azul" />
                <h1>Livros Vai Na Web</h1>
             </section>

                <nav className={style.navHeader}>
                    <ul>
                        <li><Link className={style.link} to='/'>Início</Link></li>
                        
                        <li><Link className={style.link} to='/livrosdoados'>Livros Doados</Link></li>

                        <li><Link className={style.link} to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={style.barraDeBusca}>
                <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={lupa} alt="Icone de lupa branca" />
          </button>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio />}/>
                
                <Route path='/livrosdoados' element={<LivrosDoados />}/>

                <Route path='/querodoar' element={<QueroDoar />} />
            </Routes>


       </BrowserRouter>
    )
}