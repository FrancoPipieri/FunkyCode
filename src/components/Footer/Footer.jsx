import "../main.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";

export default function Footer() {
  return (
    <footer className=" pie flex flex-col">
      <h4 className="pie__titulo--md">Seguinos En Redes Sociales:</h4>
      <nav className="footer_nav flex justify-center">
        <a
          href="https://www.instagram.com"
          className="pie__enlace--sm flex"
          target="_blank"
        >
          <img src={instagram} alt="instagram" />
          <p>Instagram</p>
        </a>
        <a
          href="https://www.facebook.com/franco.pipieri.56/"
          className="pie__enlace--sm flex"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />
          <p>Facebook</p>
        </a>
      </nav>
    </footer>
  );
}
