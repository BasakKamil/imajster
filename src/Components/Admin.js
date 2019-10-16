import React,{Component} from 'react';
import Anime from 'react-anime';
import DelayedComponent from './DelayedComponent';

class Admin extends Component{

   
    constructor(props) {
        super(props);
        this.state = {
            email: "Bastric91@gmail.com"
         
        }
        this.items = [
            {name: 'Kamil', surname: 'Basak', old: 28 , monets: 2},
            {name: 'Kuba', surname: 'Basak', old: 26, monets: 8},
            {name: 'Krzysztof', surname: 'Sech', old: 27, monets: 3},
            {name: 'Piotrek', surname: 'Mackiewicz', old: 28, monets: 1}
        ]

        
        // this.morphing = anime({
        //     autoplay: true,
        //     targets: '.polymorph',
        //     points: [
        //         { value: '0.38,762.63 0.38,-3.09 255.74,623.34 1360.03,762.63'},
        //         { value: '0.38,762.63 0.38,3.89 59.65,705.36 1349.1,762.63'}, 
        //         { value: '0.38,762.63 0.38,5.34 2.13,29.48 6.63,757.37 1196.12,762.63'}
        //     ],
        //     easing: 'easeInQutIn',
        //     duration: 2000,
        //     loop: true
        //   });
        
    
    }

 
    componentDidMount(){

        // 1 Metoda: Filter w Tablicach w React
        this.fillteredItems = this.items.filter((item) => {
            return item.old <= 27
        })
        console.log(this.fillteredItems);

        // 2 metoda: Map w Tablicach w React
        this.mapItem = this.items.map((item) => {
            return item.surname

        })  
        console.log(this.mapItem);
        //3 Metoda: Find w Tablicach - w React
        this.foundItem = this.items.find((item) => {
            return item.name === 'Kamil' 
        })
        console.log(this.foundItem);
        //4 Metoda: forEach w Tablicach w React 
        this.items.forEach((item) => {
           console.log(item.name);
        })

        // 5 Metoda Some w Tablicach w React - true or false
        this.hasexpensiveItems = this.items.some((item) => {
        return item.old >= 27 
        })
        console.log(this.hasexpensiveItems);

        //6 Metoda: Reduce w Tablicach w React 
}


    render(){

          console.log(this.morphing);
          
        const adminCss={ padding : '1%', margin: '1%' ,width: '98%'}
        const w = window.innerWidth
        const h = window.innerHeight;
        const style = {width:`${w}`, height: `${h}`};
        console.log(style);

        const { duration = 2500, color = 'black', loop = false, background = 'yellow' } = this.props;
        return(

        <div className="AdminMajster">
                <DelayedComponent>
                    <svg opacity="0.5" className="KamilaTlo" viewBox="0 0 1366 768" fill={background} >
                    <Anime
                        duration={duration}
                        loop={loop}
                        easing="easeOutQuad"
                        d={['M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L0,0v768h1366V0L844,363z', 'M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L221,569L0,0v768h1366V0L844,363z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L221,569L0,0v768h1366V0l-133,683L844,363z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M830,774L221,569L0,0v768h1366V0l-133,683L830,774z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M830,774L16,754L0,0v768h1366V0l-14,755L830,774z']}
                    >
                    <rect className="st0" />
                    <path className="st1" d="M15,45 L15,45 L15,45" stroke={color} strokeWidth="5" />
                    </Anime>
                    </svg>
                    <form className="KamilaForm" onSubmit={this.authenticate}>
                        <h1> Zaloguj sie do Panelu Administratora!</h1>
                        <input style={adminCss}type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}></input>
                        <input style={adminCss}type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                        <button type="submit" className="btn btn-danger KamilaButt">Log in</button>
                    </form>  
             
                </DelayedComponent>   
        </div>
        );
    }
}
export default Admin;