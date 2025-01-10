import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import './carrosselPromocoes.css'
import jogo1 from '../../assets/principal/jogo1.png';
import jogo2 from '../../assets/principal/jogo2.png';
import jogo3 from '../../assets/principal/jogo3.png';
import jogo4 from '../../assets/principal/jogo4.png';
import jogo5 from '../../assets/principal/jogo5.png';
import jogo6 from '../../assets/principal/jogo6.png';
import jogo7 from '../../assets/principal/jogo7.png';
import jogo8 from '../../assets/principal/jogo8.png';
import jogo9 from '../../assets/principal/jogo9.png';

const CarrosselPromocoesMobile = () => {
  const sliderRef = useRef(null);

  const proximoProm = () => {
      sliderRef.current.slickNext();
  };

  const anteriorProm = () => {
      sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="carrosselProm">
      <button onClick={proximoProm} id="proximo">
      <i className="fas fa-chevron-right"></i>
      </button>
      <Slider ref={sliderRef} {...settings}>
            <div className="promocao-slider">
                <img className="jogo1" src={jogo1} alt="Jogo 1" />
                <div className="preco" id="prom1">R$ 149,99</div>
                <div className="porcent" id="prom1" >-25%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo2" src={jogo2} alt="Jogo 2" />
                <div className="preco" id="prom2">R$ 169,90</div>
                <div className="porcent" id="prom2" >-15%</div>
            </div>
            <div className="promocao-slider">
                <img id="jogo3" src={jogo3} alt="Jogo 3" />
                <div className="preco" id="prom3">R$ 119,95</div>
                <div className="porcent" id="prom3" >-40%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo4" src={jogo4} alt="Jogo 4" />
                <div className="preco" id="prom4">R$ 28,49</div>
                <div className="porcent" id="prom4" >-50%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo5" src={jogo5} alt="Jogo 5" />
                <div className="preco" id="prom5">R$ 91,00</div>
                <div className="porcent" id="prom5" >-30%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo6" src={jogo6} alt="Jogo 6" />
                <div className="preco" id="prom6">R$ 149,62</div>
                <div className="porcent" id="prom6" >-25%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo7" src={jogo7} alt="Jogo 7" />
                <div className="preco" id="prom7">R$ 39,80</div>
                <div className="porcent" id="prom7" >-80%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo8" src={jogo8} alt="Jogo 8" />
                <div className="preco" id="prom8">R$ 124,99</div>
                <div className="porcent" id="prom8" >-50%</div>
            </div>
            <div className="promocao-slider">
                <img className="jogo9" src={jogo9} alt="Jogo 9" />
                <div className="preco" id="prom9">R$ 199,92</div>
                <div className="porcent" id="prom9" >-20%</div>
            </div>
      </Slider>
      <button onClick={anteriorProm} id="anterior">
        <i className="fas fa-chevron-left"></i>
      </button>
    </div>
  );
};

export default CarrosselPromocoesMobile;
