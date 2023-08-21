import * as ActionType from "./../constants/ActionType";
import Axios from "axios";

export const actThemNguoiDungAPI = user => {
  const userAdmin =  JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch =>{
    Axios({
      method:"POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data :user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    }).then(rs=>{
      console.log(rs.data);
    }).catch(err=>{
      console.log(err.response.data);
    })
  }
}

export const actLoginAdminAPI = (user, history) => {
    return dispatch => {
      Axios({
        method: "POST",
        url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: user
      })
        .then(rs => {
          console.log(rs.data);
          if (rs.data.maLoaiNguoiDung === "QuanTri") {
            localStorage.setItem("userAdmin", JSON.stringify(rs.data));
            history.push("/admin/dashboard");
          } else {
            alert("Khong co quyen truy cap");
          }
        })
        .catch(err => {
          alert(err.response.data);
        });
    };
  };
  

  export const actGetDetailMovieAPI = id => {
    return dispatch => {
      Axios({
        method: "GET",
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
      })
        .then(rs => {
          dispatch(actGetDetailMovie(rs.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  
  export const actGetDetailMovie = detailMovie => {
    return {
      type: ActionType.GET_DETAIL_MOVIE,
      data: detailMovie
    };
  };
  

export const actGetListMovieAPI = () => {
   return dispatch => {
    Axios({
        method:"GET",
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    }).then(rs=>{
        dispatch(actGetListMovie(rs.data));
    }).catch(err=>{
        console.log(err);
    })
   }
}
export const actGetListMovie = listMovie => {
    return{
        type: ActionType.GET_LIST_MOVIE,
        data: listMovie
    }
}