import React,{ Component } from 'react';

class HomeFooter extends Component{


componentDidMount(){
  // const hr = document.querySelector("#hr");
  // const mn =  document.querySelectorAll("#mn");
  // const sc = document.querySelector("#sc");
  setInterval(()=>{
    // let deg= 6;
    let day = new Date();
    let h = day.getHours() ;
    let m = day.getMinutes() ;
    let s = day.getSeconds() ;
    console.log(`Godzina: ${h},Minuta: ${m}, sekunda: ${s}`);
    // Tu zaczyna sie obracac zegar
    // hr.style.transform = `rotateZ(${h+(m/12)}deg)`;
    // mn.style.transform = `rotateZ(${h+(m/12)}deg)`;
    // sc.style.transform =  `rotateZ(${h+(s/12)}deg)`;
  


  }) 
}


  render(){
    return (
        <div className="HomeFooter">
            <div className="FootCont">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Phone Numher</p>
            </div>
            <div class="clock" id="clock">
              <div class="hour">
                <div class="hr" id="h"></div>
              </div>
              <div class="min">
                <div class="mn" id="m"></div>
              </div>
              <div class="sec">
                <div class="sc" id="s"></div>
              </div>
            </div>
        </div>
    )
  }
}
export default HomeFooter