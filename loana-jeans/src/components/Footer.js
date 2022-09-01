import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
<footer>
            <div className="row primary">
                <div className="column">
                    <img src="img/logo.png" width="210px" height="190px" alt="Logo img"/>
                </div>
                <div className="column links">
                    <h2>Productos</h2>
                    <ul>
                        <li>
                            <a href="#">Jeans</a>
                        </li>
                        <li>
                            <a href="#">Shorts</a>
                        </li>
                        <li>
                            <a href="#">Camperas</a>
                        </li>
                        <li>
                            <a href="#">Ofertas</a>
                        </li>
                    </ul>
                </div>

                <div className="column links">
                    <ul>
                        <li>
                        <h2 className="aux">Contacto</h2>
                            <p> 🗺️ Av. San Martín 1587, CABA,Buenos Aires</p>
                            <p>📱(+54) 9 11-5674-1599</p>
                        </li>
                    </ul>
                </div>

                <div className="column links">
                    <ul>
                        <li>
                            <h2>Seguinos</h2>
                                <a href="#">Instagram</a>
                        </li>

                        <li>
                            <a href="#">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
                    <p>© Loana Jeans 2020 - 2022 . Todos los derechos reservados.</p>

            </footer>
    );
}

export default Footer;
