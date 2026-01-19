// câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    return {
        id,
        name,
        price,
        quantity,
        category,
        isAvailable,
    };
}
// câu 2
const products = [
    Product(1, "T-Shirt Basic", 100000, 10, "clothing", true),
    Product(2, "Slim Fit Jeans", 200000, 5, "pants", true),
    Product(3, "Running Sneakers", 300000, 0, "shoes", false),
    Product(4, "Baseball Cap", 400000, 8, "hats", true),
    Product(5, "Leather Belt", 500000, 2, "accessories", true),
];
console.log("products => ", products);

// câu 3
const newArrayNameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price,
}));
console.log("newArrayNameAndPrice => ", newArrayNameAndPrice);

// câu 4
const availableProducts = products.filter(product => product.quantity > 0);
console.log("availableProducts => ", availableProducts);

// câu 5
const hasProductAbove100000 = products.some(product => product.price > 100000);
console.log("hasProductAbove100000 => ", hasProductAbove100000);

// câu 6
const allShoesAreAvailable = products.some(product => product.category === "accessories" && product.isAvailable);
console.log("allShoesAreAvailable => ", allShoesAreAvailable);

// câu 7 
const totalValue = products.reduce((total, product) => total + product.price * product.quantity, 0);
console.log("totalValue => ", totalValue);

// câu 8 
for (const product of products) {
    console.log("product => ", product.name, " - ", product.category, " - ", product.isAvailable);
}

// câu 9
for (const i in products) {
    console.log(`--- Product ${Number(i) + 1} ---`);

    for (const key in products[i]) {
        console.log(`${key}:`, products[i][key]);
    }
}

// câu 10 
const availableAndInStockProducts = products.filter(product => product.isAvailable && product.quantity > 0);
console.log("availableAndInStockProducts => ", availableAndInStockProducts);

