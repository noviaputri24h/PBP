// Program Konversi Nilai Angka ke Huruf
let nilai = prompt("Masukkan nilai (0-100):");
nilai = parseInt(nilai); // ubah input string jadi angka

let grade;

if (nilai >= 85 && nilai <= 100) {
  grade = "A";
} else if (nilai >= 70) {
  grade = "B";
} else if (nilai >= 55) {
  grade = "C";
} else if (nilai >= 40) {
  grade = "D";
} else if (nilai >= 0) {
  grade = "E";
} else {
  grade = "Nilai tidak valid";
}

alert("Grade: " + grade);
console.log("Grade: " + grade);
