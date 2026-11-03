// Kalkulator nilai rapor di Console

// 1. Pesan pertama ke console
console.log("Halo, saya Marvell!");
console.log("Ini latihan JavaScript pertamaku.");

// 2. Data Siswa 
const nama = "Marvell Rizky Novandro";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}

function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);
    return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}

// 4. Hasil nilai Bagas
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

//Pesan kelulusan
if (lulus) {
    console.log("Selamat, kamu lulus KKM!");
} else {
    console.log("Tetap semangat, ikuti remedial ya.");
}

// 5. Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D

// 6. Rapor beberapa siswa
console.log(rapor("Bagas", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 86));
console.log(rapor("Budi", 70, 65, 72));

// 7. Kalkulator Nilai
// 7. Kalkulator Nilai

const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", () => {

    // Mengambil nilai input
    const nilaiTugas = inputTugas.value;
    const nilaiUts = inputUts.value;
    const nilaiUas = inputUas.value;

    // Memeriksa input kosong
    if (nilaiTugas === "" || nilaiUts === "" || nilaiUas === "") {
        alert("Silakan isi semua nilai terlebih dahulu!");
        return;
    }

    // Mengubah input menjadi angka
    const tugas = Number(nilaiTugas);
    const uts = Number(nilaiUts);
    const uas = Number(nilaiUas);

    // Memeriksa batas nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada di antara 0 sampai 100!");
        return;
    }

    // Menghitung rata-rata
    const rata = hitungRataRata(tugas, uts, uas);

    // Menentukan predikat
    const nilaiHuruf = predikat(rata);

    // Menampilkan hasil
    hasil.style.display = "block";

    hasil.textContent =
        `Rata-rata nilai: ${rata.toFixed(2)} (predikat: ${nilaiHuruf})`;

});
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}
const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;

};