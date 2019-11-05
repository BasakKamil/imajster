import React, { Component } from 'react'

export class Facebook extends Component {



    render() {

        const {fotoStaff1} = this.props;

        return (
            <div id="faceKamil" className="columnFestival imagecolumnFestival">
                <img src={fotoStaff1} alt="for sell" />  
            </div>
        )
    }
}

export default Facebook
