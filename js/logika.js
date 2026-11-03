// soal 1: ganjil dan genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}
// soal 2: celsius ke fahrenheit
console.log("soal 2: celsius ke fahrenheit");
const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusKeFahrenheit(0));  // 32
console.log(celsiusKeFahrenheit(100)); // 212

// soal 3: nilai terbesar
console.log("soal 3: nilai terbesar(a, b, c)");
function nilaiTerbesar(a, b, c) {
    return Math.max(a, b, c);
}
console.log(nilaiTerbesar(5, 9, 2)); // 9
console.log(nilaiTerbesar(80, 75, 80));
console.log(nilaiTerbesar(-3, -7, -1));