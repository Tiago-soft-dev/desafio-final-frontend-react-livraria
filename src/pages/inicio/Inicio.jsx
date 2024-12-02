import style from './Inicio.module.scss'
import img1 from '../../assets/image/img1.png'
import img2 from '../../assets/image/img2.png'
import img3 from '../../assets/image/img3.png'
import img4 from '../../assets/image/img4.png'

export default function Inicio(){
    return (
        <main>
            <section className={style.inicioMainSection}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={style.porqueDoarSection}>
                     <h2>Porque Devo Doar?</h2>
                <section className={style.cardsMotivos}>
                    <section>
                        <img src={img1} alt="Imagem ilustrando círculo social de quatro pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={img2} alt="Imagem iilustrando um leitor lendo um livro." />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={img3} alt="imagem representando pessoas pensando juntas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={img4} alt="Imagem de uma balança significando igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>

        </main>
    )
}