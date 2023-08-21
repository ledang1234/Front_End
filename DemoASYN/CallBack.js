let API_Cong = (a, b ,callback) => {
    setTimeout(()=>  {
        callback(a + b);
    })
}

let API_Nhan = (a,b ,callback) => {
    setTimeout(()=>  {
        callback(a * b);
    })
}

let API_Chia = (a, b ,callback) => {
    setTimeout(()=>  {
        callback(a / b);
    })
}

let tinhDienTich = ( a,b,h, callback) {
    API_Cong(a,b,result => {
        API_Nhan(result, h, result => {
            API_Chia(result,2,result =>  {
                callback(result);
            })
        })
    })
}

tinhDienTich(2,3,2)