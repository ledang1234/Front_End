let API_Cong = (a,b)  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000)
    })
}

let API_Nhan = (a,b)  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        }, 2000)
    })
}

let API_Chia = (a,b)  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a/b);
        }, 2000)
    })
}

let tinhDienTich =  (a, b , h) => {
    return API_Cong(a,b)
        .then(rs=>  API_Nhan(rs, h)
        .then(rs =>  API_Chia(rs, 2))
    )
}
tinhDienTich(2,3,2).then(result  => {console.log("Result", result)})