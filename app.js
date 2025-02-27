// 1
const extractNumbers = (str) => {
    return str.match(/\d+/g)?.map(Number) || [];
};

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

// 2

const fibonacciWithDelay = (a = 0, b = 1) => {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => fibonacciWithDelay(b, a + b), 1000);
};

fibonacciWithDelay();

// 3

const fetchTitles = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.forEach(product => console.log(product.title));
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
};

fetchTitles();

// 4

document.getElementById("colorButtons").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTO N") {
        document.body.style.backgroundColor = event.target.textContent;
    }
});

// 5
document.getElementById("toggleButton").addEventListener("click", () => {
    const block = document.getElementById("block");
    block.style.display = block.style.display === "none" ? "block" : "none";
});

// 6
let count = 0;
const interval = setInterval(() => {
    if (count >= 100) {
        clearInterval(interval);
    } else {
        document.getElementById("counter").textContent = ++count;
    }
}, 1);

// 7
const fetchData = async () => {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
};

document.getElementById("fetchData").addEventListener("click", fetchData);