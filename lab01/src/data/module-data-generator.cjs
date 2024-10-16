const fs = require('fs');

const count = Number(process.argv[2]) || 10; // domyślnie 10 obiektów
let cars = []; // tablica z obiektami 

fs.readFile('./data/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    cars = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    
    let content = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * cars.length);
        const brand = cars[randomIndex];
        const engine = ['gas', 'diesel', 'electric'][Math.floor(Math.random() * 3)];
        const year = Math.floor(Math.random() * (2024 - 1995 + 1)) + 1995;
        
        content += `  { id: ${i + 1}, brand: "${brand}", engine: "${engine}", year: "${year}" },\n`;
    }
    content += "];";

    fs.writeFile('./data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});