import React, { Component } from 'react'
import Product from "./product"


export default class ListProduct extends Component {
    
    renderHTML = () => {
        
        return this.props.mangSanPham.map((sanpham)=>{
            return(
               <Product
               key = {sanpham.maSP}
               sanPham = {sanpham}
               detailProduct= {this.props.detailProduct}
               gioHang = {this.props.gioHang}
               />
             
            
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}
