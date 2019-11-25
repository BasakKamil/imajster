import React,{Component} from 'react';
import Header from './Header';
import { Spring } from 'react-spring/renderprops';
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { TimelineLite, TweenLite, Power2 } from 'gsap';
import Inventory from './Inventory';
import Order from './order.js';

class Shop extends Component{
  constructor(props) {
    super(props);
    this.state = {
        email: "Bastric91@gmail.com",
        products: [],
        order: []
          
    }

}
addToOrder = (product) => {
  this.setState({
      order: [...this.state.order, product]
  });

}
removeFromOrder = (title) => {
  this.setState({
      order: this.state.order.filter(product => title!==product.name)
  });

}

  render(){
  
    this.flight = {
        curviness: 2, 
        autoRotate: true,
        values: [
            {x:-window.innerWidth,y:0},
            {x:0,y:0},
        
        ]
    }

    this.tween2 = new TimelineLite();
    this.tween2.add(
        TweenLite.to('.Products',1,{
            bezier: this.flight,
            ease: Power2.easeInOut
        })
    );

       
    return(
      
        <div className="ShopiMajster container-fluid">
            <Header/>
            <div className="Counter">
            <Spring 
            from={{number: 10}}
            to={{number: 0}}
            config={{delay: 1000,duration: 10000}}>
                {props=>(
                    <div className = 'Germania' style={props}>
                        <h1 style={StyleCount}>
                        {props.number.toFixed()}
                        </h1>

                    </div>
                    
                )}
            </Spring>
            
            </div>
          
            
         <Inventory products={this.state.products} addToOrder={this.addToOrder}/>
         <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
    <div className="ShTo">
    <svg  viewBox="0 0 64 64" >
    <path className="sto" d="M13,38h40c0.9,0,1.7-0.6,1.9-1.5l6-22c0.3-1.1-0.3-2.2-1.4-2.5C59.4,12,59.2,12,59,12H12.8L12,7.7
	c-0.2-1-1-1.7-2-1.7H5C3.9,6,3,6.9,3,8s0.9,2,2,2h3.3l4.3,24c-3.9,0.1-6.9,3.3-6.8,7.2c0.1,3.9,3.3,6.9,7.2,6.8h1.7
	c-1.7,3.5-0.2,7.7,3.3,9.3s7.7,0.2,9.3-3.3c0.9-1.9,0.9-4.1,0-6h10.4c-1.7,3.5-0.2,7.7,3.3,9.3c3.5,1.7,7.7,0.2,9.3-3.3
	c0.9-1.9,0.9-4.1,0-6H56c1.1,0,2-0.9,2-2s-0.9-2-2-2H13c-1.7,0-3-1.3-3-3S11.3,38,13,38z M56.4,16l-4.9,18H16.7l-3.2-18H56.4z
	 M24,51c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S24,49.3,24,51z M47,51c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S47,49.3,47,51z"/>
    </svg>
    </div>
    <div className="NewTog">
 
    </div>
  

        </div>

        );
    }
}
export default Shop;

const StyleCount = { background: 'none',color: 'white' };