import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movie from "../../component/Movie";

export default function About() {
    const [state, setState]  = useState({listMovie: []});

    useEffect(()=> {
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        }).then(rs=>{
            setState({
                listMovie:rs.data
            })
        }).catch(err=>{
            console.log(err);
        })
    })


    const renderHTML =  () => {
        return state.listMovie.map(movie  => {
            return <Movie key={movie.maPhim} movie={movie} />
        })
    }
    
        return (
            <div className="container">
                <div className="row"> {renderHTML()}</div>
            </div>
        )
    
}
