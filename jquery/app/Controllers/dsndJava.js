 /// JAVASCRIPT THUAN (co nhieu han che ko biet sua)

//tai sao querySelectorAll ko co tac dung
//lan lon giua  cac ID

document.querySelector("#btnThemNguoiDung").onclick = function () {

     //Clear form
     document.querySelectorAll(".clear").value = ""; //tai sao ko dung  dc
     document.getElementById("TaiKhoan").value = "";
     document.getElementById("MatKhau").value = "";
     document.getElementById("HoTen").value = "";
     document.getElementById("Email").value = "";
     document.getElementById("SoDT").value = "";
    //Tao modal title
    document.querySelector(".modal-title").innerHTML = "Them nguoi dung";

    //Tao button
    var btnThemNguoiDung = `
        <button id="btnThem"  class="btn btn-success" onclick="taoNguoiDung()" data-dismiss="modal">Them nguoi dung </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal">Dong</button>
    `
    document.querySelector(".modal-footer").innerHTML = btnThemNguoiDung;
}

var danhSachNguoiDung = new DanhSachNguoiDung();
var taoNguoiDung = function () {

    // var nguoiDung = {
    //     TaiKhoan: document.querySelector("#TaiKhoan").value,
    //     MatKhau: document.querySelector("#MatKhau").value,
    //     HoTen: document.querySelector("#HoTen").value,
    //     Email: document.querySelector("#Email").value,
    //     SoDT: document.querySelector("#SoDT").value,
    // }

    // //Co  file NguoiDung.js 
    var TaiKhoan = document.querySelector("#TaiKhoan").value;
    var MatKhau = document.querySelector("#MatKhau").value;
    var HoTen = document.querySelector("#HoTen").value;
    var Email = document.querySelector("#Email").value;
    var SoDT = document.querySelector("#SoDT").value;

    var nguoiDung = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT);
    console.log(nguoiDung);

    danhSachNguoiDung.themNguoiDung(nguoiDung);

    //sweetalert
    swal("OK", "Them nguoi dung thanh cong", "success");

    //Load du lieu  ra data table
    layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
    //Luu vao storage
    LuuStorage();

    //Clear form
    document.querySelectorAll(".clear").value = ""; //tai sao ko dung  dc
    document.getElementById("TaiKhoan").value = "";
    document.getElementById("MatKhau").value = "";
    document.getElementById("HoTen").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("SoDT").value = "";




}

var layDanhSachNguoiDung = function (mangNguoiDung) {
    var noiDungNguoiDung = "";
    for (var i = 0; i < mangNguoiDung.length; i++) {
        var nguoiDung = mangNguoiDung[i];

        noiDungNguoiDung += `
        <tr 
        class="trThongTinNguoiDung" 
        data-tai-khoan="${nguoiDung.TaiKhoan}" 
        data-mat-khau="${nguoiDung.MatKhau}"
        data-ho-ten="${nguoiDung.HoTen}"
        data-email="${nguoiDung.Email}"
        data-sodt="${nguoiDung.SoDT}"
        data-toggle="modal"
        data-target="#myModal"
        onclick = "clickTheTr()"
        >
            <td><input class="checkBox" type="checkbox" value="${nguoiDung.TaiKhoan}"></td>
            <td>${nguoiDung.TaiKhoan}</td>
            <td>${nguoiDung.MatKhau}</td>
            <td>${nguoiDung.HoTen}</td>
            <td>${nguoiDung.Email}</td>
            <td>${nguoiDung.SoDT}</td>
            <td><button class="btn btn-danger" onclick="xoaNguoiDung(${nguoiDung.TaiKhoan})">Xoa</button></td>
        </tr>
        `
    }
    document.querySelector("#tblDanhSachNguoiDung").innerHTML = noiDungNguoiDung;
}

document.querySelector("#txtTuKhoa").onkeyup = function () {
    var tuKhoa = document.getElementById("txtTuKhoa").value;
    console.log(tuKhoa);

    var danhSachNguoiDungKQ = danhSachNguoiDung.timKiemNguoiDung(tuKhoa);
    layDanhSachNguoiDung(danhSachNguoiDungKQ.mangNguoiDung); // coi chung thieu cai mang

}

function LuuStorage() {
    //luu mang nguoi dung
    var danhSachNguoiDungJSON = JSON.stringify(danhSachNguoiDung.mangNguoiDung)
    localStorage.setItem("danhSachNguoiDung", danhSachNguoiDungJSON);
}

function layStorage() {
    var danhSachNguoiDungJSON = localStorage.getItem("danhSachNguoiDung");
    danhSachNguoiDung.mangNguoiDung = JSON.parse(danhSachNguoiDungJSON);
    layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
}
layStorage();


// document.querySelector("#btnXoaNguoiDung").onclick = function(){
//     $(".checkBox").each(function(){
//         if($(this).is(":checked")){
//             var TaiKhoan =  $(this).val();
//             danhSachNguoiDung.xoaNguoiDung(TaiKhoan);
//             alert(TaiKhoan);
//         }
//     })
// }


var xoaNguoiDung = function (TaiKhoan) {
    danhSachNguoiDung.xoaNguoiDung(TaiKhoan);
    layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
    LuuStorage();
}


//Cai dat su kien click cho tr
var clickTheTr = function () {
    var TaiKhoan = document.querySelector(".trThongTinNguoiDung").getAttribute("data-tai-khoan");
    var MatKhau = document.querySelector(".trThongTinNguoiDung").getAttribute("data-mat-khau");
    var HoTen = document.querySelector(".trThongTinNguoiDung").getAttribute("data-ho-ten");
    var Email = document.querySelector(".trThongTinNguoiDung").getAttribute("data-email");
    var SoDT = document.querySelector(".trThongTinNguoiDung").getAttribute("data-sodt");


    document.querySelector("#TaiKhoan").value = TaiKhoan;
    document.querySelector("#MatKhau").value = MatKhau;
    document.querySelector("#HoTen").value = HoTen;
    document.querySelector("#Email").value = Email;
    document.querySelector("#SoDT").value = SoDT;


    //Tao modal title
    document.querySelector(".modal-title").innerHTML = "Cap nhat thong tin nguoi dung";

    //Tao button
    var btnThemNguoiDung = `
        <button id="btnCapnhat"  class="btn btn-success" onclick="capNhatNguoiDung()" data-dismiss="modal">Cap nhat </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal">Dong</button>
    `
    document.querySelector(".modal-footer").innerHTML = btnThemNguoiDung;
    //Khoa input tai khoan
   document.getElementById("TaiKhoan").setAttribute("readonly",true) ;

}

var  capNhatNguoiDung  = function () {
    var TaiKhoan = document.querySelector("#TaiKhoan").value;
    var MatKhau =  document.querySelector("#MatKhau").value;
    var HoTen = document.querySelector("#HoTen").value ;
    var Email = document.querySelector("#Email").value ;
    var SoDT =   document.querySelector("#SoDT").value ;
    console.log(MatKhau);

    // var nguoiDungEdit = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT);
    // danhSachNguoiDung.capNhatThongTinNguoiDung(nguoiDungEdit);

    // layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
    // LuuStorage();
}








