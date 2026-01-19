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
    Product(1, "SP 1", 100000, 10, "Áo", true),
    Product(2, "SP 2", 200000, 5, "Quần", true),
    Product(3, "SP 3", 300000, 0, "Giày", false),
    Product(4, "SP 4", 400000, 8, "Mũ", true),
    Product(5, "SP 5", 500000, 2, "Túi", true),
]
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
const allShoesAreAvailable = products.every(product => product.category === "Giày" && product.isAvailable);
console.log("allShoesAreAvailable => ", allShoesAreAvailable);

// câu 7 
const totalValue = products.reduce((total, product) => total + product.price * product.quantity, 0);
console.log("totalValue => ", totalValue);

// câu 8 
for (const product of products) {
    console.log("product => ", product.name, " - ", product.category, " - ", product.isAvailable);
}

// câu 9
for (const key in products) {
    console.log("key => ", key, " - ", products[key]);
}

// câu 10 lấy danh sách đang bán và còn hàng
const availableAndInStockProducts = products.filter(product => product.isAvailable && product.quantity > 0);
console.log("availableAndInStockProducts => ", availableAndInStockProducts);

