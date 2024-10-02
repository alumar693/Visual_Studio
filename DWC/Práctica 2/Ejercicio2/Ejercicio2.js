/*let colors = new Map ([
    ["Naranja", "#F39C12"],
    ["Lima", "#C0F312"],
    ["Turquesa", "#12F3E5"],
    ["Rosa", "#F312AF"],
    ["Rojo", "#F31212"]
]);

for (let [color, code] of colors) {
    document.write(`<p style="color: ${code}">${color}: ${code}</p>`);
}*/
let colors = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"]
let codes = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"]
for(let i = 0; i < colors.length; i++) {
    document.write(`<p style="color: ${codes[i]}">${colors[i]}: ${codes[i]}</p>`);
}
