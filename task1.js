// Buat dan jelaskan 10 method bawaan javascript (Built-in Function)

// charAt() adalah built-in function untuk mengambil satu character string menggunakan index

let nama = "My name is Pras";
let namaCharAt = nama.charAt(0);
console.log(namaCharAt)

// toLowerCase() atau toUpperCase() adalah built-in function untuk mengubah string menjadi huruf kapital semua atau huruf kecil semua
let namaLowerCase = nama.toLowerCase();
let namaUpperCase = nama.toUpperCase();
console.log(namaLowerCase)
console.log(namaUpperCase)


// sort() adalah built-in function untuk mensortir sebuah array secara numerik atau alfabet 

let arr = ["Mangga", "Jeruk", "Apel" , "Pisang", "Anggur"]
let arrSorted = arr.sort();
console.log(arrSorted)

// replace() adalah built-in function untuk menambahkan serta mengganti sebuah string 
let fruit = "Mangga, Jeruk dan Anggur";
let replaced = fruit.replace("Mangga", "Apel");
console.log(replaced)

// repeat() adalah built-in function untuk mengulang dan menjalakan string sebanyak n
let repeat = fruit.repeat(3)
console.log(repeat)

// unshift() 
arr.unshift("Alpukat", "Salak");
console.log(arr)

// splice() adalah built-in untuk menghapus atau menambahkan sebuah value di dalam array 
let animals = ["Monkey", "Dog", "Cat", "Otter"]
animals.splice(1, 0, "Fish");
console.log(animals)

// pop() adalah built-in function untuk menghapus value index terakhir dari sebuah array
animals.pop();
console.log(animals)

// push() adalah built-in function untuk menambahkan value index di terakhir dari sebuah array
animals.push("Whale");
console.log(animals)

// toString adalah built-in function untuk merubah array menjadi string
let array = [100, 399, "Aku" , "Dia", true, 1345]
console.log(array.toString())