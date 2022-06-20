function searchName(querry, num, callback) {
  querry = querry.toLowerCase()
  const data = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", 
  "Faith", "Olivia", "Penelope"]
  

  function LowerCase(element) {
  return element.toLowerCase()
  }

  const arrLowerCase = data.map(LowerCase)
  const filtered = arrLowerCase.filter(element => element.includes(querry))

  const final = filtered.slice(0, num)

  let finalResult = []

  final.forEach(element =>  {
    const firstChar = element.charAt(0).toUpperCase()
    const lastResult = `${firstChar}${element.slice(1, element.length)}`
    finalResult.push(lastResult)
  
  })

    callback(finalResult)

}

searchName("An", 3, console.log)