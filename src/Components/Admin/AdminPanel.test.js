import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel.js';

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({adapter: new Adapter()});

describe('AdminPanel tests',()=>{

    it('AdminPanel render without a problem', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel/>,div);
        ReactDOM.unmountComponentAtNode(div);
    })
        it('Panel Administrator renders',()=> {
        let wrapper = shallow(<AdminPanel/>);
        expect(wrapper).toMatchSnapshot();
    })
})