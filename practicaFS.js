// const fs = require('fs');

// fs.writeFile(
// 	'./fsSync.txt',
// 	'Estoy escribiendo un Archivo con Callback \n',
// 	(err) => {
// 		if (err) return console.log('No se escribir');

// 		fs.readFile('./files/fsSync.txt', 'utf-8', (err, contenido) => {
// 			if (err) return console.log('No se Leer');
// 			console.log(contenido);

// 			fs.appendFile(
// 				'./files/fsSync.txt',
// 				'Aca agrego algo mas',
// 				(err) => {
// 					if (err) return console.log('No se escribir');

// 					fs.readFile(
// 						'./files/fsSync.txt',
// 						'utf-8',
// 						(err, contenido) => {
// 							if (err) return console.log('No se Leer');
// 							console.log(contenido);

// 							fs.unlink('./files/fsSync.txt', (err) => {
// 								if (err) return console.log('No se Borrar');
// 							});
// 						}
// 					);
// 				}
// 			);
// 		});
// 	}
// );


// EJERCICIO 2
// const fs = require('fs');

// let fecha = new Date();
// fs.writeFile('./Doc.txt', ` ${fecha}`, (err) => {
//   if (err) return console.log('hubo un error');
//   fs.readFile('./Doc.txt', 'utf-8', (err, contenido) => {
//     if (err) return console.log('hubo un error');
//     console.log(contenido);
//   });
// });

// EJERCICIO 3

 const fs = require("fs");

const leerPackage = async () => {
  try {
    const contenidoStr = await fs.promises.readFile("./package.json", "utf-8");
    const info= {
      contenidoStr: contenidoStr,
      contenidoObj: JSON.parse(contenidoStr),
      size: contenidoStr.length,
    };

    console.log(objeto);
  } catch (error) {
    throw new Error("Hubo un error");
  }
};

leerPackage();