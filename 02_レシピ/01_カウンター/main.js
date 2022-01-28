const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const negativeButton = document.getElementById("negative-button")
const multipleButton = document.getElementById("multiple-button")

let count = 0

plusButton.onclick = function () {
  count += 1

  display.textContent = count
}
//発展 ★ - 便利なボタン
negativeButton.onclick = function () {
  count -= 1

  display.textContent = count
}

multipleButton.onclick = function () {
  count *= 2

  display.textContent = count
}
