import React from "react";
import "../styles/footer.css";
// import img1 from "./../assets/logo.png"
function Footer() {
    return (
    <footer class="footer">
        <div class="row primary">
            <div class="column">
                {/* hay que cargar la imagen desde la carpeta "assets" para que se vea */}
                <img src="img/logo.png" width="210px" height="190px" alt="Logo img" />
            </div>
                <div class="column links">
                    <h2 class="h2__titulo-seccion--productos">Productos</h2>
                        <ul class="ul__list">
                            <li class="li__list-links">
                                <a href="#">Camperas</a>
                            </li>

                            <li class="li__list-links">
                                <a href="#">Jeans</a>
                            </li>
                            <li class="li__list-links">
                                <a href="#">Shorts</a>
                            </li>
                            <li class="li__list-links">
                                <a href="#">Ofertas</a>
                            </li>
                        </ul>
                </div>

                <div class="column links">
                    <h2 class="h2__titulo-seccion--contacto">Contacto</h2>
                        <ul class="ul__list">
                            <li class="li__list-links">
                                                            {/* hay que cargar la imagen desde la carpeta "assets" > "img_vectores" para que se vea */}
                                <p class="footer__p-info"> <img src="img/img__vectores/Vector.png"  width="15px" alt="vector ubicacion" /> Av. San Martín 1587, CABA </p>
                                                            {/* hay que cargar la imagen desde la carpeta "assets" > "img_vectores" para que se vea */}
                                <p footer__p-info > <img src="img/img__vectores/Vector_w.png" width="17px" alt="vector whatsapp" /> (+54) 9 11-5674-1599 </p>
                            </li>
                        </ul>
                </div>

                <div class="column links">
                    <h2 class="h2__titulo-seccion--seguinos">Seguinos</h2>
                        <ul class="ul__list">
                            <li class="li__list-links">
                                <a href="#">Instagram</a>
                            </li>

                            <li class="li__list-links">
                                <a href="#">Facebook</a>
                            </li>
                        </ul>
                </div>
                <p class="footer__p-info-copyright">© Loana Jeans 2020 - 2022 . Todos los derechos reservados.</p>
            </div>
    </footer>
    );
}

export default Footer;
