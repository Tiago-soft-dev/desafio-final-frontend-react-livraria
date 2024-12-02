import logoFacebook from '../../assets/image/facebook.png'
import logoTwitter from '../../assets/image/Twitter.png'
import logoYoutube from '../../assets/image/youtube.png'
import logoLinkedin from '../../assets/image/linkedin.png'
import logoInstagram from '../../assets/image/instagram.png'
import s from './Footer.module.scss'

export function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoTwitter} alt="" /></a>
                    <a href=""><img src={logoYoutube} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}