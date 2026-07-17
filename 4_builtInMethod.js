// 1. REDUCE

const arrayReduce = [15, 16, 17, 18, 19];

const total = arrayReduce.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0)

console.log(total)

const arrayReduceString = ["aple", "orange", "mango", "aple", "orange", "mango"]

const obj = arrayReduceString.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit] = acc[fruit] + 1
  } else {
    acc[fruit] = 1
  }
  return acc
}, {})

// console.log(obj)
//non-mutasi
//accumulator: penampung nilainya
//currentNumber: nilai yang sedang diolah saat ini
//nilai awal accumulator
//input: fungsi dengan parameter
//output: tergantung apa yang digunakan sebagai initialValue

// 2.some()

const arraySome1 = [2, 5, 8, 1, 4]
const arraySome2 = [12, 5, 8, 1, 4]

const result1 = arraySome1.some((el) => el > 10);
const result2 = arraySome2.some((el) => el > 10);

console.log(result1)
console.log(result2)
console.log(arraySome1)

// non mutasi
// input : array
// output : boolean
// kegunaan : untuk mencari apakah ada sesuatu yang spesifik dengan proses didalam sebuah array

// 3. join()

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));
console.log(elements)

// non mutasi
// input : array
// output : gabungan array ,enjadi string
// kegunaan : menggabungkan semua elemen array menjadi string, dan digunakan separator sebagai pemisah setiap elemen

// 4. every()
const umur = [18, 22, 25, 30];

const semuaDewasa = umur.every((u) => u >= 17);
console.log(semuaDewasa);

// non mutasi
// input : array
// output : boolean
// kegunaan : menghasilkan nilai true jika seluruh elemen dalam array memenuhi kondisi

// 5. pop()
const hewan = ['kucing', 'anjing', 'kelinci'];
const hewanTerhapus = hewan.pop();

console.log(hewanTerhapus);
console.log(hewan);

// mutasi
// input: tidak memerlukan input
// output: elemen dengan index terakhir 
// kegunaan : menghapus elemen terakhir array dan mengubah panjang array tersebut