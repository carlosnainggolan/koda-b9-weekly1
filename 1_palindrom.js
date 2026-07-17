//CARA 1 DENGAN MEMBUAT VARIABEL BARU SEBAGAI WADAH

// const word = 'ada'
// let rword = ''

// for (let i = 0; i < word.length; i++) {
//   const lastIndex = word.length-1
//   rword += word[lastIndex - i]
// }

// if (typeof word === "string") {
//     if (rword === word) {
//     console.log (`${word} adalah palindrom`)
//   } else {
//     console.log(`${word} bukan palindrom`)
//   }
// } else {
//   console.log(`${word} bukan string`)
// }

// CARA 2 TANPA MEMBUAT VARIABEL BARU

const word = ''

if (typeof word === "string") {
  let isPalindrome = true
  const len = word.length
  for (let i=0; i < len/2; i++) {
    if (word[i] !== word[len-1-i]) {
      isPalindrome = false
      break
    } 
  }
  if (isPalindrome) {
    console.log(`${word} adalah palindrom`)
  } else {
    console.log(`${word} bukan palindrom`)
  }
} else {
  console.log(`${word} bukan string`)
}
