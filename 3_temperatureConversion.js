// Versi 1

function temperatureConversion (temperature, conversion) {
  if (typeof temperature !== "number") {
    console.log(`${temperature} is not a number`)
  }
  conversion(temperature)
}

function celciusToFahrenheit (celcius) {
  let fahrenheit = 9/5 * celcius + 32
  console.log(`${celcius} celcius \t = ${fahrenheit} fahrenheit`)
}

function fahrenheitToCelcius(fahrenheit) {
  let celcius = 5/9 * (fahrenheit - 32)
  console.log(`${fahrenheit} fahrenheit \t = ${celcius} celcius`)
}

temperatureConversion(5, celciusToFahrenheit)
temperatureConversion(41, fahrenheitToCelcius)

// Versi 2

function tempConversion (celciusTemp, fahrenheitTemp, conversion) {
  if (typeof celciusTemp !== "number") {
    console.log(`${celciusTemp} is not a number`)
    return
  } else if (typeof fahrenheitTemp !== "number") {
    console.log(`${fahrenheitTemp} is not a number`)
    return
  }
  conversion(celciusTemp, fahrenheitTemp)
}

function celciusFahrenheitConversion (celc, fahr) {
  let celcius = 5 / 9 * (fahr - 32)
  let fahrenheit = 9 / 5 * celc + 32
  console.log(`
Konversi 2
${celc} celcius \t = ${fahrenheit} fahrenheit
${fahr} fahrenheit \t = ${celcius} celcius
`)
}

tempConversion(5,41,celciusFahrenheitConversion)
tempConversion("carlos", 41, celciusFahrenheitConversion)