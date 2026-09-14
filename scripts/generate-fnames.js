const fs = require("fs")
const path = require("path")

const OUT_PATH = path.join(__dirname, ".." , "gallery-data.js")

function generateGallery() {
     
     const DIR = path.join(__dirname, "..", "gallery", "music");
     const files = fs.readdirSync(DIR);

     const images = files.map(f => `./gallery/music/${f}`);
     return `export const images = ${JSON.stringify(images)}\n`;

}

fs.writeFileSync(OUT_PATH, generateGallery())