function delayTime (milliSecond) {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve()
    }, milliSecond)
  })
}

async function timer(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
    await delayTime(1000)
  }
}

timer(5)



// CONTOH SALAH KARENA KETIKA I MASUK KE VARIABEL TIMER, MAKA AKAN TERISI LANGSUNG 5
// function delayTime2 (n) {
//   return new Promise ((res, reject) => {
//     setTimeout(() => {
//       let timer = ""
//       for (let i = 1; i <= n; i++) {
//         timer += i + " "
//       }
//       res(timer)
//     }, 1000);
//   })
// }

// async function timer2(time) {
//   const delay = await delayTime2(time)
//   console.log(delay)
// }

// timer2(5)