import "../Components/AboutAs.css"
import PlacaDeVIdeoRx5700 from "../Img/Placa_De_video_Rx5700.jpg"
import fb from "../Img/Logo-Facebook.png"
import twitter from "../Img/Logo-Twitter.png"
import insta from "../Img/Logo-Instagram.webp"
import linkedin from "../Img/Logo-Linkedin.png"

export default function Aboutus () {
    return (
        <>
            <div className="Equipo__QuienesSomos">
                <h2>
                    About us    
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium deleniti quas accusamus rem quam tempora iusto quidem. 
                    Obcaecati vero delectus omnis incidunt a deserunt consequatur deleniti, odio inventore aspernatur.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium deleniti quas accusamus rem quam tempora iusto quidem. 
                    Obcaecati vero delectus omnis incidunt a deserunt consequatur deleniti, odio inventore aspernatur.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium deleniti quas accusamus rem quam tempora iusto quidem. 
                    Obcaecati vero delectus omnis incidunt a deserunt consequatur deleniti, odio inventore aspernatur.
                </p>
                <h2>
                    Nuestro Equipo
                </h2>
            </div>

            <div className="Card__Paddig">
                <div className=" Card__Conteiner ">
                    <div className="Card__div card" >
                        <img src={PlacaDeVIdeoRx5700} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div className="sb__QuinesSomos-links_div">
                            <div className="Social__QuienesSomos">
                                <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                                <a href="https://twitter.com/?lang=es"><img src={twitter} alt="" /></a>
                                <a href="https://www.linkedin.com/feed/"><img src={linkedin} alt="" /></a>
                                <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};