const getEle = (id) => document.getElementById(id);
let str = "HoverMe!";
let chars = [...str];
const Zoom = chars.forEach((index) => {
    let content = "";
    content += `
        <span>${index}</span>
    `;
    getEle("heading").innerHTML += content;
    
});