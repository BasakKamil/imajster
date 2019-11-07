import React, { Component } from 'react'

export class AdminProductView extends Component {
    render() {
        return (
            <div className="AdminPV row">
                <div className="col-xs-4"><b>{this.props.product.name}</b></div>
                <div className="col-xs-4"><button onClick={(event)=>{this.props.removeFromInventory(this.props.product.name)}} className="btn-primary NoweKam">Remove</button></div>
            </div>
        )
    }
}

export default AdminProductView
