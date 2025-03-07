import '../index.css'
import '../assets/css/heroSection.css'
import ImagenAgencia from './common/ImagenAgencia'
const HeroSection = () => {
  return (
    <section className="hero--section">
        <div className="hero--section__text">
            <span>¡Hola, Bienveni@ a Gowup!</span>
            <h1 className='color--primary'>Impulsamos tu negocio con <span >marketing digital de alto rendimiento</span> </h1>
            <p>Te ayudamos a convertir tu empresa tradicional en un negocio digital de alto rendimiento. Digitalizamos, automatizamos e implementamos estrategias para aumentar tus ventas y mejorar tu posicionamiento en el mercado. Empieza hoy y domina la era digital.</p>
            <a href="#" className="btn btn-primary">Reserva tu consultoría GRATIS ahora</a>
        </div>
        <div className="hero--section__img">
            <ImagenAgencia />
        </div>

    </section>
  )
}
export default HeroSection