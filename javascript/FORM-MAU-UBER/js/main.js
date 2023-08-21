function layLoaiXe() {
    var loaiXe;
    var UberX = document.getElementById("UberX").checked;
    var UberSUV = document.getElementById("UberSUV").checked;
    var UberBlack = document.getElementById("UberBlack").checked;
    if (UberX) {
        loaiXe = "UberX";
    } else if (UberSUV) {
        loaiXe = "UberSUV";
    } else if (UberBlack) {
        loaiXe = "UberBlack";
    }
    return loaiXe;
}
function TinhTien() {
    var getSoKM = document.getElementById("soKM").value;
    getSoKM = parseFloat(getSoKM);
    var getThoiGianCho = document.getElementById("thoiGianCho").value;
    getThoiGianCho = parseFloat(getThoiGianCho);
    var divThanhTien = document.getElementById("divThanhTien");
    var spanTongTien = document.getElementById("xuatTien");
    divThanhTien.style.display = "block";
    var loaiXe = layLoaiXe();

    switch (loaiXe) {
        case "UberX":
            if (getSoKM <= 1) {
                xuatTien = 8000 * getSoKM + getThoiGianCho * 2000;
            } else if (getSoKM <= 20) {
                xuatTien = 12000 * getSoKM + getThoiGianCho * 2000;
            } else if (getSoKM > 20) {
                xuatTien = 10000 * getSoKM + getThoiGianCho * 2000;
            }
            break;
        case "UberSUV":
            if (getSoKM <= 1) {
                xuatTien = 9000 * getSoKM + getThoiGianCho * 3000;
            } else if (getSoKM <= 20) {
                xuatTien = 14000 * getSoKM + getThoiGianCho * 3000;
            } else if (getSoKM > 20) {
                xuatTien = 12000 * getSoKM + getThoiGianCho * 3000;
            }
            break;
        case "UberBlack":
            if (getSoKM <= 1) {
                xuatTien = 10000 * getSoKM + getThoiGianCho * 4000;
            } else if (getSoKM <= 20) {
                xuatTien = 16000 * getSoKM + getThoiGianCho * 4000;
            } else if (getSoKM > 20) {
                xuatTien = 14000 * getSoKM + getThoiGianCho * 4000;
            }
            break;
    }

    spanTongTien.innerHTML = xuatTien;
    console.log(getSoKM)

}

