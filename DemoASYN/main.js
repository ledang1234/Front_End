function TheFirst(callback) {
    setTimeout(() => {
        console.log("TheFirst");
        callback()
    }, 2000)

}
function TheSecond()  {

    console.log("TheSecond")
}

TheFirst(TheSecond);
// TheSecond();