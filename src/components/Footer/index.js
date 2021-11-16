import './style.scss';
import instagram from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import github from '../../assets/img/github.png'
import mail from '../../assets/img/mail.png'
const Footer = ({ empresa }) => {
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }
    return (
        <>
            <footer id="footer">


                <div className="row text-light text-center py-4 justify-content-center">
                    <div className="fut col-sm-10 col-md-8 col-lg-6">
                        <ul className="social pt-3">
                            <a href="https://www.instagram.com/resyakire/"><img src={instagram} alt="instagram"/></a>
                            <a href="https://github.com/resyakKire"><img src={github} alt="github"/></a>
                            <a href="https://www.linkedin.com/in/erik-kayser-b5228a212/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BjqjFhxkXRYCKO99XA%2FurAQ%3D%3D"><img src={linkedin} alt="linkedin"/></a>
                            <a href="mailto:erikkayser843@gmail.com"><img src={mail} alt="mail"/></a>
                        </ul>
                        <h3>{empresa} Todos os direitos reservados.&copy; Copyright {generateDateString()}</h3>
                    </div>
                </div>




            </footer>




        </>
    )
}

export default Footer;