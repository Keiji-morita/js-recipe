const genkifunction = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!")
    } else {
      console.log(i)
    }
  }
}

genkifunction(100)

//発展 ★ - FizzBuzz
const fizzbuzz = function (numF) {
  for (let n = 1; n <= numF; n++) {
    if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

fizzbuzz(30)

//発展 ★★ - ３が大好き
const lovethree = function (num3) {
  for (let g = 1; g <= num3; g++) {
   for(let h = 3; h <= num3; h = h + 10){
    if (g % 10 === 3) {
      console.log(g +"!!!!!")
    } else if(g / h === 10){
      console.log(g + "!!!!!")
    } else {
      console.log(g)
    }
  }
 }
}

 lovethree(400)


