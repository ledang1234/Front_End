//lớp đối tượng chứa những phương thức giao tiếp với backend api
function KhoaHocService (){
    this.layDanhSachKhoaHoc = function () {
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method:'GET'
        });
    },

    this.taoKhoaHoc = function(khoaHoc){
        return axios({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/themkhoahoc",
            method:"POST",
            data: khoaHoc
        })
    },
    this.xoaKhoaHoc = function(maKhoaHoc){
        return axios({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/"+maKhoaHoc,
            method:"DELETE"
        })
    }
    this.capNhatKhoaHoc = function(khoaHoc){
        var jsonKhoaHoc = JSON.stringify(khoaHoc);
        return axios ({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/capnhatkhoahoc",
            method:"PUT",
            contentType:"application/json",
            data:jsonKhoaHoc,
        })
    }
 
}
//axios trả về đối tượng promise 