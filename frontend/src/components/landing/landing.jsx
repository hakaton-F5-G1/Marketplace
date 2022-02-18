import { Link } from "react-router-dom";
import "./landing.css";
import Gallery from "../Gallery/Gallery";
import Logo from "../assets/logo05.png";
import imagenes from "../../api/Api";

import Grid from "@mui/material/Grid";

export function Landing() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Gallery images={imagenes} />
        </Grid>
        <Grid item xs={6}>
          <h2>
            Reanimales es una de las primeras aplicaciones que benefician el
            bienestar animal, ayuda a mejorar la vida de los animales.
          </h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <div className="flex-logotext">
            <Link className="banner-enlazado" to={"/animales"}>
              <h1>Descubre mascotas...</h1>
              <img
                src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"
                alt="Foto de husky"
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={2}>
          <img
            className="pbli"
            src="https://cdn6.f-cdn.com/contestentries/100120/11552729/53fc725838bc1_thumb900.jpg"
            alt="Publicidad"
          />
        </Grid>
      </Grid>
    </main>
  );
}
