import React, { Component } from 'react'
import anime from 'animejs';
import Focisz from '../Components/BOX/amman.jpg';
import Footer from './footer';

export class CvFull extends Component {
   
    animetwo = (b) => {
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        //    Animowanie wjezdzajacego Nagłówka h2
            this.morphing = anime({
                targets: `${b}`,
                translateX:[
                    { value:  0 ,duration: 200,delay: 500 },
                    { value:  this.width ,duration: 200,delay: 200 },
                    { value: this.width/2,duration: 200,delay: 200 }
                ],
                easing: 'easeInOutExpo',
                loop: false,
    });
}  


animenext = (a,c) => {
this.basket = anime({
    targets:  `${a}`,
    translateX: [
        {value: window.innerWidth}, 
        {value: window.innerWidth/1.5}
     ],
    translateY: [
        {value: 200}
    ],
    scale: [2,4,6,4,2],
    rotate: '2turn',
    delay: `${c}`
  });
}
// Zmiana cass w czasie 
animecss = (d,f,g) => {
  anime({
    targets: `${d}`,
    left: '240px',
    backgroundColor: `${g}`,
    borderRadius: ['5px', '30px'],
    easing: 'easeInOutQuad',
    delay: `${f}`,
    duration: 1000,
    scale:[1,3,1]
  });
}
// Wlatujace boxy
animebox = (h) =>{
 anime({
    targets: `${h}`,
    translateX: 270,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
 });
}

  componentDidMount(){
    this.animetwo('.WitamywCv');
    this.animenext('.Start',500); 
    this.animecss('.pok',1000,'#cce4ff');
    this.animecss('.Start h2',3000,'#95a1ad');
}
   
    render() {
        return (
            <div>
                <div className="WitamywCv">
                <h2> Witamy w Cv</h2>

            </div>
            <div className="Start">
            <h2>O mnie :</h2>
            <table className="MojaTab">
                <tr>
                    <td>Imię i Nazwisko: </td> <td className="pok"> Kamil Sebastian Basak</td> 
                </tr>
                <tr>
                    <td>Telefon: </td><td className="pok"> 796 895 079</td> 
                </tr>
                <tr>
                    <td>E-Mail: </td> <td className="pok"> Bastric91@gmail.com</td> 
                </tr>
                <tr>
                <td>Wykształcenie: </td><td className="pok"> Wyższe(Inżynier)</td> 
                </tr> 
                <tr>
                <td>Urodzony: </td><td className="pok"> 02.06.1991 <br/>w Warszawie</td> 
                </tr> 
                </table>
            </div>
            <div className="ImageKamB">
                <img src={Focisz} alt="Kamil"></img>
            </div>
            <div className="School"> <h2>Wykształcenie:</h2>
            <table className="Education">
                <tr>
                    <td>2007-2010</td> <td className="pok"> LO im.Józefa Wybickiego </td> 
                </tr>
                <tr>
                    <td>2011: </td><td className="pok"> Pracowałem(Rok przerwy od nauki)</td> 
                </tr>

            </table>
            </div>
            <div className="Experince"> <h2>Doświadczenie:</h2>
            <table className="Worked">
                <tr>
                    <td>2011</td> <td className="pok"> Pracowałem w sklepie internetowych Fresh24 jako magazynier</td> 
                </tr>
                <tr>
                    <td>2012 </td><td className="pok"> Pracowałem(Rok przerwy od nauki)</td> 
                </tr>

            </table> 
            </div>
            <div className="AboutMeWork">
            <h2>O Mnie:</h2>
                <p>
            Na codzien zajmuje się Front-End,po ukończeiu Studiów ukończyłem kurs z Node.js, zachaczając o React i w tej bibliotece cały czas rozwijam umiejętności.
            Miałem okazje robić na praktykach (póżniejszej pracy) strony w CMS-Joomla chodźby dla Bydgoskiej Izby Lekarskiej,linki do stron dla znajomych znajdują poniżej, które także wykonałem.
            Sam posiadam swoją Aplikacje Webową tak jak widać (Cały czas ją udoskonalam), pisze w React, znam SASS, podstawy Express, jQery (znam ale wiem, że odchodzi się generalnie od jej używania), lubie robić animacje w Anime.js oraz GSAP.
            Gneralnie Java Script podstawy znam, dużo rzeczy sprawdzam w sieci (nie wszystko pamietam zawsze z pamięci) ale generlanie proste skrypty potrafiłem napisac skacząc po elementach DOM np do Sklepu VirtueMart( darmowy sklep do CMS ) które obeszły problem automatycznie renderowanych-pomniejszanych zdjęc, nowe zasady z destrukturacji zanm ale jak juz pisałem sporo rzeczy sprawdzam w sieci.
                </p>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default CvFull
