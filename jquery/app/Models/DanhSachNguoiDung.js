function DanhSachNguoiDung (){
    this.mangNguoiDung =[];
    this.themNguoiDung = function (nguoiDung) {
        this.mangNguoiDung.push(nguoiDung);
    }

    this.timKiemNguoiDung = function(tuKhoa){
        tuKhoa = tuKhoa.trim();
        tuKhoa = tuKhoa.toLowerCase();

        var danhSachNguoiDungKQ  =  new DanhSachNguoiDung();
        for (var i = 0; i < this.mangNguoiDung.length; i++){
            var nguoiDung =this.mangNguoiDung[i];

            if (nguoiDung.HoTen.toLowerCase().trim().search(tuKhoa) !== -1){ //tim dc
                danhSachNguoiDungKQ.themNguoiDung(nguoiDung);
            }
        }
        return danhSachNguoiDungKQ;
    }

    this.timNNguoiDungTheoMa = function(TaiKhoan){
        for (var i = 0; i < this.mangNguoiDung.length; i++){
            var nguoiDung = this.mangNguoiDung[i];
            if(nguoiDung.TaiKhoan  === TaiKhoan){
                return i;
            }
        }
    }

    this.xoaNguoiDung = function(TaiKhoan){
        var taiKhoanXoaIndex = this.timNNguoiDungTheoMa(TaiKhoan);
        if(taiKhoanXoaIndex !== -1){
            this.mangNguoiDung.splice(taiKhoanXoaIndex,1)
        }
    }


    this.capNhatThongTinNguoiDung  = function(nguoiDungEdit){
        var index  = this.timNNguoiDungTheoMa(nguoiDungEdit.TaiKhoan);

        var nguoiDungCapNhat = this.mangNguoiDung[index];

        nguoiDungCapNhat.MatKhau = nguoiDungEdit.MatKhau;
        nguoiDungCapNhat.HoTen = nguoiDungEdit.HoTen;
        nguoiDungCapNhat.Email = nguoiDungEdit.Email;
        nguoiDungCapNhat.SoDT = nguoiDungEdit.SoDT;
    }

    this.tinhDiemNguoiDung = function ()
    {
        var arrDiem = [];
        for(var i = 0; i<this.mangNguoiDung.length; i++)
        {
            arrDiem.push(this.mangNguoiDung[i].Diem);
        }
        return arrDiem;
    }
}