var  objectAjaxJSON  =  {
    url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01",
    method: "GET",
    reponseType: "json"
}

var taoDivPhim = function  (result) {
    var mangPhim  = result.data;
    var contentDiv = '';

    for (var i =  0; i  < mangPhim.length;  i++){
        var phim = mangPhim[i];

        contentDiv  +=`
            <div class="col-3">
                <div class="card text-left">
                <img class="card-img-top" src="${phim.hinhAnh}">
                <div class="card-body">
                    <h4 class="card-title">${phim.tenPhim}</h4>
                    <p class="card-text">${phim.moTa}</p>
                </div>
                </div>
            </div>
        `
    }

    var content =`
        <div class="row">
            ${contentDiv}
        </div>
    `

    document.querySelector(".danhSachPhim").innerHTML = content;
}

axios(objectAjaxJSON).then(taoDivPhim).catch();
