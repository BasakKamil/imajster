import React from 'react';
import ReactDOM from 'react-dom';
import Admin from '../Admin';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// Witamy w Enzyme - testy w React
configure({adapter: new Adapter()});

//Zbiera cały pakiet tesów it w całość 
describe('Admin tests', () => {

    // To jest czysty JEST - Metoda spr czy sa div w komponencie - 1 Test
    it('Header renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Admin/>,div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // Enzyme spr czy jest odpowiedni tekst w PRzycisku Button 
    it('Button: Log in - renders', () => {

        const wrapper = shallow(<Admin/>);

        // Oczyta wszystko z debuga w Admin xD 
        // console.log(wrapper.debug());
        expect(wrapper.find('button').text()).toBe('Log in')

        
    })



})

