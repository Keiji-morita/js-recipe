const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

inputElement.addEventListener("keypress", enter_ivent)

function enter_ivent(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card = createCard(inputElement.value)
    container.append(card)

    // 入力欄を空にする
    inputElement.value = ""
  }
}
// 追加ボタンを押したときの処理を登録
addButton.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

// colleage-tasks
const imputElemnt2 = document.getElementById("input-todo-2")
const container2 = document.getElementById("cards-container-2")
const addButton2 = document.getElementById("add-button-2")

addButton2.onclick = function () {
  const card2 = createCard(imputElemnt2.value)
  container2.append(card2)

  // 入力欄を空にする
  imputElemnt2.value = ""
}

imputElemnt2.addEventListener("keypress", enter_ivent2)

function enter_ivent2(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card2 = createCard(imputElemnt2.value)
    container2.append(card2)

    // 入力欄を空にする
    imputElemnt2.value = ""
  }
}

const imputElemnt3 = document.getElementById("input-todo-3")
const container3 = document.getElementById("cards-container-3")
const addButton3 = document.getElementById("add-button-3")

addButton3.onclick = function () {
  const card3 = createCard(imputElemnt3.value)
  container3.append(card3)

  // 入力欄を空にする
  imputElemnt3.value = ""
}

imputElemnt3.addEventListener("keypress", enter_ivent3)

function enter_ivent3(e) {
  if (e.keyCode === 13) {
    // カードを作成する
    const card3 = createCard(imputElemnt3.value)
    container3.append(card3)

    // 入力欄を空にする
    imputElemnt3.value = ""
  }
}
