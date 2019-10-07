import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import LogoiM from './LogoiM.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderBootom extends Component{

    
    
    render(){
        return(
        
            <div className="Uno">
                   <button type="button" className="KamciaButton btn btn-warning"><Link to="/admin">
                     Admin
                       {/* <svg width="1278" height="656" viewBox="0 0 1278 656" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M774 328C774 398.14 713.782 455 639.5 455C565.218 455 505 398.14 505 328C505 257.86 565.218 201 639.5 201C713.782 201 774 257.86 774 328Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M639.5 454C713.285 454 773 397.535 773 328C773 258.465 713.285 202 639.5 202C565.715 202 506 258.465 506 328C506 397.535 565.715 454 639.5 454ZM639.5 455C713.782 455 774 398.14 774 328C774 257.86 713.782 201 639.5 201C565.218 201 505 257.86 505 328C505 398.14 565.218 455 639.5 455Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M639.5 409C689.025 409 729 372.645 729 328C729 283.355 689.025 247 639.5 247C589.975 247 550 283.355 550 328C550 372.645 589.975 409 639.5 409ZM639.5 410C689.482 410 730 373.287 730 328C730 282.713 689.482 246 639.5 246C589.518 246 549 282.713 549 328C549 373.287 589.518 410 639.5 410Z" fill="white"/>
<path d="M622 147H657V211H622V147Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M656 148H623V210H656V148ZM622 147V211H657V147H622Z" fill="white"/>
<path d="M827.998 310L828.267 344.999L764.269 345.49L764 310.491L827.998 310Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M827.259 344.007L827.006 311.008L765.008 311.484L765.261 344.483L827.259 344.007ZM827.998 310L764 310.491L764.269 345.49L828.267 344.999L827.998 310Z" fill="white"/>
<path d="M451.183 345.334L451 310.334L514.999 310L515.182 345L451.183 345.334Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M452.005 311.329L452.178 344.329L514.177 344.005L514.004 311.005L452.005 311.329ZM451.183 345.334L515.182 345L514.999 310L451 310.334L451.183 345.334Z" fill="white"/>
<path d="M723 425.665L745.671 399L794.43 440.455L771.76 467.12L723 425.665Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M745.785 400.41L724.41 425.551L771.645 465.711L793.021 440.569L745.785 400.41ZM723 425.665L771.76 467.12L794.43 440.455L745.671 399L723 425.665Z" fill="white"/>
<path d="M525.077 466.69L498 444.513L538.552 395L565.629 417.177L525.077 466.69Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M499.407 444.373L524.937 465.283L564.222 417.317L538.692 396.407L499.407 444.373ZM525.077 466.69L565.629 417.177L538.552 395L498 444.513L525.077 466.69Z" fill="white"/>
<path d="M740.881 263.784L723 233.696L778.018 201L795.899 231.088L740.881 263.784Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M724.371 234.045L741.23 262.414L794.528 230.739L777.669 202.371L724.371 234.045ZM740.881 263.784L795.899 231.088L778.018 201L723 233.696L740.881 263.784Z" fill="white"/>
<path d="M494 228.902L515.13 201L566.151 239.638L545.021 267.54L494 228.902Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M515.324 202.401L495.401 228.708L544.827 266.139L564.75 239.831L515.324 202.401ZM494 228.902L545.021 267.54L566.151 239.638L515.13 201L494 228.902Z" fill="white"/>
<path d="M622 445H657V509H622V445Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M656 446H623V508H656V446ZM622 445V509H657V445H622Z" fill="white"/>
</svg> */}

                       </Link></button>
                   <button onClick={this.props.toggle} className="KamciaButton btn btn-primary" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <g>
                    <title>background</title>
                     <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                    </g>
                        <g>
                     <title>Layer 1</title>
                    <path id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"/>
                    </g>
                    </svg>
                   </button>
        
                <LogoiM/>


          
            </div>
         
         );
    }

}
export default HeaderBootom