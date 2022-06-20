const data = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", 
"Faith", "Olivia", "Penelope"]

function searchName(querry, num, callback) {
  let arr = []  
  for ( let i = 0; i < data.length; i++) {
      if (data[i].includes(querry)) {
        arr.push(data[i]);
      }
    }
    filter(arr, num);
}

function filter(array, num) {
  console.log(array.slice(0, num))
}

searchName("an", 3, filter)