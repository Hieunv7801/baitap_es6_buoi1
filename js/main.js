const getEle = (id) => document.getElementById(id);

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender"
    , "celadon", "saffron", "fuschia", "cinnabar"];

const renderColor = colorList.forEach((value) => {
    let content = "";
    content += `
            <button class="color-button ${value}"></button>
        `;
    getEle("colorContainer").innerHTML += content;
});

