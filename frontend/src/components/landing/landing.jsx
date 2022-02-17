import { useNavigate, Link } from "react-router-dom";
import "./landing.css";
import Logo from "../assets/logo05.png";
export function Landing() {
  return (
    <main>
      <h2>
        Reanimales es una de las primeras aplicaciones que benefician el
        bienestar animal, ayuda a mejorar la vida de los animales.
      </h2>
      <img
        className="pbli"
        src="https://cdn6.f-cdn.com/contestentries/100120/11552729/53fc725838bc1_thumb900.jpg"
        alt="Publicidad"
      />
      <div className="flex-logotext">
        <img id="logo" src={Logo} alt="Logo de reanimales" />
        <span className="busca-un-perro">
          <Link to={"/animales"}>
            <button>
              <h1>Descubre mascotas...</h1>
              <img
                src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"
                alt="Foto de husky"
              />
            </button>
          </Link>
        </span>
      </div>
    </main>
  );
}
