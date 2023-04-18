
//ENTREGA 1
class ProductManager {
	constructor() {
	  this.products = [];
	  this.incremental = 1;
	}
  
	addProduct(title, description, price, thumbnail, code, stock) {
	  const newProduct = {
		id: this.incremental++,
		title,
		description,
		price,
		thumbnail,
		code: code.toString(),
		stock,
	  };
  
	if (!this.products.some((product) => product.code.toString() === code.toString()) &&
  Object.values(newProduct).every((value) => value)
) {
  this.products.push(newProduct);
  console.log(`Producto agregado con el ID ${newProduct.id}.`);
} else {
  console.log("No puede ser agregado.")
	}}
  
	getProducts() {
	  console.log(this.products);
	}
  
	getProductByID(id) {
	  const product = this.products.find((product) => product.id === id);
  
	  if (product) {
		console.log(product);
	  } else {
		console.log("Not Found");
	  }
	}
	#GetIncremental() {
		console.log(this.incremental);
	}
  }
  const productManager= new ProductManager()
  

  productManager.addProduct(
	"Vaporesso Zero 2",
	"diseño futurista, pequeño y con colores impactantes, funciona con una batería de 800 mAh integrada",
	20,
	"../img/IMG_3723.jpg",
	100002,
	20
  );
  productManager.addProduct(
	"Vaporesso Zero 1",
	"diseño futurista, funciona con batería integrada de 650mAh",
	12,
	"../img/IMG_3723.jpg",
	100001,
	15
  );
  productManager.addProduct(
	"asd 1",
	"asdads",
	100,
	"../img/IMG_3723.jpg",
	100003,
	15
  );
  

productManager.getProducts();
productManager.getProductByID(1);
productManager.getProductByID(4);