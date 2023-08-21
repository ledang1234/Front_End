function NguoiDungService() {
    this.layThongTinGiaoVu = function(){
        return axios({
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            method:'GET'
        })
    }
}