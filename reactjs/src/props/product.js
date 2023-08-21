import React, { Component } from 'react'


export default class Product extends Component {
    render() {
        const {product }  = this.props;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={product.hinhAnh}/>
                </div>
                <div className="card-body">
                    <h3 >{product.tenSP}</h3>
                    <button className="btn btn-success" onClick={()=>{this.props.detailProduct(product)}}>Chi tiet</button>
                </div>
                
            </div>
        )
    }
}
