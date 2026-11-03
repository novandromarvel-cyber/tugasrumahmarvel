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

// soal 4: tahun kabisat
console.log("soal 4: tahun kabisat");
function tahunKabisat(tahun) {
    if (tahun % 400 === 0) {
        return true;
    }
    if (tahun % 100 === 0) {
        return false;
    }
    if (tahun % 4 === 0) {
        return true;
    }   
    return "false";
}
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);

// soal 5: harga setelah diskon
console.log("soal 5: harga setelah diskon");
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    }
    if (total >= 100000) {
        return total * 0.9;
    }
    return total;
}   
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(150000) = ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(50000) = ${hargaSetelahDiskon(75000)}`);         