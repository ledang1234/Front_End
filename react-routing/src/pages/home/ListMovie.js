import React, { Component } from 'react'
import * as action from "../../redux/action";
import Movie from "../../component/Movie"
import { connect } from "react-redux";




 class ListMovie extends Component {
    componentDidMount() {
        this.props.getListMovie();
      }
    renderHTML = () => {
        return this.props.listMovie.map(movie=>{
            return <Movie key={movie.maPhim} movie={movie}/>
        })
    }
    render() {
        return (
            <div className="container">
                <h3>List Movie</h3>
                <div className="row">{this.renderHTML()}</div>
            </div>
        )
    }
}
const mapStateToProps  = state => {
    return{
        listMovie: state.movieReducer.listMovie,
    }
}
const mapDistpatchToProps = dispatch => {
    return {
      getListMovie: () => {
        dispatch(action.actGetListMovieAPI());
      }
    };
  };
export default connect(mapStateToProps, mapDistpatchToProps)(ListMovie);
