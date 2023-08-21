//Đọc file dữ liệu xml sử dụng ajax ãxios
// url: Dường dẫn file chứa dưx liệu api
//method: phuong thức ajax do backend cung cấp
//responseType: 
//   + 'document' đối với dữ liệ trả về là xml
//   +'json' đối với kiểu dữ liệu trả về là json
// var objectAjax = {
//     url: "./DanhSachNguoiDung.xml",
//     method: "get",
//     responseType: "document"
// }

// var taoTable = function (result) {

//     var xmlResult = result.data;
//     var mangTheNguoiDung = xmlResult.querySelectorAll("NguoiDung");

//     var contentTable = "";

//     for (var i = 0; i < mangTheNguoiDung.length; i++) {
//         var tagNguoiDung = mangTheNguoiDung[i];

//         var email = tagNguoiDung.querySelector("Email").innerHTML;
//         var hoTen = tagNguoiDung.querySelector("HoTen").innerHTML;
//         var matKhau = tagNguoiDung.querySelector("MatKhau").innerHTML;
//         var soDT = tagNguoiDung.querySelector("SoDT").innerHTML;
//         var taiKhoan = tagNguoiDung.querySelector("TaiKhoan").innerHTML;


//         contentTable +=
//             `
//         <tr>
//             <td>${taiKhoan}</td>
//             <td>${matKhau}</td>
//             <td>${hoTen}</td>
//             <td>${email}</td>
//             <td>${soDT}</td>
//         </tr>
//         `
//     }

//     var content = `
//     <table class="table" border="1">
//     <thead>
//       <tr>
//         <td>Tai khoan</td>
//         <td>Mat khau</td>
//         <td>Ho ten</td>
//         <td>Email</td>
//         <td>So dien thoai</td>
//       </tr>
//     </thead>
//     <tbody>
//         ${contentTable}
//     </tbody>
//   </table>
//     `

//     document.querySelector("#table").innerHTML = content;
// }

// axios(objectAjax).then(taoTable).catch(function (error) {
//     console.log(error);
// })



//DOC FILE JSON

var objectJSON = {
    url: "./DanhSachNguoiDung.json",
    method: "get",
    responseType: "json"
}

var taoTableJSON = function (result) {
    var mangNguoiDung = result.data;

    var contentTable = "";

    for (var i = 0; i < mangNguoiDung.length; i++) {
        var nguoiDung = mangNguoiDung[i];

        contentTable +=
        `
        <tr>
            <td>${nguoiDung.TaiKhoan}</td>
            <td>${nguoiDung.MatKhau}</td>
            <td>${nguoiDung.HoTen}</td>
            <td>${nguoiDung.Email}</td>
            <td>${nguoiDung.SoDT}</td>
        </tr>
        `
    }

    var table =`
    <table class="table" border="1">
        <thead>
        <tr>
            <td>Tai khoan</td>
            <td>Mat khau</td>
            <td>Ho ten</td>
            <td>Email</td>
            <td>So dien thoai</td>
        </tr>
        </thead>
    <tbody>
        ${contentTable}
    </tbody>
  </table>
    `

    document.querySelector("#table").innerHTML = table;

}

axios(objectJSON).then(taoTableJSON).catch(function(error){
    console.log(error);
})