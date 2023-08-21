$(document).ready(function () {

    var danhSachKhoaHoc = new DanhSachKhoaHoc();
    var khoaHocService = new KhoaHocService();
    var nguoiDungService = new NguoiDungService();


    function loadDanhSachKhoaHoc() {
        khoaHocService.layDanhSachKhoaHoc().then(function (result) {
            // console.log(result.data);
            danhSachKhoaHoc.mangKhoaHoc = result.data;
            loadTableDanhSachKhoaHoc(danhSachKhoaHoc.mangKhoaHoc)
        }).catch(function (error) {
            console.log(error)
        })
        //load the select trong popup
        layDanhSachGiaoVu();
    }
    loadDanhSachKhoaHoc();

    function loadTableDanhSachKhoaHoc(mangKhoaHoc) {
        var noiDung = "";
        for (var i = 0; i < mangKhoaHoc.length; i++) {
            var khoaHoc = mangKhoaHoc[i];
            // console.log(khoaHoc);
            noiDung += `
            <tr 
            class="trThongTinKhoaHoc"
            data-ma="${khoaHoc.MaKhoaHoc}" 
            data-ten="${khoaHoc.TenKhoaHoc}"
            data-mo-ta"${khoaHoc.MoTa}"
            data-hinh-anh="${khoaHoc.HinhAnh}"
            data-luot-xem="${khoaHoc.LuotXem}"
            data-nguoi-tao="${khoaHoc.NguoiTao}"

            >
                <td><input class="checkBox" type="checkbox" val()="${khoaHoc.MaKhoaHoc}"></td>
                <td  class="MaKhoaHoc">${khoaHoc.MaKhoaHoc}</td>
                <td  class="TenKhoaHoc tdTenKH">${khoaHoc.TenKhoaHoc}</td>
                <td  class="MoTa">${khoaHoc.MoTa}</td>
                td  class="HinhAnh "><img src="${khoaHoc.HinhAnh}" width="50 height="30"></td>
                <td  class="LuotXem">${khoaHoc.LuotXem}</td>
                <td  class="NguoiTao">${khoaHoc.NguoiTao}</td>
                <td><button class="btn btn-danger delete" MaKhoaHoc="${khoaHoc.MaKhoaHoc}">Xoa</button></td>
                <td><button class="btn btn-success btnChinhSua" MaKhoaHoc="${khoaHoc.MaKhoaHoc}" >Chinh Sua</button></td>

                
            </tr>
            `
        }
        $("#tblDanhSachKhoaHoc").html(noiDung);
    }

    function layDanhSachGiaoVu() {
        nguoiDungService.layThongTinGiaoVu()
            .then(function (result) {
                // console.log(result.data);
                // Load danh sach nguoi dung len the select
                renderDropdown(result.data);
            }).catch(function (err) {
                console.log(err);
            })
    }
    var renderDropdown = function (mangNguoiDung) {
        var noiDungNguoiTao = '';
        for (var i = 0; i < mangNguoiDung.length; i++) {
            var nguoiDung = mangNguoiDung[i];
            noiDungNguoiTao += `
                <option value='${nguoiDung.TaiKhoan}'>${nguoiDung.HoTen} </option>
            `;
        }
        $("#NguoiTao").html(noiDungNguoiTao);
    }



    //Xu ly tac vu them nguoi dung
    $("#btnThemKhoaHoc").click(function () {

        $(".clear").val("");
        //Tao modal title
        var modelTitle = "Them khoa hoc";

        //Tao button
        var modelFooter = `
        <button id="btnThem"  class="btn btn-success" data-dismiss="modal">Them khoa hoc </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal" >Dong</button>
    `
        $(".modal-title").html(modelTitle);
        $(".modal-footer").html(modelFooter);

        $("#MaKH").attr("readonly", false);


        // $("#btnModal").trigger("click")
    })


    $("body").delegate("#btnThem", "click", function () {
        var MaKhoaHoc = $("#MaKH").val();
        var TenKhoaHoc = $("#TenKH").val();
        var MoTa = $("#MoTa").val();
        var HinhAnh = $("#HinhAnh").find("src");
        var LuotXem = $("#LuotXem").val();
        var NguoiTao = $("#NguoiTao").val();
        var khoaHoc = new KhoaHoc(MaKhoaHoc, TenKhoaHoc, MoTa, HinhAnh, LuotXem, NguoiTao);
        // console.log(khoaHoc);
        danhSachKhoaHoc.themKhoaHoc(khoaHoc);

        //Hien thi sweetalert
        swal("OK", "Them khoa hoc thanh cong", "success");

        //Goi service day du lieu len server
        khoaHocService.taoKhoaHoc(khoaHoc).then(function (result) {
            // console.log(result.data);
            //Gọi lại hàm lấy danh sách khoá học load lại table
            loadDanhSachKhoaHoc();
        }).catch(function (err) {
            console.log(err)
        })
        //Clear form
        // $(".clear").val("");
    })

    //Xu ly su kien chinh sua 
    $("body").delegate(".btnChinhSua", "click", function () {


        //Goi popUp
        $("#btnModal").trigger("click");

        //Tao modal title
        var modelTitle = "Chinh sua khoa hoc";

        //Tao button
        var modelFooter = `
          <button id="btnCapnhat"  class="btn btn-success"  data-dismiss="modal">Cap nhat </button>
          <button id="btnDong" class="btn btn-danger" data-dismiss="modal">Dong</button>
      `
        $(".modal-title").html(modelTitle);
        $(".modal-footer").html(modelFooter);
        //Khoa input tai khoan



        var This = $(this).closest(".trThongTinKhoaHoc");
        var MaKhoaHoc = This.find(".MaKhoaHoc").html().trim();
        var TenKhoaHoc = This.find(".TenKhoaHoc").html().trim();
        var MoTa = This.find(".MoTa").html().trim();
        //   var HinhAnh = This.find("img").atrr("src");
        var HinhAnh = This.find(".HinhAnh").html();
        var LuotXem = This.find(".LuotXem").html().trim();
        var NguoiTao = This.find(".NguoiTao").html().trim();
        // console.log(MaKhoaHoc);
        // console.log(TenKhoaHoc);

        $("#MaKH").val(MaKhoaHoc);
        $("#TenKH").val(TenKhoaHoc);
        $("#MoTa").val(MoTa);
        //   CKEDITOR.instance["MoTa"].setData(MoTa);
        $("#HinhAnh").val(HinhAnh);
        $("#LuotXem").val(LuotXem);
        $("#NguoiTao").val(NguoiTao);

        $("#MaKH").attr("readonly", true);
    })

    $("body").delegate("#btnCapnhat", "click", function () {
        var MaKhoaHoc = $("#MaKH").val();
        var TenKhoaHoc = $("#TenKH").val();
        var MoTa = $("#MoTa").val();
        // var MoTa = CKEDITOR.instance["MoTa"].getData(MoTa);
        var HinhAnh = $("#HinhAnh").val();
        var LuotXem = $("#LuotXem").val();
        var NguoiTao = $("#NguoiTao").val();
        var khoaHocEdit = new KhoaHoc(MaKhoaHoc, TenKhoaHoc, MoTa, HinhAnh, LuotXem, NguoiTao);
        console.log(khoaHocEdit);
        
        khoaHocService.capNhatKhoaHoc(khoaHocEdit).then(function(rs) {
            console.log(rs.data);     
            loadDanhSachKhoaHoc();
        }).catch(function (err) {
            console.log(err)
        })
        //Hien thi sweetalert
        swal("OK", "Cap nhat thanh cong", "success");

        //Clear form
        $(".clear").val("");
    })



    //Xu ly su kien xoa khoa hoc
s



})