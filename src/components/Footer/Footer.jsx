
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.footerStyle}>
      <div>
        Maguey 2023 derechos reservados
        </div>
      <div>
        Contáctanos en nuestra redes sociales
        <div>
          <a href="https://www.instagram.com/magueycosmetica/" target="_blank"><img src="/instalogo.png" alt="instagram" style={{ width: 50, height: 50, marginTop: 7 }}  /></a>
          <a href="https://www.facebook.com/magueycosmetica" target="_blank"><img src="/facebook-logo.png" alt="facebook" style={{ width: 50, height: 50, marginTop: 7 }} /></a>
        </div>
      </div>
    </div>
    
  )
}

export default Footer