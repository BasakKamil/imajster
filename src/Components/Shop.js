import React,{Component} from 'react';
import Header from './Header';
import { Spring } from 'react-spring/renderprops';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { TimelineLite, TweenLite, Power2 } from 'gsap';
import Api from './Button/api';
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
          
            <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#e86971' }}
  >
         <Inventory products={this.state.products} addToOrder={this.addToOrder}/>
          
  </TimelineItem>
  <TimelineItem
    key="002"
    animate={true}
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p className="Products row">
                        <h2>Produkty:</h2>
                        <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
            </p>
    <p>
      <button id="Kamciu">Klik!</button>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        11/2008 – 04/2009
      </div>
    )}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
   
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>

  
  </TimelineItem>
</Timeline>
         
<Api/>
        </div>

        );
    }
}
export default Shop;

const StyleCount = { background: 'none',color: 'white' };