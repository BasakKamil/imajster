import React, { Component } from 'react'

export class ShowProducts extends Component {
    render() {
        return (
            <div>
                    <h2>{this.props.product.name}</h2>
                    {this.props.product.category}
            </div>
        )
    }
}

export default ShowProducts
