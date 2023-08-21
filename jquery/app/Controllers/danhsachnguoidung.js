
////////      MAU JQUERY
$(document).ready(function () {

    var danhSachNguoiDung = new DanhSachNguoiDung();
    //Xu ly tac vu them nguoi dung
    $("#btnThemNguoiDung").click(function () {

        $(".clear").val("");
        //Tao modal title
        var modelTitle = "Them nguoi dung";

        //Tao button
        var modelFooter = `
        <button id="btnThem"  class="btn btn-success" data-dismiss="modal">Them nguoi dung </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal" >Dong</button>
    `
        $(".modal-title").html(modelTitle)
        $(".modal-footer").html(modelFooter)

        $("#TaiKhoan").attr("readonly", false);


        // $("#btnModal").trigger("click")
    })


    $("body").delegate("#btnThem", "click", function () {
        var TaiKhoan = $("#TaiKhoan").val();
        var MatKhau = $("#MatKhau").val();
        var HoTen = $("#HoTen").val();
        var Email = $("#Email").val();
        var SoDT = $("#SoDT").val();
        var nguoiDung = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT);
        console.log(nguoiDung);
        danhSachNguoiDung.themNguoiDung(nguoiDung);

        //Hien thi sweetalert
        swal("OK", "Them nguoi dung thanh cong", "success");

        //Load du lieu nguoi dung ta database khi them
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung)
        ///////// $("#btnDong").trigger("click"); //them thanh cong dong form (nhung ko can vi co data-dismiss roi)
        var arrDiem = danhSachNguoiDung.tinhDiemNguoiDung();
        veBieuDo(arrDiem);
        //Luu vao storage
        LuuStorage();

        //Clear form
        $(".clear").val("");
    })


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
            

            >
                <td><input class="checkBox" type="checkbox" val()="${nguoiDung.TaiKhoan}"></td>
                <td  class="tdThongTinNguoiDung">${nguoiDung.TaiKhoan}</td>
                <td  class="tdThongTinNguoiDung">${nguoiDung.MatKhau}</td>
                <td  class="tdThongTinNguoiDung tdHoTen">${nguoiDung.HoTen}</td>
                <td  class="tdThongTinNguoiDung">${nguoiDung.Email}</td>
                <td  class="tdThongTinNguoiDung">${nguoiDung.SoDT}</td>
                <td><button class="btn btn-danger delete" tai-khoan="${nguoiDung.TaiKhoan}">Xoa</button></td>
            </tr>
            `
        }
        $("#tblDanhSachNguoiDung").html(noiDungNguoiDung);
    }

    //Xu ly su kien cho nut dong  (ko can vi co data-dismiss  roi)
    $("body").delegate("#btnDong", "click", function () {
        $("#btnDongForm").trigger("click");
    })

    // Xu ly su kien tim kiem
    $("#txtTuKhoa").keyup(function () {
        var tuKhoa = $("#txtTuKhoa").val();

        var danhSachNguoiKQ = danhSachNguoiDung.timKiemNguoiDung(tuKhoa);
        layDanhSachNguoiDung(danhSachNguoiKQ.mangNguoiDung);
        HighLight(tuKhoa);
    });

    //Chuc check dc viet HOA
    function HighLight(tuKhoa) {
        //tính độ dài từ khóa
        var doDaiTuKhoa = tuKhoa.length;
        //Duyệt tất cả td có class name là họ tên
        $(".tdHoTen").each(function () {
            //Lấy ra nội dung chuỗi kết quả
            var noiDungHTML = This.html();
            //Kiểm tra trong nội html của thẻ td.tdHoten có chứa từ khóa hay ko
            if (noiDungHTML.indexOf(tuKhoa) !== -1) {
                //Dùng hàm substring tạo chuỗi mới
                var viTriTuKhoa = noiDungHTML.indexOf(tuKhoa);
                var KetQuaMoi = `${noiDungHTML.substring(0, viTriTuKhoa)} 
                <span class ='highlight' >${tuKhoa}</span> ${noiDungHTML.substring(viTriTuKhoa + doDaiTuKhoa)}`;
                console.log(KetQuaMoi);
                jQuery(this).html(KetQuaMoi);
            }
        });
        jQuery(".highlight").NhapNhay(3);
    }

    //Plugin cho jquery
    window.jQuery.prototype.NhapNhay= function(soLanNhapNhay){
        var This = $(this)
        for (var i = 0; i<soLanNhapNhay ;i++){
            This.fadeOut(500);
            This.fadeIn(500);
        }
    }

    

    // Xu ly xoa nguoi dung
    $("#btnXoaNguoiDung").click(function () {
        $(".checkBox").each(function () {
            if ($(this).is(":checked")) {
                var taiKhoan = $(this).val();
                danhSachNguoiDung.xoaNguoiDung(taiKhoan);
            }
        })
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
        LuuStorage();
    })

    $("body").delegate(".delete","click", function(){
        var taiKhoan = $(this).attr("tai-khoan");
        console.log(taiKhoan);
        danhSachNguoiDung.xoaNguoiDung(taiKhoan);
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
        LuuStorage();
    })



    //Cai dat su kien click cho tr
    $("body").delegate(".tdThongTinNguoiDung", "click", function () {
        var This = $(this).parent();
        var TaiKhoan = This.attr("data-tai-khoan");
        var MatKhau = This.attr("data-mat-khau");
        var HoTen = This.attr("data-ho-ten");
        var Email = This.attr("data-email");
        var SoDT = This.attr("data-sodt");
        console.log(HoTen);

        $("#TaiKhoan").val(TaiKhoan);
        $("#MatKhau").val(MatKhau);
        $("#HoTen").val(HoTen);
        $("#Email").val(Email);
        $("#SoDT").val(SoDT);

        // document.getElementById("TaiKhoan").value = TaiKhoan;
        // document.getElementById("MatKhau").value = MatKhau;
        // document.getElementById("HoTen").value = HoTen;
        // document.getElementById("Email").value = Email;
        // document.getElementById("SoDT").value = SoDT;

        //Goi popUp
        $("#btnModal").trigger("click");
        //Tao modal title
        var modelTitle = "Cap nhat thong tin nguoi dung";

        //Tao button
        var modelFooter = `
        <button id="btnCapnhat"  class="btn btn-success"  data-dismiss="modal">Cap nhat </button>
        <button id="btnDong" class="btn btn-danger" data-dismiss="modal">Dong</button>
    `
        $(".modal-title").html(modelTitle);
        $(".modal-footer").html(modelFooter);
        //Khoa input tai khoan
        $("#TaiKhoan").attr("readonly", true);
    })



    $("body").delegate("#btnCapnhat", "click", function () {

        var TaiKhoan = $("#TaiKhoan").val();
        var MatKhau = $("#MatKhau").val();
        var HoTen = $("#HoTen").val();
        var Email = $("#Email").val();
        var SoDT = $("#SoDT").val();
        var nguoiDungEdit = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT);
        console.log(nguoiDungEdit)
        danhSachNguoiDung.capNhatThongTinNguoiDung(nguoiDungEdit);


        //Hien thi sweetalert
        swal("OK", "Cap nhat thanh cong", "success");

        //Load du lieu nguoi dung ta database khi them
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
        
        //Luu vao storage
        LuuStorage();

        //Clear form
        $(".clear").val("");
    })

    // Xu ly luu  va truy xuat voi localstorage
    function LuuStorage() {
        //luu mang nguoi dung
        var danhSachNguoiDungJSON = JSON.stringify(danhSachNguoiDung.mangNguoiDung)
        localStorage.setItem("danhSachNguoiDung", danhSachNguoiDungJSON);
    }

    function layStorage() {
       if(localStorage.getItem("danhSachNguoiDung")){
        var danhSachNguoiDungJSON = localStorage.getItem("danhSachNguoiDung");
        danhSachNguoiDung.mangNguoiDung = JSON.parse(danhSachNguoiDungJSON);
        layDanhSachNguoiDung(danhSachNguoiDung.mangNguoiDung);
       }
    }
    layStorage();

    function veBieuDo(arrDiem) {
        Highcharts.chart('container', {

            title: {
                text: 'Danh sách điểm số người dùng'
            },

            subtitle: {
                text: 'Biểu đồ thống nạp điểm của người dùng'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation',
                data: arrDiem
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        })
    };



    

   








    //Hieu ung an hien
    $("#btnToggle").click(function () {
        $("#tblNguoiDung").toggle(500);
        $("#btnToggle").animate({ left: "350px", "font-size": "25px" }, 1000)
    })

    $("#btnHienTable").click(function () {
        $("#tblNguoiDung").fadeIn(500);
    })
    $("#btnAnTable").click(function () {
        $("#tblNguoiDung").fadeOut(500);
    })


})






function newFunction(TaiKhoan) {
    $("#TaiKhoan").val(TaiKhoan);
}

