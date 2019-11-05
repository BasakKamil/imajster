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
          
  

        </div>

        );
    }
}
export default Shop;

const StyleCount = { background: 'none',color: 'white' };