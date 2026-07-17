const getMultiplicationTable = (num) => {
  for (let i = 1; i <= num; i++) {
    let baris = ""
    for (let j = 1; j <= num; j++) {
      baris+= i * j + '\t'
    }
    console.log(baris)
  }
}

getMultiplicationTable(5)
