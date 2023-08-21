

function TinhTien(){
    var tongTienTip = document.getElementById("totalTip").value;
    var soPhanTram = document.getElementById("select").value;
    var soNguoi = document.getElementById("soNguoi").value;
    var span = document.getElementById("showResult");

    span.innerHTML = tongTienTip*soPhanTram/soNguoi;
    console.log(soPhanTram);
    
}





// document.getElementById("showResult").innerHTML = "So tien tip moi nguoi: "+ tinhTienTip(tongTienTip,soPhanTram,soNguoi);
