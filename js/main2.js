const getEle = (id) => document.getElementById(id);

const tinhDiemTB = (...numbers) => {
    let total = 0;
    numbers.forEach((item) => {
        total += item;
    })
    return total;
}

getEle("btnKhoi1").onclick = () => {
    let diemT = getEle("inpToan").value*1;
    let diemL = getEle("inpLy").value*1;
    let diemH = getEle("inpHoa").value*1;

    let diemTB = tinhDiemTB(diemT, diemL, diemH) / 3;
    console.log(tinhDiemTB(diemT, diemL, diemH));
    getEle("tbKhoi1").innerHTML = diemTB;
}

getEle("btnKhoi2").onclick = () => {
    let diemV = getEle("inpVan").value*1;
    let diemS = getEle("inpSu").value*1;
    let diemD = getEle("inpDia").value*1;
    let diemE = getEle("inpEnglish").value*1;

    let diemTB = tinhDiemTB(diemV, diemS, diemD,diemE) / 4;
    getEle("tbKhoi2").innerHTML = diemTB;
}