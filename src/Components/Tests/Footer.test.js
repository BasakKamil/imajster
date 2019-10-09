import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Contact';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// Witamy w Enzyme - testy w React
configure({adapter: new Adapter()});

//Zbiera cały pakiet tesów it w całość 
describe('Contact tests', () => {

    // To jest czysty JEST - Metoda spr czy sa div w komponencie - 1 Test
    it('Header renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer/>,div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // // Enzyme spr czy jest odpowiedni tekst w PRzycisku Button 
    it('In Contact :', () => {

        const wrapper = shallow(<Footer/>);

        // Oczyta wszystko z debuga w Admin xD 
        // console.log(wrapper.debug());
        expect(wrapper.find('div').find('p').text()).toBe('WYKONANE STRONY:')

        
    })



})

