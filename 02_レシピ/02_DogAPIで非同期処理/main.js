const imageElement = document.getElementById("dog-image")
const imageElement2 = document.getElementById("cat-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
fetch()

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json()
  })

  .then((data) => {
    imageElement2.src = data[0].url
  })

fetch()
