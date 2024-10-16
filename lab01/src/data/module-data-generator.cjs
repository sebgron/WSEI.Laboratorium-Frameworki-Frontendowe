const fs = require('fs');

let cars = []; // tablica z obiektami 

fs.readFile('./lab01/src/data/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    cars = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    
    let content = "export const data = [\n";
    for (let i = 0; i < cars.length; i++) {
        const randomIndex = Math.floor(Math.random() * cars.length);
        const brand = cars[randomIndex];
        const engine = ['benzynowy', 'diesla', 'elektryczny'][Math.floor(Math.random() * 3)];
        const year = Math.floor(Math.random() * (2024 - 1995 + 1)) + 1995;
        
        content += `  { id: ${i + 1}, brand: "${brand}", engine: "${engine}", year: "${year}" },\n`;
    }
    content += "];";

    fs.writeFile('./lab01/src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});