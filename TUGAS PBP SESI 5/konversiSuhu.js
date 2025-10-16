// konversiSuhu.js
const chalk = require("chalk");
const { celciusToFahrenheit } = require("./rumusSuhu");

// Header
console.log(chalk.cyan.bold("===================================="));
console.log(chalk.cyan.bold("         PROGRAM KONVERSI SUHU       "));
console.log(chalk.cyan.bold("===================================="));
console.log(chalk.white("Anggota Kelompok : Nisya, Novi, Shifa"));
console.log(chalk.cyan("------------------------------------"));

// Data suhu contoh
const suhu = [0, 25, 37.5, 100];

console.log(chalk.white("\nHasil Konversi Celcius → Fahrenheit:"));
console.log(chalk.cyan("------------------------------------"));

// Proses konversi
suhu.forEach((c) => {
  const f = celciusToFahrenheit(c);
  console.log(`${chalk.yellow(`${c}°C`)} = ${chalk.green(`${f.toFixed(2)}°F`)}`);
});

console.log(chalk.cyan("------------------------------------"));
console.log(chalk.white("Program Selesai"));
console.log(chalk.cyan("===================================="));