import React, { Component } from 'react'

export class Instagram extends Component {
    render() {
        const {fotoStaff2} = this.props;

        return (
            <div id="instaKamil" className="columnFestival imagecolumnFestival">
                <img src={fotoStaff2} alt="for sell" />  
            </div>
        )
    }
}

export default Instagram
