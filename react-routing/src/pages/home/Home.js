import React, { useEffect } from 'react';
import Movie from "../../component/Movie";
import * as action from "../../redux/action";
import { connect } from "react-redux";

function Home (props) {
    
    useEffect(()=>{
        props.getListMovie();
    }, [props])


    
    
    const renderHTML =  () => {
        return props.listMovie.map(movie  => {
            return <Movie key={movie.maPhim} movie={movie} />
        })
    }
    
    return (
        <div className="container">
            <div className="row"> {renderHTML()}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        listMovie: state.movieReducer.listMovie
    }
}
const mapDispatchToProps = distpatch => {
    return{
        getListMovie: () => {
            distpatch(action.actGetListMovieAPI());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
